"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Acesso ao inventário premium",
    description:
      "Alcance usuários em plataformas de streaming e publishers premium com experiências publicitárias de alta qualidade.",
    bullets: [
      "Publishers líderes de streaming e CTV",
      "Ambientes seguros para a marca",
      "Alta visibilidade dos anúncios",
    ],
    image: { src: "/ctv-feature-1b.webp", alt: "Players de vídeo premium com indicador de crescimento" },
  },
  {
    title: "Audiências mais relevantes",
    description:
      "Combine diferentes sinais de audiência para alcançar os perfis mais alinhados aos objetivos do seu aplicativo.",
    bullets: [
      "Dados demográficos e interesses",
      "Segmentação por apps instalados",
      "Audiências personalizadas",
    ],
    image: { src: "/ctv-feature-2b.webp", alt: "Audiências conectadas a um painel de performance em crescimento" },
  },
  {
    title: "Conecte exposição à conversão",
    description:
      "Mostre ao usuário o próximo passo com experiências conectadas entre a TV e o celular.",
    bullets: [
      "QR Codes dinâmicos",
      "Deep links personalizados",
      "Integração com as principais MMPs",
    ],
    image: { src: "/ctv-feature-3b.webp", alt: "QR code conectando a exposição na TV aos canais e à conversão" },
  },
  {
    title: "Entenda o impacto real da TV",
    description:
      "Vá além das impressões e descubra como a exposição na TV influencia instalações, conversões e comportamento no aplicativo.",
    bullets: [
      "Medição do impacto incremental",
      "Relação entre exposição e conversão",
      "Análise pós-exposição",
    ],
    image: { src: "/ctv-feature-4b.webp", alt: "Exposição na TV conectada a usuários e dispositivos (atribuição cross-device)" },
  },
];

export default function CTVPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="CTV: Connected TV"
          title={<>Alcance usuários onde a atenção é maior</>}
          subtitle="Leve seu aplicativo para a TV conectada e combine alcance premium com mensuração completa para transformar exposição em crescimento."
          image={{ src: "/ctv-mockup-b.webp", alt: "Smart TV exibindo player de vídeo com curva de performance" }}
        />

        <ProductFeatures
          badge="O que entregamos"
          title="CTV de ponta a ponta, do criativo à atribuição"
          subtitle="Planejamento, ativação e mensuração para transformar a atenção da TV em resultados reais para o seu aplicativo."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
