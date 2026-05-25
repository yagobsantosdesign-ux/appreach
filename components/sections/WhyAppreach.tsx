"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import { useInView } from "@/hooks/useInView";

export default function WhyAppreach() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const c0 = useInView(); const c1 = useInView();
  const c2 = useInView(); const c3 = useInView();
  const cardViews = [c0, c1, c2, c3];

  return (
    <section style={{ background: "#ffffff", padding: "80px 40px" }}>
      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? " visible" : ""}`}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <SectionBadge>POR QUÊ A APPREACH</SectionBadge>
          <h2
            style={{
              color: "#251d49",
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: "120%",
              letterSpacing: "-0.02em",
              margin: "12px auto 0",
              maxWidth: "480px",
            }}
          >
            Simples de entender.<br />Fácil de começar.
          </h2>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >

          {/* ── Card 1: Agilidade — dark, span 2, horizontal com área de imagem ── */}
          <div
            ref={c0.ref as React.RefObject<HTMLDivElement>}
            className={`reveal-scale${c0.visible ? " visible" : ""}`}
            style={{
              "--reveal-delay": "0s",
              gridColumn: "span 2",
              borderRadius: "24px",
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.06)",
              padding: "32px",
              display: "flex",
              gap: "28px",
              alignItems: "stretch",
              minHeight: "280px",
              overflow: "hidden",
            } as React.CSSProperties}
          >
            {/* Text */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
              <span style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                padding: "3px 10px",
                borderRadius: "99px",
                background: "rgba(101,87,234,0.08)",
                color: "var(--color-primary)",
                fontSize: "11px",
                fontWeight: 600,
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
              }}>
                Agilidade
              </span>
              <div>
                <h3 style={{
                  fontSize: "clamp(22px, 2.2vw, 30px)",
                  fontWeight: 600,
                  color: "#0f0f14",
                  letterSpacing: "-0.02em",
                  lineHeight: "130%",
                  marginBottom: "10px",
                  fontFamily: "var(--font-heading)",
                  maxWidth: "305px",
                }}>
                  Primeiros resultados em dias, não meses.
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-muted)", lineHeight: "1.65", maxWidth: "340px" }}>
                  Sem longas esperas. Em menos de uma semana, suas campanhas já estão no ar e gerando dados reais para otimizar.
                </p>
              </div>
            </div>

            {/* Widget calendário — 7 dias */}
            <div style={{
              width: "210px",
              flexShrink: 0,
              background: "#F4F4F6",
              borderRadius: "16px",
              border: "1px solid rgba(0,0,0,0.06)",
              padding: "20px 16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "14px",
            }}>
              {/* Cabeçalho */}
              <div style={{ fontSize: "9px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "1.2px", color: "rgba(0,0,0,0.3)" }}>
                Semana 1
              </div>

              {/* Grid de dias */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px" }}>
                {[
                  { d: "1", milestone: true, peak: false },
                  { d: "2", milestone: false, peak: false },
                  { d: "3", milestone: true, peak: false },
                  { d: "4", milestone: false, peak: false },
                  { d: "5", milestone: false, peak: false },
                  { d: "6", milestone: false, peak: false },
                  { d: "7", milestone: true, peak: true },
                ].map((item) => (
                  <div
                    key={item.d}
                    style={{
                      aspectRatio: "1",
                      borderRadius: "7px",
                      background: item.peak
                        ? "#6557ea"
                        : item.milestone
                        ? "rgba(101,87,234,0.15)"
                        : "rgba(0,0,0,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      fontWeight: 700,
                      fontFamily: "var(--font-mono)",
                      color: item.peak ? "#ffffff" : item.milestone ? "#6557ea" : "rgba(0,0,0,0.2)",
                    }}
                  >
                    {item.d}
                  </div>
                ))}
              </div>

              {/* Linha conectora */}
              <div style={{ position: "relative", height: "1px", background: "rgba(0,0,0,0.08)", margin: "0 2px" }}>
                {[0, 28.5, 100].map((pct, i) => (
                  <div key={i} style={{
                    position: "absolute",
                    left: `${pct}%`,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: i === 2 ? "8px" : "5px",
                    height: i === 2 ? "8px" : "5px",
                    borderRadius: "50%",
                    background: i === 2 ? "#6557ea" : "rgba(0,0,0,0.2)",
                    border: i === 2 ? "2px solid rgba(101,87,234,0.3)" : "none",
                  }} />
                ))}
              </div>

              {/* Lista de marcos */}
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                {[
                  { tag: "D1", label: "Briefing" },
                  { tag: "D3", label: "Live" },
                  { tag: "D7", label: "Dados ✓", highlight: true },
                ].map((m) => (
                  <div key={m.tag} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span style={{
                      fontSize: "8px",
                      fontFamily: "var(--font-mono)",
                      color: m.highlight ? "#6557ea" : "rgba(0,0,0,0.3)",
                      background: m.highlight ? "rgba(101,87,234,0.1)" : "transparent",
                      padding: m.highlight ? "1px 5px" : "0",
                      borderRadius: "4px",
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                      minWidth: "20px",
                    }}>
                      {m.tag}
                    </span>
                    <span style={{ fontSize: "11px", color: m.highlight ? "#251d49" : "rgba(0,0,0,0.35)", fontWeight: m.highlight ? 600 : 400 }}>
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Card 2: Simplicidade — branco, span 1, imagem + texto ── */}
          <div
            ref={c1.ref as React.RefObject<HTMLDivElement>}
            className={`reveal-scale${c1.visible ? " visible" : ""}`}
            style={{
              "--reveal-delay": "0.08s",
              gridColumn: "span 1",
              borderRadius: "24px",
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.06)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              minHeight: "280px",
              overflow: "hidden",
            } as React.CSSProperties}
          >
            {/* Área de imagem */}
            <div style={{
              flex: 1,
              minHeight: "120px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #F0EEFF 0%, #E8E4FF 100%)",
              overflow: "hidden",
              position: "relative",
            }}>
              {/* Detalhe decorativo sutil */}
              <div style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "rgba(101,87,234,0.12)",
              }} />
              <div style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                width: "48px",
                height: "4px",
                borderRadius: "99px",
                background: "rgba(101,87,234,0.25)",
              }} />
              <div style={{
                position: "absolute",
                top: "28px",
                left: "16px",
                width: "32px",
                height: "4px",
                borderRadius: "99px",
                background: "rgba(101,87,234,0.12)",
              }} />
            </div>

            {/* Texto */}
            <div>
              <h3 style={{
                fontSize: "clamp(20px, 2vw, 24px)",
                fontWeight: 600,
                color: "#0f0f14",
                letterSpacing: "-0.02em",
                lineHeight: "130%",
                marginBottom: "10px",
                fontFamily: "var(--font-heading)",
                maxWidth: "195px",
              }}>
                Você não precisa ser especialista.
              </h3>
              <p style={{ fontSize: "15px", color: "var(--color-muted)", lineHeight: "1.65" }}>
                Nós gerenciamos canais, criativos e dados. Você acompanha os resultados — não os processos.
              </p>
            </div>
          </div>

          {/* ── Card 3: Stat — muted, span 1, número grande ── */}
          <div
            ref={c2.ref as React.RefObject<HTMLDivElement>}
            className={`reveal-scale${c2.visible ? " visible" : ""}`}
            style={{
              "--reveal-delay": "0.16s",
              gridColumn: "span 1",
              borderRadius: "24px",
              background: "linear-gradient(120deg, #A8ADF9 15.89%, #6557EA 104.04%)",
              boxShadow: "0 8px 32px rgba(101,87,234,0.28)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "280px",
            } as React.CSSProperties}
          >
            {/* Número grande */}
            <div>
              <div style={{
                fontSize: "clamp(56px, 6vw, 72px)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                fontFamily: "var(--font-heading)",
              }}>
                +50
              </div>
              <div style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.75)",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                marginTop: "6px",
              }}>
                apps escalados
              </div>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.72)", lineHeight: "1.6" }}>
              De early-stage a grandes marcas. Já navegamos todos os estágios de crescimento de um app.
            </p>
          </div>

          {/* ── Card 4: Transparência — branco, span 2, com área de gráfico ── */}
          <div
            ref={c3.ref as React.RefObject<HTMLDivElement>}
            className={`reveal-scale${c3.visible ? " visible" : ""}`}
            style={{
              "--reveal-delay": "0.24s",
              gridColumn: "span 2",
              borderRadius: "24px",
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.06)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              minHeight: "280px",
            } as React.CSSProperties}
          >
            {/* Text */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px" }}>
              <div>
                <span style={{
                  display: "inline-flex",
                  padding: "3px 10px",
                  borderRadius: "99px",
                  background: "rgba(101,87,234,0.08)",
                  color: "var(--color-primary)",
                  fontSize: "11px",
                  fontWeight: 600,
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}>
                  Transparência
                </span>
                <h3 style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 600,
                  color: "#0f0f14",
                  letterSpacing: "-0.02em",
                  lineHeight: "130%",
                  marginBottom: "10px",
                  fontFamily: "var(--font-heading)",
                }}>
                  Dados que você entende.
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-muted)", lineHeight: "1.65", maxWidth: "380px" }}>
                  Relatórios sem jargão, dashboard em tempo real e reuniões quinzenais. Você sempre sabe o que está acontecendo com o seu investimento.
                </p>
              </div>
            </div>

            {/* Chart — linha SVG animada */}
            <div style={{
              background: "#F7F7FA",
              borderRadius: "16px",
              overflow: "hidden",
              padding: "20px 24px 0",
              position: "relative",
            }}>
              {/* Grade horizontal sutil */}
              {[0, 33, 66].map((pct) => (
                <div key={pct} style={{
                  position: "absolute",
                  left: "24px",
                  right: "24px",
                  top: `calc(20px + ${pct}% * 0.6)`,
                  height: "1px",
                  background: "rgba(0,0,0,0.045)",
                }} />
              ))}

              {/* SVG line chart */}
              <div style={{ position: "relative" }}>
                <svg
                  viewBox="0 0 280 90"
                  preserveAspectRatio="none"
                  style={{ width: "100%", height: "130px", display: "block", overflow: "visible" }}
                >
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6557ea" stopOpacity="0.10" />
                      <stop offset="100%" stopColor="#6557ea" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Área preenchida */}
                  <path
                    d="M0,62 C13,58 27,53 40,50 C53,47 67,57 80,55 C93,53 107,40 120,37 C133,34 147,45 160,43 C173,41 187,28 200,24 C213,20 227,34 240,31 C253,28 267,12 280,8 L280,90 L0,90 Z"
                    fill="url(#areaGrad)"
                    style={{
                      opacity: c3.visible ? 1 : 0,
                      transition: "opacity 0.8s ease 0.4s",
                    }}
                  />

                  {/* Linha principal — animada */}
                  <path
                    d="M0,62 C13,58 27,53 40,50 C53,47 67,57 80,55 C93,53 107,40 120,37 C133,34 147,45 160,43 C173,41 187,28 200,24 C213,20 227,34 240,31 C253,28 267,12 280,8"
                    fill="none"
                    stroke="#6557ea"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: 520,
                      strokeDashoffset: c3.visible ? 0 : 520,
                      transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.2s",
                    }}
                  />

                  {/* Dot pico */}
                  <circle
                    cx="280" cy="8" r="3.5"
                    fill="#6557ea"
                    style={{
                      opacity: c3.visible ? 1 : 0,
                      transition: "opacity 0.3s ease 1.5s",
                    }}
                  />
                  <circle
                    cx="280" cy="8" r="6"
                    fill="rgba(101,87,234,0.15)"
                    style={{
                      opacity: c3.visible ? 1 : 0,
                      transition: "opacity 0.3s ease 1.5s",
                    }}
                  />
                </svg>

                {/* Label flutuante no pico */}
                <div style={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  background: "#6557ea",
                  color: "#ffffff",
                  fontSize: "10px",
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                  padding: "3px 8px",
                  borderRadius: "99px",
                  letterSpacing: "0.3px",
                  opacity: c3.visible ? 1 : 0,
                  transform: c3.visible ? "translateY(0)" : "translateY(4px)",
                  transition: "opacity 0.4s ease 1.6s, transform 0.4s ease 1.6s",
                  pointerEvents: "none",
                }}>
                  ROAS ↑2.8×
                </div>
              </div>

              {/* Labels X-axis */}
              <div style={{ display: "flex", paddingBottom: "14px", paddingTop: "6px" }}>
                {["S1","S2","S3","S4","S5","S6","S7","S8"].map((label, i) => (
                  <div key={label} style={{
                    flex: 1,
                    textAlign: "center",
                    fontSize: "9px",
                    color: i === 7 ? "#6557ea" : "#c0c0c8",
                    fontFamily: "var(--font-mono)",
                    fontWeight: i === 7 ? 600 : 400,
                    letterSpacing: "0.3px",
                  }}>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
