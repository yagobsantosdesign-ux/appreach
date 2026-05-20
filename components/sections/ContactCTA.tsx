"use client";

import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contato" className="py-16 lg:py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        {/* Gradient banner card */}
        <div
          className="relative overflow-hidden rounded-[28px] flex flex-col items-center justify-center text-center px-8 py-20 lg:py-28"
          style={{
            background: "linear-gradient(135deg, #4338ca 0%, #6557EA 45%, #8b78f8 80%, #a78bfa 100%)",
          }}
        >
          {/* Blob shapes internos */}
          <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-15%", right: "-5%", width: "700px", height: "700px", background: "radial-gradient(ellipse, rgba(120,80,255,0.35) 0%, transparent 60%)", pointerEvents: "none" }} />

          {/* Conteúdo */}
          <div className="relative flex flex-col items-center gap-5" style={{ maxWidth: "620px" }}>
            <h2
              className="text-white font-medium leading-tight"
              style={{ fontSize: "clamp(36px, 5vw, 52px)", letterSpacing: "-1.5px", textWrap: "balance" }}
            >
              Pronto para escalar o seu app?
            </h2>
            <p
              style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.70)" }}
            >
              Fale com a nossa equipe e descubra a estratégia certa para o seu momento de crescimento — sem custo e sem compromisso.
            </p>
            <a
              href="mailto:fale@appreach.com.br"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all duration-200 hover:gap-3 hover:shadow-lg mt-2"
              style={{
                background: "#ffffff",
                color: "#1A0052",
                fontSize: "15px",
                letterSpacing: "-0.2px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              Falar com especialista
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Form Netlify oculto — mantém funcionalidade de captura */}
        <form name="contato" method="POST" data-netlify="true" style={{ display: "none" }}>
          <input type="hidden" name="form-name" value="contato" />
          <input name="nome" type="text" />
          <input name="email" type="email" />
          <input name="whatsapp" type="tel" />
          <input name="app" type="text" />
          <textarea name="mensagem" />
        </form>

      </div>
    </section>
  );
}
