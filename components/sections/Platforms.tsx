"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import SectionBadge from "@/components/ui/SectionBadge";

const PLATFORMS = [
  { name: "Google Ads", img: "/platform-icon-1.webp" },
  { name: "Meta Ads",   img: "/platform-icon-2.webp" },
  { name: "TikTok Ads", img: "/platform-icon-3.webp" },
  { name: "AppsFlyer",  img: "/platform-icon-4.webp" },
  { name: "Adjust",     img: "/platform-icon-5.webp" },
  { name: "Firebase",   img: "/platform-icon-6.webp" },
  { name: "Branch",     img: "/platform-icon-7.webp" },
  { name: "Singular",   img: "/platform-icon-8.webp" },
  { name: "Vungle",      img: "/platform-icon-9.webp" },
];

const CX    = 400;
const CY_BG = 417;
const R     = 346;
const CARD  = 80;

const N_ICONS  = 9;
const STEP_DEG = 360 / N_ICONS;
const START_RAD = Array.from({ length: N_ICONS }, (_, i) =>
  ((STEP_DEG / 2 + i * STEP_DEG) * Math.PI) / 180
);

function pos(angle: number) {
  return {
    x: CX    + R * Math.cos(angle) - CARD / 2,
    y: CY_BG - R * Math.sin(angle) - CARD / 2,
  };
}

export default function Platforms() {
  const iconsRef  = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef = useRef(0);
  const rafRef    = useRef<number | undefined>(undefined);
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: carouselRef, visible: carouselVisible } = useInView();

  useEffect(() => {
    const SPEED = (2 * Math.PI) / 28000;
    let lastTime = performance.now();

    const tick = (now: number) => {
      offsetRef.current += SPEED * (now - lastTime);
      lastTime = now;

      iconsRef.current.forEach((el, i) => {
        if (!el) return;
        const angle = START_RAD[i] + offsetRef.current;
        const { x, y } = pos(angle);
        const rotDeg = (Math.PI / 2 - angle) * (180 / Math.PI);
        el.style.transform = `translate(${x}px, ${y}px) rotate(${rotDeg}deg)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <section className="platforms-section" style={{ background: "#fafafa", padding: "80px 40px" }}>
      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
        <div className="platforms-card" style={{
          background: "white",
          borderRadius: "24px",
          border: "1px solid var(--color-border)",
          padding: "80px 80px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
        }}>

          {/* Header */}
          <div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className={`reveal${headerVisible ? " visible" : ""}`}
            style={{ textAlign: "center", maxWidth: "504px" }}
          >
            <SectionBadge>Plataformas</SectionBadge>
            <h2 style={{ color: "#251d49", fontSize: "48px", marginBottom: "14px" }}>
              Operamos onde seu usuário está
            </h2>
            <p style={{ fontSize: "16px", color: "var(--color-muted)", lineHeight: "160%" }}>
              Parceiros certificados das principais plataformas de mídia e mensuração do mercado mobile.
            </p>
          </div>

          {/* Arc carousel */}
          <div
            ref={carouselRef as React.RefObject<HTMLDivElement>}
            className={`platforms-arc-carousel reveal${carouselVisible ? " visible" : ""}`}
            style={{ position: "relative", width: 800, height: 400, overflow: "hidden" }}
          >
            {/* Background gradient blob */}
            <div style={{
              position: "absolute",
              width: 691, height: 691,
              borderRadius: "50%",
              background: "linear-gradient(to bottom, rgba(214,205,255,0.4) 0%, rgba(242,239,255,0) 44%)",
              left: "50%", top: "calc(50% + 217px)",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }} />

            {/* Bottom fade to white */}
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: 200,
              background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 40%, white 100%)",
              pointerEvents: "none",
              zIndex: 10,
            }} />

            {/* Orbiting icons */}
            {PLATFORMS.map((p, i) => {
              const { x, y } = pos(START_RAD[i]);
              return (
                <div
                  key={p.name}
                  ref={(el) => { iconsRef.current[i] = el; }}
                  style={{
                    position: "absolute",
                    left: 0, top: 0,
                    width: CARD, height: CARD,
                    transform: `translate(${x}px, ${y}px)`,
                    willChange: "transform",
                  }}
                >
                  <div style={{
                    width: CARD, height: CARD,
                    borderRadius: 14,
                    background: "#fff",
                    overflow: "hidden",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grid — mobile fallback (hidden via CSS) */}
          <div className="platforms-icon-grid justify-center flex-wrap gap-6">
            {PLATFORMS.map((p) => (
              <div key={p.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{ width: 80, height: 80, borderRadius: 14, overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <span style={{ fontSize: 11, color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                  {p.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
