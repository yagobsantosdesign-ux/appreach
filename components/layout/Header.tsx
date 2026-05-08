"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const solutions = [
  { label: "User Acquisition", href: "/useracquisition-app" },
  { label: "Retargeting", href: "/retargeting" },
  { label: "CTV", href: "/ctv-connected-tv" },
  { label: "Apple Search Ads", href: "/apple-search-ads" },
  { label: "IA & Dados — Reach Lab", href: "/#estrategias" },
];

const navLinks = [
  { label: "Quem somos", href: "/quem-somos" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16 flex items-center justify-between h-[64px]">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <div
            className="flex items-center justify-center rounded-lg"
            style={{
              width: "32px", height: "32px",
              background: "linear-gradient(135deg, #8B7FFF 0%, #5449D6 100%)",
              boxShadow: "0 4px 12px rgba(101,87,234,0.4)",
            }}
          >
            <span className="font-bold text-white leading-none" style={{ fontSize: "14px" }}>A</span>
          </div>
          <span className="font-semibold text-dark" style={{ fontSize: "16px" }}>Appreach</span>
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
              className="inline-flex items-center gap-1 px-4 h-[36px] rounded-lg text-body hover:text-dark hover:bg-surface transition-colors font-medium"
              style={{ fontSize: "15px" }}
            >
              Soluções
              <ChevronDown size={13} className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="bg-white rounded-2xl py-1.5 shadow-xl border border-border" style={{ minWidth: "220px" }}>
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
              className="inline-flex items-center px-4 h-[36px] rounded-lg text-body hover:text-dark hover:bg-surface transition-colors font-medium"
              style={{ fontSize: "15px" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs — desktop */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 px-5 h-[38px] rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            style={{
              fontSize: "14px",
              background: "linear-gradient(135deg, #8B7FFF 0%, #5449D6 100%)",
              boxShadow: "0 6px 20px rgba(101,87,234,0.38)",
            }}
          >
            Fale com especialista
            <ArrowRight size={13} />
          </a>
        </div>

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
  );
}
