import { ArrowRight, TrendingUp } from "lucide-react";

const partners = [
  "Meta Ads", "Google UAC", "TikTok Ads", "AppsFlyer",
  "adjust", "Moloco", "Unity Ads", "Apple Search Ads", "IronSource", "Sensor Tower",
];

const Dot = () => (
  <span
    className="shrink-0 self-center"
    style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#D1D1E0", display: "inline-block" }}
  />
);

export default function Hero() {
  const doubled = [...partners, ...partners];

  return (
    <section className="bg-white overflow-hidden" style={{ minHeight: "100vh" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16 h-full" style={{ minHeight: "100vh" }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" style={{ minHeight: "100vh", paddingTop: "96px", paddingBottom: "48px" }}>

          {/* ── Left column ── */}
          <div className="flex flex-col gap-7">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 self-start rounded-full px-4 py-1.5"
              style={{
                background: "linear-gradient(135deg, rgba(101,87,234,0.12) 0%, rgba(101,87,234,0.06) 100%)",
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "linear-gradient(135deg, #8B7FFF, #5449D6)" }}
              />
              <span className="text-primary font-semibold" style={{ fontSize: "13px" }}>
                Plataforma 360° · Performance Mobile
              </span>
            </div>

            {/* H1 com ícone inline */}
            <h1
              className="font-medium text-dark leading-[1.05]"
              style={{ fontSize: "60px" }}
            >
              Do primeiro install{" "}
              <span
                className="inline-flex items-center justify-center rounded-2xl align-middle"
                style={{
                  width: "56px",
                  height: "56px",
                  verticalAlign: "-10px",
                  background: "linear-gradient(135deg, #8B7FFF 0%, #5449D6 100%)",
                  boxShadow: "0 8px 24px rgba(101,87,234,0.45)",
                }}
                aria-hidden="true"
              >
                <TrendingUp size={26} color="white" strokeWidth={2.2} />
              </span>
              {" "}à receita
            </h1>

            {/* Description */}
            <p className="text-body leading-relaxed" style={{ fontSize: "16px", maxWidth: "460px" }}>
              Cobrimos cada etapa do funil, da aquisição de usuários
              até eventos de compra e escala de receita.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-6 h-[44px] rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                style={{
                  fontSize: "15px",
                  background: "linear-gradient(135deg, #8B7FFF 0%, #5449D6 100%)",
                  boxShadow: "0 8px 28px rgba(101,87,234,0.4)",
                }}
              >
                Falar com especialista
                <ArrowRight size={15} />
              </a>
              <a
                href="#estrategias"
                className="inline-flex items-center justify-center gap-2 px-6 h-[44px] rounded-full font-semibold transition-colors hover:text-primary"
                style={{
                  fontSize: "15px",
                  color: "#6d6d6d",
                  background: "#F7F7FA",
                }}
              >
                Ver soluções
              </a>
            </div>

            {/* Ticker de parceiros */}
            <div className="pt-2 space-y-3">
              <p className="text-muted font-medium" style={{ fontSize: "12px", letterSpacing: "0.06em" }}>
                PARCEIROS E PLATAFORMAS
              </p>
              <div className="relative overflow-hidden" style={{ maxWidth: "460px" }}>
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-10"
                  style={{ width: "40px", background: "linear-gradient(to right, #fff, transparent)" }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-10"
                  style={{ width: "40px", background: "linear-gradient(to left, #fff, transparent)" }}
                />
                <div className="ticker-track items-center" style={{ gap: "16px" }}>
                  {doubled.map((name, i) => (
                    <>
                      <span
                        key={`p-${i}`}
                        className="shrink-0 whitespace-nowrap font-medium"
                        style={{ fontSize: "13px", color: "#9B9BB0" }}
                      >
                        {name}
                      </span>
                      <Dot key={`d-${i}`} />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right column — app visual ── */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              height: "520px",
              background: "#F7F7FA",
              boxShadow: "0 32px 80px rgba(101,87,234,0.1), 0 4px 16px rgba(0,0,0,0.04)",
            }}
          >
            {/* Glow radial */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 65% 30%, rgba(101,87,234,0.09) 0%, transparent 65%)",
              }}
              aria-hidden="true"
            />

            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted text-sm">screenshot do app</p>
            </div>

            {/* Widget — ROAS */}
            <div
              className="absolute bg-white rounded-2xl p-5 space-y-1"
              style={{
                left: "40px", top: "48px", width: "180px",
                boxShadow: "0 12px 40px rgba(101,87,234,0.12), 0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <p className="text-muted font-medium" style={{ fontSize: "12px" }}>ROAS Médio</p>
              <p className="font-medium text-dark" style={{ fontSize: "30px" }}>4.8×</p>
              <span
                className="inline-block px-2 py-0.5 rounded-full font-semibold"
                style={{ fontSize: "11px", background: "#f0fdf4", color: "#16a34a" }}
              >
                +21% este mês
              </span>
            </div>

            {/* Widget — Installs */}
            <div
              className="absolute bg-white rounded-2xl p-5 space-y-2"
              style={{
                left: "56px", bottom: "60px", width: "200px",
                boxShadow: "0 12px 40px rgba(101,87,234,0.12), 0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <p className="text-muted font-medium" style={{ fontSize: "12px" }}>Novos Installs</p>
              <p className="font-medium text-dark" style={{ fontSize: "30px" }}>48.2k</p>
              <div style={{ height: "6px", borderRadius: "99px", background: "#F0EEFF", overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%", width: "76%", borderRadius: "99px",
                    background: "linear-gradient(90deg, #8B7FFF, #5449D6)",
                  }}
                />
              </div>
              <p className="text-muted" style={{ fontSize: "11px" }}>76% da meta mensal</p>
            </div>

            {/* Label pill — top right */}
            <div
              className="absolute text-white rounded-full px-4 py-2 font-medium"
              style={{
                right: "48px", top: "56px", fontSize: "12px",
                background: "linear-gradient(135deg, #2A2A3A 0%, #0F0F18 100%)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              }}
            >
              Do install à receita
            </div>

            {/* Widget — Receita */}
            <div
              className="absolute bg-white rounded-2xl p-5 flex items-center gap-4"
              style={{
                right: "40px", top: "50%", transform: "translateY(-50%)", width: "210px",
                boxShadow: "0 12px 40px rgba(101,87,234,0.12), 0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "conic-gradient(#6557ea 324deg, #F0EEFF 0deg)" }}
              >
                <div className="w-9 h-9 rounded-full bg-white" />
              </div>
              <div>
                <p className="font-medium text-dark" style={{ fontSize: "20px" }}>R$2.1M</p>
                <p className="text-muted" style={{ fontSize: "12px" }}>Receita gerada</p>
              </div>
            </div>

            {/* Label pill — mid left */}
            <div
              className="absolute text-white rounded-full px-4 py-2 font-medium"
              style={{
                left: "40px", top: "50%", fontSize: "12px",
                background: "linear-gradient(135deg, #2A2A3A 0%, #0F0F18 100%)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              }}
            >
              Estratégia 360° para apps
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
