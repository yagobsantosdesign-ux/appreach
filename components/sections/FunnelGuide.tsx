import { ArrowRight } from "lucide-react";

export default function FunnelGuide() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 flex flex-col items-center gap-5 text-center">
        <p
          className="font-normal uppercase"
          style={{ fontSize: "14px", color: "#6557ea", letterSpacing: "0.28px" }}
        >
          Qual estratégia é ideal?
        </p>

        <h2
          className="font-medium text-dark leading-tight"
          style={{ fontSize: "48px", letterSpacing: "-1.92px", maxWidth: "578px" }}
        >
          A estratégia certa para cada etapa do funil
        </h2>

        <p
          className="leading-relaxed"
          style={{ fontSize: "16px", color: "#151515", maxWidth: "578px" }}
        >
          Não existe uma fórmula única. Cada app tem um momento diferente na
          jornada. Identificamos onde seu app está e aplicamos as estratégias
          que entregam os melhores resultados naquele estágio.
        </p>

        <a
          href="#contato"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-semibold hover:opacity-90 transition-opacity mt-1"
          style={{
            fontSize: "16px",
            letterSpacing: "-0.32px",
            background: "linear-gradient(171deg, #8B7FFF 0%, #5449D6 100%)",
            boxShadow: "0 8px 14px rgba(101,87,234,0.4)",
          }}
        >
          Diagnóstico gratuito
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
