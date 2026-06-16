"use client";

import React, { useState } from "react";
import { INPUT, LABEL } from "@/components/ui/formStyles";

// ── Integração HubSpot (Forms Submission API) ──
// Portal ID e Form GUID NÃO são segredos (ficam expostos em qualquer embed do
// HubSpot), por isso vão como NEXT_PUBLIC. Defina-os em .env.local e na Vercel.
const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_GUID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID;

// Mapeia o name= de cada campo do form -> nome interno da propriedade no HubSpot.
// Ajuste o lado direito para bater com os campos criados no formulário do HubSpot.
const HUBSPOT_FIELD_MAP: Record<string, string> = {
  nome: "firstname",
  email: "email",
  whatsapp: "phone",
  cargo: "jobtitle",
  app: "app_url",     // propriedade custom no HubSpot
  cenario: "cenario", // propriedade custom no HubSpot
};

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const IconLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// Espelha o menu do navbar (Revisão v2): as 5 soluções removidas do menu
// (ASO, Native Ads, Push Ads, Preload, Mídia Programática) também saem do footer.
// As páginas seguem no ar por URL direta; o conteúdo delas vive na sanfona da UA.
const solutions = [
  { label: "User Acquisition", href: "/useracquisition-app" },
  { label: "Retargeting", href: "/retargeting" },
  { label: "CTV", href: "/ctv-connected-tv" },
  { label: "Apple Search Ads", href: "/apple-search-ads" },
  { label: "IA & Dados: Reach Lab", href: "/reach-lab" },
];

const company = [
  { label: "Sobre nós", href: "/quem-somos" },
  { label: "Carreiras", href: "/carreiras" },
];

