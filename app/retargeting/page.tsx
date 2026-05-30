"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Segmentação por comportamento real",
    description:
      "Classifique seus usuários pelo evento exato que realizaram, ou deixaram de realizar, e crie segmentos de reengajamento precisos.",
    bullets: [
      "Classificação RFM por comportamento",
      "Janelas de inatividade configuráveis",
      "Segmentos customizados por funil",
    ],
  },
  {
    title: "Criativos dinâmicos personalizados",
    description:
      "Peças com contexto do comportamento do usuário, deep link direto para o ponto de abandono e mensagem adaptada por segmento.",
    bullets: [
      "Dynamic creative por segmento",
      "Deep link direto ao ponto de abandono",
      "Personalização por evento e plataforma",
    ],
  },
  {
    title: "Reengajamento inteligente",
    description:
      "Frequência e janelas de bid otimizadas por probabilidade de reativação, sem desperdício em usuários já ativos.",
    bullets: [
      "Bid por probabilidade de reativação",
      "Cap de frequência por segmento",
      "Exclusão automática de usuários ativos",
    ],
  },
  {
    title: "ROI mensurável com incrementalidade",
    description:
      "Attribution incremental que separa o esforço real do que seria orgânico, relatórios honestos sem inflacionar resultados.",
    bullets: [
      "Holdout groups para controle",
      "Relatório de incrementalidade real",
      "LTV por segmento reativado",
    ],
  },
];

export default function RetargetingPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="Retargeting"
          title={<>Reative usuários. Recupere receita.</>}
          subtitle="Campanhas de retargeting inteligentes para trazer de volta usuários que instalaram mas não converteram, com ROI mensurável."
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Reengajamento preciso em cada etapa do funil"
          subtitle="Segmentação comportamental, criativos dinâmicos e atribuição incremental para maximizar a receita dos usuários existentes."
          features={features}
        />

        <FAQ />

      </main>
      <Footer />
    </>
  );
}
