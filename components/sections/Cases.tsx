"use client";

import React, { useState } from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";
import { useInView } from "@/hooks/useInView";

const DURATION = 5000;

type CaseMetric = { value: string; label: string };

const cases: {
  id: string;
  number: string;
  category: string;
  hookTitle: string;
  desafio: string;
  estrategia: string[];
  porqueFuncionou: string;
  metrics: CaseMetric[];
  logo: string;
  logoW: number;
  logoH: number;
  gradient: string;
  image?: string;
  overlay?: boolean;
}[] = [
  {
    id: "roi",
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
    gradient: "linear-gradient(200deg, #9B91FF 0%, #6557EA 55%, #3D28A8 100%)",
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
    gradient: "linear-gradient(160deg, #9B91FF 0%, #6557EA 55%, #3D28A8 100%)",
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
    gradient: "linear-gradient(220deg, #9B91FF 0%, #6557EA 50%, #3D28A8 100%)",
    image: "/case-eletronicos.png",
  },
  {
    id: "banco",
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
    gradient: "linear-gradient(180deg, #6557EA 0%, #3D28A8 55%, #1E1640 100%)",
    image: "/case-fintech.png",
    overlay: true,
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
  color: "#3D3D4A",
  lineHeight: 1.7,
  textWrap: "pretty" as never,
};

export default function Cases() {
  const [active, setActive] = useState(0);
  const c = cases[active];
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: cardRef, visible: cardVisible } = useInView();

  return (
    <section
      id="cases"
      className="pb-24 lg:pb-32 pt-0 lg:pt-8"
      style={{ background: "transparent", position: "relative", overflow: "visible" }}
    >
      <style>{`
        @keyframes tabFill {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes caseFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes imgFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* ── Tabs ── */
        .cases-tabs {
          display: inline-flex;
          background: rgba(255,255,255,0.28);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.50);
          border-radius: 14px;
          padding: 4px;
          gap: 2px;
        }
        .cases-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          background: rgba(255,255,255,0.18);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.40);
          cursor: pointer;
          overflow: hidden;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .cases-tab:hover:not(.active) {
          background: rgba(255,255,255,0.55);
        }
        .cases-tab.active {
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06);
        }
        .cases-tab-num {
          font-family: var(--font-geist-mono);
          font-size: 11px;
          font-weight: 600;
          color: #C0C0C0;
          letter-spacing: 0.4px;
          transition: color 0.2s;
        }
        .cases-tab.active .cases-tab-num { color: #6557ea; }
        .cases-tab-label {
          font-size: 13px;
          font-weight: 500;
          color: #9A9AA8;
          transition: color 0.2s;
        }
        .cases-tab.active .cases-tab-label { color: #141414; font-weight: 600; }

        /* ── Card ── */
        .case-card {
          display: flex;
          align-items: stretch;
          gap: 40px;
          border-radius: 20px;
          padding: 52px 52px;
          background: rgba(255,255,255,0.62);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 2px 1px rgba(0,0,0,0.02), 0 8px 32px rgba(101,87,234,0.05);
          min-height: 637px;
          animation: caseFadeIn 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .case-image-col {
          flex-shrink: 0;
          width: 220px;
          align-self: stretch;
          border-radius: 12px;
          animation: imgFadeIn 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .case-content-col { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: space-between; }

        /* ── Content grid (no dividers) ── */
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
          color: #141414;
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

      {/* Background gradient blobs — visíveis através do card semitransparente */}
      <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "visible", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-40%, -55%)", width: "1600px", height: "1600px", background: "radial-gradient(ellipse, rgba(155,145,255,0.20) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-15%, -45%)", width: "1400px", height: "1400px", background: "radial-gradient(ellipse, rgba(196,181,253,0.14) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: "0%", left: "0%", transform: "translate(-20%, 25%)", width: "1000px", height: "1000px", background: "radial-gradient(ellipse, rgba(155,145,255,0.12) 0%, transparent 60%)" }} />
      </div>

      <div className="max-w-[1300px] mx-auto px-4 lg:px-16" style={{ position: "relative", zIndex: 1 }}>

        {/* Header row: headline esquerda, tabs direita */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`flex items-end justify-between gap-10 mb-16 flex-wrap reveal${headerVisible ? " visible" : ""}`}
        >
          <div>
            <SectionBadge>Cases</SectionBadge>
            <h2
              className="font-medium leading-tight"
              style={{
                fontSize: "clamp(28px, 6.5vw, 48px)",
                letterSpacing: "-1.4px",
                color: "#141414",
                marginTop: "12px",
                maxWidth: "560px",
                textWrap: "balance" as never,
              }}
            >
              Resultados reais. Apps que escalaram com a Appreach.
            </h2>
            <p style={{ fontSize: "16px", color: "#6B6B7B", lineHeight: 1.65, marginTop: "14px", maxWidth: "440px" }}>
              De startups a grandes marcas — veja como transformamos investimento em mídia em crescimento mensurável.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Button href="mailto:fale@appreach.com.br" variant="gradient" size="sm">
                Quero resultados assim
              </Button>
            </div>
          </div>

          <div className="cases-tabs" style={{ flexShrink: 0 }}>
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

        {/* Card wrapper */}
        <div ref={cardRef as React.RefObject<HTMLDivElement>} className={`reveal-scale${cardVisible ? " visible" : ""}`} style={{ position: "relative" }}>
          <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "visible", pointerEvents: "none", zIndex: 0 }}>
            <div style={{ position: "absolute", top: "-80px", right: "-100px", width: "560px", height: "560px", background: "radial-gradient(ellipse, rgba(196,181,253,0.20) 0%, transparent 65%)" }} />
            <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "480px", height: "480px", background: "radial-gradient(ellipse, rgba(165,180,252,0.14) 0%, transparent 65%)" }} />
          </div>
          <div key={`card-${c.id}`} className="case-card" style={{ position: "relative", zIndex: 1 }}>

          {/* Image */}
          <div key={`img-${c.id}`} className="case-image-col" style={{ background: "#ffffff", overflow: "hidden", position: "relative" }}>
            {c.image && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={`Case ${c.category}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </>
            )}
          </div>

          {/* Content */}
          <div className="case-content-col">

            {/* Grupo topo: header + título com gap interno pequeno */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontFamily: "var(--font-geist-mono)", fontSize: "12px", fontWeight: 600, color: "#6557ea", letterSpacing: "0.4px" }}>
                    {c.number}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: 500, color: "#3D3D4A", background: "rgba(101,87,234,0.06)", borderRadius: "99px", padding: "3px 10px" }}>
                    {c.category}
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo} alt="Logo do cliente" width={c.logoW} height={c.logoH}
                  style={{ maxHeight: "20px", width: "auto", opacity: 0.4, objectFit: "contain" }} />
              </div>

              <p
                className="font-medium"
                style={{
                  fontSize: "22px", color: "#141414", lineHeight: 1.35,
                  letterSpacing: "-0.5px", maxWidth: "520px",
                  textWrap: "balance" as never,
                }}
              >
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
        </div>{/* end card wrapper */}

      </div>
    </section>
  );
}
