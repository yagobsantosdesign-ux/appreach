"use client";

import React, { useEffect, useRef } from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import { useInView } from "@/hooks/useInView";

// 9 icons provided, using first 8 for the carousel
const PLATFORMS = [
  { name: "Google Ads", img: "/platform-icon-1.png" },
  { name: "Meta Ads",   img: "/platform-icon-2.png" },
  { name: "TikTok Ads", img: "/platform-icon-3.png" },
  { name: "AppsFlyer",  img: "/platform-icon-4.png" },
  { name: "Adjust",     img: "/platform-icon-5.png" },
  { name: "Firebase",   img: "/platform-icon-6.png" },
  { name: "Branch",     img: "/platform-icon-7.png" },
  { name: "Singular",   img: "/platform-icon-8.png" },
  { name: "Platform 9", img: "/platform-icon-9.png" },
];

// Background circles are centered at (CX, CY_BG) in container coords.
// Container: 800×400px. Circles centered at top: calc(50% + 217px) = 417px.
// Outer circle radius: 345.5px. Icons orbit on the outer circle border.
const CX     = 400;   // horizontal center of 800px container
const CY_BG  = 417;   // background circle center y (below container bottom)
const R      = 346;   // orbit radius = outer circle edge (691/2 = 345.5) → icons centered on border
const CARD   = 80;    // icon card size

// positions evenly spaced, offset half-step so no icon is exactly at the horizontal edge
const N_ICONS   = 9;
const STEP_DEG  = 360 / N_ICONS;
const START_RAD = Array.from({ length: N_ICONS }, (_, i) =>
  ((STEP_DEG / 2 + i * STEP_DEG) * Math.PI) / 180
);

function pos(angle: number) {
  return {
    x: CX     + R * Math.cos(angle) - CARD / 2,
    y: CY_BG  - R * Math.sin(angle) - CARD / 2,
  };
}

export default function Platforms() {
  const iconsRef  = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef = useRef(0);
  const rafRef    = useRef<number | undefined>(undefined);
  const { ref: headerRef, visible: headerVisible } = useInView();

  useEffect(() => {
    const SPEED = (2 * Math.PI) / 28000; // ~28s full orbit
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
    <section className="pt-24 lg:pt-32" style={{ background: "#ffffff" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center reveal${headerVisible ? " visible" : ""}`}
          style={{ maxWidth: 600, margin: "0 auto 56px" }}
        >
          <SectionBadge>Plataformas</SectionBadge>
          <h2
            className="font-medium text-dark leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 6.5vw, 48px)", letterSpacing: "-1.92px", textWrap: "balance" }}
          >
            Operamos onde seu usuário está
          </h2>
          <p style={{ fontSize: "16px", color: "#909090", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            Parceiros certificados das principais plataformas de mídia e mensuração do mercado mobile.
          </p>
        </div>

        {/* Arc carousel — desktop only */}
        <div
          className="hidden lg:block"
          style={{ position: "relative", maxWidth: 800, height: 400, margin: "0 auto", overflow: "hidden" }}
        >
          {/* Background gradient circles — centers at (50%, calc(50%+217px)) */}
          <div style={{
            position: "absolute",
            width: 691, height: 691,
            borderRadius: "50%",
            background: "linear-gradient(to bottom, rgba(214,205,255,0.4) 0%, rgba(242,239,255,0) 44%)",
            left: "50%", top: "calc(50% + 217px)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }} />

          {/* Bottom fade overlay */}
          <div style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: 200,
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,1) 100%)",
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
                  boxShadow: "0 4px 20px rgba(101,87,234,0.15), 0 1px 4px rgba(0,0,0,0.07)",
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

        {/* Grid — mobile */}
        <div className="flex lg:hidden justify-center flex-wrap gap-6">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2">
              <div style={{
                width: 80, height: 80,
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
