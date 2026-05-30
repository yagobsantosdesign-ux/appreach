"use client";

import React, { useState } from "react";

const FIELD: React.CSSProperties = {
  width: "100%",
  height: "48px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  fontSize: "15px",
  padding: "0 16px",
  outline: "none",
  transition: "border-color 0.15s, background 0.15s",
  appearance: "none",
  WebkitAppearance: "none",
};

export default function ContactCTA() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then(() => setSent(true))
      .catch(() => setSent(true));
  }

  return (
    <section id="contato" className="contact-cta-section" style={{ background: "#ffffff", padding: "80px 40px" }}>
      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>

        <div
          className="contact-cta-banner"
          style={{
            background: "linear-gradient(145deg, #1E1640 0%, #2D1F5E 55%, #1a1438 100%)",
            borderRadius: "28px",
            padding: "64px 56px",
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Blob decorativo */}
          <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(101,87,234,0.30) 0%, transparent 65%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "560px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", textAlign: "center" }}>
            {/* Badge */}
            <span style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              color: "#9B91FF",
              background: "rgba(155,145,255,0.15)",
              border: "1px solid rgba(155,145,255,0.25)",
              borderRadius: "99px",
              padding: "5px 14px",
            }}>
              Fale com a gente
            </span>

            <h2
              style={{ fontSize: "clamp(32px, 4.5vw, 48px)", letterSpacing: "-0.02em", lineHeight: "120%", color: "white", textWrap: "balance" } as React.CSSProperties}
            >
              Pronto para escalar o seu app?
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.60)", maxWidth: "380px", textWrap: "balance" } as React.CSSProperties}>
              Fale com a nossa equipe e descubra a estratégia certa para o seu momento de crescimento, sem custo e sem compromisso.
            </p>

            {sent ? (
              <div style={{ color: "white", fontSize: "18px", fontWeight: 600, padding: "24px 0" }}>
                Recebemos! Em breve nossa equipe entrará em contato.
              </div>
            ) : (
              <form
                name="contato"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}
              >
                <input type="hidden" name="form-name" value="contato" />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <input
                    name="nome"
                    type="text"
                    placeholder="Nome"
                    required
                    style={FIELD}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(155,145,255,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="E-mail profissional"
                    required
                    style={FIELD}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(155,145,255,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <input
                    name="whatsapp"
                    type="tel"
                    placeholder="WhatsApp (opcional)"
                    style={FIELD}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(155,145,255,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                  />
                  <input
                    name="app"
                    type="text"
                    placeholder="Seu app"
                    required
                    style={FIELD}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(155,145,255,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                  />
                </div>

                <div style={{ position: "relative" }}>
                  <select
                    name="objetivo"
                    required
                    defaultValue=""
                    style={{
                      ...FIELD,
                      cursor: "pointer",
                      paddingRight: "40px",
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(155,145,255,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                  >
                    <option value="" disabled style={{ color: "#888", background: "#1e1640" }}>
                      Qual seu principal objetivo hoje?
                    </option>
                    <option value="aumentar-installs" style={{ color: "white", background: "#1e1640" }}>Aumentar installs</option>
                    <option value="melhorar-roas" style={{ color: "white", background: "#1e1640" }}>Melhorar ROAS</option>
                    <option value="reduzir-cac" style={{ color: "white", background: "#1e1640" }}>Reduzir CAC</option>
                    <option value="escalar-receita" style={{ color: "white", background: "#1e1640" }}>Escalar receita</option>
                  </select>
                  {/* Chevron do select */}
                  <svg
                    aria-hidden
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "rgba(255,255,255,0.5)" }}
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: "4px",
                    height: "52px",
                    borderRadius: "12px",
                    background: "#6557ea",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "-0.32px",
                    border: "none",
                    cursor: "pointer",
                    transition: "opacity 0.2s ease, transform 0.15s ease",
                    width: "100%",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = ""; }}
                >
                  Quero escalar meu app
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
