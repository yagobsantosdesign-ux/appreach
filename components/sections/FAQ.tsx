"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

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

  return (
    <section className="relative py-24 lg:py-32" style={{ background: "transparent" }}>

      {/* Blob roxo — centro-esquerda */}
      <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-70%, -50%)", width: "700px", height: "700px", background: "radial-gradient(ellipse, rgba(130,100,255,0.22) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      {/* Blob azul — centro-direita */}
      <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translate(-30%, -40%)", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(80,140,255,0.18) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      <div className="relative max-w-[1300px] mx-auto px-4 lg:px-16" style={{ zIndex: 1 }}>

        {/* Header */}
        <div className="text-center mx-auto mb-10" style={{ maxWidth: "560px" }}>
          <SectionBadge>FAQ</SectionBadge>
          <h2
            className="font-medium text-dark leading-tight mt-3"
            style={{ fontSize: "48px", letterSpacing: "-1.92px", lineHeight: "110%", textWrap: "balance", maxWidth: "380px", margin: "0 auto" } as React.CSSProperties}
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

        {/* Container externo — mais transparente */}
        <div
          className="mx-auto"
          style={{
            maxWidth: "640px",
            height: "520px",
            overflow: "hidden",
            background: "rgba(255, 255, 255, 0.28)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "28px",
            border: "1px solid rgba(255, 255, 255, 0.50)",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              /* Card individual por pergunta */
              <div
                key={i}
                className="overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.72)",
                  borderRadius: "18px",
                  border: "1px solid rgba(255, 255, 255, 0.90)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-6 text-left group"
                  style={{ padding: "20px 24px" }}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span
                    className="font-medium text-dark transition-colors duration-200 group-hover:text-[var(--color-primary)]"
                    style={{ fontSize: "16px", letterSpacing: "-0.3px", fontFamily: "var(--font-heading)", lineHeight: 1.3 }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 transition-colors duration-200"
                    style={{ color: isOpen ? "var(--color-primary)" : "var(--color-muted)" }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <p
                    className="leading-relaxed"
                    style={{ padding: "0 24px 20px", fontSize: "14px", color: "var(--color-muted)", lineHeight: 1.75 }}
                  >
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
