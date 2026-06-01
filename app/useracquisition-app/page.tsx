"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Segmentação por intenção real",
    description:
      "Lookalike audiences construídas sobre eventos de conversão, não apenas installs. Alcance quem tem perfil de pagar.",
    bullets: [
      "Dados de 1ª parte e eventos in-app",
      "Audiences atualizadas em tempo real",
      "Perfil de usuário com alto LTV",
    ],
    image: { src: "/ua-feature-1.webp", alt: "Painel com métricas de usuários, installs e canais de aquisição" },
  },
  {
    title: "Criativos guiados por dados",
    description:
      "A/B em escala com análise por evento in-app. Nenhum criativo escala sem evidência de performance.",
    bullets: [
      "Ciclos semanais de teste e iteração",
      "Análise de performance por funil",
      "Produção de peças com time especializado",
    ],
    image: { src: "/ua-feature-2.webp", alt: "Post social com métricas de instalações e retenção" },
  },
  {
    title: "Integração total com MMPs",
    description:
      "AppsFlyer, Adjust, Branch, Singular, Firebase. Setup completo em até 48h, sem depender do seu time de tech.",
    bullets: [
      "Configuração em até 48h",
      "Tracking completo do funil de conversão",
      "Pipeline de dados automatizado",
    ],
    image: { src: "/ua-feature-3.webp", alt: "Logos das principais MMPs e plataformas integradas" },
  },
  {
    title: "Otimização por ML em tempo real",
    description:
      "Bid strategies automáticas calibradas por CPI, ROAS e LTV, sem métricas de vaidade.",
    bullets: [
      "Ajuste automático de lances",
      "Relatórios semanais de performance",
      "Metas calibradas por evento de receita",
    ],
    image: { src: "/ua-feature-4.webp", alt: "Gráfico de performance em alta com otimização por ML" },
  },
];

export default function UAPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="User Acquisition"
          title={<>Mais installs. Menor custo por aquisição.</>}
          subtitle="Campanhas de UA com segmentação de dados de 1ª parte, criativos otimizados e integração nativa com todas as principais MMPs."
          image={{ src: "/ua-hero.webp", alt: "Profissional analisando resultados de aquisição de usuários no laptop" }}
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Tudo que você precisa para escalar installs"
          subtitle="Da segmentação ao criativo, cobrimos cada etapa da sua estratégia de aquisição com dados reais."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
