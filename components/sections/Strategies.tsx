"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import SectionBadge from "@/components/ui/SectionBadge";

const strategies = [
  {
    title: "Aquisição de Usuários",
    description: "Atraia os usuários com maior potencial de compra e engajamento, em campanhas otimizadas para performance.",
    href: "/useracquisition-app",
    icon: <img src="/icon-strategy-1.webp" width={28} height={28} alt="" />,
  },
  {
    title: "Retargeting",
    description: "Reengaje usuários que já instalaram seu app e converta intenções em compras e eventos de receita.",
    href: "/retargeting",
    icon: <img src="/icon-strategy-2.webp" width={28} height={28} alt="" />,
  },
  {
    title: "CTV",
    description: "Anuncie em TVs conectadas e streaming para construir brand awareness e escalar o alcance do seu app.",
    href: "/ctv-connected-tv",
    icon: <img src="/icon-strategy-3.webp" width={28} height={28} alt="" />,
  },
  {
    title: "Push Ads",
    description: "Alcance o usuário certo, na hora certa, fora do app. Notificações que reativam, convertem e aumentam o LTV.",
    href: "/app-chat-push",
    icon: <img src="/icon-strategy-4.webp" width={28} height={28} alt="" />,
  },
  {
    title: "Preload",
    description: "Seu app pré-instalado em dispositivos novos, garantindo presença desde o primeiro acesso do usuário.",
    href: "/preload",
    icon: <img src="/icon-strategy-5.webp" width={28} height={28} alt="" />,
  },
  {
    title: "Mídia Programática",
    description: "Compra de mídia em escala com dados de primeira parte para atingir o usuário certo, no momento certo.",
    href: "/midia-programatica",
    icon: <img src="/icon-strategy-6.webp" width={28} height={28} alt="" />,
  },
];

export default function Strategies() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const s0 = useInView(); const s1 = useInView(); const s2 = useInView();
  const s3 = useInView(); const s4 = useInView(); const s5 = useInView();
  const cardViews = [s0, s1, s2, s3, s4, s5];

  return (
    <section
      id="estrategias"
      className="strategies-section"
      style={{ background: "#fafafa", padding: "80px 40px", position: "relative", overflow: "hidden" }}
    >
      {/* Blob roxo */}
      <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-70%, -50%)", width: "700px", height: "700px", background: "radial-gradient(ellipse, rgba(130,100,255,0.20) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      {/* Blob azul */}
      <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-30%, -40%)", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(80,140,255,0.16) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: "1350px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Headline */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? " visible" : ""}`}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <SectionBadge>Soluções</SectionBadge>
          <h2 style={{ color: "#251d49", fontSize: "48px", lineHeight: "120%", letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Nossas Soluções
          </h2>
          <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "160%", maxWidth: "504px", margin: "0 auto" }}>
            Cada solução atua em uma frente específica. Combinadas, cobrem o funil completo do seu app.
          </p>
        </div>

        {/* Grid */}
        <div className="strategies-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {strategies.map((s, idx) => {
            const { ref: cardRef, visible: cardVisible } = cardViews[idx];
            const delay = `${(idx % 3) * 0.1}s`;
            return (
              <a
                key={s.title}
                href={s.href}
                ref={cardRef as unknown as React.RefObject<HTMLAnchorElement>}
                className={`strategies-card card reveal-scale${cardVisible ? " visible" : ""}`}
                style={{
                  "--reveal-delay": delay,
                  background: "rgba(255,255,255,0.80)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.50)",
                  borderRadius: "24px",
                  padding: "25px",
                  height: "412px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                  textDecoration: "none",
                  transition: "transform 0.25s ease",
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                }}
              >
                {/* Icon */}
                <div style={{
                  background: "var(--color-primary-light)",
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {s.icon}
                </div>

                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <h3 style={{ fontSize: "32px", color: "#251d49", marginBottom: "16px" }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: "16px", color: "var(--color-muted)", lineHeight: "160%", textWrap: "balance" } as React.CSSProperties}>
                      {s.description}
                    </p>
                  </div>
                  <span className="strategies-card-btn">
                    Ver detalhes
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
