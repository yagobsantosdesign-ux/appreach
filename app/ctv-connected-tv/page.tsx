"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Acesso ao inventário premium",
    description:
      "Posicione sua marca em plataformas premium com maior atenção do usuário e experiências publicitárias de alta qualidade.",
    bullets: [
      "Publishers líderes de streaming e CTV",
      "Ambientes seguros para a marca",
      "Alta visibilidade e engajamento dos anúncios",
    ],
    image: { src: "/ctv-feature-1b.webp", alt: "Players de vídeo premium com indicador de crescimento" },
  },
  {
    title: "Audiências de alta intenção",
    description:
      "Combinamos múltiplos sinais de comportamento para alcançar usuários com maior potencial de conversão.",
    bullets: [
      "Dados demográficos e interesses",
      "Targeting por apps instalados",
      "Segmentação personalizada por funil",
    ],
    image: { src: "/ctv-feature-2b.webp", alt: "Audiências conectadas a um painel de performance em crescimento" },
  },
  {
    title: "Conecte exposição à conversão",
    description:
      "Transforme visualizações em resultados mensuráveis com tracking completo da jornada, da TV até a instalação ou compra.",
    bullets: [
      "QR codes dinâmicos e personalizados",
      "Deep linking com atribuição avançada",
      "Integração nativa com as principais MMPs",
    ],
    image: { src: "/ctv-feature-3b.webp", alt: "QR code conectando a exposição na TV aos canais e à conversão" },
  },
  {
    title: "Atribuição cross-device",
    description:
      "Conecte a exposição na TV aos resultados gerados no app e tenha uma visão mais completa do impacto da mídia.",
    bullets: [
      "Conexão entre exposição na TV e ações no app",
      "Medição do impacto incremental das campanhas",
      "Análise do comportamento após a exposição",
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
          title={<>Alcance seu usuário na maior tela da casa</>}
          subtitle="Campanhas de Connected TV para apps mobile, alcance audiências premium enquanto assistem ao conteúdo favorito."
          image={{ src: "/ctv-mockup-b.webp", alt: "Smart TV exibindo player de vídeo com curva de performance" }}
        />

        <ProductFeatures
          badge="O que entregamos"
          title="CTV de ponta a ponta, do criativo à atribuição"
          subtitle="Inventário premium, segmentação precisa e mensuração completa para escalar seu app na TV."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
