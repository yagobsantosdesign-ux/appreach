import { TrendingUp, ArrowRight } from "lucide-react";

const cases = [
  {
    segment: "eCommerce de Beleza",
    strategy: "Aquisição de Usuários",
    metrics: [
      { label: "Crescimento em installs", value: "+340%" },
      { label: "Redução de CPI", value: "-42%" },
    ],
    description:
      "Expansão acelerada da base de usuários com segmentação de audiência lookalike, mantendo custo de aquisição saudável.",
    color: "from-pink-50 to-white",
    accent: "bg-pink-100 text-pink-700",
  },
  {
    segment: "Fintech / Banking",
    strategy: "Retargeting",
    metrics: [
      { label: "Taxa de ativação", value: "+210%" },
      { label: "ROAS médio", value: "5.2×" },
    ],
    description:
      "Reengajamento de usuários que instalaram mas não concluíram o cadastro, convertendo em clientes ativos.",
    color: "from-blue-50 to-white",
    accent: "bg-blue-100 text-blue-700",
  },
  {
    segment: "Food & Delivery",
    strategy: "App Chat + Push",
    metrics: [
      { label: "Retenção D30", value: "+85%" },
      { label: "Pedidos por usuário", value: "+3.1×" },
    ],
    description:
      "Sequência de mensagens personalizadas por comportamento que aumentou frequência de pedidos e LTV dos usuários.",
    color: "from-orange-50 to-white",
    accent: "bg-orange-100 text-orange-700",
  },
  {
    segment: "Games / Entretenimento",
    strategy: "CTV + UA",
    metrics: [
      { label: "Novos usuários", value: "+520k" },
      { label: "IPM de criativos", value: "8.4" },
    ],
    description:
      "Campanha cross-channel combinando vídeo em TVs conectadas com compra programática para maximizar installs.",
    color: "from-purple-50 to-white",
    accent: "bg-purple-100 text-purple-700",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-semibold uppercase tracking-widest text-primary mb-4" style={{ fontSize: "14px" }}>
            Cases de Sucesso
          </p>
          <h2 className="font-medium text-dark leading-tight mb-4" style={{ fontSize: "48px" }}>
            Resultados reais, estratégia comprovada
          </h2>
          <p className="text-body leading-relaxed" style={{ fontSize: "16px" }}>
            Cada número representa uma campanha com objetivo claro e execução
            precisa — sem achismos, só dados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {cases.map((c) => (
            <div
              key={c.segment}
              className={`rounded-2xl border border-border bg-gradient-to-br ${c.color} p-6 space-y-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-dark" style={{ fontSize: "18px" }}>{c.segment}</p>
                  <span
                    className={`inline-block mt-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${c.accent}`}
                  >
                    {c.strategy}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm">
                  <TrendingUp size={16} className="text-primary" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-white/80 border border-white p-3 space-y-0.5"
                  >
                    <p className="text-xl font-medium text-dark">{m.value}</p>
                    <p className="text-xs text-muted leading-tight">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-body leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-dark font-semibold text-sm hover:border-primary/40 hover:text-primary transition-colors"
          >
            Quero resultados assim para meu app
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
