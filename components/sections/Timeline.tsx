import SectionBadge from "@/components/ui/SectionBadge";

const steps = [
  {
    number: "01",
    tag: "Descoberta",
    title: "Briefing & Diagnóstico",
    description: "Entendemos os objetivos do app, o estágio do funil e os KPIs que mais importam para o negócio.",
  },
  {
    number: "02",
    tag: "Estratégia",
    title: "Planejamento Estratégico",
    description: "Definimos as estratégias certas para cada etapa — sem desperdício de verba e com foco em resultado.",
  },
  {
    number: "03",
    tag: "Execução",
    title: "Ativação das Campanhas",
    description: "Lançamos as campanhas com criativos otimizados, segmentação precisa e integração de tracking.",
  },
  {
    number: "04",
    tag: "Performance",
    title: "Otimização Contínua",
    description: "Monitoramos em tempo real e ajustamos bid, criativos e audiências para maximizar a performance.",
  },
  {
    number: "05",
    tag: "Crescimento",
    title: "Relatório & Escala",
    description: "Reportes claros com insights acionáveis e decisão conjunta sobre escalar o que está funcionando.",
  },
];

export default function Timeline() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32" style={{ background: "transparent" }}>

      {/* Blobs de fundo */}
      <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-65%)", width: "1400px", height: "1400px", background: "radial-gradient(ellipse, rgba(155,145,255,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translateX(-35%)", width: "1200px", height: "1200px", background: "radial-gradient(ellipse, rgba(196,181,253,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div className="relative max-w-[1300px] mx-auto px-4 lg:px-16">

        {/* Header */}
        <div className="text-center mx-auto mb-12" style={{ maxWidth: "580px" }}>
          <SectionBadge>Processo</SectionBadge>
          <h2
            className="font-medium text-dark leading-tight mt-3"
            style={{ fontSize: "48px", letterSpacing: "-1.92px", textWrap: "balance" }}
          >
            Processo claro, resultados mensuráveis.
          </h2>
        </div>

        {/* Card glassmorphism com as linhas dentro */}
        <div
          className="overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.28)",
            backdropFilter: "blur(12px)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.80)",
            boxShadow: "0 4px 32px rgba(101, 87, 234, 0.06), 0 1px 0 rgba(255,255,255,0.9) inset",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group relative overflow-hidden transition-colors duration-300 hover:bg-white/40"
              style={{ borderTop: i > 0 ? "1px solid rgba(235,235,235,0.7)" : undefined }}
            >
              {/* Acento lateral */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100"
                style={{ background: "var(--color-primary)" }}
              />

              {/* Desktop: 3-col grid */}
              <div
                className="hidden lg:grid items-start gap-x-12 py-12 px-10 transition-[padding] duration-300 group-hover:pl-12"
                style={{ gridTemplateColumns: "72px 1fr 1fr" }}
              >
                {/* Número */}
                <span
                  className="select-none leading-none text-[var(--color-border)] group-hover:text-[var(--color-primary)] transition-colors duration-300"
                  style={{
                    fontSize: "48px",
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 500,
                    letterSpacing: "-2px",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>

                {/* Tag + título */}
                <div className="flex flex-col gap-2">
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-geist-mono)",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--color-primary)",
                    }}
                  >
                    {step.tag}
                  </span>
                  <h3
                    className="font-medium text-dark"
                    style={{ fontSize: "20px", letterSpacing: "-0.5px", fontFamily: "var(--font-heading)", lineHeight: 1.2 }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Descrição */}
                <p
                  className="leading-relaxed pt-[3px]"
                  style={{ fontSize: "14px", color: "var(--color-muted)" }}
                >
                  {step.description}
                </p>
              </div>

              {/* Mobile */}
              <div className="lg:hidden py-7 px-6 flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="select-none leading-none text-[var(--color-border)]"
                    style={{
                      fontSize: "28px",
                      fontFamily: "var(--font-geist-mono)",
                      fontWeight: 500,
                      letterSpacing: "-1px",
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--font-geist-mono)",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--color-primary)",
                    }}
                  >
                    {step.tag}
                  </span>
                </div>
                <h3
                  className="font-medium text-dark"
                  style={{ fontSize: "17px", letterSpacing: "-0.4px", fontFamily: "var(--font-heading)" }}
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
