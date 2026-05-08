import {
  Users,
  RefreshCw,
  Tv2,
  MessageSquare,
  Smartphone,
  Radio,
  ArrowRight,
} from "lucide-react";

const strategies = [
  {
    icon: Users,
    title: "Aquisição de Usuários",
    description:
      "Campanhas de UA com segmentação precisa para atrair novos usuários qualificados e maximizar o volume de installs.",
    badge: "Topo de funil",
  },
  {
    icon: RefreshCw,
    title: "Retargeting",
    description:
      "Reengaje usuários que já instalaram seu app e converta intenções em compras e eventos de receita.",
    badge: "Meio de funil",
  },
  {
    icon: Tv2,
    title: "CTV",
    description:
      "Anuncie em TVs conectadas e streaming para construir brand awareness e escalar o alcance do seu app.",
    badge: "Awareness",
  },
  {
    icon: MessageSquare,
    title: "App Chat & Push",
    description:
      "Comunicação direta dentro e fora do app com mensagens personalizadas para aumentar retenção e LTV.",
    badge: "Retenção",
  },
  {
    icon: Smartphone,
    title: "Preload",
    description:
      "Seu app pré-instalado em dispositivos novos, garantindo presença desde o primeiro acesso do usuário.",
    badge: "Distribuição",
  },
  {
    icon: Radio,
    title: "Mídia Programática",
    description:
      "Compra de mídia em escala com dados de primeira parte para atingir o usuário certo, no momento certo.",
    badge: "Escala",
  },
];

const badgeColors: Record<string, string> = {
  "Topo de funil": "bg-primary-light text-primary",
  "Meio de funil": "bg-blue-50 text-blue-600",
  Awareness: "bg-orange-50 text-orange-600",
  Retenção: "bg-green-50 text-green-600",
  Distribuição: "bg-purple-50 text-purple-600",
  Escala: "bg-yellow-50 text-yellow-700",
};

export default function Strategies() {
  return (
    <section
      id="estrategias"
      className="py-24 lg:py-32 bg-surface"
    >
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-dark rounded-full px-3 py-1.5 mb-6">
            <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center shrink-0">
              <span className="text-white font-bold" style={{ fontSize: "11px" }}>A</span>
            </div>
            <span className="text-white font-medium" style={{ fontSize: "13px" }}>Estratégias</span>
          </div>
          <h2 className="font-medium text-dark leading-tight mb-4" style={{ fontSize: "48px" }}>
            Cobertura completa<br />do funil do seu app
          </h2>
          <p className="text-body leading-relaxed" style={{ fontSize: "16px" }}>
            Da primeira impressão ao evento de receita — cada estratégia foi
            desenvolvida para uma etapa específica da jornada do usuário.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strategies.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[s.badge]}`}
                  >
                    {s.badge}
                  </span>
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="font-medium text-dark" style={{ fontSize: "18px" }}>{s.title}</h3>
                  <p className="text-body leading-relaxed" style={{ fontSize: "15px" }}>
                    {s.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Saiba mais</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
