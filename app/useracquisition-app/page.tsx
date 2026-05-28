"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BENEFITS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "Segmentação precisa",
    desc: "Dados de 1ª parte + lookalike audiences de alta intenção. Alcance quem vai converter, não apenas instalar.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Criativos com performance",
    desc: "Testes A/B em escala e análise de criativos por evento in-app — não por clique.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: "Integração total com MMPs",
    desc: "Operamos com AppsFlyer, Adjust, Branch, Singular e Firebase. Setup sem atrito, dados confiáveis.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Otimização por ML",
    desc: "Bid strategies automáticas otimizadas por eventos in-app — CPI, ROAS e LTV como norte.",
  },
];

const STEPS = [
  { n: "01", title: "Briefing e diagnóstico", desc: "Entendemos seu app, funil, MMP e histórico de campanhas para definir a estratégia certa para o seu momento." },
  { n: "02", title: "Setup de conta e tracking", desc: "Configuramos contas, pixels e integrações com sua MMP. Do zero ao go live em até 48h." },
  { n: "03", title: "Criativos e segmentação", desc: "Desenvolvemos os primeiros criativos e montamos audiências iniciais com dados de 1ª parte." },
  { n: "04", title: "Go live", desc: "Campanhas no ar. Monitoramento ativo nas primeiras 72h para ajustes rápidos antes de escalar." },
  { n: "05", title: "Otimização contínua", desc: "Relatórios semanais, ajuste de bids, novos criativos e testes de audiência em ciclos curtos." },
];

const FAQS = [
  {
    q: "Quanto tempo para ver os primeiros resultados?",
    a: "Os primeiros dados aparecem em 48–72h após o go live. O ciclo completo de otimização leva cerca de 2 semanas para estabilizar.",
  },
  {
    q: "Preciso ter MMP para começar?",
    a: "Sim, MMP (AppsFlyer, Adjust, Branch, Singular ou Firebase) é pré-requisito para mensuração confiável. Podemos apoiar na configuração se precisar.",
  },
  {
    q: "Trabalham com apps de qual vertical?",
    a: "Fintech, e-commerce, food, beleza, saúde, entretenimento e mais. Temos cases em todas as principais verticais mobile.",
  },
  {
    q: "Qual o investimento mínimo recomendado?",
    a: "Trabalhamos a partir de R$ 30k/mês em verba de mídia para campanhas com ciclo de otimização consistente.",
  },
];

const BADGE: React.CSSProperties = {
  display: "inline-block",
  width: "20px",
  height: "1.5px",
  background: "#6557EA",
  flexShrink: 0,
};

const BADGE_TEXT: React.CSSProperties = {
  fontSize: "11px",
  color: "#6557EA",
  letterSpacing: "1px",
  fontWeight: 600,
  fontFamily: "var(--font-geist-mono)",
  textTransform: "uppercase",
};

