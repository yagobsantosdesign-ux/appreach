"use client";

import SectionBadge from "@/components/ui/SectionBadge";

const platforms = [
  { name: "AppsFlyer",  iconBg: "#FF7700", mark: "AF", markSize: 13 },
  { name: "TikTok Ads", iconBg: "#010101", mark: "TT", markSize: 13 },
  { name: "Google Ads", iconBg: "#4285F4", mark: "G",  markSize: 22 },
  { name: "Meta Ads",   iconBg: "#0081FB", mark: "f",  markSize: 26 },
  { name: "Adjust",     iconBg: "#00C851", mark: "A",  markSize: 20 },
];

// Semicircle arc geometry
// Circle center at bottom-center of container (CX, CY)
const CW = 740;
const CH = 420;
const CX = CW / 2;  // 370
const CY = CH;      // 420
const R = 285;
const CARD = 84;
const ANGLES = [174, 135, 90, 45, 6]; // left → center → right

const arcPositions = ANGLES.map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return {
    x: Math.round(CX + R * Math.cos(rad) - CARD / 2),
    y: Math.round(CY - R * Math.sin(rad) - CARD / 2),
  };
});

export default function Platforms() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14" style={{ maxWidth: 600, margin: "0 auto 56px" }}>
          <SectionBadge>Plataformas</SectionBadge>
          <h2
            className="font-medium text-dark leading-tight mb-4"
            style={{ fontSize: "48px", letterSpacing: "-1.92px" }}
          >
            Operamos onde<br />seu usuário está
          </h2>
          <p style={{ fontSize: "16px", color: "#909090", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            Parceiros das principais plataformas de mídia e mensuração — do primeiro clique ao evento de receita.
          </p>
        </div>

        {/* Arc — desktop */}
        <div className="hidden lg:block" style={{ position: "relative", maxWidth: CW, margin: "0 auto" }}>
          {/* Clipped arc background */}
          <div
            style={{
              position: "absolute",
              left: 0, right: 0, top: 0,
              height: CH,
              overflow: "hidden",
              zIndex: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 760,
                height: 760,
                borderRadius: "50%",
                background: "linear-gradient(to bottom, #EDE9FE 0%, #F3F1FE 50%, #F8F7FF 100%)",
                bottom: -380,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>

          {/* Platform cards */}
          <div style={{ position: "relative", height: CH, zIndex: 1 }}>
            {platforms.map((p, i) => (
              <div
                key={p.name}
                style={{
                  position: "absolute",
                  left: arcPositions[i].x,
                  top: arcPositions[i].y,
                  width: CARD,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {/* Card */}
                <div
                  style={{
                    width: CARD,
                    height: CARD,
                    borderRadius: 20,
                    background: "#FFFFFF",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: p.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: p.markSize,
                      fontWeight: 700,
                      letterSpacing: "-0.3px",
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    {p.mark}
                  </div>
                </div>

                {/* Label */}
                <span
                  style={{
                    fontSize: 11,
                    color: "#909090",
                    fontFamily: "var(--font-geist-mono)",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid — mobile */}
        <div className="flex lg:hidden justify-center flex-wrap gap-6">
          {platforms.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2">
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 18,
                  background: "#fff",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                  border: "1px solid rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: p.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: p.markSize,
                    fontWeight: 700,
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  {p.mark}
                </div>
              </div>
              <span style={{ fontSize: 11, color: "#909090", fontFamily: "var(--font-geist-mono)" }}>
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
