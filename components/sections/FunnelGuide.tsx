import { ArrowRight } from "lucide-react";

const funnelSteps = [
  {
    stage: "01",
    label: "Conscientização",
    description: "CTV e mídia programática para construir brand awareness em escala.",
    products: ["CTV", "Programática"],
    color: "bg-purple-100 text-purple-700",
  },
  {
    stage: "02",
    label: "Aquisição",
    description: "Campanhas de UA para atrair novos usuários qualificados para instalar.",
    products: ["UA", "Preload"],
    color: "bg-primary-light text-primary",
  },
  {
    stage: "03",
    label: "Engajamento",
    description: "Push e app chat para manter o usuário ativo e aumentar frequência.",
    products: ["App Chat", "Push"],
    color: "bg-blue-50 text-blue-700",
  },
  {
    stage: "04",
    label: "Receita",
    description: "Retargeting para recuperar usuários e converter em compras e receita.",
    products: ["Retargeting"],
    color: "bg-green-50 text-green-700",
  },
];

export default function FunnelGuide() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="font-semibold uppercase tracking-widest text-primary" style={{ fontSize: "14px" }}>
              Qual estratégia é ideal?
            </p>
            <h2 className="font-medium text-dark leading-tight" style={{ fontSize: "48px" }}>
              A estratégia certa para cada etapa do funil
            </h2>
            <p className="text-body leading-relaxed" style={{ fontSize: "16px" }}>
              Não existe uma fórmula única. Cada app tem um momento diferente na
              jornada. Identificamos onde seu app está e aplicamos as estratégias
              que entregam os melhores resultados naquele estágio.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ fontSize: "16px" }}
            >
              Diagnóstico gratuito
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="space-y-3">
            {funnelSteps.map((step, i) => (
              <div
                key={step.stage}
                className="flex gap-4 p-5 rounded-2xl border border-border bg-white hover:border-primary/20 hover:shadow-sm transition-all duration-200"
              >
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium"
                    style={{ backgroundColor: "#F0EEFF", color: "#6557ea" }}
                  >
                    {step.stage}
                  </div>
                  {i < funnelSteps.length - 1 && (
                    <div className="w-px flex-1 bg-border min-h-[16px]" />
                  )}
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="font-medium text-dark" style={{ fontSize: "16px" }}>{step.label}</h3>
                  <p className="text-body leading-relaxed" style={{ fontSize: "14px" }}>
                    {step.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {step.products.map((p) => (
                      <span
                        key={p}
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${step.color}`}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
