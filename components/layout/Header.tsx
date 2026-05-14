"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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
    <header className="header-anim fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md" style={{ borderBottom: "1px solid rgba(232,232,240,0.6)" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div
            className="logo-mark flex items-center justify-center rounded-lg overflow-hidden shrink-0"
            style={{
              width: "32px",
              height: "32px",
              background: "#141414",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-mark.svg" alt="" width={32} height={32} className="object-contain" aria-hidden="true" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-text.svg" alt="Appreach" width={94} height={24} className="logo-text object-contain" style={{ width: "94px", height: "24px", flexShrink: 0 }} />
        </a>

        {/* Nav — desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Soluções dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1 px-3 h-[38px] rounded-lg text-dark hover:bg-surface transition-colors font-medium"
              style={{ fontSize: "16px" }}
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
              className="inline-flex items-center px-3 h-[38px] rounded-lg text-dark hover:bg-surface transition-colors font-medium"
              style={{ fontSize: "16px" }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/carreiras"
            className="inline-flex items-center px-3 h-[38px] rounded-lg text-dark hover:bg-surface transition-colors font-medium"
            style={{ fontSize: "16px" }}
          >
            Junte-se a nós
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1.5 text-dark"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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

          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 rounded-full bg-primary text-white font-semibold text-center hover:opacity-90 transition-opacity"
            style={{ fontSize: "15px" }}
          >
            Fale com especialista
          </a>
        </div>
      )}
    </header>
    </>
  );
}
