"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/sections/product/ProductHero";
import ProductFeatures from "@/components/sections/product/ProductFeatures";
import SectionBadge from "@/components/ui/SectionBadge";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Accordion from "@/components/ui/Accordion";

const features = [
  {
    title: "Segmentação baseada em intenção",
    description:
      "Identificamos e alcançamos usuários com maior potencial de conversão usando dados de comportamento e eventos reais dentro do app.",
    bullets: [
      "First-party data e eventos in-app",
      "Audiências atualizadas em tempo real",
      "Usuários com maior potencial de LTV",
    ],
    image: { src: "/ua-feature-1b.webp", alt: "Painéis com métricas de usuários, installs e canais de aquisição" },
  },
  {
    title: "Criativos orientados por performance",
    description:
      "Combinamos criatividade e dados para identificar rapidamente o que gera instalações, retenção e receita.",
    bullets: [
      "Testes e otimizações contínuas",
      "Análise de performance em cada etapa do funil",
      "Criativos desenvolvidos para growth mobile",
    ],
    image: { src: "/ua-creativos-mockup-b.webp", alt: "Teste A/B de criativos com o vencedor em destaque" },
  },
  {
    title: "Tracking completo da jornada do usuário",
    description:
      "Integramos seu app às principais plataformas de mensuração para acompanhar instalações, eventos e conversões com precisão.",
    bullets: [
      "Implementação simplificada",
      "Integração com as principais MMPs",
      "Dados automatizados para tomada de decisão",
    ],
    image: { src: "/ua-feature-3.webp", alt: "Logos das principais MMPs e plataformas integradas" },
  },
  {
    title: "Otimização por eventos de conversão",
    description:
      "Direcionamos investimentos para os canais, públicos e campanhas com maior potencial de retorno com base em sinais reais de conversão e receita.",
    bullets: [
      "Ajustes contínuos de performance",
      "Acompanhamento recorrente dos resultados",
      "Otimização baseada em receita e LTV",
    ],
    image: { src: "/ua-feature-4.webp", alt: "Gráfico de performance em alta com otimização por eventos" },
  },
];

function CheckBullet({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
      <span
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "var(--color-primary)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: "2px",
        }}
      >
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "160%" }}>{children}</span>
    </li>
  );
}

function SubProduct({ description, bullets, placeholderLabel, image }: { description: string; bullets: string[]; placeholderLabel: string; image?: { src: string; alt: string } }) {
  const mediaStyle = { flex: "0 0 40%", maxWidth: "420px", width: "100%", aspectRatio: "4/3", borderRadius: "16px" } as React.CSSProperties;
  return (
    <div className="flex flex-col lg:flex-row" style={{ gap: "32px", alignItems: "center" }}>
      <div style={{ flex: "1 1 auto", minWidth: 0 }}>
        <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "160%", marginBottom: "20px", maxWidth: "460px" }}>
          {description}
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
          {bullets.map((b) => (
            <CheckBullet key={b}>{b}</CheckBullet>
          ))}
        </ul>
      </div>
      {image ? (
        <div className="accordion-media" style={{ ...mediaStyle, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} alt={image.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      ) : (
        <ImagePlaceholder label={placeholderLabel} className="accordion-media" style={mediaStyle} />
      )}
    </div>
  );
}

const subProducts = [
  {
    id: "native-ads",
    title: "Native Ads & Mídia Programática",
    content: (
      <SubProduct
        description="Anuncie seu app dentro de aplicativos, sites e plataformas digitais frequentadas pelo seu público. Os anúncios são exibidos de forma integrada ao conteúdo, gerando mais atenção, melhor experiência e maiores chances de conversão."
        bullets={[
          "Formatos integrados à experiência do usuário",
          "Segmentação por interesses, comportamento e contexto",
          "Alcance escalável em milhares de aplicativos e sites",
        ]}
        placeholderLabel="Anúncio nativo integrado ao feed de um app (mockup de celular)"
        image={{ src: "/ua-sub-native-ads.webp", alt: "Anúncio nativo integrado ao feed de um app" }}
      />
    ),
  },
  {
    id: "preload",
    title: "Preload (Pré-instalação)",
    content: (
      <SubProduct
        description="Amplie sua distribuição com seu aplicativo pré-instalado em dispositivos Android, facilitando o acesso e acelerando a aquisição de usuários."
        bullets={[
          "Aplicativo pronto para uso desde a ativação do dispositivo",
          "Mais oportunidades de abertura e engajamento",
          "Escala de distribuição com alto potencial de alcance",
        ]}
        placeholderLabel="Smartphone Android novo com app já instalado na tela inicial"
        image={{ src: "/ua-sub-preload.webp", alt: "App pré-instalado na tela inicial do dispositivo" }}
      />
    ),
  },
  {
    id: "push-ads",
    title: "Push Ads",
    content: (
      <SubProduct
        description="Impacte usuários em tempo real com mensagens relevantes e altamente segmentadas, aumentando o engajamento e as oportunidades de conversão."
        bullets={[
          "Segmentação avançada por perfil e comportamento",
          "Alto potencial de visibilidade e abertura",
          "Personalização por audiência e contexto",
        ]}
        placeholderLabel="Notificação push na tela de bloqueio do celular"
        image={{ src: "/ua-sub-push.webp", alt: "Notificação push na tela de bloqueio do celular" }}
      />
    ),
  },
  {
    id: "aso",
    title: "Auditoria e Estratégia Contínua de ASO",
    content: (
      <SubProduct
        description="Transforme a página do seu aplicativo em uma máquina de aquisição orgânica com uma estratégia contínua de ASO baseada em dados e comportamento de busca."
        bullets={[
          "Monitoramento de rankings e concorrentes",
          "Estratégia contínua de keywords",
          "Otimização da conversão na App Store e Google Play",
        ]}
        placeholderLabel="Página de app na App Store / Google Play com destaque de ranking e keywords"
        image={{ src: "/ua-sub-aso.webp", alt: "Página do app na loja com selo de ranking e destaque" }}
      />
    ),
  },
];

export default function UAPage() {
  return (
    <>
      <Header />
      <main className="ua-page" style={{ background: "#ffffff" }}>

        <ProductHero
          badge="User Acquisition"
          title={
            <>
              Mais installs.<br />Menor custo<br />por aquisição
            </>
          }
          subtitle="Atraia usuários qualificados com estratégias orientadas por dados, criativos de alta performance e otimização contínua para escalar resultados."
          image={{ src: "/ua-hero-mockup-b.webp", alt: "Ilustração de gráfico de aquisição por fontes de usuários" }}
        />

        <ProductFeatures
          badge="O que entregamos"
          title="Tudo o que você precisa para crescer com eficiência"
          subtitle="Da segmentação à otimização, conectamos estratégia, dados e execução para atrair usuários com maior potencial de valor."
          features={features}
        />

        {/* ── Estratégias que complementam o UA ── */}
        <section className="ua-strategies-section" style={{ background: "#fafafa", padding: "96px 0" }}>
          <div className="product-container">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <SectionBadge>Faz parte da estratégia de UA</SectionBadge>
              </div>
              <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "var(--color-heading)", maxWidth: "640px", margin: "0 auto 16px", lineHeight: "120%", textWrap: "balance" as never }}>
                Estratégias complementares
              </h2>
              <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: "160%", maxWidth: "520px", margin: "0 auto" }}>
                Soluções que ampliam alcance, aumentam descoberta e fortalecem sua estratégia de aquisição.
              </p>
            </div>
            <Accordion items={subProducts} />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
