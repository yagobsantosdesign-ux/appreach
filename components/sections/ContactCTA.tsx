"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    });

    setSubmitted(true);
  };

  return (
    <section
      id="contato"
      className="py-24 lg:py-32"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — white copy */}
          <div className="space-y-6">
            <SectionBadge>Vamos Conversar</SectionBadge>

            <h2
              className="font-medium leading-tight text-dark"
              style={{ fontSize: "48px", letterSpacing: "-1.92px" }}
            >
              Pronto para escalar o seu app?
            </h2>

            <p style={{ fontSize: "16px", color: "var(--color-body)", lineHeight: 1.7 }}>
              Conte sobre o seu app e seus objetivos. Nossa equipe vai analisar
              o seu momento e indicar as estratégias mais indicadas — sem custo
              e sem compromisso.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Diagnóstico gratuito do seu funil",
                "Estratégia personalizada por vertical",
                "Relatórios transparentes com dados reais",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                  <span style={{ fontSize: "15px", color: "var(--color-body)" }}>{item}</span>
                </div>
              ))}
            </div>

            <div
              className="flex gap-8 pt-4"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div>
                <p className="font-semibold text-dark" style={{ fontSize: "24px" }}>100+</p>
                <p className="text-muted" style={{ fontSize: "13px" }}>Apps escalados</p>
              </div>
              <div style={{ borderLeft: "1px solid var(--color-border)", paddingLeft: "32px" }}>
                <p className="font-semibold text-dark" style={{ fontSize: "24px" }}>R$500M+</p>
                <p className="text-muted" style={{ fontSize: "13px" }}>Em mídia gerenciada</p>
              </div>
            </div>
          </div>

          {/* Right — floating white form card */}
          <div
            className="bg-white rounded-[24px] p-8"
            style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)", border: "1px solid var(--color-border)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                <CheckCircle size={48} className="text-success" />
                <h3 className="text-xl font-medium text-dark">Mensagem enviada!</h3>
                <p className="text-body text-sm">
                  Recebemos seu contato e entraremos em breve.
                </p>
              </div>
            ) : (
              <form
                name="contato"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contato" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-dark" htmlFor="nome">
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-dark placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-dark" htmlFor="email">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-dark placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-dark" htmlFor="whatsapp">
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="+55 (11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-dark placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-dark" htmlFor="app">
                    Qual app você quer escalar?
                  </label>
                  <input
                    id="app"
                    name="app"
                    type="text"
                    required
                    placeholder="Nome ou link do app"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-dark placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-dark" htmlFor="mensagem">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={3}
                    placeholder="Conte mais sobre seus objetivos..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-dark placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-semibold text-sm shadow-hover hover:brightness-110 transition-all duration-200"
                  style={{ boxShadow: "0 8px 14px rgba(101,87,234,0.3)" }}
                >
                  Enviar mensagem
                  <Send size={15} />
                </button>

                <p
                  className="text-center"
                  style={{ fontSize: "12px", color: "var(--color-muted)" }}
                >
                  Resposta em até 24h · Sem compromisso
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
