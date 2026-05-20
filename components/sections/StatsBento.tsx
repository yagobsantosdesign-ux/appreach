"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";

const stats = [
  {
    value: "50+",
    label: "Apps atendidos",
    sub: "em múltiplos verticais",
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
    label: "Em investimento gerenciado",
    sub: "em mídia para apps",
    dark: true,
  },
];

const CARD_BASE: React.CSSProperties = {
  borderRadius: "32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "40px",
  minHeight: "220px",
  position: "relative",
  overflow: "hidden",
};

const CARD_LIGHT: React.CSSProperties = {
  ...CARD_BASE,
  background: "rgba(255,255,255,0.72)",
  border: "1px solid rgba(235,235,235,0.9)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 4px 24px rgba(101,87,234,0.07), 0 1px 0 rgba(255,255,255,0.9) inset",
};

const CARD_MUTED: React.CSSProperties = {
  ...CARD_BASE,
  background: "#F4F4F6",
  border: "1px solid rgba(235,235,235,0.6)",
};

const CARD_DARK: React.CSSProperties = {
  ...CARD_BASE,
  background: "linear-gradient(145deg, #9B91FF 0%, #6557EA 100%)",
  boxShadow: "0 8px 32px rgba(101,87,234,0.30)",
};

function BadgeTag({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span style={{
      fontSize: "11px", fontWeight: 700, letterSpacing: "0.8px",
      textTransform: "uppercase",
      color: dark ? "rgba(255,255,255,0.7)" : "#6557EA",
      background: dark ? "rgba(255,255,255,0.12)" : "rgba(101,87,234,0.08)",
      borderRadius: "99px", padding: "3px 10px",
    }}>
      {children}
    </span>
  );
}

export default function StatsBento() {
  return (
    <section className="py-12 lg:py-16" style={{ background: "transparent" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        {/* Header */}
        <div className="text-center mx-auto mb-10" style={{ maxWidth: "560px" }}>
          <SectionBadge>Números</SectionBadge>
          <h2
            className="font-medium text-dark leading-tight mt-3"
            style={{ fontSize: "clamp(28px, 6.5vw, 48px)", letterSpacing: "-1.4px", textWrap: "balance" }}
          >
            Resultados que falam por si.
          </h2>
          <p style={{ fontSize: "17px", color: "#6B6B7B", lineHeight: 1.65, marginTop: "16px", textWrap: "balance" }}>
            Mais de uma década construindo crescimento sustentável para apps em todos os verticais.
          </p>
          <div className="flex justify-center mt-7">
            <Button href="mailto:fale@appreach.com.br" variant="gradient" size="md">
              Falar com especialista
            </Button>
          </div>
        </div>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {/* Cell 0 — Foto 1 */}
          <div className="stats-photo" style={{ ...CARD_MUTED, padding: 0, overflow: "hidden" }}>
            <img
              src="/stats-photo-1.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "220px" }}
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
            />
          </div>

          {/* Cell 1 — 50+ Apps atendidos */}
          <div className="stats-card" style={CARD_LIGHT}>
            <div>
              <BadgeTag>↑ Crescimento</BadgeTag>
              <p className="stats-value" style={{ fontSize: "44px", fontWeight: 500, letterSpacing: "-2px", lineHeight: 1, color: "#141414", marginTop: "14px" }}>
                {stats[0].value}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#141414", letterSpacing: "-0.3px" }}>
                {stats[0].label}
              </p>
              <p style={{ fontSize: "13px", color: "#909090", marginTop: "2px" }}>{stats[0].sub}</p>
            </div>
          </div>

          {/* Cell 2 — Foto 2 */}
          <div className="stats-photo" style={{ ...CARD_MUTED, padding: 0, overflow: "hidden" }}>
            <img
              src="/stats-photo-2.png"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "220px" }}
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
            />
          </div>

          {/* Cell 3 — 300+ Campanhas */}
          <div className="stats-card" style={CARD_LIGHT}>
            <div>
              <BadgeTag>↑ Escala</BadgeTag>
              <p className="stats-value" style={{ fontSize: "44px", fontWeight: 500, letterSpacing: "-2px", lineHeight: 1, color: "#141414", marginTop: "14px" }}>
                {stats[2].value}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#141414", letterSpacing: "-0.3px" }}>
                {stats[2].label}
              </p>
              <p style={{ fontSize: "13px", color: "#909090", marginTop: "2px" }}>{stats[2].sub}</p>
            </div>
          </div>

          {/* Cell 4 — R$500M+ dark */}
          <div className="stats-card" style={CARD_DARK}>
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
          <div className="stats-card" style={CARD_LIGHT}>
            <div>
              <BadgeTag>↑ NPS</BadgeTag>
              <p className="stats-value" style={{ fontSize: "44px", fontWeight: 500, letterSpacing: "-2px", lineHeight: 1, color: "#141414", marginTop: "14px" }}>
                {stats[1].value}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#141414", letterSpacing: "-0.3px" }}>
                {stats[1].label}
              </p>
              <p style={{ fontSize: "13px", color: "#909090", marginTop: "2px" }}>{stats[1].sub}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
