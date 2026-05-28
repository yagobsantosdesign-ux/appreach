"use client";

import SectionBadge from "@/components/ui/SectionBadge";

const INPUT: React.CSSProperties = {
  width: "100%",
  background: "#F7F7F9",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "12px",
  padding: "13px 16px",
  fontSize: "15px",
  color: "#141414",
  outline: "none",
  transition: "border-color 0.15s",
};

const LABEL: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#3D3D4A",
  marginBottom: "6px",
  display: "block",
};

export default function ContactForm() {
  return (
    <section className="contact-form-section py-12 lg:py-16" style={{ background: "transparent", paddingLeft: "40px", paddingRight: "40px" }}>
      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(145deg, #9B91FF 0%, #6557EA 100%)",
            borderRadius: "32px",
            padding: "64px 72px",
            display: "flex",
            gap: "80px",
            alignItems: "stretch",
            boxShadow: "0 8px 40px rgba(101,87,234,0.30)",
          }}
          className="contact-form-wrapper flex-col lg:flex-row"
        >

          {/* Left — copy */}
          <div style={{ flex: "0 0 auto", maxWidth: "380px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div className="inline-flex items-center mb-4" style={{ gap: "8px" }}>
              <span style={{ display: "inline-block", width: "20px", height: "1.5px", background: "rgba(255,255,255,0.6)", flexShrink: 0 }} />
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", letterSpacing: "1px", fontWeight: 600, fontFamily: "var(--font-geist-mono)", textTransform: "uppercase" }}>
                Fale com a gente
              </span>
            </div>
            <h2
              className=""
              style={{ fontSize: "40px", letterSpacing: "-0.02em", lineHeight: "120%", color: "white", textWrap: "balance" as never }}
            >
              Pronto para escalar o seu app?
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.70)", lineHeight: 1.65, marginTop: "16px" }}>
              Conte sobre o seu app e seus objetivos. Nossa equipe vai analisar o seu momento e indicar as estratégias mais indicadas — sem custo e sem compromisso.
            </p>
            <ul style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0 }}>
              {[
                "Diagnóstico gratuito do seu funil",
                "Estratégia personalizada por vertical",
                "Relatórios transparentes com dados reais",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "rgba(255,255,255,0.85)" }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Rodapé: resposta rápida + contato direto */}
            <div style={{ paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 600, letterSpacing: "-0.1px" }}>
                  Retorno em até 24h
                </span>
              </div>
              <a
                href="mailto:contato@appreach.com.br"
                style={{ color: "rgba(255,255,255,0.60)", fontSize: "14px", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.60)")}
              >
                contato@appreach.com.br
              </a>
            </div>
          </div>

          {/* Right — form card */}
          <div
            style={{
              flex: 1,
              background: "white",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
            }}
          >
            <form
              name="contato"
              method="POST"
              data-netlify="true"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <input type="hidden" name="form-name" value="contato" />

              {/* Nome + E-mail */}
              <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={LABEL}>Nome</label>
                  <input name="nome" type="text" placeholder="Seu nome" required style={INPUT}
                    onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")}
                  />
                </div>
                <div>
                  <label style={LABEL}>E-mail</label>
                  <input name="email" type="email" placeholder="seu@email.com" required style={INPUT}
                    onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")}
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label style={LABEL}>WhatsApp</label>
                <input name="whatsapp" type="tel" placeholder="+55 (11) 99999-9999" style={INPUT}
                  onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")}
                />
              </div>

              {/* App */}
              <div>
                <label style={LABEL}>Qual app você quer escalar?</label>
                <input name="app" type="text" placeholder="Nome ou link do app" style={INPUT}
                  onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")}
                />
              </div>

              {/* Mensagem */}
              <div>
                <label style={LABEL}>Mensagem (opcional)</label>
                <textarea
                  name="mensagem"
                  placeholder="Conte mais sobre seus objetivos..."
                  rows={4}
                  style={{ ...INPUT, resize: "none" as never, lineHeight: 1.6 }}
                  onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "linear-gradient(145deg, #9B91FF 0%, #6557EA 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "15px 24px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  letterSpacing: "-0.2px",
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Enviar mensagem
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
