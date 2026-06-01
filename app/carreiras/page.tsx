"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { INPUT, LABEL } from "@/components/ui/formStyles";

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
  const [area, setArea] = useState("");

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
                  Cresça com quem cresce o marketing de apps
                </h1>
                <p style={{ fontSize: "var(--text-hero-sub)", color: "var(--color-body)", lineHeight: "160%", maxWidth: "480px", marginBottom: "28px" }}>
                  Na Appreach você trabalha com dados de verdade, autonomia e um time que aprende rápido. Não temos uma vaga aberta agora? Tudo bem: nosso banco de talentos está sempre aberto.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Button href="#banco-talentos" size="xl" variant="gradient">Entrar no banco de talentos</Button>
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
                Onde você pode crescer com a gente
              </h2>
              <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "160%" }}>
                Mesmo sem uma vaga publicada, mantemos as portas abertas em todas as áreas. Encontrou a sua? Entre no banco de talentos e a gente chama quando a vaga certa surgir.
              </p>
            </div>

            <div className="careers-areas-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {areas.map((a) => (
                <a
                  key={a.name}
                  href="#banco-talentos"
                  className="careers-area-card"
                  style={{
                    background: "rgba(255,255,255,0.80)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.50)",
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

        {/* ── Banco de talentos — formulário ── */}
        <section id="banco-talentos" style={{ background: "#ffffff", padding: "96px 0", scrollMarginTop: "100px" }}>
          <div className="product-container">
            <Reveal>
            <div
              className="careers-form-row flex flex-col lg:flex-row"
              style={{
                background: "linear-gradient(145deg, #9B91FF 0%, #6557EA 100%)",
                borderRadius: "32px",
                padding: "64px 72px",
                gap: "80px",
                alignItems: "stretch",
                boxShadow: "0 8px 40px rgba(101,87,234,0.30)",
              }}
            >
              {/* Left — copy */}
              <div style={{ flex: "0 0 auto", maxWidth: "380px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div className="inline-flex items-center mb-4" style={{ gap: "8px" }}>
                    <span style={{ display: "inline-block", width: "20px", height: "1.5px", background: "rgba(255,255,255,0.6)", flexShrink: 0 }} />
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", letterSpacing: "1px", fontWeight: 600, fontFamily: "var(--font-geist-mono)", textTransform: "uppercase" }}>
                      Banco de talentos
                    </span>
                  </div>
                  <h2 style={{ fontSize: "clamp(24px, 6vw, 40px)", letterSpacing: "-0.02em", lineHeight: "120%", color: "white", textWrap: "balance" as never }}>
                    Deixe seu currículo com a gente
                  </h2>
                  <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.70)", lineHeight: 1.65, marginTop: "16px" }}>
                    Conte um pouco sobre você e a área em que quer atuar. Guardamos seu perfil e chamamos assim que surgir uma vaga com a sua cara.
                  </p>
                </div>

                <div style={{ paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 600, letterSpacing: "-0.1px" }}>
                      Sempre aberto
                    </span>
                  </div>
                  <a
                    href="mailto:fale@appreach.com.br"
                    style={{ color: "rgba(255,255,255,0.60)", fontSize: "14px", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.60)")}
                  >
                    fale@appreach.com.br
                  </a>
                </div>
              </div>

              {/* Right — form */}
              <div className="careers-form-card" style={{ flex: 1, background: "white", borderRadius: "20px", padding: "40px", boxShadow: "0 4px 32px rgba(0,0,0,0.10)" }}>
                <form name="carreiras" method="POST" data-netlify="true" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <input type="hidden" name="form-name" value="carreiras" />
                  <div className="careers-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={LABEL}>Nome</label>
                      <input name="nome" type="text" placeholder="Seu nome" required style={INPUT}
                        onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")} />
                    </div>
                    <div>
                      <label style={LABEL}>E-mail</label>
                      <input name="email" type="email" placeholder="seu@email.com" required style={INPUT}
                        onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")} />
                    </div>
                  </div>
                  <div>
                    <label style={LABEL}>LinkedIn ou portfólio</label>
                    <input name="linkedin" type="url" placeholder="https://linkedin.com/in/..." required style={INPUT}
                      onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")} />
                  </div>
                  <div>
                    <label style={LABEL}>Área de interesse</label>
                    <div style={{ position: "relative" }}>
                      <select name="area" required value={area}
                        style={{ ...INPUT, color: area ? "#141414" : "#9A9AA8", cursor: "pointer", paddingRight: "40px", appearance: "none", WebkitAppearance: "none" }}
                        onChange={e => setArea(e.target.value)}
                        onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")}
                      >
                        <option value="" disabled>Selecione uma área</option>
                        {areas.map((a) => (
                          <option key={a.name} value={a.name} style={{ color: "#141414" }}>{a.name}</option>
                        ))}
                        <option value="Outro" style={{ color: "#141414" }}>Outro</option>
                      </select>
                      <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none"
                        style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "rgba(0,0,0,0.4)" }}>
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {/* Campo livre — sempre no DOM (para o Netlify detectar), visível só quando "Outro" */}
                    <div style={{ display: area === "Outro" ? "block" : "none", marginTop: "16px" }}>
                      <label style={LABEL}>Qual área?</label>
                      <input name="area_outro" type="text" placeholder="Conte em qual área você quer atuar" required={area === "Outro"} style={INPUT}
                        onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                        onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")} />
                    </div>
                  </div>
                  <div>
                    <label style={LABEL}>Mensagem <span style={{ fontWeight: 400, color: "#9A9AA8" }}>(opcional)</span></label>
                    <textarea name="mensagem" rows={4} placeholder="Conte um pouco sobre você e o que procura"
                      style={{ ...INPUT, resize: "vertical", minHeight: "104px", fontFamily: "inherit" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                      onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")} />
                  </div>
                  <button type="submit" style={{
                    width: "100%", background: "linear-gradient(145deg, #9B91FF 0%, #6557EA 100%)",
                    color: "white", border: "none", borderRadius: "12px", padding: "15px 24px",
                    fontSize: "15px", fontWeight: 600, cursor: "pointer", display: "flex",
                    alignItems: "center", justifyContent: "center", gap: "8px", letterSpacing: "-0.2px",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >
                    Entrar no banco de talentos
                  </button>
                </form>
              </div>
            </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer hideContactForm />
    </>
  );
}
