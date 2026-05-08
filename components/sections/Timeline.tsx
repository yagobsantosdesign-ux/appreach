const steps = [
  {
    number: "01",
    title: "Briefing & Diagnóstico",
    description:
      "Entendemos os objetivos do app, o estágio atual do funil e os KPIs que mais importam para o seu negócio.",
  },
  {
    number: "02",
    title: "Planejamento Estratégico",
    description:
      "Montamos um plano com as estratégias certas para cada etapa — sem desperdício de verba e com foco em resultado.",
  },
  {
    number: "03",
    title: "Ativação das Campanhas",
    description:
      "Configuramos e lançamos as campanhas com criativos otimizados, segmentação precisa e integração de tracking.",
  },
  {
    number: "04",
    title: "Otimização Contínua",
    description:
      "Monitoramos os dados em tempo real, ajustamos bid, criativos e audiências para maximizar a performance.",
  },
  {
    number: "05",
    title: "Relatório & Escala",
    description:
      "Reportes transparentes com insights acionáveis e decisão conjunta sobre como escalar o que está funcionando.",
  },
];

export default function Timeline() {
  return (
    <section
      id="como-funciona"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-semibold uppercase tracking-widest text-primary mb-4" style={{ fontSize: "14px" }}>
            Como funciona
          </p>
          <h2 className="font-medium text-dark leading-tight mb-4" style={{ fontSize: "48px" }}>
            Da briefing ao resultado em 5 etapas
          </h2>
          <p className="text-body leading-relaxed" style={{ fontSize: "16px" }}>
            Um processo claro, sem ruído. Você sabe exatamente o que está
            acontecendo com seu investimento em cada fase.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-border" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4 relative">
                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-4">
                  <div className="relative z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-xs font-medium text-primary">
                      {step.number}
                    </span>
                  </div>

                  <div className="lg:text-center">
                    <h3 className="font-medium text-dark text-sm lg:text-base">
                      {step.title}
                    </h3>
                    <p className="text-xs text-body leading-relaxed mt-1.5">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="lg:hidden absolute left-5 top-10 bottom-0 w-px bg-border -translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
