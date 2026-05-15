import { ClipboardList, Target, Rocket, TrendingUp, BarChart2 } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const steps = [
  {
    number: "01",
    title: "Briefing & Diagnóstico",
    description: "Entendemos os objetivos do app, o estágio do funil e os KPIs que mais importam para o negócio.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Planejamento Estratégico",
    description: "Definimos as estratégias certas para cada etapa — sem desperdício de verba e com foco em resultado.",
    icon: Target,
  },
  {
    number: "03",
    title: "Ativação das Campanhas",
    description: "Lançamos as campanhas com criativos otimizados, segmentação precisa e integração de tracking.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Otimização Contínua",
    description: "Monitoramos em tempo real e ajustamos bid, criativos e audiências para maximizar a performance.",
    icon: TrendingUp,
  },
  {
    number: "05",
    title: "Relatório & Escala",
    description: "Reportes claros com insights acionáveis e decisão conjunta sobre escalar o que está funcionando.",
    icon: BarChart2,
  },
];

export default function Timeline() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        {/* Header */}
        <div className="text-center mx-auto mb-14" style={{ maxWidth: "580px" }}>
          <SectionBadge>Como Trabalhamos</SectionBadge>
          <h2
            className="font-medium text-dark leading-tight mt-3"
            style={{ fontSize: "48px", letterSpacing: "-1.92px" }}
          >
            Processo claro,<br />resultados mensuráveis.
          </h2>
        </div>

        {/* Steps — 3 col grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10"
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col pt-7"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <span
                  className="leading-none mb-5 select-none"
                  style={{
                    fontSize: "44px",
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 500,
                    color: "var(--color-border)",
                    letterSpacing: "-2px",
                  }}
                >
                  {step.number}
                </span>

                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 shrink-0"
                  style={{ background: "var(--color-primary-light)" }}
                >
                  <Icon size={16} style={{ color: "var(--color-primary)" }} />
                </div>

                <h3
                  className="font-medium text-dark leading-snug mb-2"
                  style={{ fontSize: "16px", letterSpacing: "-0.3px" }}
                >
                  {step.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontSize: "14px", color: "var(--color-muted)" }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
