"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionBadge from "@/components/ui/SectionBadge";
import { useInView } from "@/hooks/useInView";

interface Strategy {
  title: string;
  desc: string;
  href: string;
}
interface Profile {
  id: string;
  name: string;
  /** Cor de destaque do perfil (texto/badge/bullets) — legível em 11px sobre branco. */
  accent: string;
  /** Versão clara da cor de destaque (fundos de card/chip). */
  accentLight: string;
  /** Ícone 3D do perfil (flutua à direita do desafio na seção detalhada). */
  image: { src: string; alt: string };
  question: string;
  pitch: string;
  challenge: string;
  opportunities?: string[];
  strategies: Strategy[];
  outcomes: string[];
  draft?: boolean;
}

const profiles: Profile[] = [
  {
    id: "builder",
    name: "The Builder",
    accent: "#6557EA",
    accentLight: "#F0EEFF",
    image: { src: "/gn-builder.webp", alt: "Ícone de funil ramificado representando construção de base de usuários" },
    question: "Como consigo mais usuários?",
    pitch:
      "Você está focado em gerar visibilidade, validar canais e construir uma base sólida para o crescimento do aplicativo.",
    challenge:
      "Seu principal desafio é gerar visibilidade, atrair usuários e encontrar os canais que realmente funcionam para o seu aplicativo",
    strategies: [
      { title: "User Acquisition", desc: "Campanhas focadas em gerar instalações de qualidade e acelerar a aquisição dos primeiros usuários.", href: "/useracquisition-app" },
      { title: "Apple Search Ads", desc: "Capture usuários com alta intenção no momento em que estão procurando soluções como a sua.", href: "/apple-search-ads" },
      { title: "ASO", desc: "Aumente sua visibilidade orgânica na App Store e Google Play e conquiste instalações sem depender apenas de mídia paga.", href: "/useracquisition-app#aso" },
    ],
    outcomes: [
      "Mais visibilidade para o seu app",
      "Crescimento consistente da base de usuários",
      "Canais de aquisição validados",
      "Base sólida para escalar resultados",
    ],
  },
  {
    id: "scaler",
    name: "The Scaler",
    accent: "#2E6FD6",
    accentLight: "#E7EFFB",
    image: { src: "/gn-scaler.webp", alt: "Ícone de escudo com alvo representando escala com eficiência" },
    question: "Como escalo sem perder eficiência?",
    pitch:
      "Você já encontrou um modelo que funciona e agora precisa aumentar volume mantendo qualidade e retorno.",
    challenge:
      "Você já validou seu modelo de aquisição e agora precisa escalar volume sem perder eficiência, mantendo a qualidade dos usuários e o retorno sobre o investimento",
    opportunities: [
      "Escalar volume de aquisição",
      "Manter o CAC sob controle",
      "Diversificar canais de crescimento",
      "Sustentar a qualidade dos usuários",
    ],
    strategies: [
      { title: "User Acquisition", desc: "Escale campanhas de performance mantendo eficiência de custo e qualidade de instalação.", href: "/useracquisition-app" },
      { title: "Mídia Programática", desc: "Compra de mídia em escala, multicanal e com dados de 1ª parte para ampliar alcance com precisão.", href: "/useracquisition-app#native-ads" },
      { title: "CTV", desc: "Construa awareness e amplie o topo de funil em telas premium para sustentar o crescimento.", href: "/ctv-connected-tv" },
    ],
    outcomes: [
      "Mais volume com eficiência",
      "Custos de aquisição sob controle",
      "Expansão de canais de crescimento",
      "Crescimento previsível e escalável",
    ],
  },
  {
    id: "optimizer",
    name: "The Optimizer",
    accent: "#0E8E78",
    accentLight: "#E0F3EE",
    image: { src: "/gn-optimizer.webp", alt: "Ícone de ampulheta representando retenção e tempo de uso" },
    question: "Como faço os usuários voltarem?",
    pitch:
      "Seu principal desafio é aumentar retenção, frequência de uso e engajamento da base existente.",
    challenge:
      "Muitos aplicativos investem em aquisição e esquecem que boa parte do crescimento vem da retenção. Seu foco é aumentar frequência de uso, reduzir abandono e manter usuários ativos por mais tempo",
    opportunities: [
      "Aumentar retenção",
      "Reduzir usuários inativos",
      "Melhorar frequência de uso",
      "Reforçar engajamento",
    ],
    strategies: [
      { title: "Retargeting", desc: "Reengaje usuários que instalaram o aplicativo mas reduziram sua atividade.", href: "/retargeting" },
      { title: "Push Ads", desc: "Impacte usuários com mensagens relevantes no momento certo para estimular novas sessões e ações.", href: "/useracquisition-app#push-ads" },
    ],
    outcomes: [
      "Mais usuários ativos e recorrentes",
      "Maior retenção ao longo do tempo",
      "Redução da inatividade e do abandono",
      "Mais valor gerado pela base existente",
    ],
  },
  {
    id: "revenue-driver",
    name: "The Revenue Driver",
    accent: "#C42E86",
    accentLight: "#FBE7F1",
    image: { src: "/gn-revenue.webp", alt: "Ícone de moeda com cifrão e seta de crescimento representando receita e LTV" },
    question: "Como gero mais receita com os usuários que já tenho?",
    pitch:
      "Você quer transformar crescimento em resultado financeiro, aumentando conversões, monetização e LTV.",
    challenge:
      "Seu desafio não é apenas gerar mais usuários, mas aumentar o valor que cada usuário gera para o negócio. Nesta fase, o foco está em monetização, reativação e crescimento do LTV",
    opportunities: [
      "Aumentar receita por usuário",
      "Melhorar LTV",
      "Recuperar usuários de alto valor",
      "Impulsionar conversões",
    ],
    strategies: [
      { title: "Retargeting", desc: "Reengaje usuários com maior potencial de compra ou conversão.", href: "/retargeting" },
      { title: "Push Ads", desc: "Ative usuários em momentos estratégicos para gerar novas ações e receitas.", href: "/useracquisition-app#push-ads" },
      { title: "Apple Search Ads", desc: "Proteja sua marca e capture usuários de alta intenção com maior potencial de conversão.", href: "/apple-search-ads" },
    ],
    outcomes: [
      "Mais receita por usuário",
      "Aumento do LTV",
      "Mais conversões e recorrência",
      "Crescimento sustentável da monetização",
    ],
  },
];

