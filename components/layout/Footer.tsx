import Button from "@/components/ui/Button";

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

const linkClass = "text-sm transition-colors duration-200 hover:text-[var(--color-primary)]";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-background)", borderTop: "1px solid var(--color-border)" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        {/* Main grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16 py-16">

          {/* Col 1 — Logo + descrição + sociais */}
          <div className="flex flex-col gap-6">
            <div>
              <img
                src="/logo-appreach.svg"
                alt="Appreach"
                width={140}
                height={25}
                style={{ display: "block" }}
              />
              <p
                className="mt-3 leading-relaxed"
                style={{ fontSize: "14px", color: "var(--color-muted)", maxWidth: "260px" }}
              >
                Estratégia 360° para apps que escalam — do primeiro install à receita.
              </p>
            </div>

            <a
              href="mailto:fale@appreach.com.br"
              className="text-sm transition-colors duration-200 hover:text-[var(--color-primary)]"
              style={{ color: "var(--color-body)" }}
            >
              fale@appreach.com.br
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
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
                  style={{
                    color: "var(--color-muted)",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
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
              <span className="text-xs font-semibold text-dark uppercase tracking-widest" style={{ letterSpacing: "0.08em" }}>
                Soluções
              </span>
              <ul className="flex flex-col gap-3">
                {solutions.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className={linkClass} style={{ color: "var(--color-muted)" }}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col gap-4">
              <span className="text-xs font-semibold text-dark uppercase tracking-widest" style={{ letterSpacing: "0.08em" }}>
                Empresa
              </span>
              <ul className="flex flex-col gap-3">
                {company.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className={linkClass} style={{ color: "var(--color-muted)" }}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>


        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <span style={{ fontSize: "13px", color: "var(--color-muted)" }}>
            © 2025 Appreach. Todos os direitos reservados.
          </span>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-[var(--color-primary)]" style={{ fontSize: "13px", color: "var(--color-muted)" }}>
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-[var(--color-primary)]" style={{ fontSize: "13px", color: "var(--color-muted)" }}>
              Termos de Uso
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
