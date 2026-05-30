"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";

const stats = [
  { value: "+300", label: "Campanhas executadas" },
  { value: "98%", label: "Satisfação dos clientes" },
  { value: "50+", label: "Apps atendidos" },
  { value: "R$500M+", label: "Em mídia gerenciada" },
];

// NOTE: anos e textos da trajetória são placeholders — ajustar com a história real.
const journey = [
  { year: "2019", title: "O começo", desc: "Nascemos para resolver o marketing de apps com estratégia e dados — não com achismo." },
  { year: "2021", title: "Primeiras escalas", desc: "Estruturamos campanhas full-funnel e provamos resultado real para os primeiros clientes." },
  { year: "2023", title: "Portfólio 360°", desc: "Adicionamos CTV, Apple Search Ads, retargeting e mídia programática à nossa operação." },
  { year: "2025", title: "Crescendo com dados e IA", desc: "Num mercado em constante evolução, usamos dados e IA para gerar crescimento real para os apps que confiam na gente." },
];

// NOTE: nomes (dos arquivos das fotos) e cargos são placeholders — ajustar com os dados reais do time.
const team = [
  { name: "Henri", role: "Co-fundador & CEO", photo: "/team-henri.webp" },
  { name: "Íris", role: "Head de Growth", photo: "/team-iris.webp" },
  { name: "Lívia", role: "Head de Criação", photo: "/team-livia.webp" },
  { name: "Mano", role: "Head de Mídia", photo: "/team-mano.webp" },
  { name: "Neto", role: "Head de Dados", photo: "/team-neto.webp" },
];

function IconLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconX() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const PLACEHOLDER_BG: React.CSSProperties = {
  background: "var(--color-primary-light)",
  borderRadius: "20px",
  position: "relative",
  overflow: "hidden",
};
function PlaceholderDots() {
  return (
    <>
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(101,87,234,0.09) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          color: "#6557EA",
          fontFamily: "var(--font-geist-mono)",
          letterSpacing: "1px",
          textTransform: "uppercase",
          opacity: 0.45,
        }}
      >
        Placeholder
      </span>
    </>
  );
}

