"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Análise de performance com IA",
    description:
      "Modelos que cruzam seus dados de campanha e eventos in-app para revelar o que realmente move o resultado.",
    bullets: [
      "Leitura de performance por evento e funil",
      "Detecção de padrões e anomalias",
      "Priorização das alavancas de maior impacto",
    ],
    image: { src: "/reach-lab-feature-1b.webp", alt: "App exibindo o funil do app com painéis de performance ao redor" },
  },
  {
    title: "Experiência do usuário sob o microscópio",
    description:
      "Mapeamos a jornada dentro do app para encontrar onde o usuário trava e onde a receita escapa.",
    bullets: [
      "Análise de jornada e retenção",
      "Pontos de fricção e abandono",
      "Recomendações de melhoria acionáveis",
    ],
    image: { src: "/reach-lab-feature-2.webp", alt: "Jornada do usuário no app com ponto de fricção destacado no fluxo" },
  },
  {
    title: "Inteligência competitiva",
    description:
      "Acompanhamos o movimento da concorrência para posicionar seu app à frente, não atrás.",
    bullets: [
      "Benchmark de mercado e categoria",
      "Monitoramento de concorrentes",
      "Oportunidades de posicionamento",
    ],
    image: { src: "/reach-lab-feature-3.webp", alt: "Mapa de posicionamento de mercado com concorrentes por quadrante" },
  },
  {
    title: "Relatórios personalizados por objetivo",
    description:
      "Dashboards construídos sobre as metas do seu app, sem métricas de vaidade, só o que importa.",
    bullets: [
      "Relatórios alinhados às suas metas",
      "Visão clara de ROI e LTV",
      "Cadência de leitura e recomendações",
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
          title={<>Inteligência de dados que vira crescimento real</>}
          subtitle="O Reach Lab combina IA e expertise humana para analisar performance, experiência e concorrência, transformando dados em oportunidades de crescimento para o seu app."
          image={{ src: "/reach-lab-mockup-b.webp", alt: "Ilustração de dados e crescimento com gráfico em alta" }}
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Dados, IA e expertise no mesmo lugar"
          subtitle="Do diagnóstico à recomendação, o Reach Lab transforma seus dados em decisões de crescimento."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
