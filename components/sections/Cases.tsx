"use client";

import React, { useState } from "react";
import { useInView } from "@/hooks/useInView";

const cases = [
  {
    id: "beleza",
    number: "01",
    category: "Beleza",
    hookTitle: "Como um app de beleza multiplicou o ROI em 3× com criativos certos",
    desafio: "Escalar usuários qualificados sem perder qualidade, mantendo ROI mínimo positivo.",
    estrategia: [
      "Campanhas CPI com histórico de alta qualidade",
      "Mix de criativos focados em performance",
    ],
    porqueFuncionou: "Unimos inteligência criativa a dados de LTV para instalar quem converte — não só quem clica.",
    metrics: [
      { value: "+222%", label: "installs" },
      { value: "+7%",   label: "conversões" },
      { value: "16×",   label: "ROI" },
    ],
    logo: "/ticker-logo-1.svg",
    logoW: 124,
    logoH: 22,
    image: "/case-beleza.png",
  },
  {
    id: "food",
    number: "02",
    category: "Food",
    hookTitle: "App de food escalou pedidos em 33% sem aumentar o CAC",
    desafio: "Aumentar pedidos feitos pelo app, não pela loja física, com custo por conversão controlado.",
    estrategia: [
      "Campanhas CPI com otimização de inventários",
      "Dados de eventos no funil do app",
    ],
    porqueFuncionou: "Segmentação por comportamento de compra reduziu desperdício de verba e elevou ROAS.",
    metrics: [
      { value: "−25%",  label: "custo por conversão" },
      { value: "+33%",  label: "taxa de conversão" },
      { value: "+36%",  label: "receita via app" },
    ],
    logo: "/ticker-logo-2.svg",
    logoW: 61,
    logoH: 25,
    image: "/case-food.png",
  },
  {
    id: "eletronicos",
    number: "03",
    category: "Eletrônicos",
    hookTitle: "Eletrônicos: 88% mais instalações com foco na primeira compra",
    desafio: "Adquirir usuários que realmente compram pelo app pela primeira vez, não apenas instalam.",
    estrategia: [
      "Campanhas CPA com otimização de inventários",
      "Foco em performance por evento de compra",
    ],
    porqueFuncionou: "Otimização por evento de compra, não por install, eliminou tráfego de baixa qualidade.",
    metrics: [
      { value: "+88%",  label: "installs" },
      { value: "−51%",  label: "custo por instalação" },
      { value: "+23%",  label: "ROAS" },
    ],
    logo: "/ticker-logo-3.svg",
    logoW: 77,
    logoH: 35,
    image: "/case-eletronicos.png",
  },
  {
    id: "fintech",
    number: "04",
    category: "Fintech",
    hookTitle: "Banco digital abriu 38% mais contas com retargeting preciso",
    desafio: "Escalar abertura de contas e ativação de produtos financeiros com custo por ação controlado.",
    estrategia: [
      "Campanhas CPA em inventários premium",
      "Retargeting para ativação de produtos financeiros",
    ],
    porqueFuncionou: "Combinamos prospecção de alta intenção com reengajamento cirúrgico em momentos de decisão.",
    metrics: [
      { value: "+38%",  label: "novas contas" },
      { value: "+22%",  label: "conversão" },
      { value: "−27%",  label: "custo por ação" },
    ],
    logo: "/ticker-logo-4.svg",
    logoW: 54,
    logoH: 21,
    image: "/case-fintech.png",
  },
];

const LABEL: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  color: "#6557ea",
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  marginBottom: "8px",
};

const BODY: React.CSSProperties = {
  fontSize: "16px",
  color: "#3d3d4a",
  lineHeight: "170%",
};

/* Subtle flat surface border — slightly more present than 4% for readability */
const SURFACE_BORDER = "1px solid rgba(0,0,0,0.06)";

export default function Cases() {
  const [active, setActive] = useState(0);
  const c = cases[active];
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: cardRef,   visible: cardVisible   } = useInView();

  return (
    <section
      id="cases"
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
          /* Functional affordance shadow — shows which tab is selected */
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
        .cases-tab.active .cases-tab-num { color: #6557ea; }
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
        .cases-metric-value {
          font-size: 48px;
          font-weight: 500;
          color: #251d49;
          line-height: 1;
          letter-spacing: -2px;
        }

        @media (max-width: 768px) {
          .cases-tabs { display: flex; width: 100%; }
          .cases-tab { flex: 1; justify-content: center; }
          .case-card { flex-direction: column; padding: 32px 24px; gap: 28px; }
          .case-image-col { display: none; }
          .cases-content-grid { grid-template-columns: 1fr; gap: 20px; }
          .cases-metric-value { font-size: 32px !important; letter-spacing: -1.5px !important; }
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
            <div style={{ display: "inline-flex", gap: "8px", alignItems: "center" }}>
              <div style={{ background: "#6557ea", height: "1.5px", width: "20px", flexShrink: 0 }} />
              <span style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                color: "#6557ea",
                fontSize: "11px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}>
                Cases
              </span>
            </div>

            <h2 style={{ color: "#251d49", fontSize: "48px" }}>
              Apps que escalaram com a Appreach.
            </h2>

            <p style={{ fontSize: "16px", color: "#6b6b7b", lineHeight: "165%" }}>
              De startups a grandes marcas — veja como transformamos investimento em mídia em crescimento mensurável.
            </p>

            <a
              href="#contato"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#6557ea",
                color: "white",
                height: "48px",
                borderRadius: "12px",
                padding: "0 20px",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                textDecoration: "none",
                whiteSpace: "nowrap",
                alignSelf: "flex-start",
              }}
            >
              Quero resultados como estes!
            </a>
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
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.image}
                  alt={`Case ${c.category}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              )}
            </div>

            {/* Content */}
            <div className="case-content-col">

              {/* Top: badge + title */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 600, color: "#6557ea", letterSpacing: "0.4px" }}>
                      {c.number}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: 500, color: "#3d3d4a", background: "rgba(101,87,234,0.06)", borderRadius: "99px", padding: "3px 10px" }}>
                      {c.category}
                    </span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.logo}
                    alt="Logo do cliente"
                    width={c.logoW}
                    height={c.logoH}
                    style={{ maxHeight: "20px", width: "auto", opacity: 0.4, objectFit: "contain" }}
                  />
                </div>

                <p style={{ fontSize: "22px", fontWeight: 500, color: "#251d49", lineHeight: "140%", letterSpacing: "-0.5px", maxWidth: "360px" }}>
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
                    <p className="cases-metric-value">{m.value}</p>
                    <p style={{ fontSize: "13px", color: "#909090", marginTop: "6px" }}>{m.label}</p>
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
