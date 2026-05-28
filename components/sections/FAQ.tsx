"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    question: "Quais tipos de apps vocês atendem?",
    answer: "Atendemos apps de todas as verticais — finanças, saúde, e-commerce, games, educação, mobilidade e mais. Nossa abordagem é adaptada ao modelo de negócio e ao estágio de crescimento de cada app, independente do segmento.",
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
    answer: "Trabalhamos com contratos mensais renováveis. Não exigimos fidelidade de longo prazo — acreditamos que a relação deve se sustentar pelos resultados. O período mínimo recomendado é de 3 meses para uma avaliação justa de performance.",
  },
  {
    question: "O que diferencia a Appreach de outras agências?",
    answer: "Somos especializados exclusivamente em apps — não atendemos e-commerces, marcas ou outros segmentos. Todo o nosso conhecimento, metodologia e ferramentas foram construídos para os desafios específicos do mercado de aplicativos.",
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
    <section className="faq-section relative py-24 lg:py-32" style={{ background: "#fafafa", paddingBottom: "280px", paddingLeft: "40px", paddingRight: "40px" }}>

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
            className="text-dark mt-3"
            style={{ fontSize: "clamp(28px, 6.5vw, 48px)", letterSpacing: "-0.02em", lineHeight: "120%", textWrap: "balance", maxWidth: "380px", margin: "12px auto 0" } as React.CSSProperties}
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
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                }}
              >
                <button
                  className="w-full flex items-center gap-4 text-left"
                  style={{ padding: "20px 24px", cursor: "pointer", background: "none", border: "none" }}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {/* Question */}
                  <span style={{
                    flex: 1,
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "-0.3px",
                    color: "var(--color-dark)",
                    lineHeight: 1.35,
                    fontFamily: "var(--font-heading)",
                  }}>
                    {faq.question}
                  </span>

                  {/* Chevron circle */}
                  <span style={{
                    flexShrink: 0,
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}>
                    <ChevronDown size={16} strokeWidth={2} />
                  </span>
                </button>

                {/* Answer */}
                <div style={{
                  maxHeight: isOpen ? "300px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}>
                  <p style={{
                    padding: "0 24px 22px",
                    paddingLeft: "74px",
                    fontSize: "14px",
                    color: "var(--color-muted)",
                    lineHeight: 1.75,
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
