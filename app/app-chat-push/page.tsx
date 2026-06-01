"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";

const features = [
  {
    title: "Segmentação por ciclo de vida",
    description:
      "Dispare a mensagem certa para cada momento do usuário, do onboarding ao risco de churn, com base no comportamento real dentro do app.",
    bullets: [
      "Segmentos por evento e inatividade",
      "Gatilhos por etapa do funil",
      "Exclusão de usuários já convertidos",
    ],
  },
  {
    title: "Mensagens push e in-app personalizadas",
    description:
      "Conteúdo adaptado ao contexto de cada usuário, com deep link direto para a ação que importa.",
    bullets: [
      "Push, in-app e rich media",
      "Deep link para o ponto de conversão",
      "Personalização por segmento e idioma",
    ],
  },
  {
    title: "Automação por gatilho",
    description:
      "Fluxos automáticos que reagem ao comportamento em tempo real, sem depender de envios manuais.",
    bullets: [
      "Jornadas automatizadas por evento",
      "Testes A/B de mensagem e horário",
      "Frequência controlada por usuário",
    ],
  },
  {
    title: "Mensuração de reativação e LTV",
    description:
      "Relatórios que mostram o impacto real na reativação, na retenção e na receita por usuário.",
    bullets: [
      "Taxa de reativação por campanha",
      "Impacto em retenção e LTV",
      "Atribuição de receita pós-mensagem",
    ],
  },
];

export default function PushAdsPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>

        <ProductHero
          badge="Push Ads"
          title={<>Reative usuários na hora certa, fora do app.</>}
          subtitle="Notificações push e mensagens in-app que trazem o usuário de volta, aumentam a retenção e elevam o LTV do seu app."
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Mensagens que reativam e convertem"
          subtitle="Da segmentação por ciclo de vida à automação por gatilho, cada mensagem é disparada no momento de maior impacto."
          features={features}
        />

      </main>
      <Footer />
    </>
  );
}
