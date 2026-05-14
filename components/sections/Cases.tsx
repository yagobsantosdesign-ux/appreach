"use client";

import { useState } from "react";
import { ShoppingBag, Truck, Gamepad2, ChevronRight } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";

const cases = [
  {
    id: "beautybox",
    Icon: ShoppingBag,
    label: "BeautyBox",
    category: "eCommerce · Beleza",
    headline: "Como a BeautyBox triplicou o ROI com aquisição focada em LTV",
    description:
      "Escala de installs qualificados com otimização por eventos de receita, criativos iterativos e segmentação lookalike dos usuários de maior LTV.",
    metrics: [
      { value: "3×",    label: "Multiplicação do ROI" },
      { value: "+340%", label: "Crescimento em installs" },
      { value: "−42%",  label: "Redução de CPI" },
    ],
    accent:   "#C0167A",
    accentBg: "#FFF0F6",
    panelBg:  "linear-gradient(145deg, #FFF5F9 0%, #FFE8F2 100%)",
    mockupStats: [
      { label: "ROAS",         value: "3.2×",  pos: "top-10 left-8" },
      { label: "Install rate", value: "+340%", pos: "top-1/3 right-8" },
      { label: "CPI",          value: "−42%",  pos: "bottom-10 left-1/4" },
    ],
  },
  {
    id: "zapgo",
    Icon: Truck,
    label: "ZapGo",
    category: "Food & Delivery · Push",
    headline: "ZapGo aumentou retenção D30 em 85% com mensagens comportamentais",
    description:
      "Sequência de push + in-app ativada por gatilhos de comportamento e geolocalização, reengajando usuários inativos no momento certo.",
    metrics: [
      { value: "+85%",  label: "Retenção D30" },
      { value: "+3.1×", label: "Pedidos/usuário" },
      { value: "+67%",  label: "Receita/usuário" },
    ],
    accent:   "#C2410C",
    accentBg: "#FFF7ED",
    panelBg:  "linear-gradient(145deg, #FFF8F0 0%, #FFE9D0 100%)",
    mockupStats: [
      { label: "D30 retention", value: "+85%",  pos: "top-10 left-8" },
      { label: "Orders/user",   value: "+3.1×", pos: "top-1/3 right-8" },
      { label: "Revenue",       value: "+67%",  pos: "bottom-10 left-1/4" },
    ],
  },
  {
    id: "gameon",
    Icon: Gamepad2,
    label: "GameOn",
    category: "Games · CTV + UA",
    headline: "GameOn somou 520k usuários com estratégia CTV + programática",
    description:
      "Campanha multicanal com brand awareness via CTV e conversão via mídia programática, escalando aquisição qualificada em múltiplos mercados.",
    metrics: [
      { value: "+520k", label: "Novos usuários" },
      { value: "8.4",   label: "IPM de criativos" },
      { value: "2.9×",  label: "ROAS da campanha" },
    ],
    accent:   "#6D28D9",
    accentBg: "#F5F3FF",
    panelBg:  "linear-gradient(145deg, #F8F6FF 0%, #EDE9FF 100%)",
    mockupStats: [
      { label: "New users", value: "+520k", pos: "top-10 left-8" },
      { label: "IPM",       value: "8.4",   pos: "top-1/3 right-8" },
      { label: "ROAS",      value: "2.9×",  pos: "bottom-10 left-1/4" },
    ],
  },
];

export default function Cases() {
  const [active, setActive] = useState(0);
  const c = cases[active];
  const CaseIcon = c.Icon;

  return (
    <section id="cases" className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionBadge>Nossos Cases</SectionBadge>
          <h2
            className="font-medium text-dark leading-tight mb-4"
            style={{ fontSize: "48px", letterSpacing: "-1.92px" }}
          >
            Resultados reais de apps que escalaram
          </h2>
          <p className="text-body leading-relaxed" style={{ fontSize: "16px" }}>
            Cases de marcas que confiaram na Appreach para crescer com consistência.
          </p>
        </div>

        {/* Tab bar */}
        <div
          className="flex items-stretch mb-5"
          style={{ borderBottom: "1px solid var(--color-border)" }}
        >
          {cases.map((tab, i) => {
            const TabIcon = tab.Icon;
            const isActive = i === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(i)}
                className="flex-1 flex items-center justify-center gap-2 py-3 font-medium transition-all duration-200"
                style={{
                  fontSize: "14px",
                  background: "transparent",
                  color: isActive ? "var(--color-dark)" : "var(--color-muted)",
                  borderBottom: isActive ? `2px solid ${tab.accent}` : "2px solid transparent",
                  marginBottom: "-1px",
                }}
              >
                <TabIcon size={16} style={{ color: isActive ? tab.accent : undefined, flexShrink: 0 }} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="bg-white rounded-[24px] overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="grid lg:grid-cols-[480px_1fr]">

            {/* Left */}
            <div className="p-12 lg:p-14 flex flex-col justify-between gap-10">

              {/* Top block */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: c.accentBg }}
                  >
                    <CaseIcon size={22} style={{ color: c.accent }} />
                  </div>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: c.accent, letterSpacing: "0.3px" }}
                  >
                    {c.category}
                  </span>
                </div>

                <h3
                  className="font-medium text-dark leading-snug"
                  style={{ fontSize: "22px", letterSpacing: "-0.5px" }}
                >
                  {c.headline}
                </h3>

                <p className="leading-relaxed" style={{ fontSize: "16px", color: "var(--color-body)" }}>
                  {c.description}
                </p>
              </div>

              {/* Bottom block: metrics + CTA */}
              <div className="space-y-5">
                <div
                  className="grid grid-cols-3 gap-4 pt-5"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                >
                  {c.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1">
                      <span style={{ fontSize: "22px", fontWeight: 700, color: "var(--color-primary)", letterSpacing: "-0.5px", lineHeight: 1 }}>
                        {m.value}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--color-muted)" }}>
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-1 font-semibold transition-opacity hover:opacity-60"
                  style={{ fontSize: "14px", color: "var(--color-primary)" }}
                >
                  Ver detalhes
                  <ChevronRight size={14} strokeWidth={2.5} />
                </a>
              </div>

            </div>

            {/* Right — image area */}
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{ background: c.panelBg, minHeight: "380px" }}
            >
              {c.mockupStats.map((s) => (
                <div
                  key={s.label}
                  className={"absolute flex flex-col gap-0.5 rounded-2xl px-5 py-3.5 " + s.pos}
                  style={{
                    background: "#ffffff",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                    minWidth: "110px",
                  }}
                >
                  <span style={{ fontSize: "22px", fontWeight: 700, color: c.accent, letterSpacing: "-0.5px", lineHeight: 1 }}>
                    {s.value}
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)" }}>
                    {s.label}
                  </span>
                </div>
              ))}

              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center opacity-20"
                style={{ background: c.accent }}
              >
                <CaseIcon size={40} color="#ffffff" />
              </div>

              <p
                className="absolute bottom-4 right-4 text-xs font-medium opacity-30"
                style={{ color: c.accent }}
              >
                {c.label} · imagem em breve
              </p>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Button href="#contato" variant="gradient" arrow size="lg">
            Quero resultados assim para o meu app
          </Button>
        </div>

      </div>
    </section>
  );
}
