"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Posição em destaque na busca da App Store",
    description:
      "Apareça nos principais espaços da App Store quando usuários estiverem procurando soluções como a sua.",
    bullets: [
      "Search Results, Search Tab e Today Tab",
      "Custom Product Pages por audiência",
      "Cobertura de termos de marca e categoria",
    ],
    image: { src: "/apple-search-ads-feature-1.webp", alt: "Anúncios em destaque nos resultados, aba Buscar e aba Hoje da App Store" },
  },
  {
    title: "Usuários prontos para instalar",
    description:
      "Capture usuários que já demonstraram intenção ao pesquisar por aplicativos, categorias e keywords relacionadas ao seu produto.",
    bullets: [
      "Intenção declarada de busca",
      "Melhor retenção pós-instalação",
      "ROAS superior a canais de descoberta",
    ],
    image: { src: "/apple-search-ads-feature-2.webp", alt: "Otimização de instalação baseada na intenção de busca" },
  },
  {
    title: "Estratégia avançada de keywords",
    description:
      "Expandimos a cobertura de termos relevantes e refinamos continuamente as campanhas para capturar mais demanda qualificada.",
    bullets: [
      "Discovery e expansão de keywords",
      "Keyword sculpting e negativação",
      "Relatórios recorrentes de performance",
    ],
    image: { src: "/apple-search-ads-feature-3.webp", alt: "Mapa de expansão de keywords a partir de um termo central" },
  },
  {
    title: "Mais conversões com Custom Product Pages",
    description:
      "Aumente a eficiência das campanhas conectando cada keyword e audiência à experiência mais relevante dentro da App Store.",
    bullets: [
      "Landing pages personalizadas por campanha",
      "Mensagens adaptadas por intenção de busca",
      "Otimização contínua da conversão",
    ],
    image: { src: "/apple-search-ads-feature-4.webp", alt: "Página principal ramificando em Custom Product Pages por audiência" },
  },
];

export default function AppleSearchAdsPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="Apple Search Ads"
          title={<>Seja o 1º quando alguém busca seu app</>}
          subtitle="Alcance pessoas que já estão buscando aplicativos como o seu e transforme intenção em instalações de alta qualidade em iOS."
          image={{ src: "/apple-search-ads-mockup-b.webp", alt: "Resultado de busca com anúncio patrocinado em destaque" }}
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Presença total em iOS"
          subtitle="Uma operação especializada em Apple Search Ads para atrair usuários com maior potencial de conversão."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
