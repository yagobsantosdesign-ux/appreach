"use client";

import React, { useState } from "react";
import { useInView } from "@/hooks/useInView";
import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";

const cases = [
  {
    id: "beleza",
    number: "01",
    category: "Beleza",
    hookTitle: "Um app de beleza multiplicou o ROI em 3× com criativos orientados por performance",
    desafio: "Escalar usuários qualificados sem perder eficiência, mantendo crescimento sustentável e ROI positivo.",
    estrategia: [
      "Campanhas CPA otimizadas para qualidade",
      "Testes contínuos de criativos focados em performance",
      "Segmentação baseada em comportamento e potencial de conversão",
    ],
    porqueFuncionou: "Combinamos inteligência criativa e análise de dados para atrair usuários com maior potencial de retenção e receita — não apenas volume de installs.",
    metrics: [
      { value: "+222%", label: "installs" },
      { value: "+7%",   label: "conversões" },
      { value: "3×",    label: "aumento no ROI" },
    ],
    image: "/case-beleza.webp",
    mobileImage: "/case-beleza-mobile.webp",
  },
  {
    id: "food",
    number: "02",
    category: "Food",
    hookTitle: "Como um app de food aumentou os pedidos em 33% sem elevar o CAC",
    desafio: "Fazer os usuários migrarem os pedidos para o app — reduzindo dependência da loja física e mantendo o custo por conversão sob controle.",
    estrategia: [
      "Campanhas CPI otimizadas para conversão dentro do app",
      "Análise de eventos ao longo do funil de compra",
      "Otimização contínua de inventários e segmentações",
    ],
    porqueFuncionou: "Usamos dados de comportamento e intenção de compra para alcançar usuários mais propensos a finalizar pedidos no app — reduzindo desperdício de mídia e aumentando a receita.",
    metrics: [
      { value: "−25%",  label: "custo por conversão" },
      { value: "+33%",  label: "taxa de conversão" },
      { value: "+36%",  label: "receita via app" },
    ],
    image: "/case-food.webp",
    mobileImage: "/case-food-mobile.webp",
  },
  {
    id: "eletronicos",
    number: "03",
    category: "Eletrônicos",
    hookTitle: "Aquisição inteligente: o crescimento de um app de eletrônicos focado em primeira compra",
    desafio: "Atrair usuários com real intenção de compra — e não apenas gerar volume de instalações sem conversão.",
    estrategia: [
      "Campanhas CPA otimizadas para eventos de compra",
      "Segmentação baseada em comportamento e intenção de consumo",
      "Otimização contínua de inventários com foco em ROAS",
    ],
    porqueFuncionou: "Ao otimizar campanhas para eventos de compra, e não apenas installs, eliminamos tráfego de baixa qualidade e aumentamos a eficiência da aquisição.",
    metrics: [
      { value: "+88%",  label: "installs" },
      { value: "−51%",  label: "custo por instalação" },
      { value: "+23%",  label: "ROAS" },
    ],
    image: "/case-eletronicos.webp",
    mobileImage: "/case-eletronicos-mobile.webp",
  },
  {
    id: "fintech",
    number: "04",
    category: "Fintech",
    hookTitle: "38% mais contas abertas com retargeting orientado por intenção",
    desafio: "Escalar a abertura de contas e ativação de produtos financeiros mantendo eficiência no custo por aquisição.",
    estrategia: [
      "Campanhas CPA em inventários premium",
      "Retargeting focado em usuários com alta intenção de conversão",
      "Reengajamento baseado em comportamento dentro da jornada financeira",
    ],
    porqueFuncionou: "Combinamos prospecção qualificada com retargeting preciso para impactar usuários nos momentos mais decisivos da conversão.",
    metrics: [
      { value: "+38%",  label: "novas contas" },
      { value: "+22%",  label: "taxa de conversão" },
      { value: "−27%",  label: "custo por ação" },
    ],
    image: "/case-fintech.webp",
    mobileImage: "/case-fintech-mobile.webp",
  },
];

const LABEL: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  color: "var(--color-primary)",
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  marginBottom: "8px",
};

const BODY: React.CSSProperties = {
  fontSize: "16px",
  color: "var(--color-body)",
  lineHeight: "170%",
};

/* Subtle flat surface border,slightly more present than 4% for readability */
const SURFACE_BORDER = "1px solid var(--color-border)";

