import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-16">
      {/* Subtle gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #6557ea 0%, transparent 65%)",
          opacity: 0.05,
          transform: "translate(30%, -40%)",
        }}
        aria-hidden="true"
      />

      {/* ── Text row ──────────────────────────────────────────── */}
      <div className="max-w-[1300px] mx-auto px-16 pt-20 pb-14">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

          {/* H1 — left */}
          <h1
            className="font-medium text-dark leading-[1.05] max-w-[680px]"
            style={{ fontSize: "60px" }}
          >
            Do primeiro
            <br />install{" "}à receita
          </h1>

          {/* Description + CTAs — right */}
          <div className="flex flex-col items-start lg:items-end gap-6 lg:max-w-[440px] shrink-0">
            <p
              className="text-body leading-relaxed lg:text-right"
              style={{ fontSize: "16px" }}
            >
              Cobrimos cada etapa do funil, da aquisição de<br />usuários até eventos de compra e escala de receita.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-6 h-[44px] rounded-full bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ fontSize: "16px" }}
              >
                Falar com especialista
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── App visual ──────────────────────────────────────────── */}
      <div className="max-w-[1300px] mx-auto px-16 pb-0">
        <div className="relative rounded-3xl bg-surface overflow-hidden" style={{ height: "560px" }}>

          {/* Placeholder para screenshot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted text-sm">screenshot do app</p>
          </div>

          {/* Widget — ROAS (top left) */}
          <div className="absolute bg-white rounded-2xl p-5 space-y-1" style={{ left: "60px", top: "60px", width: "190px", boxShadow: "0 20px 60px rgba(0,0,0,0.07)" }}>
            <p className="text-muted font-medium" style={{ fontSize: "12px" }}>ROAS Médio</p>
            <p className="font-medium text-dark" style={{ fontSize: "32px" }}>4.8×</p>
            <span className="inline-block px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-semibold" style={{ fontSize: "12px" }}>+21% este mês</span>
          </div>

          {/* Widget — Installs (bottom left) */}
          <div className="absolute bg-white rounded-2xl p-5 space-y-2" style={{ left: "80px", bottom: "80px", width: "210px", boxShadow: "0 20px 60px rgba(0,0,0,0.07)" }}>
            <p className="text-muted font-medium" style={{ fontSize: "12px" }}>Novos Installs</p>
            <p className="font-medium text-dark" style={{ fontSize: "32px" }}>48.2k</p>
            <div className="h-1.5 bg-surface rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: "76%" }} />
            </div>
            <p className="text-muted" style={{ fontSize: "11px" }}>76% da meta mensal</p>
          </div>

          {/* Label pill — top right */}
          <div className="absolute bg-dark text-white rounded-full px-5 py-2.5 font-medium" style={{ right: "80px", top: "80px", fontSize: "13px" }}>
            Do install à receita
          </div>

          {/* Widget — Receita (center right) */}
          <div className="absolute bg-white rounded-2xl p-5 flex items-center gap-4" style={{ right: "60px", top: "50%", transform: "translateY(-50%)", width: "220px", boxShadow: "0 20px 60px rgba(0,0,0,0.07)" }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "conic-gradient(#6557ea 324deg, #F0EEFF 0deg)" }}>
              <div className="w-10 h-10 rounded-full bg-white" />
            </div>
            <div>
              <p className="font-medium text-dark" style={{ fontSize: "22px" }}>R$2.1M</p>
              <p className="text-muted" style={{ fontSize: "12px" }}>Receita gerada</p>
            </div>
          </div>

          {/* Label pill — bottom left */}
          <div className="absolute bg-dark text-white rounded-full px-5 py-2.5 font-medium" style={{ left: "60px", top: "50%", fontSize: "13px" }}>
            Estratégia 360° para apps
          </div>

        </div>
      </div>

    </section>
  );
}
