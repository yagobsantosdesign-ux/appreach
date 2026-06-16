"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Segmentação por comportamento real",
    description:
      "Identifique exatamente onde cada usuário abandonou a jornada e crie campanhas específicas para incentivar o próximo passo.",
    bullets: [
      "Segmentação por comportamento e eventos",
      "Usuários agrupados por nível de engajamento",
      "Audiências personalizadas por etapa do funil",
    ],
    image: { src: "/retargeting-feature-1.webp", alt: "Segmentação de usuários por comportamento em um funil" },
  },
  {
    title: "Mensagens relevantes para cada usuário",
    description:
      "Exiba criativos personalizados com base no comportamento do usuário e direcione-o diretamente para a ação desejada dentro do app.",
    bullets: [
      "Criativos adaptados por segmento",
      "Deep links para retomada da jornada",
      "Personalização por plataforma e comportamento",
    ],
    image: { src: "/retargeting-feature-2.webp", alt: "Personalização de mensagens roteadas por canal e comportamento" },
  },
  {
    title: "Reengajamento inteligente",
    description:
      "Identifique os melhores momentos para reengajar usuários e aumente as chances de retorno sem desperdiçar investimento com quem já está ativo.",
    bullets: [
      "Frequência otimizada por segmento",
      "Exclusão automática de usuários ativos",
      "Menos desperdício de mídia",
    ],
    image: { src: "/retargeting-feature-3b.webp", alt: "Usuário no centro com pontos de reengajamento orbitando" },
  },
  {
    title: "Impacto incremental das campanhas",
    description:
      "Descubra quanto das conversões e da receita foi realmente impulsionado pelas suas campanhas de retargeting.",
    bullets: [
      "Medição de impacto incremental",
      "Comparação com grupos de controle",
      "Receita e LTV por segmento reativado",
    ],
    image: { src: "/retargeting-feature-4.webp", alt: "Gráfico de crescimento incremental com tendência em alta" },
  },
];

export default function RetargetingPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="Retargeting"
          title={<>Reative usuários. Recupere receita</>}
          subtitle="Traga de volta usuários que já conhecem o seu app e transforme intenção em novas conversões com estratégias de reengajamento orientadas por dados."
          image={{ src: "/retargeting-mockup-e.webp", alt: "Usuários sendo reativados e retornando ao app" }}
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Recupere usuários em cada etapa da jornada"
          subtitle="Identifique oportunidades de reengajamento, personalize a comunicação e aumente conversões com campanhas adaptadas ao comportamento dos usuários."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
