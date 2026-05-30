"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import SectionBadge from "@/components/ui/SectionBadge";

const steps = [
  {
    number: "01",
    tag: "Descoberta",
    title: "Briefing & Diagnóstico",
    description: "Entendemos os objetivos do app, o estágio do funil e os KPIs que mais importam para o negócio.",
    image: "/processo-01.webp",
  },
  {
    number: "02",
    tag: "Estratégia",
    title: "Planejamento Estratégico",
    description: "Definimos as estratégias certas para cada etapa,sem desperdício de verba e com foco em resultado.",
    image: "/processo-02.webp",
  },
  {
    number: "03",
    tag: "Execução",
    title: "Ativação das Campanhas",
    description: "Lançamos as campanhas com criativos otimizados, segmentação precisa e integração de tracking.",
    image: "/processo-03.webp",
    imageScale: 1.5,
  },
  {
    number: "04",
    tag: "Performance",
    title: "Otimização Contínua",
    description: "Monitoramos em tempo real e ajustamos bid, criativos e audiências para maximizar a performance.",
    image: "/processo-04.webp",
    imageCover: true,
  },
  {
    number: "05",
    tag: "Crescimento",
    title: "Relatório & Escala",
    description: "Reportes claros com insights acionáveis e decisão conjunta sobre escalar o que está funcionando.",
    image: "/processo-05.webp",
  },
];

const CARD_W      = 476;
const CARD_H      = 708;
const SIDE_SCALE  = 349 / 476;                                        // ≈ 0.733
const SIDE_OFFSET = CARD_W / 2 + 64 + (CARD_W * SIDE_SCALE) / 2;    // ≈ 476.5 px

export default function Timeline() {
  const [active, setActive] = useState(0);
  const { ref: headerRef,   visible: headerVisible   } = useInView();
  const { ref: carouselRef, visible: carouselVisible } = useInView();

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(steps.length - 1, a + 1));

  return (
    <section
      id="como-funciona"
      className="timeline-section"
      style={{ background: "white", padding: "80px 40px", overflow: "hidden" }}
    >
      <style>{`
        @media (max-width: 767px) {
          .timeline-carousel-outer { overflow: visible !important; }
          .process-track { height: auto !important; min-height: 0 !important; }
          .process-card { display: none !important; }
          .process-card-active {
            display: flex !important;
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            width: 82vw !important;
            height: 520px !important;
            margin: 0 auto !important;
          }
          .process-card-visual { flex: 1 !important; height: auto !important; }
          .timeline-fade-overlay { display: none !important; }
          .process-nav-left  { left: calc(50% - 41vw - 22px) !important; }
          .process-nav-right { right: calc(50% - 41vw - 22px) !important; }
        }
      `}</style>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="timeline-header" style={{ maxWidth: "1350px", margin: "0 auto", padding: "0 40px" }}>
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? " visible" : ""}`}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <SectionBadge>Processo</SectionBadge>

          <h2 style={{
            color: "var(--color-heading)",
            fontSize: "48px",
            maxWidth: "440px",
            margin: "0 auto 16px",
            textWrap: "balance",
          } as React.CSSProperties}>
            Seu crescimento começa aqui
          </h2>

          <p style={{ fontSize: "16px", color: "#3d3d4a", lineHeight: "160%", maxWidth: "480px", margin: "0 auto", textWrap: "balance" } as React.CSSProperties}>
            Com a Appreach, seu app evolui mais rápido e ganha espaço entre os principais players do mercado.
          </p>
        </div>
      </div>

      {/* ── Carousel ───────────────────────────────────────────────────── */}
      <div
        ref={carouselRef as React.RefObject<HTMLDivElement>}
        className={`reveal-scale${carouselVisible ? " visible" : ""}`}
        style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
      >
        <div className="timeline-carousel-outer" style={{ maxWidth: "1350px", margin: "0 auto", overflow: "hidden", position: "relative", paddingTop: "20px", paddingBottom: "20px" }}>
          {/* Fade overlay,laterais */}
          <div aria-hidden className="timeline-fade-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, white 0%, transparent 8%, transparent 92%, white 100%)", pointerEvents: "none", zIndex: 3 }} />
        {/* Track */}
        <div
          className="process-track"
          style={{ position: "relative", height: `${CARD_H}px`, marginBottom: "40px" }}
        >
          {steps.map((step, i) => {
            const isActive = i === active;
            const scale    = isActive ? 1 : SIDE_SCALE;
            const tx       = (i - active) * SIDE_OFFSET;
            const opacity  = isActive ? 1 : 0.24;

            return (
              <div
                key={step.number}
                className={`process-card${isActive ? " process-card-active" : ""}`}
                onClick={() => !isActive && setActive(i)}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: `${CARD_W}px`,
                  height: `${CARD_H}px`,
                  transform: `translate(calc(-50% + ${tx}px), -50%) scale(${scale})`,
                  transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
                  opacity,
                  cursor: isActive ? "default" : "pointer",
                  borderRadius: "24px",
                  background: "#251d49",
                  border: "none",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transformOrigin: "center center",
                  zIndex: isActive ? 2 : 1,
                }}
              >
                {/* Visual area */}
                {step.image ? (
                  <div className="process-card-visual" style={{
                    flex: 1,
                    overflow: "hidden",
                    background: "linear-gradient(180deg, #3d317e 0%, #2b2060 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: step.imageCover ? "0" : "32px",
                  }}>
                    <img
                      src={step.image}
                      alt=""
                      style={step.imageCover
                        ? { width: "100%", height: "100%", objectFit: "cover", display: "block" }
                        : { maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block", transform: step.imageScale ? `scale(${step.imageScale})` : undefined }
                      }
                    />
                  </div>
                ) : (
                  <div style={{ flex: 1, background: "linear-gradient(180deg, #3d317e 0%, #2b2060 100%)" }} />
                )}

                {/* Text area */}
                <div style={{
                  padding: "32px 36px 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#8885f4",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}>
                    Passo {step.number}: {step.tag}
                  </span>

                  <h3 style={{
                    color: "white",
                    fontSize: "28px",
                    letterSpacing: "-0.02em",
                    lineHeight: "130%",
                    margin: 0,
                  }}>
                    {step.title}
                  </h3>

                  <p style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: "160%",
                    margin: 0,
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Left nav,absolute, centered on the gap between side and active card */}
          <button
            className="process-nav-left"
            onClick={prev}
            disabled={active === 0}
            aria-label="Anterior"
            style={{
              position: "absolute",
              left: "calc(50% - 292px)",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "var(--color-primary)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: active === 0 ? "default" : "pointer",
              opacity: active === 0 ? 0.35 : 1,
              transition: "opacity 0.2s ease",
              flexShrink: 0,
            }}
          >
            <ChevronLeft size={20} color="white" />
          </button>

          {/* Right nav */}
          <button
            className="process-nav-right"
            onClick={next}
            disabled={active === steps.length - 1}
            aria-label="Próximo"
            style={{
              position: "absolute",
              right: "calc(50% - 292px)",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "var(--color-primary)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: active === steps.length - 1 ? "default" : "pointer",
              opacity: active === steps.length - 1 ? 0.35 : 1,
              transition: "opacity 0.2s ease",
              flexShrink: 0,
            }}
          >
            <ChevronRight size={20} color="white" />
          </button>
        </div>
        </div>
      </div>

    </section>
  );
}
