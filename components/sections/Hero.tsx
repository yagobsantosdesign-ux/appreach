"use client";

const bars = [
  { h: 38 }, { h: 54 }, { h: 46 }, { h: 76 }, { h: 61 }, { h: 55 },
];

const months = ["Fev", "Mar", "Abr", "Mai", "Jun", "Jul"];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 140% 90% at 50% 0%, #9B91FF 0%, #6557EA 45%, #3D28A8 100%)",
        paddingTop: "138px",
        paddingBottom: "80px",
      }}
    >

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
          <span
            style={{
              background: "white",
              color: "#6557ea",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.6px",
              padding: "3px 10px",
              borderRadius: "100px",
            }}
          >
            NOVO
          </span>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.88)" }}>
            Estratégia completa para apps
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-medium hero-fade-up hero-fade-up-2"
          style={{
            fontSize: "80px",
            color: "white",
            letterSpacing: "-3px",
            lineHeight: 1.02,
            maxWidth: "720px",
            marginBottom: "20px",
          }}
        >
          <span style={{ display: "block" }}>Do primeiro</span>
          install à receita
        </h1>

        {/* Subtitle */}
        <p
          className="hero-fade-up hero-fade-up-3"
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.68)",
            maxWidth: "490px",
            lineHeight: 1.65,
            marginBottom: "36px",
          }}
        >
          Cobrimos cada etapa do funil, da aquisição de usuários até eventos de compra e escala de receita.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-3 hero-fade-up hero-fade-up-4" style={{ marginBottom: "60px" }}>
          <a
            href="#contato"
            className="inline-flex items-center rounded-full font-semibold transition-all duration-200 hover:opacity-90"
            style={{ background: "#141414", color: "white", fontSize: "14px", padding: "12px 26px", letterSpacing: "-0.2px" }}
          >
            Fale conosco
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center rounded-full font-semibold transition-all duration-200 hover:bg-white/20"
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
          style={{ display: "flex", gap: "20px", width: "100%", maxWidth: "1000px" }}
        >

          {/* Card 1 — Installs */}
          <div style={{ flex: 1, background: "white", borderRadius: "24px", padding: "32px", textAlign: "left" }}>

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <span style={{ fontSize: "15px", fontWeight: 500, color: "#141414" }}>Installs esta semana</span>
              <span style={{ fontSize: "11px", color: "#909090", background: "#F7F7F7", border: "1px solid #EBEBEB", borderRadius: "8px", padding: "4px 10px", display: "flex", alignItems: "center", gap: "4px" }}>
                Últimas 6 sem <span style={{ fontSize: "9px" }}>▾</span>
              </span>
            </div>

            {/* Metric */}
            <div style={{ marginBottom: "4px" }}>
              <span style={{ fontSize: "52px", fontWeight: 600, color: "#141414", letterSpacing: "-2px", lineHeight: 1 }}>
                12.450
              </span>
            </div>

            {/* Trend badge + label */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
              <span style={{
                fontSize: "11px", fontWeight: 600, color: "#16a34a",
                background: "#f0fdf4", border: "1px solid #bbf7d0",
                borderRadius: "6px", padding: "2px 8px",
              }}>
                ↑ 24%
              </span>
              <span style={{ fontSize: "12px", color: "#909090" }}>vs semana passada</span>
            </div>

            {/* Bar chart — lados arredondados, topo e base retos */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: "7px", height: "110px" }}>
              {bars.map((bar, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end" }}>
                  <div style={{
                    width: "100%",
                    height: `${bar.h * 1.3}px`,
                    borderRadius: "50% / 0",
                    background: i === 3
                      ? "linear-gradient(to top, #4338ca, #7c6ff7)"
                      : i === 4 ? "#D4D0F8"
                      : "#EBEBEB",
                  }} />
                </div>
              ))}
            </div>

            {/* Month labels */}
            <div style={{ display: "flex", gap: "7px", marginTop: "10px" }}>
              {months.map((m, i) => (
                <div key={i} style={{ flex: 1, textAlign: "center", fontSize: "10px", color: i === 3 ? "#6557ea" : "#c0c0c8", fontWeight: i === 3 ? 600 : 400 }}>
                  {m}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — Revenue Snapshot */}
          <div
            style={{
              flex: 1,
              background: "white",
              borderRadius: "24px",
              padding: "32px",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "15px", fontWeight: 500, color: "#141414" }}>Revenue Snapshot</span>
              <span style={{ fontSize: "18px", color: "#c0c0c8", lineHeight: 1, letterSpacing: "2px", marginTop: "-4px" }}>···</span>
            </div>

            {/* Fan gauge SVG */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", flex: 1, position: "relative", minHeight: "150px" }}>
              <svg width="260" height="148" viewBox="0 0 260 148" fill="none" style={{ display: "block" }}>
                {Array.from({ length: 12 }, (_, i) => {
                  const filled = 9;
                  const arcDeg = 168;
                  const startAngle = 180 + (180 - arcDeg) / 2;
                  const step = arcDeg / 11;
                  const angleDeg = startAngle + i * step;
                  const angleRad = (angleDeg * Math.PI) / 180;
                  const cx = 130, cy = 148;
                  const r = 98;
                  const w = 14, h = 46;
                  const pivotX = cx + r * Math.cos(angleRad);
                  const pivotY = cy + r * Math.sin(angleRad);
                  const isFilled = i < filled;
                  return (
                    <rect
                      key={i}
                      x={pivotX - w / 2}
                      y={pivotY - h}
                      width={w}
                      height={h}
                      rx="7"
                      fill={isFilled ? "#6557EA" : "#EDE9FE"}
                      transform={`rotate(${angleDeg + 90}, ${pivotX}, ${pivotY})`}
                    />
                  );
                })}
              </svg>

              {/* Metric overlay */}
              <div style={{
                position: "absolute",
                bottom: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}>
                <div style={{ fontSize: "32px", fontWeight: 700, color: "#6557EA", letterSpacing: "-1.5px", lineHeight: 1 }}>
                  +78.9%
                </div>
                <div style={{ fontSize: "12px", color: "#909090", marginTop: "4px" }}>Success rate</div>
              </div>
            </div>

            {/* Footer text */}
            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #F0F0F0", fontSize: "13px", color: "#3D3D4A", lineHeight: 1.55 }}>
              Você conquistou{" "}
              <strong style={{ color: "#6557ea" }}>R$ 3,2K</strong>{" "}
              em receita hoje, superando o total de ontem.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
