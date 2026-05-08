const stats = [
  {
    value: "50+",
    label: "Apps atendidos",
    sub: "em múltiplos verticais",
  },
  {
    value: "300+",
    label: "Campanhas executadas",
    sub: "com rastreamento completo",
  },
  {
    value: "R$500M+",
    label: "Em investimento gerenciado",
    sub: "em mídia para apps",
  },
  {
    value: "98%",
    label: "Satisfação dos clientes",
    sub: "NPS mensurado",
  },
];

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-dark">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center lg:text-left space-y-1 lg:border-l lg:border-white/10 lg:pl-6 first:border-0 first:pl-0"
            >
              <p className="text-4xl lg:text-5xl font-medium text-white">
                {s.value}
              </p>
              <p className="font-semibold text-white/80 text-sm">{s.label}</p>
              <p className="text-xs text-white/40">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
