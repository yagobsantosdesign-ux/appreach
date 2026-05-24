"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

const strategies = [
  {
    title: "Aquisição de Usuários",
    description: "Campanhas de UA com segmentação precisa para atrair novos usuários qualificados e maximizar o volume de installs.",
    href: "/useracquisition-app",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#6557ea" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    title: "Retargeting",
    description: "Reengaje usuários que já instalaram seu app e converta intenções em compras e eventos de receita.",
    href: "/retargeting",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#6557ea" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
      </svg>
    ),
  },
  {
    title: "CTV",
    description: "Anuncie em TVs conectadas e streaming para construir brand awareness e escalar o alcance do seu app.",
    href: "/ctv-connected-tv",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#6557ea" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
        <path d="M9 8l5 4-5 4z" opacity=".8"/>
      </svg>
    ),
  },
  {
    title: "App Chat & Push",
    description: "Comunicação direta dentro e fora do app com mensagens personalizadas para aumentar retenção e LTV.",
    href: "/app-chat-push",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#6557ea" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
      </svg>
    ),
  },
  {
    title: "Preload",
    description: "Seu app pré-instalado em dispositivos novos, garantindo presença desde o primeiro acesso do usuário.",
    href: "/preload",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#6557ea" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4-3.5l-3.5-3.5H12V8h2v4h2.5L13 15.5z"/>
      </svg>
    ),
  },
  {
    title: "Mídia Programática",
    description: "Compra de mídia em escala com dados de primeira parte para atingir o usuário certo, no momento certo.",
    href: "/midia-programatica",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#6557ea" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 5.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
      </svg>
    ),
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
          <div style={{ display: "inline-flex", gap: "8px", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ background: "#6557ea", height: "1.5px", width: "20px", flexShrink: 0 }} />
            <span style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              color: "#6557ea",
              fontSize: "11px",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}>
              Soluções
            </span>
          </div>
          <h2 style={{ color: "#251d49", fontSize: "48px", lineHeight: "120%", letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Nossas Soluções
          </h2>
          <p style={{ fontSize: "16px", color: "#3d3d4a", lineHeight: "160%", maxWidth: "504px", margin: "0 auto" }}>
            Cada solução atua em uma frente específica — combinadas, cobrem o funil completo do seu app.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {strategies.map((s, idx) => {
            const { ref: cardRef, visible: cardVisible } = cardViews[idx];
            const delay = `${(idx % 3) * 0.1}s`;
            return (
              <a
                key={s.title}
                href={s.href}
                ref={cardRef as unknown as React.RefObject<HTMLAnchorElement>}
                className={`card reveal-scale${cardVisible ? " visible" : ""}`}
                style={{
                  "--reveal-delay": delay,
                  background: "white",
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
                  background: "#eff2fe",
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
                <div>
                  <h3 style={{ fontSize: "32px", color: "#0f0f14", marginBottom: "16px" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "16px", color: "#909090", lineHeight: "160%" }}>
                    {s.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