export default function UAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        {/* ── Hero ── */}
        <section style={{ background: "#fafafa", paddingTop: "134px", paddingBottom: "80px", paddingLeft: "40px", paddingRight: "40px", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "100%", background: "radial-gradient(ellipse 80% 80% at 85% 15%, rgba(101,87,234,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
            {/* Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
              <span style={BADGE} />
              <span style={BADGE_TEXT}>User Acquisition</span>
            </div>

            <div className="flex flex-col lg:flex-row" style={{ gap: "80px", alignItems: "center" }}>
              {/* Left — copy */}
              <div style={{ flex: "0 0 auto", maxWidth: "560px" }}>
                <h1 style={{ fontSize: "clamp(36px, 4.5vw, 58px)", color: "#251d49", letterSpacing: "-0.04em", lineHeight: "110%", textWrap: "balance" as never, marginBottom: "20px" }}>
                  Mais installs qualificados. Menor custo por aquisição.
                </h1>
                <p style={{ fontSize: "18px", color: "#40404f", lineHeight: 1.65, marginBottom: "32px", maxWidth: "480px" }}>
                  Campanhas de UA com segmentação de dados de 1ª parte, criativos otimizados e integrações nativas com todas as principais MMPs.
                </p>
                <div className="flex flex-wrap" style={{ gap: "12px" }}>
                  <a
                    href="#contato"
                    style={{ background: "#6557EA", color: "white", height: "50px", borderRadius: "12px", padding: "0 24px", fontSize: "16px", fontWeight: 600, letterSpacing: "-0.02em", textDecoration: "none", display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}
                  >
                    Falar com especialista
                  </a>
                  <a
                    href="#como-funciona"
                    style={{ border: "1px solid rgba(37,29,73,0.12)", color: "#3d3d4a", height: "50px", borderRadius: "12px", padding: "0 24px", fontSize: "16px", fontWeight: 600, letterSpacing: "-0.02em", textDecoration: "none", display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}
                  >
                    Como funciona
                  </a>
                </div>
              </div>

              {/* Right — metrics cards */}
              <div className="hidden lg:flex" style={{ flex: 1, alignItems: "center", justifyContent: "center", position: "relative", minHeight: "340px" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #EDE9FF 0%, #F5F3FF 100%)", borderRadius: "32px" }} />
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "14px", padding: "44px 48px", width: "100%" }}>
                  {[
                    { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, value: "+340%", label: "crescimento médio de installs" },
                    { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, value: "-42%", label: "CPI médio vs. benchmark de mercado" },
                    { svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, value: "8+", label: "plataformas e redes integradas" },
                  ].map(({ svg, value, label }, i) => (
                    <div key={i} style={{ background: "white", borderRadius: "16px", padding: "18px 22px", boxShadow: "0 4px 24px rgba(101,87,234,0.10)", display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg, #9B91FF 0%, #6557EA 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {svg}
                      </div>
                      <div>
                        <div style={{ fontSize: "22px", fontWeight: 700, color: "#251d49", letterSpacing: "-0.04em", lineHeight: 1 }}>{value}</div>
                        <div style={{ fontSize: "12px", color: "#909090", marginTop: "3px" }}>{label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section style={{ background: "#0F0B1E", padding: "44px 40px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ maxWidth: "1350px", margin: "0 auto", gap: "32px" }}>
            {[
              { n: "+300", label: "campanhas ativas" },
              { n: "8+", label: "plataformas integradas" },
              { n: "+40%", label: "ROAS acima do benchmark" },
            ].map(({ n, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "42px", fontWeight: 700, color: "white", letterSpacing: "-0.05em", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", marginTop: "8px" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benefícios ── */}
        <section style={{ background: "#ffffff", padding: "96px 40px" }}>
          <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={BADGE} /><span style={BADGE_TEXT}>Diferenciais</span>
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "#251d49", letterSpacing: "-0.03em", lineHeight: "115%", maxWidth: "480px", textWrap: "balance" as never }}>
                Por que a UA da Appreach converte mais?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "20px" }}>
              {BENEFITS.map(({ icon, title, desc }) => (
                <div key={title} style={{ border: "1px solid rgba(0,0,0,0.07)", borderRadius: "20px", padding: "32px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg, #9B91FF 0%, #6557EA 100%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    {icon}
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#251d49", letterSpacing: "-0.02em", marginBottom: "10px" }}>{title}</h3>
                  <p style={{ fontSize: "15px", color: "#6B6B7A", lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Como funciona ── */}
        <section id="como-funciona" style={{ background: "#fafafa", padding: "96px 40px" }}>
          <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={BADGE} /><span style={BADGE_TEXT}>Processo</span>
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "#251d49", letterSpacing: "-0.03em", lineHeight: "115%", textWrap: "balance" as never }}>
                Do briefing ao resultado em dias.
              </h2>
            </div>
            <div style={{ maxWidth: "720px" }}>
              {STEPS.map(({ n, title, desc }, i) => (
                <div key={n} style={{ display: "flex", gap: "28px", alignItems: "flex-start", padding: "28px 0", borderBottom: i < STEPS.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#9B91FF", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.5px", flexShrink: 0, paddingTop: "4px", minWidth: "24px" }}>{n}</span>
                  <div>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#251d49", letterSpacing: "-0.02em", marginBottom: "7px" }}>{title}</h3>
                    <p style={{ fontSize: "15px", color: "#6B6B7A", lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mid CTA ── */}
        <section style={{ background: "linear-gradient(145deg, #9B91FF 0%, #6557EA 100%)", padding: "80px 40px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", color: "white", letterSpacing: "-0.03em", lineHeight: "120%", marginBottom: "28px", textWrap: "balance" as never }}>
              Pronto para escalar seus installs?
            </h2>
            <a
              href="#contato"
              style={{ background: "white", color: "#6557EA", height: "52px", borderRadius: "13px", padding: "0 32px", fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em", textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              Falar com especialista
            </a>
          </div>
        </section>

        {/* ── Plataformas ── */}
        <section style={{ background: "#ffffff", padding: "96px 40px" }}>
          <div style={{ maxWidth: "1350px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "16px" }}>
              <span style={BADGE} /><span style={BADGE_TEXT}>Canais e plataformas</span><span style={BADGE} />
            </div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", color: "#251d49", letterSpacing: "-0.03em", lineHeight: "115%", marginBottom: "48px" }}>
              Operamos onde o usuário está
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                <div key={n} style={{ width: "84px", height: "84px", borderRadius: "18px", border: "1px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", background: "#fafafa" }}>
                  <img src={`/platform-icon-${n}.webp`} alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: "#fafafa", padding: "96px 40px 180px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ marginBottom: "48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={BADGE} /><span style={BADGE_TEXT}>FAQ</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "#251d49", letterSpacing: "-0.03em", lineHeight: "115%" }}>
                Perguntas frequentes
              </h2>
            </div>
            <div>
              {FAQS.map(({ q, a }, i) => (
                <div key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", background: "none", border: "none", padding: "24px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", textAlign: "left" }}
                  >
                    <span style={{ fontSize: "17px", fontWeight: 600, color: "#251d49", letterSpacing: "-0.02em" }}>{q}</span>
                    <span style={{ fontSize: "22px", color: "#9B91FF", flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s", display: "inline-block", lineHeight: 1 }}>+</span>
                  </button>
                  {openFaq === i && (
                    <p style={{ fontSize: "15px", color: "#6B6B7A", lineHeight: 1.7, paddingBottom: "24px", paddingRight: "32px" }}>{a}</p>
                  )}
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }} />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
