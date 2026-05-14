import { Smartphone, BarChart2, TrendingUp, Star } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Apps atendidos",
    sub: "em múltiplos verticais",
    icon: Smartphone,
  },
  {
    value: "300+",
    label: "Campanhas executadas",
    sub: "com rastreamento completo",
    icon: BarChart2,
  },
  {
    value: "R$500M+",
    label: "Em investimento gerenciado",
    sub: "em mídia para apps",
    icon: TrendingUp,
  },
  {
    value: "98%",
    label: "Satisfação dos clientes",
    sub: "NPS mensurado",
    icon: Star,
  },
];

export default function Stats() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="text-center lg:text-left space-y-2 lg:pl-6 lg:border-l"
                style={{ borderColor: i === 0 ? "transparent" : "var(--color-border)" }}
              >
                <Icon
                  size={18}
                  style={{ color: "var(--color-primary)", margin: "0 auto 8px", display: "block" }}
                  className="lg:mx-0"
                />
                <p className="font-semibold text-dark leading-none" style={{ fontSize: "52px" }}>
                  {s.value}
                </p>
                <p className="font-medium text-body text-sm">{s.label}</p>
                <p className="text-xs text-muted">{s.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
