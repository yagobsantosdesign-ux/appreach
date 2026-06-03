"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import { useInView } from "@/hooks/useInView";

export default function WhyAppreach() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: c0Ref, visible: c0Visible } = useInView();
  const { ref: c1Ref, visible: c1Visible } = useInView();
  const { ref: c2Ref, visible: c2Visible } = useInView();

  return (
    <section className="why-section" style={{ background: "#ffffff", padding: "80px 40px", position: "relative", overflow: "hidden" }}>
      {/* Blob roxo */}
      <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-70%, -50%)", width: "1200px", height: "1200px", background: "radial-gradient(ellipse, rgba(130,100,255,0.20) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      {/* Blob azul */}
      <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-30%, -40%)", width: "1000px", height: "1000px", background: "radial-gradient(ellipse, rgba(80,140,255,0.16) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: "1350px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? " visible" : ""}`}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <SectionBadge>POR QUE A APPREACH</SectionBadge>
          <h2 style={{
            color: "var(--color-heading)",
            fontSize: "48px",
            fontWeight: 600,
            lineHeight: "120%",
            letterSpacing: "-1.4px",
            margin: "12px auto 0",
            maxWidth: "560px",
          }}>
            Uma extensão do seu time de crescimento
          </h2>
        </div>

        {/* 3 cards lado a lado */}
        <div className="why-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}>

          {/* ── Card 1: Foto ── */}
          <div
            ref={c0Ref as React.RefObject<HTMLDivElement>}
            className={`why-card reveal-scale${c0Visible ? " visible" : ""}`}
            style={{
              "--reveal-delay": "0s",
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              minHeight: "544px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            } as React.CSSProperties}
          >
            {/* Foto de fundo */}
            <img
              src="/why-card1-bg.webp"
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
            {/* Texto */}
            <div style={{ position: "relative", padding: "32px" }}>
              <h3 style={{
                fontSize: "32px",
                fontWeight: 600,
                color: "#ffffff",
                lineHeight: "140%",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
                maxWidth: "270px",
                textWrap: "balance",
              } as React.CSSProperties}>
                Especialistas em crescimento
              </h3>
              <p style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: "160%",
                maxWidth: "260px",
                textWrap: "balance",
              } as React.CSSProperties}>
                Um time focado em apps, combinando mídia, dados e otimização para gerar resultados consistentes.
              </p>
            </div>
          </div>

          {/* ── Card 2: Cronograma ── */}
          <div
            ref={c1Ref as React.RefObject<HTMLDivElement>}
            className={`why-card reveal-scale${c1Visible ? " visible" : ""}`}
            style={{
              "--reveal-delay": "0.1s",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.80)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              overflow: "hidden",
              minHeight: "544px",
              display: "flex",
              flexDirection: "column",
            } as React.CSSProperties}
          >
            {/* Imagem topo */}
            <div style={{ padding: "33px 33px 0", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{
                borderRadius: "16px",
                overflow: "hidden",
                flex: 1,
                minHeight: "266px",
                background: "#EDE8FF",
              }}>
                <img
                  src="/why-card2.webp"
                  alt="Cronograma de lançamento"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    display: "block",
                  }}
                />
              </div>
            </div>
            {/* Texto rodapé */}
            <div style={{ padding: "32px 33px 33px" }}>
              <h3 style={{
                fontSize: "32px",
                fontWeight: 600,
                color: "var(--color-heading)",
                lineHeight: "140%",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
                maxWidth: "300px",
                textWrap: "balance",
              } as React.CSSProperties}>
                Velocidade para escalar
              </h3>
              <p style={{
                fontSize: "16px",
                color: "var(--color-muted)",
                lineHeight: "160%",
                maxWidth: "300px",
                textWrap: "balance",
              } as React.CSSProperties}>
                Lançamos campanhas rapidamente para transformar aprendizado em crescimento desde os primeiros dias.
              </p>
            </div>
          </div>

          {/* ── Card 3: iPhone ── */}
          <div
            ref={c2Ref as React.RefObject<HTMLDivElement>}
            className={`why-card reveal-scale${c2Visible ? " visible" : ""}`}
            style={{
              "--reveal-delay": "0.18s",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.80)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              overflow: "hidden",
              minHeight: "544px",
              display: "flex",
              flexDirection: "column",
            } as React.CSSProperties}
          >
            {/* Imagem topo — iPhone mockup */}
            <div style={{ padding: "33px 33px 0", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{
                borderRadius: "16px",
                overflow: "hidden",
                flex: 1,
                minHeight: "266px",
                background: "#EDE8FF",
              }}>
                <img
                  src="/why-card3.webp"
                  alt="Dados que você entende"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>
            </div>
            {/* Texto rodapé */}
            <div style={{ padding: "32px 33px 33px" }}>
              <h3 style={{
                fontSize: "32px",
                fontWeight: 600,
                color: "var(--color-heading)",
                lineHeight: "140%",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
                maxWidth: "220px",
                textWrap: "balance",
              } as React.CSSProperties}>
                Visibilidade completa
              </h3>
              <p style={{
                fontSize: "16px",
                color: "var(--color-muted)",
                lineHeight: "160%",
                maxWidth: "315px",
                textWrap: "balance",
              } as React.CSSProperties}>
                Dados claros, acompanhamento contínuo e total transparência sobre a evolução da sua performance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
