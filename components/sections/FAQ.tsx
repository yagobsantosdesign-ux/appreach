"use client";

import React, { useState } from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import FAQItem from "@/components/ui/FAQItem";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    question: "Quais tipos de apps vocês atendem?",
    answer: "Atendemos apps de todas as verticais: finanças, saúde, e-commerce, games, educação, mobilidade e mais. Nossa abordagem é adaptada ao modelo de negócio e ao estágio de crescimento de cada app, independente do segmento.",
  },
  {
    question: "Qual é o investimento mínimo em mídia?",
    answer: "Trabalhamos com budgets a partir de R$ 30.000/mês em mídia. Esse volume permite ativação de múltiplos canais com volume suficiente para otimização estatística e resultados consistentes.",
  },
  {
    question: "Em quanto tempo começo a ver resultados?",
    answer: "As primeiras semanas são de aprendizado e calibração das campanhas. Resultados mais consistentes surgem entre a 4ª e 8ª semana, quando os algoritmos já têm dados suficientes para operar com eficiência máxima.",
  },
  {
    question: "Como funciona o contrato? Tem fidelidade?",
    answer: "Trabalhamos com contratos mensais renováveis. Não exigimos fidelidade de longo prazo. Acreditamos que a relação deve se sustentar pelos resultados. O período mínimo recomendado é de 3 meses para uma avaliação justa de performance.",
  },
  {
    question: "O que diferencia a Appreach de outras agências?",
    answer: "Somos especializados exclusivamente em apps. Não atendemos e-commerces, marcas ou outros segmentos. Todo o nosso conhecimento, metodologia e ferramentas foram construídos para os desafios específicos do mercado de aplicativos.",
  },
  {
    question: "Como são feitos os relatórios de performance?",
    answer: "Entregamos relatórios semanais com os principais KPIs (CPI, CPA, ROAS, LTV) e realizamos reuniões quinzenais de alinhamento estratégico. Todos os dados são consolidados em um dashboard em tempo real com acesso exclusivo do cliente.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: listRef, visible: listVisible } = useInView();

  return (
    <section className="faq-section relative pt-12 lg:pt-16" style={{ background: "#fafafa", paddingBottom: "280px", paddingLeft: "40px", paddingRight: "40px" }}>

      {/* Blob roxo */}
      <div style={{ position: "absolute", top: "48%", left: "50%", transform: "translate(-70%, -50%)", width: "700px", height: "700px", background: "radial-gradient(ellipse, rgba(130,100,255,0.22) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      {/* Blob azul */}
      <div style={{ position: "absolute", top: "48%", left: "50%", transform: "translate(-30%, -40%)", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(80,140,255,0.18) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      <div className="relative" style={{ maxWidth: "1350px", margin: "0 auto", zIndex: 1 }}>

        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mx-auto reveal${headerVisible ? " visible" : ""}`}
          style={{ maxWidth: "560px", marginBottom: "56px" }}
        >
          <SectionBadge>FAQ</SectionBadge>
          <h2
            className="mt-3"
            style={{ fontSize: "clamp(28px, 6.5vw, 48px)", color: "#251d49", letterSpacing: "-0.02em", lineHeight: "120%", textWrap: "balance", maxWidth: "380px", margin: "12px auto 0" } as React.CSSProperties}
          >
            Perguntas frequentes
          </h2>
          <p
            className="mt-4 leading-relaxed"
            style={{ fontSize: "15px", color: "var(--color-muted)", textWrap: "balance" } as React.CSSProperties}
          >
            Reunimos as dúvidas mais comuns de quem está considerando escalar o seu app com a Appreach.
          </p>
        </div>

        {/* FAQ list */}
        <div
          ref={listRef as React.RefObject<HTMLDivElement>}
          className={`faq-list mx-auto flex flex-col reveal${listVisible ? " visible" : ""}`}
          style={{ maxWidth: "800px", gap: "12px", "--reveal-delay": "0.1s" } as React.CSSProperties}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
