"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
    image: { src: "/ctv-feature-1.webp", alt: "Smart TV exibindo catálogo de streaming com filmes e séries" },
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
    image: { src: "/ctv-feature-2.webp", alt: "Painel de segmentação de clientes com perfis e desempenho por segmento" },
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
    image: { src: "/ctv-feature-3.webp", alt: "Anúncio na TV com QR code para baixar o app e celular ao lado" },
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
    image: { src: "/ctv-feature-4.webp", alt: "Pessoa navegando no app no celular com a TV exibindo o mesmo catálogo ao fundo" },
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
          image={{ src: "/ctv-hero.webp", alt: "Família assistindo a streaming na smart TV na sala de estar" }}
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
