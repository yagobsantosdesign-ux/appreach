"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Posição em destaque na busca da App Store",
    description:
      "Apareça nos principais espaços da App Store quando usuários estiverem pesquisando categorias, marcas e necessidades relacionadas ao seu aplicativo.",
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
      "Maior eficiência em comparação a canais de descoberta",
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
      "Monitoramento contínuo de oportunidades",
    ],
    image: { src: "/apple-search-ads-feature-3.webp", alt: "Mapa de expansão de keywords a partir de um termo central" },
  },
  {
    title: "Mais conversões com Custom Product Pages",
    description:
      "Direcione cada audiência para a experiência mais relevante dentro da App Store e aumente as chances de conversão.",
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
          subtitle="Alcance usuários no momento em que eles demonstram intenção de instalar. Transforme buscas na App Store em instalações de alta qualidade para o seu aplicativo."
          image={{ src: "/apple-search-ads-mockup-b.webp", alt: "Resultado de busca com anúncio patrocinado em destaque" }}
        />

        <section style={{ background: "#f5f4ff", padding: "64px 40px" }}>
          <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
            <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", color: "var(--color-primary)", textTransform: "uppercase", marginBottom: "24px" }}>
              Por que Apple Search Ads?
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
              {[
                "Usuários com intenção declarada",
                "Menor distância entre descoberta e instalação",
                "Controle total da estratégia de keywords",
                "Crescimento previsível no ecossistema Apple",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span style={{ fontSize: "16px", color: "#251d49", fontWeight: 500, lineHeight: "150%" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductFeatures
          badge="O que entregamos"
          title="Da busca à instalação"
          subtitle="Uma operação especializada em Apple Search Ads para transformar intenção em crescimento previsível."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
