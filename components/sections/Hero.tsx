"use client";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";

const barPatterns = [
  [38, 56, 50, 30, 58, 80, 24, 46, 72, 28, 52, 40],
  [65, 30, 72, 45, 20, 55, 68, 35, 48, 75, 25, 60],
  [22, 68, 40, 62, 35, 48, 78, 28, 55, 42, 65, 32],
];

const GAUGE_BARS = 12;
const FILLED_MAX = 9;
const PCT_MAX = 78.9;
const CYCLE_MS = 9000;

// #EDE9FE → #6557EA
const C_EMPTY: [number, number, number] = [237, 233, 254];
const C_FILLED: [number, number, number] = [101, 87, 234];

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function lerpRGB(a: [number, number, number], b: [number, number, number], t: number) {
  return `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)})`;
}

// Gauge geometry
const arcDeg = 162;
const startAngle = 180 + (180 - arcDeg) / 2;
const step = arcDeg / (GAUGE_BARS - 1);
const cx = 140, cy = 152;
const r = 96;
const barW = 13, barH = 44;

function buildBars() {
  return Array.from({ length: GAUGE_BARS }, (_, i) => {
    const angleDeg = startAngle + i * step;
    const angleRad = (angleDeg * Math.PI) / 180;
    const pivotX = cx + r * Math.cos(angleRad);
    const pivotY = cy + r * Math.sin(angleRad);
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
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);
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

          // -45deg (/) default → +45deg (\) on hover
          const angle = (-45 + prog * 90) * (Math.PI / 180);
          const hx = Math.cos(angle) * DASH / 2;
          const hy = Math.sin(angle) * DASH / 2;

          ctx.strokeStyle = `rgba(10,0,40,${0.22 + prog * 0.18})`;
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

      // 0–38%: fill | 38–52%: hold full | 52–90%: unfill | 90–100%: hold empty
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
      className="relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
      onMouseLeave={() => { mouseRef.current = null; }}
      style={{
        background: "radial-gradient(ellipse 140% 90% at 50% 0%, #9B91FF 0%, #6557EA 45%, #3D28A8 100%)",
        paddingTop: "138px",
        paddingBottom: "80px",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, black 100%)" }}
      />
      <div
        className="relative flex flex-col items-center text-center"
        style={{ zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
      >

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 hero-fade-up hero-fade-up-1"
          style={{
            background: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.22)",
            borderRadius: "100px",
            padding: "5px 16px 5px 6px",
            marginBottom: "28px",
          }}
        >
          <span style={{ background: "white", color: "#6557ea", fontSize: "10px", fontWeight: 700, letterSpacing: "0.6px", padding: "3px 10px", borderRadius: "100px" }}>
            NOVO
          </span>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.88)" }}>
            Estratégia completa para apps
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-medium hero-fade-up hero-fade-up-2"
          style={{ fontSize: "60px", color: "white", letterSpacing: "-1.4px", lineHeight: 1.08, maxWidth: "720px", marginBottom: "20px", textWrap: "balance" }}
        >
          <span style={{ display: "block" }}>Do primeiro</span>
          install à receita
        </h1>

        {/* Subtitle */}
        <p
          className="hero-fade-up hero-fade-up-3"
          style={{ fontSize: "18px", color: "rgba(255,255,255,0.68)", maxWidth: "490px", lineHeight: 1.65, marginBottom: "36px" }}
        >
          Da aquisição ao evento de receita — estratégias integradas que fazem cada fase do seu app performar.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3 hero-fade-up hero-fade-up-4" style={{ marginBottom: "60px" }}>
          <Button href="#contato" variant="dark" size="md">
            Começar agora
          </Button>
          <a
            href="#como-funciona"
            className="inline-flex items-center rounded-full font-semibold transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.13)",
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(10px)",
              color: "white",
              fontSize: "14px",
              padding: "12px 26px",
              letterSpacing: "-0.2px",
            }}
          >
            Como funciona
          </a>
        </div>

        {/* Dashboard cards */}
        <div
          className="hero-fade-up hero-fade-up-5"
          style={{ display: "flex", gap: "20px", width: "100%", maxWidth: "1100px" }}
        >

          {/* Card 1 — Total de vendas */}
          <div style={{ flex: 1, background: "white", borderRadius: "32px", padding: "36px 36px 28px", textAlign: "left", boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}>

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "20px", fontWeight: 600, color: "#141414", letterSpacing: "-0.4px" }}>Total de vendas</span>
              <button style={{ fontSize: "13px", color: "#141414", background: "white", border: "1px solid #E4E4E7", borderRadius: "12px", padding: "0 16px", height: "44px", display: "flex", alignItems: "center", gap: "7px", cursor: "pointer", fontWeight: 500, boxShadow: "none" }}>
                Último trimestre
                <svg width="11" height="11" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="#6557EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>

            {/* Metric — centralizado */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", paddingBottom: "12px" }}>
<span style={{ fontSize: "68px", fontWeight: 700, letterSpacing: "-3px", lineHeight: 1 }}>
                <span style={{ color: "#0D0D0D" }}>R$</span>
                <span style={{ color: "#0D0D0D" }}> 28.500</span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: 600, color: "#6557EA", marginTop: "10px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6557EA", display: "inline-block", flexShrink: 0 }} />
                10,2% vs mês anterior
              </span>
            </div>

            {/* Bar chart */}
            <div style={{ marginTop: "auto", padding: "0 4px 4px" }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "110px" }}>
                {barPatterns[patternIdx].map((h, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end" }}>
                    <div style={{
                      width: "100%",
                      height: `${h}px`,
                      borderRadius: "6px 6px 4px 4px",
                      background: h >= 50 ? "#6557EA" : "#D6D1FB",
                      transition: "height 0.6s cubic-bezier(0.4, 0, 0.2, 1), background 0.6s ease",
                    }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Revenue Snapshot */}
          <div style={{ flex: 1, background: "white", borderRadius: "32px", padding: "36px 36px 28px", textAlign: "left", display: "flex", flexDirection: "column", boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)" }}>

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "20px", fontWeight: 600, color: "#141414", letterSpacing: "-0.4px" }}>Revenue Snapshot</span>
              <button style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: "22px", letterSpacing: "3px", padding: "0", lineHeight: 1 }}>···</button>
            </div>

            {/* Fan gauge — overflow:visible fixes edge-bar clipping */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", flex: 1, position: "relative", minHeight: "220px", margin: "0 -8px" }}>
              <svg
                width="340"
                height="200"
                viewBox="0 0 280 160"
                fill="none"
                style={{ display: "block", overflow: "visible" }}
              >
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

              {/* Animated metric — updated via DOM ref, no React re-render */}
              <div style={{ position: "absolute", bottom: "12px", left: "50%", transform: "translateX(-50%)", textAlign: "center", pointerEvents: "none", whiteSpace: "nowrap" }}>
                <div
                  ref={numRef}
                  style={{ fontSize: "42px", fontWeight: 700, color: "#6557EA", letterSpacing: "-2px", lineHeight: 1 }}
                >
                  +0.0%
                </div>
                <div style={{ fontSize: "12px", color: "#909090", marginTop: "4px" }}>Success rate</div>
              </div>
            </div>

            {/* Footer text */}
            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #F0F0F0", fontSize: "13px", color: "#3D3D4A", lineHeight: 1.55, textAlign: "center" }}>
              Você conquistou{" "}
              <strong style={{ color: "#6557ea" }}>R$ 3,2K</strong>{" "}
              em receita hoje,<br />
              superando o total de ontem.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
