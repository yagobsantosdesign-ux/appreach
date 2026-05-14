const footerLinks = {
  Estratégias: [
    "Aquisição de Usuários",
    "Retargeting",
    "CTV",
    "App Chat & Push",
    "Preload",
    "Mídia Programática",
  ],
  Empresa: ["Sobre nós", "Cases", "Carreiras"],
  Contato: ["fale@appreach.com.br", "WhatsApp", "LinkedIn"],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white/60 py-16 lg:py-20">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl font-medium text-white tracking-tight">
              Appreach
            </span>
            <p className="text-sm leading-relaxed max-w-xs">
              Estratégia 360° para aplicativos — do primeiro install à receita.
            </p>
            <p className="text-sm">
              <a
                href="mailto:fale@appreach.com.br"
                className="hover:text-white transition-colors"
              >
                fale@appreach.com.br
              </a>
            </p>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Appreach. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
