"use client";

import React from "react";
import { Layers, Compass, LineChart, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "50+", label: "Apps atendidos" },
  { value: "300+", label: "Campanhas lançadas" },
  { value: "R$500M+", label: "Em mídia gerenciada" },
  { value: "98%", label: "Satisfação dos clientes" },
];

const principles = [
  {
    icon: Layers,
    title: "Sem silos",
    desc: "Estratégia, mídia, dados e criação trabalham juntos para tomar decisões mais rápidas e eficientes.",
  },
  {
    icon: Compass,
    title: "Uma única visão de crescimento",
    desc: "Conectamos aquisição, engajamento e receita para construir estratégias mais eficientes e alinhadas aos objetivos do negócio.",
  },
  {
    icon: LineChart,
    title: "Dados que geram ação",
    desc: "Transformamos dados em decisões mais rápidas, otimizações contínuas e oportunidades reais de crescimento.",
  },
  {
    icon: Users,
    title: "Parceria próxima",
    desc: "Crescimento sustentável exige proximidade, transparência e capacidade de evoluir junto com cada cliente.",
  },
];

const PLACEHOLDER_BG: React.CSSProperties = {
  background: "var(--color-primary-light)",
  borderRadius: "20px",
  position: "relative",
  overflow: "hidden",
};

export default function QuemSomosPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        {/* ── Hero ── */}
        <section style={{ background: "#ffffff", paddingTop: "134px", paddingBottom: "64px" }}>
          <div className="product-container">
            <div style={{ maxWidth: "720px" }}>
              <SectionBadge>Quem somos</SectionBadge>
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
                Seu parceiro de crescimento para apps
              </h1>
              <p style={{ fontSize: "var(--text-hero-sub)", color: "var(--color-body)", lineHeight: "160%", maxWidth: "560px", marginBottom: "28px" }}>
                Transformamos aquisição, engajamento e receita em uma estratégia única para acelerar o crescimento do seu aplicativo.
              </p>
              <Button href="/growth-navigator" size="xl" variant="gradient">Diagnóstico gratuito</Button>
            </div>

            {/* Imagem destaque */}
            <Reveal variant="scale" delay="0.1s" style={{ marginTop: "48px" }}>
              <div style={{ ...PLACEHOLDER_BG, width: "100%", aspectRatio: "16 / 9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/about-meeting.webp" alt="Equipe da Appreach reunida no escritório" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Números (abaixo do hero, estilo home) ── */}
        <section style={{ background: "#ffffff", paddingBottom: "96px" }}>
          <div className="product-container">
            <Reveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "16px",
                }}
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: "#fafafa",
                      border: "1px solid var(--color-border)",
                      borderRadius: "24px",
                      padding: "32px 28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      minHeight: "150px",
                    }}
                  >
                    <p style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 600, color: "var(--color-heading)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                      {s.value}
                    </p>
                    <p style={{ fontSize: "15px", color: "var(--color-muted)", marginTop: "10px" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── O que acreditamos ── */}
        <section style={{ background: "#ffffff", paddingBottom: "96px" }}>
          <div className="product-container">
            <Reveal>
              <div className="about-vm-row flex flex-col lg:flex-row" style={{ gap: "64px", alignItems: "stretch" }}>
                <div className="about-vm-media" style={{ flex: 1, minHeight: "440px", borderRadius: "20px", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/pins1-appreach.webp" alt="Cordão e botons de evento da Appreach" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
                  <SectionBadge>No que acreditamos</SectionBadge>
                  <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--color-heading)", lineHeight: "120%", letterSpacing: "-0.02em", textWrap: "balance" as never }}>
                    Apps não crescem com mais mídia. Crescem com estratégia, dados e execução consistente
                  </h2>
                  <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "170%", maxWidth: "480px" }}>
                    Por isso conectamos aquisição, retenção e monetização em uma única operação orientada por resultados. Nosso foco não é gerar métricas de vaidade, mas transformar crescimento em resultado de negócio.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Como trabalhamos (princípios) ── */}
        <section className="about-team-section" style={{ background: "#fafafa" }}>
          <div className="product-container">
            <Reveal>
              <div style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 56px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <SectionBadge>Time</SectionBadge>
                </div>
                <h2 style={{ fontSize: "48px", color: "var(--color-heading)", lineHeight: "120%", marginBottom: "16px", textWrap: "balance" as never, maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
                  Crescimento sem silos
                </h2>
                <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "160%" }}>
                  Acreditamos que o crescimento sustentável de um aplicativo acontece quando diferentes perspectivas trabalham em conjunto.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
                {principles.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      style={{
                        background: "#ffffff",
                        border: "1px solid var(--color-border)",
                        borderRadius: "20px",
                        padding: "32px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                      }}
                    >
                      <span
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                          background: "var(--color-primary-light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={22} color="var(--color-primary)" strokeWidth={2} />
                      </span>
                      <h3 style={{ fontSize: "20px", fontWeight: 600, color: "var(--color-heading)", letterSpacing: "-0.02em", lineHeight: "130%" }}>
                        {p.title}
                      </h3>
                      <p style={{ fontSize: "15px", color: "var(--color-body)", lineHeight: "160%" }}>
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </Reveal>
          </div>
        </section>

        {/* ── Fechamento ── */}
        <section style={{ background: "#ffffff", padding: "96px 40px" }}>
          <div style={{ maxWidth: "1350px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "var(--color-heading)", letterSpacing: "-0.03em", lineHeight: "115%", maxWidth: "600px", textWrap: "balance" as never }}>
              Pronto para acelerar o crescimento do seu app?
            </h2>
            <p style={{ fontSize: "18px", color: "var(--color-body)", lineHeight: "160%", maxWidth: "480px" }}>
              Conte sobre o seu app e deixe a Appreach construir a estratégia certa para o seu momento.
            </p>
            <Button href="/growth-navigator" size="xl" variant="gradient">Diagnóstico gratuito</Button>
          </div>
        </section>

      </main>
      <Footer hideContactForm />
    </>
  );
}
