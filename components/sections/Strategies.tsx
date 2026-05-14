import SectionBadge from "@/components/ui/SectionBadge";

const strategies = [
  {
    title: "Aquisição de Usuários",
    description: "Campanhas de UA com segmentação precisa para atrair novos usuários qualificados e maximizar o volume de installs.",
    span: "lg:col-span-2",
    widgetHeight: "220px",
  },
  {
    title: "Retargeting",
    description: "Reengaje usuários que já instalaram seu app e converta intenções em compras e eventos de receita.",
    span: "lg:col-span-1",
    widgetHeight: "220px",
  },
  {
    title: "CTV",
    description: "Anuncie em TVs conectadas e streaming para construir brand awareness e escalar o alcance do seu app.",
    span: "lg:col-span-1",
    widgetHeight: "220px",
  },
  {
    title: "App Chat & Push",
    description: "Comunicação direta dentro e fora do app com mensagens personalizadas para aumentar retenção e LTV.",
    span: "lg:col-span-2",
    widgetHeight: "220px",
  },
  {
    title: "Preload",
    description: "Seu app pré-instalado em dispositivos novos, garantindo presença desde o primeiro acesso do usuário.",
    span: "lg:col-span-2",
    widgetHeight: "220px",
  },
  {
    title: "Mídia Programática",
    description: "Compra de mídia em escala com dados de primeira parte para atingir o usuário certo, no momento certo.",
    span: "lg:col-span-1",
    widgetHeight: "220px",
  },
];

export default function Strategies() {
  return (
    <section id="estrategias" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionBadge>Estratégias</SectionBadge>
          <h2
            className="font-medium text-dark leading-tight mb-4"
            style={{ fontSize: "48px", letterSpacing: "-1.92px" }}
          >
            Cobertura completa<br />do funil do seu app
          </h2>
          <p className="text-body leading-relaxed" style={{ fontSize: "16px" }}>
            Da primeira impressão ao evento de receita — cada estratégia foi
            desenvolvida para uma etapa específica da jornada do usuário.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {strategies.map((s) => (
            <div
              key={s.title}
              className={`flex flex-col rounded-[20px] p-7 ${s.span}`}
              style={{
                background: "#F7F7F7",
                border: "1px solid rgba(0,0,0,0.03)",
              }}
            >
              <h3
                className="font-semibold text-dark"
                style={{ fontSize: "26px", letterSpacing: "-0.5px" }}
              >
                {s.title}
              </h3>
              <p
                className="leading-relaxed mt-2"
                style={{ fontSize: "16px", color: "#909090" }}
              >
                {s.description}
              </p>
              {/* Widget area — transparent, widgets serão brancos */}
              <div
                className="w-full mt-6 flex-1"
                style={{ minHeight: s.widgetHeight }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
