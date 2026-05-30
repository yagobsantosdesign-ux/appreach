import SectionBadge from "@/components/ui/SectionBadge";

const stats = [
  {
    value: "200+",
    label: "Apps escalados",
    description: "De startups a grandes publishers, em múltiplos verticais.",
  },
  {
    value: "R$500M+",
    label: "Em investimento gerenciado",
    description: "Em mídia para apps com rastreamento em tempo real.",
  },
  {
    value: "2,4x",
    label: "ROAS médio dos clientes",
    description: "Retorno sobre investimento medido nas campanhas ativas.",
  },
  {
    value: "98%",
    label: "Satisfação dos clientes",
    description: "NPS mensurado. Clientes que recomendam a Appreach.",
  },
];

export default function Stats() {
  return (
    <section className="py-24 lg:py-32 bg-white" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-24">

          {/* Left — texto */}
          <div className="lg:w-[380px] lg:flex-shrink-0 lg:pt-2">
            <SectionBadge>Resultados</SectionBadge>
            <h2
              className="text-dark mb-4"
              style={{ fontSize: "48px", letterSpacing: "-0.02em", lineHeight: "120%", textWrap: "balance" }}
            >
              Números que provam o resultado
            </h2>
            <p style={{ fontSize: "16px", color: "#909090", lineHeight: 1.65 }}>
              Cada métrica representa um app que cresceu, uma campanha que converteu e um cliente que voltou.
            </p>
          </div>

          {/* Right — grid 2×2 */}
          <div
            className="flex-1 grid grid-cols-1 sm:grid-cols-2"
            style={{
              border: "1px solid #EBEBEB",
              borderRadius: "20px",
              overflow: "hidden",
              background: "#F7F7F7",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="p-8 lg:p-10 bg-white"
                style={{
                  borderRight: i % 2 === 0 ? "1px solid #EBEBEB" : "none",
                  borderBottom: i < 2 ? "1px solid #EBEBEB" : "none",
                }}
              >
                <p
                  className="font-medium text-dark leading-none mb-3"
                  style={{ fontSize: "52px", letterSpacing: "-2px" }}
                >
                  {s.value}
                </p>
                <p className="font-medium text-dark mb-1" style={{ fontSize: "16px" }}>
                  {s.label}
                </p>
                <p style={{ fontSize: "14px", color: "#909090", lineHeight: 1.6 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
