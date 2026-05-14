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

const solutions = [
  { label: "User Acquisition", href: "/useracquisition-app" },
  { label: "Retargeting", href: "/retargeting" },
  { label: "CTV", href: "/ctv-connected-tv" },
  { label: "Apple Search Ads", href: "/apple-search-ads" },
  { label: "IA & Dados — Reach Lab", href: "/#estrategias" },
];

const company = [
  { label: "Sobre nós", href: "/quem-somos" },
  { label: "Cases", href: "/#cases" },
  { label: "Carreiras", href: "/carreiras" },
  { label: "Blog", href: "/blog" },
];

const legal = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
];

const linkClass = "text-sm text-white/40 hover:text-white transition-colors";

export default function Footer() {
  return (
    <div className="px-4 pb-4" style={{ background: "var(--color-background)" }}>
      <footer className="rounded-[28px] overflow-hidden" style={{ background: "#0D0D0D" }}>

        {/* Top section */}
        <div className="px-10 lg:px-14 pt-14 grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] gap-12 lg:gap-20">

          {/* Left: tagline + contact */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2
                className="text-white font-medium leading-snug"
                style={{ fontSize: "var(--text-h4)", letterSpacing: "-0.5px" }}
              >
                Estratégia 360°<br />para apps que escalam.
              </h2>
              <p className="leading-relaxed max-w-xs text-white/40" style={{ fontSize: "var(--text-label)" }}>
                Do primeiro install à receita — aquisição, retargeting, CTV e dados em uma só parceria.
              </p>
            </div>

            <div className="space-y-3">
              <a href="mailto:fale@appreach.com.br" className={linkClass}>
                fale@appreach.com.br
              </a>
              <div className="flex gap-4 pt-1">
                <a href="#" className="text-white/35 hover:text-white transition-colors"><IconInstagram /></a>
                <a href="#" className="text-white/35 hover:text-white transition-colors"><IconX /></a>
                <a href="#" className="text-white/35 hover:text-white transition-colors"><IconLinkedin /></a>
              </div>
            </div>
          </div>

          {/* Soluções */}
          <nav className="space-y-4">
            <h4 className="text-white text-sm font-semibold">Soluções</h4>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className={linkClass}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Empresa */}
          <nav className="space-y-4">
            <h4 className="text-white text-sm font-semibold">Empresa</h4>
            <ul className="space-y-3">
              {company.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className={linkClass}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav className="space-y-4">
            <h4 className="text-white text-sm font-semibold">Legal</h4>
            <ul className="space-y-3">
              {legal.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className={linkClass}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Giant decorative wordmark */}
        <div
          aria-hidden="true"
          className="px-8 lg:px-10 mt-10 leading-none select-none overflow-hidden"
          style={{
            fontSize: "clamp(72px, 15vw, 210px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          appreach
        </div>

      </footer>
    </div>
  );
}