function scrollToId(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof window !== "undefined" && window.history) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckBullet({ children, color = "var(--color-primary)" }: { children: React.ReactNode; color?: string }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
      <span
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: color,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: "2px",
        }}
      >
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "160%" }}>{children}</span>
    </li>
  );
}

function ProfileCard({ profile }: { profile: Profile }) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal-scale${visible ? " visible" : ""}`}
      style={{
        background: "rgba(255,255,255,0.80)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.50)",
        borderRadius: "24px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        transition: "transform 0.25s ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
    >
      <span aria-hidden style={{ width: "30px", height: "3px", borderRadius: "2px", background: profile.accent }} />
      <span style={{ fontSize: "13px", fontWeight: 600, color: profile.accent, fontFamily: "var(--font-geist-mono)", letterSpacing: "0.5px", textTransform: "uppercase" }}>
        {profile.name}
      </span>
      <p style={{ fontSize: "22px", fontWeight: 600, color: "var(--color-heading)", letterSpacing: "-0.02em", lineHeight: "130%" }}>
        “{profile.question}”
      </p>
      <p style={{ fontSize: "15px", color: "var(--color-body)", lineHeight: "160%", flex: 1 }}>
        {profile.pitch}
      </p>
      <a
        href={`#${profile.id}`}
        onClick={scrollToId(profile.id)}
        style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: profile.accent, fontSize: "15px", fontWeight: 600, textDecoration: "none", marginTop: "4px" }}
      >
        Ver estratégia <ArrowIcon />
      </a>
    </div>
  );
}