export default function QuemSomosPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        {/* ── Hero ── */}
        <section style={{ background: "#ffffff", paddingTop: "134px", paddingBottom: "72px" }}>
          <div className="product-container">
            <div className="about-hero-row flex flex-col lg:flex-row" style={{ gap: "64px", alignItems: "flex-end" }}>
              {/* Copy */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <SectionBadge>Quem somos</SectionBadge>
                <h1
                  style={{
                    fontSize: "clamp(32px, 4.5vw, var(--text-h1))",
                    color: "var(--color-heading)",
                    letterSpacing: "-0.04em",
                    lineHeight: "110%",
                    textWrap: "balance" as never,
                    maxWidth: "620px",
                    marginBottom: "20px",
                  }}
                >
                  Estratégia 360° para apps que escalam
                </h1>
                <p style={{ fontSize: "var(--text-hero-sub)", color: "var(--color-body)", lineHeight: "160%", maxWidth: "480px", marginBottom: "28px" }}>
                  Somos a Appreach — agência de marketing para apps mobile, do primeiro install à receita. Unimos dados, criativos e mídia para crescer o seu app com eficiência.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Button href="/#contato" size="xl" variant="gradient">Falar com especialista</Button>
                  <Button href="/#estrategias" size="xl" variant="ghost">Ver soluções</Button>
                </div>
              </div>

              {/* Stats 2×2 */}
              <div
                className="about-stats-grid"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 48px", flexShrink: 0 }}
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="about-stat-value" style={{ fontSize: "var(--text-h3)", fontWeight: 600, color: "var(--color-heading)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                      {s.value}
                    </p>
                    <p style={{ fontSize: "15px", color: "var(--color-muted)", marginTop: "8px" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagem destaque */}
            <div style={{ ...PLACEHOLDER_BG, width: "100%", aspectRatio: "16 / 9", marginTop: "52px" }}>
              <PlaceholderDots />
            </div>
          </div>
        </section>

        {/* ── Visão / Missão ── */}
        <section style={{ background: "#ffffff", paddingBottom: "96px" }}>
          <div className="product-container">
            <div className="about-vm-row flex flex-col lg:flex-row" style={{ gap: "64px", alignItems: "stretch" }}>
              <div className="about-vm-media" style={{ ...PLACEHOLDER_BG, flex: 1, minHeight: "420px" }}>
                <PlaceholderDots />
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "40px" }}>
                <div>
                  <h2 style={{ fontSize: "var(--text-h3)", color: "var(--color-heading)", marginBottom: "12px" }}>Nossa visão</h2>
                  <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "170%", maxWidth: "460px" }}>
                    Na Appreach, enxergamos um mercado onde todo app — de startups a líderes de categoria — tem acesso a estratégias de crescimento de verdade, sustentadas por dados e não por achismo. Acreditamos que mídia bem investida transforma installs em receita previsível, não em números de vaidade. Nossa visão é ser a parceira de crescimento de referência na América Latina, dando a cada cliente a clareza e a confiança para escalar com eficiência.
                  </p>
                </div>
                <div>
                  <h2 style={{ fontSize: "var(--text-h3)", color: "var(--color-heading)", marginBottom: "12px" }}>Nossa missão</h2>
                  <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "170%", maxWidth: "460px" }}>
                    Nossa missão é transformar a forma como apps crescem, unindo dados, criativos e mídia em uma estratégia 360° — do primeiro install à receita. Combinamos inteligência analítica, segmentação precisa e otimização contínua para atrair os usuários certos e maximizar o retorno de cada real investido. Trabalhamos com transparência total, relatórios sem jargão e parceria próxima em cada etapa da jornada, para que escalar o seu app seja um processo claro, mensurável e sem desperdício.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Nossa trajetória ── */}
        <section style={{ background: "linear-gradient(145deg, #1E1640 0%, #2D1F5E 55%, #1a1438 100%)", padding: "96px 0" }}>
          <div className="product-container">
            <div className="about-journey-row flex flex-col lg:flex-row" style={{ gap: "48px", alignItems: "flex-start", justifyContent: "space-between" }}>
              {/* Esquerda: título */}
              <div className="about-journey-head" style={{ flex: "0 0 auto", maxWidth: "360px" }}>
                <SectionBadge dark>Nossa trajetória</SectionBadge>
                <h2 style={{ color: "#ffffff", fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: "120%", letterSpacing: "-0.02em", marginBottom: "16px", textWrap: "balance" as never }}>
                  De onde viemos
                </h2>
                <p style={{ color: "rgba(255,255,255,0.60)", fontSize: "16px", lineHeight: "160%" }}>
                  Cada conquista mostra o quanto evoluímos — e o quanto ainda queremos crescer junto com os apps dos nossos clientes.
                </p>
              </div>

              {/* Direita: timeline */}
              <div className="about-journey-timeline" style={{ flex: "0 0 auto", maxWidth: "520px", position: "relative" }}>
                {/* Linha vertical contínua */}
                <div aria-hidden style={{ position: "absolute", left: "15px", top: "16px", bottom: "16px", width: "2px", background: "rgba(255,255,255,0.15)" }} />
                {journey.map((item, i) => (
                  <div key={item.year} style={{ display: "flex", gap: "24px", position: "relative", paddingBottom: i < journey.length - 1 ? "44px" : 0 }}>
                    <div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        flexShrink: 0,
                        width: "32px",
                        height: "32px",
                        borderRadius: "9px",
                        background: "var(--color-primary)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 600,
                        boxShadow: "0 4px 16px rgba(101,87,234,0.45)",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div style={{ paddingTop: "3px" }}>
                      <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 600, letterSpacing: "-0.3px", marginBottom: "6px" }}>
                        {item.year} — {item.title}
                      </h3>
                      <p style={{ color: "rgba(255,255,255,0.60)", fontSize: "16px", lineHeight: "160%", maxWidth: "440px" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Equipe ── */}
        <section className="about-team-section" style={{ background: "#fafafa" }}>
          <div className="product-container">
            <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 56px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <SectionBadge>Time</SectionBadge>
              </div>
              <h2 style={{ fontSize: "48px", color: "var(--color-heading)", lineHeight: "120%", marginBottom: "16px" }}>
                A equipe por trás da Appreach
              </h2>
              <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "160%" }}>
                Um time de especialistas em mídia, dados e criação, trabalhando junto para fazer o seu app crescer.
              </p>
            </div>

            <div className="about-team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {team.map((m) => (
                <div
                  key={m.name}
                  style={{
                    background: "#ffffff",
                    border: "1px solid var(--color-border)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block" }} />
                  <div className="about-member-foot" style={{ padding: "20px 22px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <div>
                      <p style={{ fontSize: "18px", fontWeight: 600, color: "var(--color-heading)", letterSpacing: "-0.2px" }}>{m.name}</p>
                      <p style={{ fontSize: "14px", color: "var(--color-muted)", marginTop: "2px" }}>{m.role}</p>
                    </div>
                    <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                      {[{ icon: <IconLinkedin />, label: "LinkedIn" }, { icon: <IconX />, label: "X" }].map(({ icon, label }) => (
                        <a
                          key={label}
                          href="#"
                          aria-label={label}
                          className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                          style={{ color: "var(--color-muted)", border: "1px solid var(--color-border)" }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-primary)"; e.currentTarget.style.borderColor = "rgba(101,87,234,0.35)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-muted)"; e.currentTarget.style.borderColor = "var(--color-border)"; }}
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Card CTA — junte-se ao time */}
              <a
                href="/carreiras"
                className="about-join-card"
                style={{
                  background: "linear-gradient(145deg, #9B91FF 0%, #6557EA 100%)",
                  borderRadius: "20px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  minHeight: "240px",
                  boxShadow: "0 8px 40px rgba(101,87,234,0.30)",
                }}
              >
                <span style={{ fontSize: "var(--text-h3)", fontWeight: 600, color: "#ffffff", lineHeight: "130%", letterSpacing: "-0.02em", textWrap: "balance" as never }}>
                  Quer fazer parte do time?
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#ffffff", fontSize: "16px", fontWeight: 600 }}>
                  Ver vagas abertas
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
