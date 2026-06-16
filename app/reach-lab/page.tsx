"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Descubra o que realmente move seus resultados",
    description:
      "Identifique quais campanhas, eventos e comportamentos têm maior impacto no crescimento do seu aplicativo.",
    bullets: [
      "Leitura por evento e etapa do funil",
      "Identificação de padrões e anomalias",
      "Priorização das oportunidades mais relevantes",
    ],
    image: { src: "/reach-lab-feature-1b.webp", alt: "App exibindo o funil do app com painéis de performance ao redor" },
  },
  {
    title: "Experiência do usuário sob o microscópio",
    description:
      "Mapeamos a jornada do usuário para identificar pontos de abandono, fricção e oportunidades de melhoria.",
    bullets: [
      "Análise de jornada e retenção",
      "Pontos de fricção e abandono",
      "Recomendações de melhoria acionáveis",
    ],
    image: { src: "/reach-lab-feature-2.webp", alt: "Jornada do usuário no app com ponto de fricção destacado no fluxo" },
  },
  {
    title: "Veja o mercado além dos seus dados",
    description:
      "Entenda como seu aplicativo se posiciona frente à concorrência e identifique oportunidades antes dos seus competidores.",
    bullets: [
      "Benchmark da categoria",
      "Monitoramento competitivo",
      "Oportunidades de posicionamento",
    ],
    image: { src: "/reach-lab-feature-3.webp", alt: "Mapa de posicionamento de mercado com concorrentes por quadrante" },
  },
  {
    title: "Clareza para agir",
    description:
      "Receba recomendações orientadas aos objetivos do seu app, com foco no que realmente merece atenção.",
    bullets: [
      "Recomendações alinhadas às suas metas",
      "Visão clara de ROI e LTV",
      "Cadência recorrente de acompanhamento",
    ],
    image: { src: "/reach-lab-feature-4b.webp", alt: "Dashboard de relatório com KPIs e curva de crescimento" },
  },
];

export default function ReachLabPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="IA & Dados: Reach Lab"
          title={<>A inteligência por trás do crescimento.</>}
          subtitle="Combinamos dados, IA e expertise em growth mobile para identificar oportunidades, orientar decisões e acelerar resultados para o seu aplicativo."
          image={{ src: "/reach-lab-mockup-b.webp", alt: "Ilustração de dados e crescimento com gráfico em alta" }}
          ctaLabel="Descubra o que os seus dados estão tentando mostrar."
          ctaHref="https://appreach.vercel.app/growth-navigator"
        />

        <section style={{ background: "#f5f4ff", padding: "64px 40px" }}>
          <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", color: "var(--color-primary)", textTransform: "uppercase", marginBottom: "24px" }}>
              O Reach Lab é para você se...
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              {[
                "Tem muitos dados, mas poucas respostas",
                "Quer identificar novas oportunidades de crescimento",
                "Precisa priorizar onde investir tempo e orçamento",
                "Busca decisões mais rápidas e orientadas por evidências",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span style={{ fontSize: "16px", color: "#251d49", fontWeight: 500, lineHeight: "150%" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductFeatures
          badge="O que entregamos"
          title="Insights que viram ação"
          subtitle="O Reach Lab transforma informações dispersas em recomendações claras para ajudar seu time a tomar decisões melhores e mais rápidas."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
