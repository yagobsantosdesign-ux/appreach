"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
              <span style={{ display: "inline-block", width: "20px", height: "1.5px", background: "#6557EA", flexShrink: 0 }} />
              <span style={{ fontSize: "11px", color: "#6557EA", letterSpacing: "1px", fontWeight: 600, fontFamily: "var(--font-geist-mono)", textTransform: "uppercase" }}>User Acquisition</span>
            </div>
            <div className="flex flex-col lg:flex-row" style={{ gap: "80px", alignItems: "center" }}>
              <div style={{ flex: "0 0 auto", maxWidth: "560px" }}>
                <h1 style={{ fontSize: "clamp(36px, 4.5vw, 58px)", color: "#251d49", letterSpacing: "-0.04em", lineHeight: "110%", textWrap: "balance" as never, marginBottom: "20px" }}>
                  Mais installs qualificados. Menor custo por aquisição.
                </h1>
                <p style={{ fontSize: "18px", color: "#40404f", lineHeight: 1.65, marginBottom: "32px", maxWidth: "480px" }}>
                  Campanhas de UA com segmentação de dados de 1ª parte, criativos otimizados e integrações nativas com todas as principais MMPs.
                </p>
                <div className="flex flex-wrap" style={{ gap: "12px" }}>
                  <a href="#contato" style={{ background: "#6557EA", color: "white", height: "50px", borderRadius: "12px", padding: "0 24px", fontSize: "16px", fontWeight: 600, letterSpacing: "-0.02em", textDecoration: "none", display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
                    Falar com especialista
                  </a>
                  <a href="#como-funciona" style={{ border: "1px solid rgba(37,29,73,0.12)", color: "#3d3d4a", height: "50px", borderRadius: "12px", padding: "0 24px", fontSize: "16px", fontWeight: 600, letterSpacing: "-0.02em", textDecoration: "none", display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
                    Como funciona
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex" style={{ flex: 1, alignItems: "center", justifyContent: "center", position: "relative", minHeight: "340px" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #EDE9FF 0%, #F5F3FF 100%)", borderRadius: "32px" }} />
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "14px", padding: "44px 48px", width: "100%" }}>
                  {[
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, value: "+340%", label: "crescimento médio de installs" },
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, value: "-42%", label: "CPI médio vs. benchmark de mercado" },
                    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, value: "8+", label: "plataformas e redes integradas" },
                  ].map(({ icon, value, label }, i) => (
                    <div key={i} style={{ background: "white", borderRadius: "16px", padding: "18px 22px", boxShadow: "0 4px 24px rgba(101,87,234,0.10)", display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg, #9B91FF 0%, #6557EA 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
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

        {/* ── Diferenciais — 2 colunas, sem badge ── */}
        <section style={{ background: "#ffffff", padding: "96px 40px" }}>
          <div className="flex flex-col lg:flex-row" style={{ maxWidth: "1350px", margin: "0 auto", gap: "80px", alignItems: "flex-start" }}>
            {/* Lado esquerdo — statement fixo */}
            <div style={{ flex: "0 0 auto", maxWidth: "360px" }}>
              <p style={{ fontSize: "13px", fontWeight: 700, color: "#9B91FF", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "20px" }}>Por que a Appreach?</p>
              <h2 style={{ fontSize: "clamp(30px, 3.5vw, 46px)", color: "#251d49", letterSpacing: "-0.04em", lineHeight: "112%", textWrap: "balance" as never }}>
                Mais do que installs — resultados que ficam.
              </h2>
              <p style={{ fontSize: "16px", color: "#6B6B7A", lineHeight: 1.7, marginTop: "20px" }}>
                Trabalhamos com dados de 1ª parte, criativos otimizados por evento in-app e integrações nativas com todas as MMPs do mercado.
              </p>
            </div>
            {/* Lado direito — 4 items em lista */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { n: "01", title: "Segmentação por intenção real", desc: "Lookalike audiences construídas sobre eventos de conversão — não apenas installs. Alcance quem tem perfil de pagar." },
                { n: "02", title: "Criativos guiados por dados", desc: "A/B em escala com análise por evento in-app. Nenhum criativo escala sem evidência de performance." },
                { n: "03", title: "Integração total com MMPs", desc: "AppsFlyer, Adjust, Branch, Singular, Firebase. Setup completo em até 48h, sem dependência do seu time de tech." },
                { n: "04", title: "Otimização por ML em tempo real", desc: "Bid strategies automáticas calibradas por CPI, ROAS e LTV — não por métricas de vaidade." },
              ].map(({ n, title, desc }, i, arr) => (
                <div key={n} style={{ display: "flex", gap: "24px", padding: "28px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(101,87,234,0.40)", fontFamily: "var(--font-geist-mono)", flexShrink: 0, paddingTop: "5px", minWidth: "20px" }}>{n}</span>
                  <div>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#251d49", letterSpacing: "-0.02em", marginBottom: "8px" }}>{title}</h3>
                    <p style={{ fontSize: "15px", color: "#6B6B7A", lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Como funciona — cards horizontais ── */}
        <section id="como-funciona" style={{ background: "#fafafa", padding: "96px 40px" }}>
          <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
            <div className="flex flex-col lg:flex-row" style={{ gap: "16px", alignItems: "stretch" }}>
              {/* Label lateral */}
              <div className="hidden lg:flex" style={{ flex: "0 0 auto", width: "200px", flexDirection: "column", justifyContent: "center" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#9B91FF", letterSpacing: "0.5px", textTransform: "uppercase", writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap" }}>
                  Do briefing ao go live
                </p>
              </div>
              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-5" style={{ flex: 1, gap: "12px" }}>
                {[
                  { n: "01", title: "Briefing", desc: "Entendemos seu app, funil e histórico de campanhas." },
                  { n: "02", title: "Setup", desc: "Contas, pixels e MMP configurados em até 48h." },
                  { n: "03", title: "Criativos", desc: "Primeiras peças e audiências montadas com dados de 1ª parte." },
                  { n: "04", title: "Go live", desc: "Campanhas no ar, monitoramento nas primeiras 72h." },
                  { n: "05", title: "Otimização", desc: "Ciclos semanais de ajuste, novos criativos e testes." },
                ].map(({ n, title, desc }) => (
                  <div key={n} style={{ background: "white", border: "1px solid rgba(0,0,0,0.07)", borderRadius: "16px", padding: "24px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#9B91FF", fontFamily: "var(--font-geist-mono)" }}>{n}</span>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#251d49", letterSpacing: "-0.02em" }}>{title}</h3>
                    <p style={{ fontSize: "13px", color: "#6B6B7A", lineHeight: 1.6 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Mid CTA ── */}
        <section style={{ background: "linear-gradient(145deg, #9B91FF 0%, #6557EA 100%)", padding: "80px 40px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", color: "white", letterSpacing: "-0.03em", lineHeight: "120%", marginBottom: "28px", textWrap: "balance" as never }}>
              Pronto para escalar seus installs?
            </h2>
            <a href="#contato" style={{ background: "white", color: "#6557EA", height: "52px", borderRadius: "13px", padding: "0 32px", fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
              Falar com especialista
            </a>
          </div>
        </section>

        {/* ── Plataformas — faixa minimalista ── */}
        <section style={{ background: "#ffffff", padding: "64px 40px", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
          <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", fontWeight: 600, color: "rgba(0,0,0,0.30)", letterSpacing: "1px", textTransform: "uppercase", textAlign: "center", marginBottom: "32px" }}>
              Plataformas certificadas
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", alignItems: "center" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                <div key={n} style={{ width: "72px", height: "72px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "center", padding: "14px", background: "#fafafa" }}>
                  <img src={`/platform-icon-${n}.webp`} alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "contain", opacity: 0.75 }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ — igual à home ── */}
        <section className="faq-section relative py-24 lg:py-32" style={{ background: "#ffffff", paddingLeft: "40px", paddingRight: "40px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ marginBottom: "48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={{ display: "inline-block", width: "20px", height: "1.5px", background: "rgba(37,29,73,0.25)", flexShrink: 0 }} />
                <span style={{ fontSize: "11px", color: "rgba(37,29,73,0.45)", letterSpacing: "1px", fontWeight: 600, fontFamily: "var(--font-geist-mono)", textTransform: "uppercase" }}>FAQ</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "#251d49", letterSpacing: "-0.03em", lineHeight: "115%", textWrap: "balance" as never }}>
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
