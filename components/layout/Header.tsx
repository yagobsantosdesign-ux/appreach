"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const solutions = [
  { label: "User Acquisition", href: "/useracquisition-app" },
  { label: "Retargeting", href: "/retargeting" },
  { label: "CTV", href: "/ctv-connected-tv" },
  { label: "Apple Search Ads", href: "/apple-search-ads" },
  { label: "IA & Dados: Reach Lab", href: "/#estrategias" },
];

const navLinks = [
  { label: "Quem somos", href: "/quem-somos" },
  { label: "Cases", href: "/#cases" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 20);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <>
    <style>{`
      @keyframes nav-enter {
        from { opacity: 0; transform: translateY(-100%); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .header-anim {
        animation: nav-enter 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
    `}</style>
    <header
      className="header-anim fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled || open ? "white" : "transparent",
        transition: "background 0.3s ease",
      }}
    >
      <div className="max-w-[1350px] mx-auto">
        {/* Nav row */}
        <div
          className="px-6 lg:px-10 grid items-center h-[80px]"
          style={{ gridTemplateColumns: "auto 1fr auto" }}
        >
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-nav.svg" alt="Appreach" width={136} height={24} className="object-contain" style={{ width: "136px", height: "24px", flexShrink: 0 }} />
          </a>

          {/* Nav — desktop */}
          <nav className="hidden md:flex items-center justify-center gap-7">
            {/* Soluções dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="inline-flex items-center gap-1.5 px-[9px] h-[44px] rounded-lg font-medium transition-colors"
                style={{ fontSize: "16px", color: "#3d3d4a" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.05)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                Soluções
                <ChevronDown size={14} className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-white rounded-2xl py-1.5 border border-border" style={{ minWidth: "220px" }}>
                    {solutions.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="flex items-center px-4 py-2.5 text-body hover:text-dark hover:bg-surface transition-colors font-medium"
                        style={{ fontSize: "14px" }}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-[9px] h-[44px] rounded-lg font-medium transition-colors"
                style={{ fontSize: "16px", color: "#3d3d4a" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.05)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center justify-end gap-3">
            <a
              href="#contato"
              className="hidden md:inline-flex items-center justify-center font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#6557ea",
                color: "white",
                height: "48px",
                borderRadius: "12px",
                padding: "0 20px",
                fontSize: "16px",
                letterSpacing: "-0.02em",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Começar agora
            </a>
            <button
              className="md:hidden p-1.5"
              style={{ color: "#3D3D4A" }}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden grid"
          style={{
            gridTemplateRows: open ? "1fr" : "0fr",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            transition: "grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
          }}
          aria-hidden={!open}
        >
          <div className="overflow-hidden" style={{ minHeight: 0 }}>
            <div
              className="px-6 py-4 flex flex-col gap-1"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <button
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-body hover:text-dark hover:bg-surface transition-colors font-medium w-full text-left"
                style={{ fontSize: "15px" }}
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              >
                Soluções
                <ChevronDown size={13} className={`transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className="grid"
                style={{
                  gridTemplateRows: mobileSolutionsOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <div className="overflow-hidden" style={{ minHeight: 0 }}>
                  <div className="flex flex-col gap-0.5 pl-3 pt-1 pb-1">
                    {solutions.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 rounded-xl text-muted hover:text-dark hover:bg-surface transition-colors font-medium"
                        style={{ fontSize: "14px" }}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-border my-1" />

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-body hover:text-dark hover:bg-surface transition-colors font-medium"
                  style={{ fontSize: "15px" }}
                >
                  {link.label}
                </a>
              ))}

              <Button
                href="#contato"
                onClick={() => setOpen(false)}
                variant="gradient"
                size="md"
                fullWidth
              >
                Fale com especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
