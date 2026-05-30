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

export default function Hero() {
  const rectRefs = useRef<(SVGRectElement | null)[]>([]);
  const numRef = useRef<HTMLDivElement | null>(null);
  const [patternIdx, setPatternIdx] = useState(0);

  const avatars = [
    "/iris_neutro.png",
    "/mano_neutro.png",
    "/livia_neutro.png",
    "/neto_neutro.png",
    "/henri_neutro.png",
  ];

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
      style={{ background: "#fafafa", paddingTop: "134px", paddingBottom: "80px" }}
    >

      <div aria-hidden style={{
        position: "absolute", top: 0, right: 0,
        width: "55%", height: "100%",
        background: "radial-gradient(ellipse 80% 80% at 85% 15%, rgba(101,87,234,0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Container */}
      <div
        className="hero-container relative flex flex-col lg:flex-row items-stretch"
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
              Cada fase do seu funil. Uma única equipe
            </h1>

            <p
              className="hero-fade-up hero-fade-up-2"
              style={{ fontSize: "18px", color: "#40404f", maxWidth: "485px", lineHeight: "160%" }}
            >
              Da aquisição à receita, estratégias integradas que cobrem cada etapa do seu app.
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
                {avatars.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      border: "1.5px solid white",
                      marginRight: i < avatars.length - 1 ? "-6px" : "0",
                      position: "relative",
                      zIndex: avatars.length - i,
                      flexShrink: 0,
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
              <span style={{ fontSize: "18px", color: "#40404f", lineHeight: "160%", flexShrink: 0 }}>|</span>
              <span style={{ fontSize: "14px", color: "#40404f", lineHeight: "160%", maxWidth: "148px", display: "inline-block" }}>Time de especialistas em mobile marketing</span>
            </div>
            <p style={{ fontSize: "18px", color: "#40404f", lineHeight: "160%" }}>
              +300 campanhas ativas, de startups a marcas que você já conhece.
            </p>
          </div>
        </div>

        {/* RIGHT: iPhone + gradiente + widgets */}
        <div
          className="hero-phone-wrapper flex"
          style={{ flex: 1, position: "relative", alignSelf: "stretch" }}
        >
          {/* [1] Retângulo gradiente — ocupa 80% inferior */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80%",
            background: "linear-gradient(to bottom, #C9CDFC, #EFF1FE)",
            borderRadius: "43px",
            zIndex: 0,
          }} />

          {/* [2] iPhone — animado, base alinhada ao retângulo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/iphone-hero.webp"
            alt=""
            aria-hidden="true"
            className="iphone-enter"
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              height: "100%",
              width: "auto",
              objectFit: "contain",
              objectPosition: "bottom center",
              zIndex: 1,
            }}
          />

          {/* [3] Máscara fade — estática, some a base do iPhone */}
          <div aria-hidden className="hero-phone-mask" style={{
            position: "absolute",
            bottom: "-80px",
            left: 0,
            right: 0,
            height: "calc(20% + 80px)",
            background: "linear-gradient(to bottom, transparent 0%, #fafafa 60%)",
            pointerEvents: "none",
            zIndex: 2,
          }} />

          {/* Card 1 — Total de vendas */}
          <div className="widget-float hero-widget-1" style={{
            position: "absolute",
            top: "60%",
            left: "-104px",
            width: "210px",
            background: "white",
            borderRadius: "20px",
            padding: "16px 16px 14px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
            textAlign: "left",
            zIndex: 3,
          }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#251d49", letterSpacing: "-0.3px", display: "block", marginBottom: "6px" }}>
                Total de vendas
              </span>
              <span style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, color: "#251d49", display: "block" }}>
                R$ 28.500
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "10px", fontWeight: 600, color: "#6557EA", marginTop: "5px", marginBottom: "10px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6557EA", display: "inline-block", flexShrink: 0 }} />
                10,2% vs mês anterior
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "42px" }}>
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
          <div className="widget-float-2 hero-widget-2" style={{
            position: "absolute",
            top: "31%",
            right: "-58px",
            width: "185px",
            background: "white",
            borderRadius: "20px",
            padding: "14px 14px 12px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
            zIndex: 3,
          }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#251d49", letterSpacing: "-0.3px", display: "block", marginBottom: "5px" }}>
                Revenue Snapshot
              </span>
              <div style={{ display: "flex", justifyContent: "center", position: "relative", height: "86px", margin: "0 -4px" }}>
                <svg width="154" height="80" viewBox="0 0 280 160" fill="none" style={{ display: "block", overflow: "visible" }} suppressHydrationWarning>
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
                  <div ref={numRef} style={{ fontSize: "20px", fontWeight: 700, color: "#6557EA", letterSpacing: "-0.06em", lineHeight: 1 }}>
                    +0.0%
                  </div>
                  <div style={{ fontSize: "9px", color: "#909090", marginTop: "2px" }}>Success rate</div>
                </div>
              </div>
              <div style={{ marginTop: "8px", paddingTop: "8px", borderTop: "1px solid #F0F0F0", fontSize: "10px", color: "#3D3D4A", lineHeight: 1.55, textAlign: "center" }}>
                Você conquistou{" "}
                <strong style={{ color: "#6557ea" }}>R$ 3,2K</strong>{" "}
                em receita hoje
              </div>
          </div>

        </div>

      </div>
    </section>
  );
}
