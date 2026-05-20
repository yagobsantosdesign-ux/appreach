"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const solutions = [
  { label: "User Acquisition", href: "/useracquisition-app" },
  { label: "Retargeting", href: "/retargeting" },
  { label: "CTV", href: "/ctv-connected-tv" },
  { label: "Apple Search Ads", href: "/apple-search-ads" },
  { label: "IA & Dados — Reach Lab", href: "/#estrategias" },
];

const navLinks = [
  { label: "Quem somos", href: "/quem-somos" },
  { label: "Cases", href: "/#cases" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const FADE_START = 70;   // badge chega no header
    const FADE_END   = 160;  // título chega no header → opacidade total
    const check = () => {
      const t = Math.min(1, Math.max(0, (window.scrollY - FADE_START) / (FADE_END - FADE_START)));
      setBgOpacity(t);
    };
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
        background: `rgba(88,74,218,${bgOpacity * 0.97})`,
        backdropFilter: bgOpacity > 0 ? `blur(${bgOpacity * 14}px)` : "none",
      }}
    >
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16 grid items-center h-[92px]" style={{ gridTemplateColumns: "auto 1fr auto" }}>

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div
            className="logo-mark flex items-center justify-center rounded-lg overflow-hidden shrink-0"
            style={{ width: "32px", height: "32px", background: "rgba(255,255,255,0.2)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-mark.svg" alt="" width={32} height={32} className="object-contain" aria-hidden="true" style={{ filter: "brightness(0) invert(1)" }} />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-text.svg" alt="Appreach" width={94} height={24} className="logo-text object-contain" style={{ width: "94px", height: "24px", flexShrink: 0, filter: "brightness(0) invert(1)" }} />
        </a>

        {/* Nav — desktop (centralizado) */}
        <nav className="hidden md:flex items-center justify-center gap-1">
          {/* Soluções dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1 px-3 h-[44px] rounded-lg font-medium transition-colors"
              style={{ fontSize: "15px", color: "rgba(255,255,255,0.88)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Soluções
              <ChevronDown size={13} className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
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
              className="inline-flex items-center px-3 h-[44px] rounded-lg font-medium transition-colors"
              style={{ fontSize: "15px", color: "rgba(255,255,255,0.88)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/carreiras"
            className="inline-flex items-center px-3 h-[44px] rounded-lg font-medium transition-colors"
            style={{ fontSize: "15px", color: "rgba(255,255,255,0.88)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            Junte-se a nós
          </a>
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center justify-end gap-3">
          <div className="hidden md:block">
            <Button href="#contato" variant="dark" size="md">
              Fale com um especialista
            </Button>
          </div>
          <button
            className="md:hidden flex items-center justify-center"
            style={{ width: "44px", height: "44px", background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <div style={{ width: "26px", height: "12px", position: "relative" }}>
              <span style={{
                position: "absolute", left: 0, right: 0, top: 0,
                height: "2px", background: "white", borderRadius: "2px",
                transformOrigin: "center",
                transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
                transform: open ? "translateY(5px) rotate(45deg)" : "none",
              }} />
              <span style={{
                position: "absolute", left: 0, right: 0, bottom: 0,
                height: "2px", background: "white", borderRadius: "2px",
                transformOrigin: "center",
                transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
                transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
              }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-1">
          <button
            className="flex items-center justify-between px-3 py-2.5 rounded-xl text-body hover:text-dark hover:bg-surface transition-colors font-medium w-full text-left"
            style={{ fontSize: "15px" }}
            onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
          >
            Soluções
            <ChevronDown size={13} className={`transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
          </button>

          {mobileSolutionsOpen && (
            <div className="flex flex-col gap-0.5 pl-3 mb-1">
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
          )}

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
      )}
    </header>
    </>
  );
}