export default function Cases() {
  const [active, setActive] = useState(0);
  const c = cases[active];
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: cardRef,   visible: cardVisible   } = useInView();

  return (
    <section
      id="cases"
      className="cases-section"
      style={{ background: "white", padding: "80px 40px" }}
    >
      <style>{`
        @keyframes caseFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes imgFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* Tab bar */
        .cases-tabs {
          display: inline-flex;
          background: rgba(250,250,250,0.62);
          border: ${SURFACE_BORDER};
          border-radius: 14px;
          padding: 4px;
          gap: 2px;
          flex-shrink: 0;
        }
        .cases-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: background 0.15s;
        }
        .cases-tab:hover:not(.active) {
          background: rgba(0,0,0,0.03);
        }
        .cases-tab.active {
          background: #ffffff;
          /* Functional affordance shadow,shows which tab is selected */
          box-shadow: 0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06);
        }
        .cases-tab-num {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: #c0c0c0;
          letter-spacing: 0.4px;
          transition: color 0.15s;
        }
        .cases-tab.active .cases-tab-num { color: var(--color-primary); }
        .cases-tab-label {
          font-size: 13px;
          font-weight: 500;
          color: #9a9aa8;
          transition: color 0.15s;
        }
        .cases-tab.active .cases-tab-label { color: #251d49; font-weight: 600; }

        /* Card */
        .case-card {
          display: flex;
          align-items: stretch;
          gap: 40px;
          border-radius: 24px;
          padding: 53px;
          background: rgba(250,250,250,0.62);
          border: ${SURFACE_BORDER};
          animation: caseFadeIn 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .case-image-col {
          flex-shrink: 0;
          width: 316px;
          border-radius: 12px;
          overflow: hidden;
          background: white;
          animation: imgFadeIn 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .case-content-col {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .cases-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 32px;
        }
        .cases-metrics-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 32px;
        }

        @media (max-width: 768px) {
          .cases-tabs { display: flex; width: 100%; }
          .cases-tab { flex: 1; justify-content: center; padding: 8px 4px; }
          .cases-tab-num { display: none; }
          .cases-tab-label { font-size: 12px; }
          .case-card { flex-direction: column; padding: 24px 20px; gap: 24px; }
          .case-image-col { display: block; width: 100%; aspect-ratio: 16/9; height: auto; flex-shrink: 0; }
          .case-image-col img { width: 100%; height: 100%; object-fit: cover; object-position: center 15%; display: block; }
          .case-content-col { justify-content: flex-start; gap: 32px; }
          .cases-content-grid { grid-template-columns: 1fr; gap: 24px; }
          .cases-metrics-row { gap: 24px; }
        }
        @media (max-width: 480px) {
          .cases-metrics-row { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>

      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>

        {/* Header row */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal${headerVisible ? " visible" : ""}`}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "40px", marginBottom: "48px", flexWrap: "wrap" }}
        >
          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "499px" }}>
            <SectionBadge className="!mb-0">Cases</SectionBadge>

            <h2 style={{ color: "#251d49", fontSize: "48px" }}>
              Apps que escalaram com a Appreach.
            </h2>

            <p style={{ fontSize: "16px", color: "#6b6b7b", lineHeight: "165%" }}>
              De startups a grandes marcas,veja como transformamos investimento em mídia em crescimento mensurável.
            </p>

            <Button href="#contato" size="xl" variant="gradient" style={{ alignSelf: "flex-start" }}>
              Quero escalar meu app agora
            </Button>
          </div>

          {/* Tabs */}
          <div className="cases-tabs">
            {cases.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`cases-tab${active === i ? " active" : ""}`}
              >
                <span className="cases-tab-num">{item.number}</span>
                <span className="cases-tab-label">{item.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Case card */}
        <div
          ref={cardRef as React.RefObject<HTMLDivElement>}
          className={`reveal-scale${cardVisible ? " visible" : ""}`}
        >
          <div key={`card-${c.id}`} className="case-card">

            {/* Image */}
            <div key={`img-${c.id}`} className="case-image-col">
              {c.image && (
                <picture>
                  {c.mobileImage && (
                    <source media="(max-width: 768px)" srcSet={c.mobileImage} />
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={`Case ${c.category}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </picture>
              )}
            </div>

            {/* Content */}
            <div className="case-content-col">

              {/* Top: badge + title */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 600, color: "#6557ea", letterSpacing: "0.4px" }}>
                    {c.number}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: 500, color: "#3d3d4a", background: "rgba(101,87,234,0.06)", borderRadius: "99px", padding: "3px 10px" }}>
                    {c.category}
                  </span>
                </div>

                <p style={{ fontSize: "22px", fontWeight: 600, color: "var(--color-heading)", lineHeight: "140%", letterSpacing: "-0.5px", maxWidth: "520px", textWrap: "balance" }}>
                  {c.hookTitle}
                </p>
              </div>

              {/* Content columns */}
              <div className="cases-content-grid">
                <div>
                  <p style={LABEL}>Desafio</p>
                  <p style={BODY}>{c.desafio}</p>
                </div>
                <div>
                  <p style={LABEL}>Estratégia</p>
                  <ul style={{ ...BODY, listStyle: "none", padding: 0, margin: 0 }}>
                    {c.estrategia.map((item, i) => (
                      <li key={i} style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
                        <span style={{ color: "#6557ea", flexShrink: 0 }}>→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p style={LABEL}>Por que funcionou</p>
                  <p style={BODY}>{c.porqueFuncionou}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="cases-metrics-row">
                {c.metrics.map((m, i) => (
                  <div key={i}>
                    <p className="stats-value" style={{ color: "var(--color-heading)" }}>{m.value}</p>
                    <p style={{ fontSize: "13px", color: "var(--color-muted)", marginTop: "6px" }}>{m.label}</p>
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
