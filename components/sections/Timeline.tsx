import { ClipboardList, Target, Rocket, TrendingUp, BarChart2 } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const steps = [
  {
    number: "01",
    title: "Briefing & Diagnóstico",
    description:
      "Entendemos os objetivos do app, o estágio atual do funil e os KPIs que mais importam para o seu negócio.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Planejamento Estratégico",
    description:
      "Montamos um plano com as estratégias certas para cada etapa — sem desperdício de verba e com foco em resultado.",
    icon: Target,
  },
  {
    number: "03",
    title: "Ativação das Campanhas",
    description:
      "Configuramos e lançamos as campanhas com criativos otimizados, segmentação precisa e integração de tracking.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Otimização Contínua",
    description:
      "Monitoramos os dados em tempo real, ajustamos bid, criativos e audiências para maximizar a performance.",
    icon: TrendingUp,
  },
  {
    number: "05",
    title: "Relatório & Escala",
    description:
      "Reportes transparentes com insights acionáveis e decisão conjunta sobre como escalar o que está funcionando.",
    icon: BarChart2,
  },
];

export default function Timeline() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionBadge>Como Trabalhamos</SectionBadge>
          <h2 className="font-medium text-dark leading-tight mb-4" style={{ fontSize: "48px", letterSpacing: "-1.92px" }}>
            Processo claro,<br />resultados mensuráveis.
          </h2>
          <p className="text-body leading-relaxed" style={{ fontSize: "16px" }}>
            Um processo claro, sem ruído. Você sabe exatamente o que está
            acontecendo com seu investimento em cada fase.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop dashed connector */}
          <div
            className="hidden lg:block absolute left-[10%] right-[10%]"
            style={{
              top: "60px",
              borderTop: "2px dashed rgba(101,87,234,0.15)",
              zIndex: 0,
            }}
          />

          <div className="grid lg:grid-cols-5 gap-4 lg:gap-5 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="card bg-white rounded-2xl p-6 flex flex-col"
                  style={{ border: "1px solid rgba(0,0,0,0.05)" }}
                >
                  {/* Mobile vertical connector */}
                  {i < steps.length - 1 && (
                    <div
                      className="lg:hidden absolute"
                      style={{
                        left: "35px",
                        top: "80px",
                        bottom: "-16px",
                        width: "1px",
                        background: "rgba(101,87,234,0.15)",
                      }}
                    />
                  )}

                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--color-primary-light)" }}
                    >
                      <Icon size={20} style={{ color: "var(--color-primary)" }} />
                    </div>
                    <span
                      className="font-semibold"
                      style={{ fontSize: "11px", color: "rgba(101,87,234,0.35)", fontFamily: "var(--font-geist-mono)" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-semibold text-dark text-sm lg:text-[15px] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
