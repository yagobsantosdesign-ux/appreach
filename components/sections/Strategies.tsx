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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {strategies.map((s) => {
            const wide = s.span === "lg:col-span-2";
            const gradient = wide
              ? "linear-gradient(to right, #ffffff 0%, #F5F4FF 100%)"
              : "linear-gradient(to bottom, #F5F4FF 0%, #ffffff 100%)";
            return (
              <div
                key={s.title}
                className={`flex flex-col justify-end rounded-[20px] p-7 ${s.span}`}
                style={{ background: gradient, border: "1px solid #E8E4F0", minHeight: `calc(${s.widgetHeight} + 120px)` }}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
