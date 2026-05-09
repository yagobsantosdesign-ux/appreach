import { ArrowRight } from "lucide-react";

const strategies = [
  {
    title: "Aquisição de Usuários",
    description:
      "Campanhas de UA com segmentação precisa para atrair novos usuários qualificados e maximizar o volume de installs.",
    badge: "Topo de funil",
    href: "/useracquisition-app",
  },
  {
    title: "Retargeting",
    description:
      "Reengaje usuários que já instalaram seu app e converta intenções em compras e eventos de receita.",
    badge: "Meio de funil",
    href: "/retargeting",
  },
  {
    title: "CTV",
    description:
      "Anuncie em TVs conectadas e streaming para construir brand awareness e escalar o alcance do seu app.",
    badge: "Awareness",
    href: "/ctv-connected-tv",
  },
  {
    title: "App Chat & Push",
    description:
      "Comunicação direta dentro e fora do app com mensagens personalizadas para aumentar retenção e LTV.",
    badge: "Retenção",
    href: "#estrategias",
  },
  {
    title: "Preload",
    description:
      "Seu app pré-instalado em dispositivos novos, garantindo presença desde o primeiro acesso do usuário.",
    badge: "Distribuição",
    href: "#estrategias",
  },
  {
    title: "Mídia Programática",
    description:
      "Compra de mídia em escala com dados de primeira parte para atingir o usuário certo, no momento certo.",
    badge: "Escala",
    href: "#estrategias",
  },
];

function Badge({ label }: { label: string }) {
  return (
    <div
      className="inline-flex items-center justify-center px-3 py-1.5 rounded-full self-start"
      style={{
        background: "linear-gradient(135deg, #8B7FFF 0%, #5449D6 100%)",
        boxShadow:
          "0 0 0 3px #f8f8fa, 0 0.4px 1.3px -0.4px rgba(28,70,255,0.09), 0 1.6px 4.8px -0.8px rgba(28,70,255,0.12), 0 7px 21px -1.25px rgba(28,70,255,0.24)",
      }}
    >
      <span className="text-white font-semibold" style={{ fontSize: "13px" }}>
        {label}
      </span>
    </div>
  );
}

export default function Strategies() {
  return (
    <section id="estrategias" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 mb-6 overflow-hidden rounded-lg">
            <div
              className="flex items-center justify-center rounded-lg shrink-0"
              style={{
                width: "28px",
                height: "28px",
                background: "#6557ea",
              }}
            >
              <span className="text-white font-bold" style={{ fontSize: "14px" }}>A</span>
            </div>
            <div
              className="flex items-center px-2.5 rounded-lg"
              style={{ height: "28px", background: "#f7f7f7" }}
            >
              <span className="font-normal" style={{ fontSize: "13px", color: "#151515", letterSpacing: "0.26px" }}>
                Estratégias
              </span>
            </div>
          </div>
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

        {/* Grid 3×2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {strategies.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group flex flex-col justify-between rounded-[16px] p-8 hover:shadow-md transition-shadow duration-300"
              style={{
                background: "#f7f7f7",
                border: "1px solid #f4f4f4",
                minHeight: "320px",
              }}
            >
              <Badge label={s.badge} />

              <div className="flex flex-col gap-4 mt-auto pt-10">
                <h3
                  className="font-semibold text-dark"
                  style={{ fontSize: "24px", letterSpacing: "-0.48px" }}
                >
                  {s.title}
                </h3>
                <p className="font-medium leading-relaxed" style={{ fontSize: "16px", color: "#7a7a7a" }}>
                  {s.description}
                </p>
              </div>

              <div className="flex items-center gap-1 text-primary text-sm font-semibold mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Saiba mais</span>
                <ArrowRight size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