function DetailSection({ profile, index, isLast }: { profile: Profile; index: number; isLast?: boolean }) {
  const bg = index % 2 === 0 ? "#ffffff" : "#fafafa";
  return (
    <section id={profile.id} className={isLast ? "gn-last-section" : undefined} style={{ background: bg, padding: "104px 0", scrollMarginTop: "90px" }}>
      <div className="product-container">
        {/* Cabeçalho do perfil — texto à esquerda, ícone 3D flutuando à direita */}
        <div className="gn-detail-header flex flex-col lg:flex-row" style={{ gap: "48px", alignItems: "center", marginBottom: "56px" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, maxWidth: "620px" }}>
            <SectionBadge color={profile.accent}>{profile.name}</SectionBadge>
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)", color: "var(--color-heading)", lineHeight: "125%", letterSpacing: "-0.02em", textWrap: "balance" as never }}>
              {profile.challenge}
            </h2>
          </div>
          <div className="gn-detail-media" style={{ flex: "1 1 0", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            {/* Glow radial na cor do perfil */}
            <span aria-hidden style={{ position: "absolute", width: "420px", height: "420px", maxWidth: "100%", background: `radial-gradient(ellipse, ${profile.accent}26 0%, transparent 66%)`, pointerEvents: "none", zIndex: 0 }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.image.src}
              alt={profile.image.alt}
              style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "280px", height: "auto", display: "block", filter: `drop-shadow(0 18px 28px ${profile.accent}40)` }}
            />
          </div>
        </div>

        <div className="gn-detail-grid flex flex-col lg:flex-row" style={{ gap: "64px", alignItems: "flex-start" }}>
          {/* Coluna esquerda: oportunidades (chips) + o que pode alcançar (card destacado) */}
          <div style={{ flex: "1 1 0", minWidth: 0, display: "flex", flexDirection: "column", gap: "36px" }}>
            {profile.opportunities && (
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--color-heading)", marginBottom: "20px" }}>Oportunidades para seu app</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {profile.opportunities.map((o) => (
                    <span
                      key={o}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "9px 16px",
                        borderRadius: "999px",
                        background: profile.accentLight,
                        border: "1px solid transparent",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "var(--color-heading)",
                      }}
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div style={{ background: profile.accentLight, borderRadius: "16px", padding: "32px 32px 34px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--color-heading)", marginBottom: "20px" }}>O que você pode alcançar</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {profile.outcomes.map((o) => (
                  <CheckBullet key={o} color={profile.accent}>{o}</CheckBullet>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna direita: estratégias recomendadas */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--color-heading)", marginBottom: "20px" }}>Estratégias recomendadas</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {profile.strategies.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  style={{
                    display: "block",
                    background: bg === "#ffffff" ? "#fafafa" : "#ffffff",
                    border: "1px solid var(--color-border)",
                    borderRadius: "16px",
                    padding: "24px 28px",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = profile.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.transform = "none"; }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "17px", fontWeight: 600, color: "var(--color-heading)", marginBottom: "6px" }}>
                    {s.title}
                    <span style={{ color: profile.accent }}><ArrowIcon /></span>
                  </span>
                  <p style={{ fontSize: "15px", color: "var(--color-body)", lineHeight: "160%" }}>{s.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "56px", paddingTop: "48px", borderTop: "1px solid var(--color-border)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
          <p style={{ fontSize: "18px", fontWeight: 600, color: "var(--color-heading)", letterSpacing: "-0.01em" }}>
            Esse é o seu momento?
          </p>
          <a
            href="https://appreach.vercel.app/growth-navigator"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: profile.accent,
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            Falar com um especialista <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function GrowthNavigatorPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section style={{ background: "#fafafa", paddingTop: "134px", paddingBottom: "80px", position: "relative", overflow: "hidden" }}>
          {/* Blobs radiais (roxo + azul) — mesmo tratamento da seção de Soluções */}
          <div aria-hidden style={{ position: "absolute", top: "70%", left: "50%", transform: "translate(-70%, -50%)", width: "760px", height: "760px", background: "radial-gradient(ellipse, rgba(130,100,255,0.20) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          <div aria-hidden style={{ position: "absolute", top: "70%", left: "50%", transform: "translate(-30%, -42%)", width: "640px", height: "640px", background: "radial-gradient(ellipse, rgba(80,140,255,0.16) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
          <div className="product-container" style={{ position: "relative", zIndex: 1 }}>
            <div className="gn-hero-top flex flex-col lg:flex-row" style={{ alignItems: "center", justifyContent: "space-between", gap: "48px", marginBottom: "64px" }}>
              <div className="product-hero-text" style={{ flex: "0 1 auto", maxWidth: "640px", minWidth: 0 }}>
                <SectionBadge>Growth Navigator</SectionBadge>
                <h1
                  style={{
                    fontSize: "clamp(36px, 5.5vw, var(--text-h1))",
                    color: "var(--color-heading)",
                    letterSpacing: "-0.04em",
                    lineHeight: "112%",
                    textWrap: "balance" as never,
                    maxWidth: "700px",
                    marginBottom: "20px",
                  }}
                >
                  Descubra a estratégia <br className="gn-title-br" />certa para o momento <br className="gn-title-br" />do seu app
                </h1>
                <p style={{ fontSize: "var(--text-hero-sub)", color: "var(--color-body)", lineHeight: "160%", maxWidth: "560px" }}>
                  Cada app está em uma fase diferente. Encontre o perfil que mais combina com o seu desafio atual e veja o caminho de crescimento recomendado.
                </p>
              </div>
              <div className="gn-hero-media" style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/growth-navigator-hero.webp"
                  alt="Bússola do Growth Navigator"
                  className="gn-float"
                  style={{ width: "100%", maxWidth: "380px", height: "auto", display: "block", filter: "drop-shadow(0 22px 30px rgba(101,87,234,0.28))" }}
                />
              </div>
            </div>

            {/* Cards de perfil */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {profiles.map((p) => (
                <ProfileCard key={p.id} profile={p} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Seções detalhadas por perfil ── */}
        {profiles.map((p, i) => (
          <DetailSection key={p.id} profile={p} index={i} isLast={i === profiles.length - 1} />
        ))}
      </main>
      <Footer />
    </>
  );
}
