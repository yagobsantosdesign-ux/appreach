"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Posição prioritária na busca da App Store",
    description:
      "Apareça antes dos concorrentes quando alguém busca exatamente o que seu app oferece, na App Store Search, Today Tab e Search Results.",
    bullets: [
      "Ads em Search, Today Tab e Product Pages",
      "Custom Product Pages por audiência",
      "Cobertura em brand e category keywords",
    ],
  },
  {
    title: "Alta intenção de compra",
    description:
      "Usuários vindos de Apple Search Ads têm intent declarado, eles estão buscando o app. Isso resulta em menor churn e melhor ROAS que social.",
    bullets: [
      "Intent declarado na busca",
      "Menor churn pós-install",
      "ROAS superior ao de redes sociais",
    ],
  },
  {
    title: "Otimização contínua de keywords",
    description:
      "Gestão ativa de bids, negativos e expansão de cauda longa, com discovery de novas oportunidades a cada ciclo.",
    bullets: [
      "Discovery e expansão de cauda longa",
      "Keyword sculpting e negativação",
      "Reports semanais de performance",
    ],
  },
  {
    title: "Integração com MMP e attribution",
    description:
      "Setup completo com AppsFlyer, Adjust e outros MMPs para rastrear cada install e cohort com precisão.",
    bullets: [
      "Integração com AppsFlyer e Adjust",
      "Pipeline de dados automatizado",
      "Cohort analysis e LTV pós-install",
    ],
  },
];

export default function AppleSearchAdsPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="Apple Search Ads"
          title={<>Seja o 1º quando alguém busca seu app.</>}
          subtitle="Campanhas de Apple Search Ads gerenciadas por especialistas, capte usuários com alto intent de install no ecossistema Apple."
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Presença total no ecossistema Apple"
          subtitle="Da keyword strategy à atribuição, cobrimos cada etapa para maximizar seu crescimento na App Store."
          features={features}
        />

        <FAQ />

      </main>
      <Footer />
    </>
  );
}
