"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Experiência fluida e nativa",
    description:
      "Formatos que se integram ao conteúdo do app, respeitando a experiência do usuário e reduzindo o atrito.",
    bullets: [
      "Anúncios no formato do ambiente",
      "Menos atrito, mais aceitação",
      "Aderência visual ao conteúdo",
    ],
  },
  {
    title: "Contexto de alta relevância",
    description:
      "Veiculação em ambientes relevantes para o usuário, aumentando a chance de conversão.",
    bullets: [
      "Inventário contextualizado",
      "Impacto em momentos reais de uso",
      "Segmentação por interesse e comportamento",
    ],
  },
  {
    title: "Novas audiências e fontes de tráfego",
    description:
      "Acesso a diferentes fontes de tráfego para alcançar audiências além das redes tradicionais.",
    bullets: [
      "Múltiplas fontes de tráfego",
      "Alcance de novas audiências",
      "Escala fora do duopólio",
    ],
  },
  {
    title: "Performance mensurável",
    description:
      "Cada veiculação rastreada e otimizada por evento, com integração aos principais MMPs.",
    bullets: [
      "Tracking por evento in-app",
      "Integração com AppsFlyer e Adjust",
      "Otimização por conversão",
    ],
  },
];

export default function NativeAdsPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="Native Ads"
          title={<>Anúncios que parecem parte do app, não interrupção</>}
          subtitle="Publicidade nativa exibida dentro de apps móveis, impactando o usuário em momentos reais de uso, com mais engajamento e menos atrito."
          image={{ src: "/native-ads-mockup.webp", alt: "Telas de apps com anúncios nativos integrados" }}
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Engajamento dentro do momento de uso"
          subtitle="Da integração nativa à mensuração, entregamos publicidade que conversa com o usuário sem interromper."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
