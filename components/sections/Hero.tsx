"use client";
import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

const GRID = 70;
const DASH = 11;
const HOVER_R = 90;
const SPEED = 0.09;
const TOP_SKIP = 80;

export default function Hero() {
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

  return (
    <section
      className="hero-section relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
      onMouseLeave={() => { mouseRef.current = null; }}
      style={{
        background: "radial-gradient(ellipse 140% 90% at 50% 0%, #9B91FF 0%, #6557EA 45%, #3D28A8 100%)",
        paddingTop: "138px",
        paddingBottom: "0px",
        margin: "12px 20px 0",
        borderRadius: "28px",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          pointerEvents: "none", zIndex: 0,
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, black 100%)",
        }}
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
            AGÊNCIA
          </span>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.88)" }}>
            Performance para apps móveis
          </span>
        </div>

        {/* H1 */}
        <h1
          className="hero-h1 font-medium hero-fade-up hero-fade-up-2"
          style={{ fontSize: "76px", color: "white", letterSpacing: "-2.2px", lineHeight: 1.05, maxWidth: "720px", marginBottom: "20px", textWrap: "balance" }}
        >
          <span style={{ display: "block" }}>Do primeiro</span>
          install à receita
        </h1>

        {/* Subtitle */}
        <p
          className="hero-fade-up hero-fade-up-3"
          style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", maxWidth: "580px", lineHeight: 1.65, marginBottom: "36px", textWrap: "balance" }}
        >
          A agência especializada em performance para apps móveis. Cuidamos de toda a jornada do usuário — da aquisição até a receita.
        </p>

        {/* CTAs */}
        <div className="hero-cta-row flex items-center gap-3 hero-fade-up hero-fade-up-4">
          <Button href="#contato" variant="dark" size="md">
            Falar com especialista
          </Button>
          <div className="hidden md:block">
            <Button href="#como-funciona" variant="glass" size="md">
              Como funciona
            </Button>
          </div>
        </div>

        {/* iPhone + widgets */}
        <div
          className="hero-fade-up hero-fade-up-5 hero-phone-container"
          style={{ position: "relative", width: "900px", maxWidth: "100%", margin: "0 auto", height: "520px" }}
        >

          {/* Widget 1 — Performance (right) */}
          <div className="hero-widget" style={{
            position: "absolute",
            bottom: "260px",
            right: "0px",
            background: "white",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "20px",
            padding: "18px 20px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.20), 0 1px 0 rgba(255,255,255,0.20) inset",
            width: "260px",
            zIndex: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 17L9 11L13 15L21 7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 7H21V14" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#141414", letterSpacing: "-0.2px" }}>Performance</div>
                <div style={{ fontSize: "11px", color: "#909090", marginTop: "1px" }}>Campanha ativa</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
              {[
                { label: "Installs", value: "1.240" },
                { label: "ROAS", value: "4.8x" },
                { label: "Receita", value: "R$12K" },
              ].map(m => (
                <div key={m.label} style={{ background: "#F7F7F7", border: "1px solid #EBEBEB", borderRadius: "10px", padding: "10px 8px", textAlign: "center" }}>
                  <div style={{ fontSize: "11px", color: "#909090", marginBottom: "4px" }}>{m.label}</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#141414", letterSpacing: "-0.5px" }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 2 — installs (left) */}
          <div className="hero-widget" style={{
            position: "absolute",
            bottom: "120px",
            left: "0px",
            background: "white",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "20px",
            padding: "18px 20px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.20), 0 1px 0 rgba(255,255,255,0.20) inset",
            width: "260px",
            zIndex: 10,
          }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12L10 17L19 7" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#141414", letterSpacing: "0.2px" }}>User Acquisition</span>
              </div>
              <span style={{ fontSize: "11px", color: "#909090" }}>60d</span>
            </div>
            {/* Metric */}
            <div style={{ marginBottom: "10px" }}>
              <div style={{ fontSize: "36px", fontWeight: 700, color: "#141414", letterSpacing: "-1.5px", lineHeight: 1 }}>+340%</div>
              <div style={{ fontSize: "12px", color: "#909090", marginTop: "4px" }}>crescimento em installs</div>
            </div>
            {/* Footer */}
            <div style={{ paddingTop: "10px", borderTop: "1px solid #EBEBEB", fontSize: "12px", color: "#909090" }}>
              App de Finanças
            </div>
          </div>

          {/* iPhone image */}
          <img
            src="/iphone-hero.png"
            alt="App performance"
            style={{
              position: "absolute",
              bottom: "0px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "544px",
              display: "block",
              filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.28))",
            }}
          />

        </div>
      </div>
    </section>
  );
}
