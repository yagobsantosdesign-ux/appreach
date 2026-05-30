"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Inventário premium de streaming",
    description:
      "Acesso a publishers premium de TV conectada e plataformas de streaming com alta viewability e brand safety garantido.",
    bullets: [
      "Top publishers de streaming e AVOD",
      "Conteúdo qualificado com brand safety",
      "Alta viewability e completion rate",
    ],
  },
  {
    title: "Segmentação avançada de audiência",
    description:
      "Alcance o perfil exato de quem vai instalar seu app, combinando dados demográficos, interesses e comportamentos.",
    bullets: [
      "Dados demográficos e por interesse",
      "Targeting por app instalado no device",
      "Segmentos customizados por funil",
    ],
  },
  {
    title: "Mensuração completa com MMP",
    description:
      "QR code dinâmico, deep link e integração nativa com MMP para rastrear cada conversão originada na TV.",
    bullets: [
      "QR code dinâmico por audiência",
      "Deep link com atribuição precisa",
      "Integração nativa com AppsFlyer e Adjust",
    ],
  },
  {
    title: "Atribuição cross-device",
    description:
      "Conectamos a exposição na TV ao install no celular com household graph e relatórios de incrementalidade.",
    bullets: [
      "Household graph para atribuição",
      "Relatórios de incrementalidade",
      "Cohort analysis pós-exposição",
    ],
  },
];

export default function CTVPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="CTV: Connected TV"
          title={<>Alcance seu usuário na maior tela da casa.</>}
          subtitle="Campanhas de Connected TV para apps mobile, alcance audiências premium enquanto assistem ao conteúdo favorito."
        />

        <ProductFeatures
          badge="O que entregamos"
          title="CTV de ponta a ponta, do criativo à atribuição"
          subtitle="Inventário premium, segmentação precisa e mensuração completa para escalar seu app na TV."
          features={features}
        />

        <FAQ />

      </main>
      <Footer />
    </>
  );
}