export default function Footer({ hideContactForm = false }: { hideContactForm?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_GUID) {
      console.error("HubSpot não configurado: defina NEXT_PUBLIC_HUBSPOT_PORTAL_ID e NEXT_PUBLIC_HUBSPOT_FORM_GUID.");
      setStatus("error");
      return;
    }

    const data = new FormData(form);
    const fields = Object.entries(HUBSPOT_FIELD_MAP)
      .map(([campo, name]) => ({ name, value: String(data.get(campo) ?? "").trim() }))
      .filter((f) => f.value);

    setStatus("sending");
    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields,
            context: {
              pageUri: typeof window !== "undefined" ? window.location.href : "",
              pageName: typeof document !== "undefined" ? document.title : "",
            },
          }),
        }
      );
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
      form.reset();
    } catch (err) {
      console.error("Falha ao enviar para o HubSpot:", err);
      setStatus("error");
    }
  }

  return (
    <footer style={{
      background: "linear-gradient(145deg, #1E1640 0%, #2D1F5E 55%, #1a1438 100%)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      paddingLeft: "40px",
      paddingRight: "40px",
    }}>

      {/* ── Contact form card (oculto nas páginas de serviço) ── */}
      {!hideContactForm && (
      <div id="contato" className="footer-card-container max-w-[1350px] mx-auto" style={{ marginTop: "-260px", position: "relative", zIndex: 2, scrollMarginTop: "100px" }}>
        <div
          className="footer-contact-card flex flex-col lg:flex-row"
          style={{
            background: "linear-gradient(145deg, #9B91FF 0%, #6557EA 100%)",
            borderRadius: "32px",
            padding: "64px 72px",
            gap: "80px",
            alignItems: "stretch",
            boxShadow: "0 8px 40px rgba(101,87,234,0.30)",
          }}
        >
          {/* Left — copy */}
          <div style={{ flex: "0 0 auto", maxWidth: "380px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div className="inline-flex items-center mb-4" style={{ gap: "8px" }}>
                <span style={{ display: "inline-block", width: "20px", height: "1.5px", background: "rgba(255,255,255,0.6)", flexShrink: 0 }} />
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", letterSpacing: "1px", fontWeight: 600, fontFamily: "var(--font-geist-mono)", textTransform: "uppercase" }}>
                  Fale com a gente
                </span>
              </div>
              <h2 className="" style={{ fontSize: "clamp(24px, 6vw, 40px)", letterSpacing: "-0.02em", lineHeight: "120%", color: "white", textWrap: "balance" as never }}>
                Pronto para escalar o seu app?
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.70)", lineHeight: 1.65, marginTop: "16px" }}>
                Conte sobre o seu app e seus objetivos. Nossa equipe vai analisar o seu momento e indicar as estratégias mais indicadas, sem custo e sem compromisso.
              </p>
              <ul style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0 }}>
                {["Diagnóstico gratuito do seu funil", "Estratégia personalizada por vertical", "Relatórios transparentes com dados reais"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "rgba(255,255,255,0.85)" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

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
                href="mailto:weareappreach@appreach.app"
                style={{ color: "rgba(255,255,255,0.60)", fontSize: "14px", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.60)")}
              >
                weareappreach@appreach.app
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="footer-form-card" style={{ flex: 1, background: "white", borderRadius: "20px", padding: "40px", boxShadow: "0 4px 32px rgba(0,0,0,0.10)" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="footer-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={LABEL}>Nome</label>
                  <input name="nome" type="text" placeholder="Seu nome" required style={INPUT}
                    onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")} />
                </div>
                <div>
                  <label style={LABEL}>E-mail profissional</label>
                  <input name="email" type="email" placeholder="seu@email.com" required style={INPUT}
                    onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")} />
                </div>
              </div>
              <div className="footer-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={LABEL}>WhatsApp <span style={{ fontWeight: 400, color: "#9A9AA8" }}>(opcional)</span></label>
                  <input name="whatsapp" type="tel" placeholder="+55 (11) 99999-9999" style={INPUT}
                    onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")} />
                </div>
                <div>
                  <label style={LABEL}>Cargo</label>
                  <input name="cargo" type="text" placeholder="Seu cargo" style={INPUT}
                    onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")} />
                </div>
              </div>
              <div>
                <label style={LABEL}>Seu app</label>
                <input name="app" type="text" placeholder="Nome ou link do app" required style={INPUT}
                  onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")} />
              </div>
              <div>
                <label style={LABEL}>Qual é o seu cenário?</label>
                <div style={{ position: "relative" }}>
                  <select name="cenario" required defaultValue=""
                    style={{ ...INPUT, color: "#9A9AA8", cursor: "pointer", paddingRight: "40px", appearance: "none", WebkitAppearance: "none" }}
                    onChange={e => (e.currentTarget.style.color = e.currentTarget.value ? "#141414" : "#9A9AA8")}
                    onFocus={e => (e.currentTarget.style.borderColor = "#6557EA")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")}
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="app-em-operacao" style={{ color: "#141414" }}>Tenho um app em operação</option>
                    <option value="vou-lancar-app" style={{ color: "#141414" }}>Vou lançar um app em breve</option>
                    <option value="agencia" style={{ color: "#141414" }}>Sou uma agência com clientes que possuem apps</option>
                  </select>
                  <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none"
                    style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "rgba(0,0,0,0.4)" }}>
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <button type="submit" disabled={status === "sending"} style={{
                width: "100%", background: "linear-gradient(145deg, #9B91FF 0%, #6557EA 100%)",
                color: "white", border: "none", borderRadius: "12px", padding: "15px 24px",
                fontSize: "15px", fontWeight: 600, cursor: status === "sending" ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                letterSpacing: "-0.2px", opacity: status === "sending" ? 0.7 : 1,
              }}
                onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.opacity = "0.88"; }}
                onMouseLeave={e => { if (status !== "sending") e.currentTarget.style.opacity = "1"; }}
              >
                {status === "sending" ? "Enviando…" : "Quero escalar meu app"}
              </button>

              {status === "ok" && (
                <p style={{ fontSize: "14px", color: "#1B9C5A", textAlign: "center", margin: 0, fontWeight: 500 }}>
                  Recebemos seu contato! Retornamos em até 24h. 🎉
                </p>
              )}
              {status === "error" && (
                <p style={{ fontSize: "14px", color: "#D14343", textAlign: "center", margin: 0, fontWeight: 500 }}>
                  Algo deu errado ao enviar. Tente de novo ou escreva para weareappreach@appreach.app.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      )}

      {/* ── Nav grid ── */}
      <div className="max-w-[1350px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16" style={{ paddingTop: hideContactForm ? "64px" : "100px", paddingBottom: "64px" }}>

          {/* Col 1 — Logo + descrição + sociais */}
          <div className="flex flex-col gap-6">
            <div>
              <img
                src="/logo-appreach.svg"
                alt="Appreach"
                width={140}
                height={25}
                style={{ display: "block", filter: "brightness(0) invert(1)" }}
              />
              <p className="mt-3 leading-relaxed" style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", maxWidth: "260px" }}>
                Estratégia 360° para apps que escalam, do primeiro install à receita.
              </p>
            </div>

            <a
              href="mailto:weareappreach@appreach.app"
              className="text-sm transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.45)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              weareappreach@appreach.app
            </a>

            <div className="flex gap-3">
              {[
                { icon: <IconInstagram />, href: "#" },
                { icon: <IconX />, href: "#" },
                { icon: <IconLinkedin />, href: "#" },
              ].map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.05)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "white";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Cols direita — Soluções + Empresa */}
          <div className="flex gap-16 lg:gap-20">
            <nav className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ letterSpacing: "0.08em", color: "rgba(255,255,255,0.90)" }}>
                Soluções
              </span>
              <ul className="flex flex-col gap-2">
                {solutions.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="text-sm transition-colors duration-200 whitespace-nowrap" style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >{s.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ letterSpacing: "0.08em", color: "rgba(255,255,255,0.90)" }}>
                Empresa
              </span>
              <ul className="flex flex-col gap-2">
                {company.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="text-sm transition-colors duration-200" style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >{s.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* ── Logo watermark — faixa própria ── */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        padding: "32px 0",
      }}>
        <div className="max-w-[1350px] mx-auto">
          <img
            src="/logo-appreach.svg"
            alt=""
            aria-hidden
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "brightness(0) invert(1)",
              opacity: 0.08,
            }}
          />
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-[1350px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.30)" }}>
            © 2025 Appreach. Todos os direitos reservados.
          </span>
          <div className="flex gap-5">
            {["Política de Privacidade", "Termos de Uso"].map((label) => (
              <a
                key={label}
                href="#"
                className="transition-colors duration-200"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.30)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.70)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.30)")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
