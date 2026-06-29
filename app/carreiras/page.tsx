"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// NOTE: textos das áreas são placeholders — ajustar com RH/liderança.

// As áreas alimentam tanto os cards quanto o select do formulário.
const areas = [
  { name: "Mídia & User Acquisition", desc: "Planejamento, compra e otimização de mídia em todos os canais de aquisição." },
  { name: "Criação & Conteúdo", desc: "Criativos de performance, copy e conteúdo que convertem instalações em receita." },
  { name: "Dados & Analytics", desc: "Mensuração, dashboards e inteligência para guiar cada decisão de campanha." },
  { name: "Tecnologia & Produto", desc: "Ferramentas internas, integrações e automações que escalam a operação." },
  { name: "Growth & Estratégia", desc: "Visão full-funnel, novos produtos e crescimento dos apps dos clientes." },
  { name: "Operações & Pessoas", desc: "A engrenagem que mantém o time afiado, organizado e crescendo junto." },
];

const PLACEHOLDER_BG: React.CSSProperties = {
  background: "var(--color-primary-light)",
  borderRadius: "20px",
  position: "relative",
  overflow: "hidden",
};

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CarreirasPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        {/* ── Hero ── */}
        <section style={{ background: "#ffffff", paddingTop: "134px", paddingBottom: "72px" }}>
          <div className="product-container">
            <Reveal>
            <div className="careers-hero-row flex flex-col lg:flex-row" style={{ gap: "64px", alignItems: "center" }}>
              {/* Copy */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <SectionBadge>Carreiras</SectionBadge>
                <h1
                  style={{
                    fontSize: "clamp(38px, 6vw, var(--text-h1))",
                    color: "var(--color-heading)",
                    letterSpacing: "-0.04em",
                    lineHeight: "110%",
                    textWrap: "balance" as never,
                    maxWidth: "620px",
                    marginBottom: "20px",
                  }}
                >
                  Cresça com quem vive growth mobile
                </h1>
                <p style={{ fontSize: "var(--text-hero-sub)", color: "var(--color-body)", lineHeight: "160%", maxWidth: "480px", marginBottom: "28px" }}>
                  Na Appreach você trabalha com dados reais, autonomia e um time que aprende rápido. Nosso banco de talentos está sempre aberto — com ou sem vaga publicada.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Button href="#banco-talentos" size="xl" variant="gradient">Enviar currículo</Button>
                  <Button href="#areas" size="xl" variant="ghost">Ver áreas</Button>
                </div>
              </div>

              {/* Imagem de apoio */}
              <div className="careers-hero-media" style={{ ...PLACEHOLDER_BG, flex: 1, alignSelf: "stretch", minHeight: "380px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/careers-hero.webp" alt="Pessoas do time da Appreach no espaço da marca" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        {/* ── Áreas sempre abertas ── */}
        <section id="areas" className="about-team-section" style={{ background: "#ffffff", position: "relative", overflow: "hidden", scrollMarginTop: "100px" }}>
          {/* Blob roxo */}
          <div style={{ position: "absolute", top: "55%", left: "50%", transform: "translate(-70%, -50%)", width: "700px", height: "700px", background: "radial-gradient(ellipse, rgba(130,100,255,0.20) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          {/* Blob azul */}
          <div style={{ position: "absolute", top: "55%", left: "50%", transform: "translate(-30%, -40%)", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(80,140,255,0.16) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          <div className="product-container" style={{ position: "relative", zIndex: 1 }}>
            <Reveal>
            <div style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 56px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <SectionBadge>Áreas sempre abertas</SectionBadge>
              </div>
              <h2 style={{ fontSize: "48px", color: "var(--color-heading)", lineHeight: "120%", marginBottom: "16px", textWrap: "balance" as never, maxWidth: "460px", marginLeft: "auto", marginRight: "auto" }}>
                Onde você pode atuar com a gente
              </h2>
              <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "160%" }}>
                Mesmo sem uma vaga publicada, mantemos as portas abertas em todas as áreas. Encontrou a sua? Entre no banco de talentos e a gente chama quando a vaga certa surgir.
              </p>
            </div>

            <div className="careers-areas-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {areas.map((a) => (
                <a
                  key={a.name}
                  href="mailto:weareappreach@appreach.app"
                  className="careers-area-card"
                  style={{
                    background: "rgba(255,255,255,0.80)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "20px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    textDecoration: "none",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(101,87,234,0.12)"; e.currentTarget.style.borderColor = "rgba(101,87,234,0.35)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "var(--color-border)"; }}
                >
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "var(--color-heading)", letterSpacing: "-0.2px", marginBottom: "10px" }}>{a.name}</h3>
                  <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "160%", marginBottom: "20px", flex: 1 }}>{a.desc}</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--color-primary)", fontSize: "15px", fontWeight: 600 }}>
                    Quero me candidatar <IconArrow />
                  </span>
                </a>
              ))}
            </div>
            </Reveal>
          </div>
        </section>

        {/* ── Banco de talentos — instrução por e-mail ── */}
        <section id="banco-talentos" style={{ background: "#ffffff", padding: "96px 0", scrollMarginTop: "100px" }}>
          <div className="product-container">
            <Reveal>
            <div
              style={{
                background: "linear-gradient(145deg, #9B91FF 0%, #6557EA 100%)",
                borderRadius: "32px",
                padding: "64px 72px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                boxShadow: "0 8px 40px rgba(101,87,234,0.30)",
              }}
            >
              <div className="inline-flex items-center mb-4" style={{ gap: "8px" }}>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", letterSpacing: "1px", fontWeight: 600, fontFamily: "var(--font-geist-mono)", textTransform: "uppercase" }}>
                  Banco de talentos
                </span>
              </div>
              <h2 style={{ fontSize: "clamp(24px, 6vw, 40px)", letterSpacing: "-0.02em", lineHeight: "120%", color: "white", textWrap: "balance" as never }}>
                Deixe seu currículo com a gente
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.70)", lineHeight: 1.65, maxWidth: "480px" }}>
                Envie seu currículo e conte um pouco sobre você e a área em que quer atuar para:
              </p>
              <a
                href="mailto:weareappreach@appreach.app"
                style={{ fontSize: "24px", fontWeight: 600, color: "white", textDecoration: "none" }}
              >
                weareappreach@appreach.app
              </a>
            </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer hideContactForm />
    </>
  );
}
