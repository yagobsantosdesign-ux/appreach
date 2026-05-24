"use client";
import { useEffect, useRef, useState } from "react";

const barPatterns = [
  [38, 56, 50, 30, 58, 80, 24, 46, 72, 28, 52, 40],
  [65, 30, 72, 45, 20, 55, 68, 35, 48, 75, 25, 60],
  [22, 68, 40, 62, 35, 48, 78, 28, 55, 42, 65, 32],
];

const GAUGE_BARS = 12;
const FILLED_MAX = 9;
const PCT_MAX = 78.9;
const CYCLE_MS = 9000;

const C_EMPTY: [number, number, number] = [237, 233, 254];
const C_FILLED: [number, number, number] = [101, 87, 234];

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function lerpRGB(a: [number, number, number], b: [number, number, number], t: number) {
  return `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)})`;
}

const arcDeg = 162;
const startAngle = 180 + (180 - arcDeg) / 2;
const step = arcDeg / (GAUGE_BARS - 1);
const cx = 140, cy = 152;
const r = 96;
const barW = 13, barH = 44;

const round5 = (n: number) => Math.round(n * 1e5) / 1e5;

function buildBars() {
  return Array.from({ length: GAUGE_BARS }, (_, i) => {
    const angleDeg = round5(startAngle + i * step);
    const angleRad = (angleDeg * Math.PI) / 180;
    const pivotX = round5(cx + r * Math.cos(angleRad));
    const pivotY = round5(cy + r * Math.sin(angleRad));
    return { i, angleDeg, pivotX, pivotY };
  });
}

const gaugeBarDefs = buildBars();

const GRID = 70;
const DASH = 11;
const HOVER_R = 90;
const SPEED = 0.09;
const TOP_SKIP = 80;

