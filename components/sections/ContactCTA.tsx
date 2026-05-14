"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

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
    <section id="contato" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="font-semibold uppercase tracking-widest text-muted" style={{ fontSize: "12px", fontFamily: "var(--font-geist-mono)" }}>
              Fale com a gente
            </p>
            <h2 className="font-medium text-dark leading-tight" style={{ fontSize: "48px" }}>
              Pronto para escalar o seu app?
            </h2>
            <p className="text-body leading-relaxed" style={{ fontSize: "16px" }}>
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
                <div key={item} className="flex items-center gap-3 text-sm text-body">
                  <div className="w-5 h-5 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-muted" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border p-8">
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
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Enviar mensagem
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
