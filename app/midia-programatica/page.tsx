"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Compra multicanal via DSP",
    description:
      "Acesso a display, vídeo, native e áudio em escala, com curadoria de inventário e brand safety garantido.",
    bullets: [
      "Display, vídeo, native e áudio",
      "Inventário premium com brand safety",
      "Cobertura cross-device",
    ],
  },
  {
    title: "Segmentação com dados de 1ª parte",
    description:
      "Audiences construídas sobre dados próprios e eventos in-app para falar com quem tem real potencial de conversão.",
    bullets: [
      "Dados de 1ª parte e eventos in-app",
      "Lookalike por perfil de alto LTV",
      "Segmentos contextuais e por intenção",
    ],
  },
  {
    title: "Otimização por ML em tempo real",
    description:
      "Lances ajustados automaticamente por CPI, ROAS e LTV, sem desperdício em impressões de baixo valor.",
    bullets: [
      "Bid automático por meta de receita",
      "Otimização contínua de inventário",
      "Controle de frequência e custo",
    ],
  },
  {
    title: "Transparência e mensuração completa",
    description:
      "Relatórios claros de onde cada real foi investido, com atribuição integrada aos principais MMPs.",
    bullets: [
      "Relatórios de mídia transparentes",
      "Integração com AppsFlyer e Adjust",
      "Atribuição e incrementalidade",
    ],
  },
];

export default function MidiaProgramaticaPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="Mídia Programática"
          title={<>Compra de mídia em escala, guiada por dados.</>}
          subtitle="Mídia programática multicanal com dados de 1ª parte para alcançar o usuário certo, no momento certo, com eficiência."
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Escala com precisão e transparência"
          subtitle="Da compra multicanal à mensuração, entregamos mídia programática orientada a dados e a resultado real."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
