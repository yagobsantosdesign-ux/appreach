"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Distribuição em dispositivos novos",
    description:
      "Seu app embarcado em smartphones de fabricantes e operadoras parceiras, presente antes mesmo do primeiro acesso do usuário.",
    bullets: [
      "Parcerias com OEMs e operadoras",
      "Cobertura em aparelhos de entrada e premium",
      "Escala em novos mercados",
    ],
  },
  {
    title: "Foco em ativação, não só install",
    description:
      "Trabalhamos para que o app seja aberto e usado de verdade, com estratégias de ativação logo após o primeiro boot do aparelho.",
    bullets: [
      "Campanhas de ativação pós-boot",
      "Onboarding incentivado",
      "Redução de installs ociosos",
    ],
  },
  {
    title: "Segmentação por device e região",
    description:
      "Escolha os aparelhos, faixas de preço e regiões certas para alcançar o público com maior fit para o seu app.",
    bullets: [
      "Targeting por modelo e faixa de preço",
      "Cobertura por região e operadora",
      "Curadoria do inventário de aparelhos",
    ],
  },
  {
    title: "Mensuração de ativação e retenção",
    description:
      "Acompanhe cada etapa, do preload à ativação e retenção, com integração nativa aos principais MMPs.",
    bullets: [
      "Integração com AppsFlyer e Adjust",
      "Funil de preload, abertura e ativação",
      "Cohort de retenção pós-ativação",
    ],
  },
];

export default function PreloadPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="Preload"
          title={<>Seu app já instalado no aparelho novo.</>}
          subtitle="Distribuição do seu app pré-instalado em dispositivos novos, garantindo presença desde o primeiro acesso do usuário."
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Presença desde o primeiro acesso"
          subtitle="Do embarque do app à ativação real, cobrimos cada etapa para transformar dispositivos novos em usuários ativos."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
