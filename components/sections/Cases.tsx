import { ArrowRight } from "lucide-react";

const cases = [
  {
    tag: "eCommerce de Beleza · User Acquisition",
    tagColor: "bg-pink-100 text-pink-700",
    title: "Como um app de beleza multiplicou o ROI em 3x com criativos certos e foco em qualidade",
    challenge:
      "O cliente, um app de e-commerce de beleza, precisava escalar sua base de usuários sem perder qualidade, com metas claras de conversão e ROI positivo. O principal objetivo era aumentar instalações qualificadas e gerar mais conversões, mantendo um ROI mínimo como critério-chave de sucesso.",
    strategy: [
      "Segmentação lookalike baseada nos usuários de maior LTV",
      "Criativos iterativos com testes A/B por formato e mensagem",
      "Otimização de bid focada em eventos de receita, não apenas install",
      "Integração profunda com MMP para rastreamento granular",
    ],
    why: "Unimos expertise em mídia mobile, criativos com inteligência de performance e acompanhamento técnico próximo — entregando não só volume, mas valor.",
    metrics: [
      { value: "+340%", label: "Crescimento em installs" },
      { value: "3×", label: "Multiplicação do ROI" },
      { value: "-42%", label: "Redução de CPI" },
    ],
    accent: "pink",
  },
  {
    tag: "Fintech / Banking · Retargeting",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Fintech recuperou 210% na taxa de ativação reengajando usuários que abandonaram o cadastro",
    challenge:
      "Grande volume de usuários instalava o app mas não concluía o cadastro, gerando uma base inativa e desperdício de verba em aquisição. O desafio era reativar esse público com mensagens certas no momento certo.",
    strategy: [
      "Segmentação por estágio de abandono no funil de cadastro",
      "Mensagens personalizadas por etapa com urgência e benefício claro",
      "Janelas de retargeting otimizadas por comportamento recente",
      "Bid automático focado em evento de ativação de conta",
    ],
    why: "Tratamos cada usuário inativo como uma oportunidade única — com a mensagem certa, no canal certo, na hora certa.",
    metrics: [
      { value: "+210%", label: "Taxa de ativação" },
      { value: "5.2×", label: "ROAS médio" },
      { value: "-38%", label: "Custo por ativação" },
    ],
    accent: "blue",
  },
  {
    tag: "Food & Delivery · App Chat + Push",
    tagColor: "bg-orange-100 text-orange-700",
    title: "App de delivery triplicou pedidos por usuário com sequência de mensagens comportamentais",
    challenge:
      "Os usuários faziam o primeiro pedido mas não voltavam com frequência, reduzindo o LTV e pressionando os custos de aquisição. Era necessário aumentar retenção e frequência sem parecer spam.",
    strategy: [
      "Mapeamento comportamental: usuários ativos, em risco e inativos",
      "Sequência de push + in-app por gatilho (hora, localização, histórico)",
      "Ofertas personalizadas baseadas em pedidos anteriores",
      "Testes de horário e frequência para maximizar abertura",
    ],
    why: "Automatizamos a comunicação com inteligência — cada mensagem chegou no momento em que o usuário estava mais propenso a pedir.",
    metrics: [
      { value: "+85%", label: "Retenção D30" },
      { value: "+3.1×", label: "Pedidos por usuário" },
      { value: "+67%", label: "Receita por usuário" },
    ],
    accent: "orange",
  },
  {
    tag: "Games / Entretenimento · CTV + UA",
    tagColor: "bg-purple-100 text-purple-700",
    title: "Game mobile somou 520k novos usuários combinando CTV com compra programática em escala",
    challenge:
      "O app tinha criativos fortes mas alcance limitado — a mídia mobile sozinha não era suficiente para atingir as metas de crescimento. Era preciso expandir para novos canais sem perder eficiência.",
    strategy: [
      "Campanha CTV em canais de streaming com vídeo de 15s e 30s",
      "Remarketing cross-device para usuários que viram o anúncio na TV",
      "Compra programática de inventário premium para install direto",
      "Criativos adaptados por formato com IPM como métrica-guia",
    ],
    why: "A combinação de brand em TV conectada com performance no mobile criou um ciclo de reconhecimento e conversão que nenhum canal sozinho entregaria.",
    metrics: [
      { value: "+520k", label: "Novos usuários" },
      { value: "8.4", label: "IPM de criativos" },
      { value: "2.9×", label: "ROAS da campanha" },
    ],
    accent: "purple",
  },
];

const accentMap: Record<string, { big: string; bar: string; bg: string }> = {
  pink:   { big: "text-pink-600",   bar: "bg-pink-400",   bg: "bg-pink-50" },
  blue:   { big: "text-blue-600",   bar: "bg-blue-400",   bg: "bg-blue-50" },
  orange: { big: "text-orange-500", bar: "bg-orange-400", bg: "bg-orange-50" },
  purple: { big: "text-primary",    bar: "bg-primary",    bg: "bg-primary-light" },
};

export default function Cases() {
  return (
    <section id="cases" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-semibold uppercase tracking-widest text-primary mb-4" style={{ fontSize: "14px" }}>
            Cases de Sucesso
          </p>
          <h2 className="font-medium text-dark leading-tight mb-4" style={{ fontSize: "48px" }}>
            Resultados reais,<br />estratégia comprovada
          </h2>
          <p className="text-body leading-relaxed" style={{ fontSize: "16px" }}>
            Cada número representa uma campanha com objetivo claro e execução precisa — sem achismos, só dados.
          </p>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-6">
          {cases.map((c) => {
            const accent = accentMap[c.accent];
            return (
              <div
                key={c.tag}
                className="bg-white rounded-3xl border border-border p-8 lg:p-10 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">

                  {/* Left — story */}
                  <div className="space-y-6">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${c.tagColor}`}>
                      {c.tag}
                    </span>

                    <h3 className="font-medium text-dark leading-snug" style={{ fontSize: "22px" }}>
                      {c.title}
                    </h3>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted">Desafio</p>
                      <p className="text-body leading-relaxed" style={{ fontSize: "15px" }}>
                        {c.challenge}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted">Estratégia</p>
                      <ul className="space-y-1.5">
                        {c.strategy.map((s) => (
                          <li key={s} className="flex items-start gap-2.5 text-body" style={{ fontSize: "15px" }}>
                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${accent.bar}`} />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`rounded-2xl px-5 py-4 ${accent.bg} space-y-1`}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted">Por que funcionou</p>
                      <p className="text-dark leading-relaxed font-medium" style={{ fontSize: "15px" }}>
                        {c.why}
                      </p>
                    </div>
                  </div>

                  {/* Right — big numbers */}
                  <div className="flex flex-col gap-4 lg:pt-10">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="space-y-0.5 border-l-2 border-border pl-5">
                        <p className={`font-medium leading-none ${accent.big}`} style={{ fontSize: "40px" }}>
                          {m.value}
                        </p>
                        <p className="text-muted text-sm leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
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
