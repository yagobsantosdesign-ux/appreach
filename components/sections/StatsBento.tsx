"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";
import { useInView } from "@/hooks/useInView";

const stats = [
  {
    value: "50+",
    label: "Apps atendidos",
    sub: "de startups a top 10 da categoria",
  },
  {
    value: "98%",
    label: "Satisfação dos clientes",
    sub: "NPS mensurado",
  },
  {
    value: "300+",
    label: "Campanhas executadas",
    sub: "com rastreamento completo",
  },
  {
    value: "R$500M+",
    label: "Em mídia gerenciada",
    sub: "nos últimos 5 anos",
    dark: true,
  },
];

const CARD_BASE: React.CSSProperties = {
  borderRadius: "32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "25px",
  minHeight: "220px",
  position: "relative",
  overflow: "hidden",
  transition: "border 0.2s ease, box-shadow 0.2s ease",
};

const CARD_LIGHT: React.CSSProperties = {
  ...CARD_BASE,
  background: "white",
  border: "1px solid rgba(0,0,0,0.04)",
};

const CARD_MUTED: React.CSSProperties = {
  ...CARD_BASE,
  background: "#F4F4F6",
  border: "1px solid rgba(235,235,235,0.6)",
};

const CARD_DARK: React.CSSProperties = {
  ...CARD_BASE,
  background: "linear-gradient(120deg, #A8ADF9 15.89%, #6557EA 104.04%)",
  boxShadow: "0 8px 32px rgba(101,87,234,0.30)",
};

function BadgeTag({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono)",
      fontSize: "11px", fontWeight: 700, letterSpacing: "0.8px",
      textTransform: "uppercase",
      color: dark ? "rgba(255,255,255,0.7)" : "var(--color-primary)",
      background: dark ? "rgba(255,255,255,0.12)" : "rgba(101,87,234,0.08)",
      borderRadius: "99px", padding: "3px 10px",
    }}>
      {children}
    </span>
  );
}

export default function StatsBento() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const c0 = useInView();
  const c1 = useInView();
  const c2 = useInView();
  const c3 = useInView();
  const c4 = useInView();
  const c5 = useInView();
  return (
    <section className="stats-bento-section" style={{ background: "#fafafa", padding: "80px 40px" }}>
      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mx-auto reveal${headerVisible ? " visible" : ""}`}
          style={{ maxWidth: "560px", marginBottom: "80px" }}
        >
          <SectionBadge>Números</SectionBadge>
          <h2
            className="text-dark mt-3"
            style={{ fontSize: "clamp(28px, 6.5vw, 48px)", letterSpacing: "-0.02em", lineHeight: "120%", textWrap: "balance" }}
          >
            Resultados que falam por si
          </h2>
          <p style={{ fontSize: "17px", color: "var(--color-muted)", lineHeight: 1.65, marginTop: "16px", textWrap: "balance" }}>
            Crescimento sustentável para apps em todas as verticais.
          </p>
          <div className="flex justify-center mt-7">
            <a
              href="#contato"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
                padding: "0 20px",
                borderRadius: "12px",
                background: "#6557ea",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "-0.32px",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Diagnóstico gratuito
            </a>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {/* Cell 0 — Foto 1 */}
          <div ref={c0.ref as React.RefObject<HTMLDivElement>} className={`stats-photo reveal-scale${c0.visible ? " visible" : ""}`} style={{ ...CARD_MUTED, padding: 0, overflow: "hidden" } as React.CSSProperties}>
            <img
              src="/stats-photo-1.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "220px" }}
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
            />
          </div>

          {/* Cell 1 — 50+ Apps atendidos */}
          <div ref={c1.ref as React.RefObject<HTMLDivElement>} className={`stats-card reveal-scale${c1.visible ? " visible" : ""}`} style={CARD_LIGHT}>
            <div>
              <BadgeTag>↑ Crescimento</BadgeTag>
              <p className="stats-value" style={{ fontSize: "44px", fontWeight: 500, letterSpacing: "-2px", lineHeight: 1, color: "var(--color-dark)", marginTop: "14px" }}>
                {stats[0].value}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--color-dark)", letterSpacing: "-0.3px" }}>
                {stats[0].label}
              </p>
              <p style={{ fontSize: "13px", color: "var(--color-muted)", marginTop: "2px" }}>{stats[0].sub}</p>
            </div>
          </div>

          {/* Cell 2 — Foto 2 */}
          <div ref={c2.ref as React.RefObject<HTMLDivElement>} className={`stats-photo reveal-scale${c2.visible ? " visible" : ""}`} style={{ ...CARD_MUTED, padding: 0, overflow: "hidden" } as React.CSSProperties}>
            <img
              src="/stats-photo-2.webp"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "220px" }}
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
            />
          </div>

          {/* Cell 3 — 300+ Campanhas */}
          <div ref={c3.ref as React.RefObject<HTMLDivElement>} className={`stats-card reveal-scale${c3.visible ? " visible" : ""}`} style={CARD_LIGHT}>
            <div>
              <BadgeTag>↑ Escala</BadgeTag>
              <p className="stats-value" style={{ fontSize: "44px", fontWeight: 500, letterSpacing: "-2px", lineHeight: 1, color: "var(--color-dark)", marginTop: "14px" }}>
                {stats[2].value}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--color-dark)", letterSpacing: "-0.3px" }}>
                {stats[2].label}
              </p>
              <p style={{ fontSize: "13px", color: "var(--color-muted)", marginTop: "2px" }}>{stats[2].sub}</p>
            </div>
          </div>

          {/* Cell 4 — R$500M+ dark */}
          <div ref={c4.ref as React.RefObject<HTMLDivElement>} className={`stats-card reveal-scale${c4.visible ? " visible" : ""}`} style={CARD_DARK}>
            <div>
              <BadgeTag dark>↑ Investimento</BadgeTag>
              <p className="stats-value" style={{ fontSize: "44px", fontWeight: 500, letterSpacing: "-2px", lineHeight: 1, color: "white", marginTop: "14px" }}>
                {stats[3].value}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "rgba(255,255,255,0.90)", letterSpacing: "-0.3px" }}>
                {stats[3].label}
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>{stats[3].sub}</p>
            </div>
          </div>

          {/* Cell 5 — 98% Satisfação */}
          <div ref={c5.ref as React.RefObject<HTMLDivElement>} className={`stats-card reveal-scale${c5.visible ? " visible" : ""}`} style={CARD_LIGHT}>
            <div>
              <BadgeTag>↑ NPS</BadgeTag>
              <p className="stats-value" style={{ fontSize: "44px", fontWeight: 500, letterSpacing: "-2px", lineHeight: 1, color: "var(--color-dark)", marginTop: "14px" }}>
                {stats[1].value}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--color-dark)", letterSpacing: "-0.3px" }}>
                {stats[1].label}
              </p>
              <p style={{ fontSize: "13px", color: "var(--color-muted)", marginTop: "2px" }}>{stats[1].sub}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