export default function Hero() {
  const rectRefs = useRef<(SVGRectElement | null)[]>([]);
  const numRef = useRef<HTMLDivElement | null>(null);
  const [patternIdx, setPatternIdx] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const cellsRef = useRef<number[]>([]);
  const dashRafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cols = 0, rows = 0;

    const resize = () => {
      const w = canvas.parentElement?.clientWidth ?? window.innerWidth;
      const h = canvas.parentElement?.clientHeight ?? window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      cols = Math.ceil(w / GRID) + 1;
      rows = Math.ceil(h / GRID) + 1;
      cellsRef.current = Array.from({ length: cols * rows }, () => 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const cx = c * GRID + GRID / 2;
          const cy = r * GRID + GRID / 2;

          if (cy < TOP_SKIP) continue;

          let prog = cellsRef.current[idx] ?? 0;
          if (mouse) {
            const dx = cx - mouse.x, dy = cy - mouse.y;
            const near = Math.sqrt(dx * dx + dy * dy) < HOVER_R;
            prog = near ? Math.min(1, prog + SPEED) : Math.max(0, prog - SPEED * 0.5);
          } else {
            prog = Math.max(0, prog - SPEED * 0.5);
          }
          cellsRef.current[idx] = prog;

          const angle = (-45 + prog * 90) * (Math.PI / 180);
          const hx = Math.cos(angle) * DASH / 2;
          const hy = Math.sin(angle) * DASH / 2;

          ctx.strokeStyle = `rgba(101,87,234,${0.07 + prog * 0.13})`;
          ctx.lineWidth = 1.5;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(cx - hx, cy - hy);
          ctx.lineTo(cx + hx, cy + hy);
          ctx.stroke();
        }
      }

      dashRafRef.current = requestAnimationFrame(draw);
    };

    dashRafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(dashRafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setPatternIdx(i => (i + 1) % barPatterns.length), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const startTime = Date.now();

    const tick = () => {
      const t = ((Date.now() - startTime) % CYCLE_MS) / CYCLE_MS;

      let p: number;
      if (t < 0.38) {
        p = easeInOut(t / 0.38);
      } else if (t < 0.52) {
        p = 1;
      } else if (t < 0.90) {
        p = 1 - easeInOut((t - 0.52) / 0.38);
      } else {
        p = 0;
      }

      const filledLevel = p * FILLED_MAX;

      for (let i = 0; i < GAUGE_BARS; i++) {
        const el = rectRefs.current[i];
        if (el) {
          const barT = Math.min(1, Math.max(0, filledLevel - i));
          el.setAttribute("fill", lerpRGB(C_EMPTY, C_FILLED, barT));
        }
      }

      if (numRef.current) {
        numRef.current.textContent = `+${(p * PCT_MAX).toFixed(1)}%`;
      }
    };

    const id = setInterval(tick, 16);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="hero-section relative overflow-hidden flex flex-col"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
      onMouseLeave={() => { mouseRef.current = null; }}
      style={{ background: "#fafafa", paddingTop: "134px", paddingBottom: "80px" }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
      />

      <div aria-hidden style={{
        position: "absolute", top: 0, right: 0,
        width: "55%", height: "100%",
        background: "radial-gradient(ellipse 80% 80% at 85% 15%, rgba(101,87,234,0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Container */}
      <div
        className="relative flex flex-col lg:flex-row items-stretch"
        style={{ flex: 1, zIndex: 1, maxWidth: "1350px", width: "100%", margin: "0 auto", padding: "0 40px", gap: "48px" }}
      >
        {/* LEFT */}
        <div className="flex flex-col justify-between" style={{ flex: 1 }}>

          {/* Headline group */}
          <div className="flex flex-col" style={{ gap: "23px" }}>
            <h1
              className="hero-h1 hero-fade-up hero-fade-up-1"
              style={{ fontSize: "60px", color: "#251d49", letterSpacing: "-0.04em", lineHeight: "110%", maxWidth: "444px", textWrap: "balance" } as React.CSSProperties}
            >
              Do primeiro install à receita
            </h1>

            <p
              className="hero-fade-up hero-fade-up-2"
              style={{ fontSize: "18px", color: "#40404f", maxWidth: "485px", lineHeight: "160%" }}
            >
              Da aquisição ao evento de receita — estratégias integradas que fazem cada fase do seu app performar.
            </p>

            <div className="flex items-center hero-fade-up hero-fade-up-3" style={{ gap: "12px" }}>
              <a
                href="#contato"
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#6557ea",
                  color: "white",
                  height: "48px",
                  borderRadius: "12px",
                  padding: "0 20px",
                  fontSize: "16px",
                  letterSpacing: "-0.02em",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Começar agora
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: "1px solid rgba(37,29,73,0.12)",
                  color: "#3d3d4a",
                  height: "48px",
                  borderRadius: "12px",
                  padding: "0 21px",
                  fontSize: "16px",
                  letterSpacing: "-0.02em",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Como Funciona
              </a>
            </div>
          </div>

          {/* Social proof */}
          <div className="hidden lg:flex flex-col hero-fade-up hero-fade-up-4" style={{ gap: "15px", maxWidth: "335px", paddingTop: "32px" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "#251d49",
                      border: "1.5px solid white",
                      marginRight: i < 3 ? "-6px" : "0",
                      position: "relative",
                      zIndex: 4 - i,
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>
              <span style={{ fontSize: "18px", color: "#40404f", lineHeight: "160%", flexShrink: 0 }}>|</span>
              <span style={{ fontSize: "18px", color: "#40404f", lineHeight: "160%" }}>+50 Apps atendidos</span>
            </div>
            <p style={{ fontSize: "18px", color: "#40404f", lineHeight: "160%" }}>
              +300 campanhas ativas — de startups a marcas que você já conhece.
            </p>
          </div>
        </div>

        {/* RIGHT: Gradient panel + floating widgets */}
        <div
          className="hero-fade-up hero-fade-up-5 hidden lg:flex"
          style={{ flex: 1, minWidth: "500px" }}
        >
          <div style={{
            flex: 1,
            background: "linear-gradient(to bottom, #c9cdfc, #e1e4fe)",
            borderRadius: "43px",
            position: "relative",
            overflow: "visible",
          }}>

            {/* Card 1 — Total de vendas */}
            <div className="widget-float" style={{
              position: "absolute",
              top: "60%",
              left: "-134px",
              width: "268px",
              background: "white",
              borderRadius: "24px",
              padding: "22px 22px 18px",
              boxShadow: "0 24px 24px rgba(0,0,0,0.18), 0 4px 6px rgba(0,0,0,0.08)",
              textAlign: "left",
            }}>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#251d49", letterSpacing: "-0.3px", display: "block", marginBottom: "8px" }}>
                Total de vendas
              </span>
              <span style={{ fontSize: "34px", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, color: "#251d49", display: "block" }}>
                R$ 28.500
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 600, color: "#6557EA", marginTop: "6px", marginBottom: "12px" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#6557EA", display: "inline-block", flexShrink: 0 }} />
                10,2% vs mês anterior
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "54px" }}>
                {barPatterns[patternIdx].map((h, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: `${h * 0.58}px`,
                    borderRadius: "4px 4px 2px 2px",
                    background: h >= 50 ? "#6557EA" : "#D6D1FB",
                    transition: "height 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }} />
                ))}
              </div>
            </div>

            {/* Card 2 — Revenue Snapshot */}
            <div className="widget-float-2" style={{
              position: "absolute",
              top: "31%",
              right: "-78px",
              width: "236px",
              background: "white",
              borderRadius: "24px",
              padding: "18px 18px 14px",
              boxShadow: "0 24px 24px rgba(0,0,0,0.18), 0 4px 6px rgba(0,0,0,0.08)",
            }}>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#251d49", letterSpacing: "-0.3px", display: "block", marginBottom: "6px" }}>
                Revenue Snapshot
              </span>
              <div style={{ display: "flex", justifyContent: "center", position: "relative", height: "110px", margin: "0 -4px" }}>
                <svg width="196" height="102" viewBox="0 0 280 160" fill="none" style={{ display: "block", overflow: "visible" }} suppressHydrationWarning>
                  {gaugeBarDefs.map(({ i, angleDeg, pivotX, pivotY }) => (
                    <rect
                      key={i}
                      ref={(el) => { rectRefs.current[i] = el; }}
                      x={pivotX - barW / 2}
                      y={pivotY - barH}
                      width={barW}
                      height={barH}
                      rx="6"
                      fill={`rgb(${C_EMPTY[0]},${C_EMPTY[1]},${C_EMPTY[2]})`}
                      transform={`rotate(${angleDeg + 90}, ${pivotX}, ${pivotY})`}
                    />
                  ))}
                </svg>
                <div style={{ position: "absolute", bottom: "6px", left: "50%", transform: "translateX(-50%)", textAlign: "center", whiteSpace: "nowrap", pointerEvents: "none" }}>
                  <div ref={numRef} style={{ fontSize: "26px", fontWeight: 700, color: "#6557EA", letterSpacing: "-0.06em", lineHeight: 1 }}>
                    +0.0%
                  </div>
                  <div style={{ fontSize: "10px", color: "#909090", marginTop: "3px" }}>Success rate</div>
                </div>
              </div>
              <div style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #F0F0F0", fontSize: "11px", color: "#3D3D4A", lineHeight: 1.55, textAlign: "center" }}>
                Você conquistou{" "}
                <strong style={{ color: "#6557ea" }}>R$ 3,2K</strong>{" "}
                em receita hoje
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
