"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Auditoria e estratégia de ASO",
    description:
      "Análise completa da sua presença nas lojas e uma estratégia estruturada para evoluir posicionamento e conversão.",
    bullets: [
      "Diagnóstico de performance e concorrência",
      "Oportunidades de ranking e descoberta",
      "Recomendações de título, descrição e criativos",
    ],
  },
  {
    title: "Otimização de conversão na página",
    description:
      "Trabalhamos cada elemento da página do app para transformar visita em download.",
    bullets: [
      "Ícone, screenshots e vídeo",
      "Título, subtítulo e descrição",
      "Curadoria de criativos da store",
    ],
  },
  {
    title: "Testes e evolução contínua",
    description:
      "Implementação e validação contínua de melhorias, com decisões baseadas em dados reais.",
    bullets: [
      "Testes A/B de elementos da página",
      "Otimização por comportamento do usuário",
      "Evolução contínua de visibilidade",
    ],
  },
  {
    title: "Crescimento orgânico que soma à mídia",
    description:
      "Aquisição paga e orgânico trabalhando juntos para escalar o crescimento com mais eficiência.",
    bullets: [
      "Sinergia entre mídia e orgânico",
      "Cobertura em App Store e Google Play",
      "Ganho de relevância e ranking",
    ],
  },
];

export default function ASOPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="ASO: App Store Optimization"
          title={<>Mais downloads orgânicos, sem depender só de mídia.</>}
          subtitle="Otimização estratégica e contínua nas lojas (App Store e Google Play) para melhorar posicionamento, conversão e descoberta do seu app."
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Sua presença nas lojas como canal de crescimento"
          subtitle="Da auditoria à evolução contínua, melhoramos descoberta, conversão e relevância do seu app."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
