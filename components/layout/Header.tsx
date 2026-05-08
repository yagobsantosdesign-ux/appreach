"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Serviços", href: "#estrategias" },
  { label: "Cases", href: "#cases" },
  { label: "Processo", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="flex items-center bg-[#1F2223] rounded-2xl w-fit" style={{ padding: "6px 6px 6px 8px" }}>
        {/* Logo */}
        <a href="#" className="flex items-center justify-center rounded-lg bg-primary shrink-0" style={{ width: "36px", height: "36px" }}>
          <span className="font-bold text-white leading-none" style={{ fontSize: "14px" }}>A</span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium rounded-lg"
              style={{ padding: "0 12px", height: "40px" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center rounded-xl bg-white text-[#111] text-sm font-semibold hover:bg-white/90 transition-colors shrink-0 px-4"
          style={{ height: "40px" }}
        >
          Fale conosco
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto p-1.5 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-[68px] left-4 right-4 bg-[#111] rounded-2xl px-4 py-4 flex flex-col gap-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2 rounded-full bg-white text-[#111] text-sm font-semibold text-center hover:bg-white/90 transition-colors"
          >
            Fale conosco
          </a>
        </div>
      )}
    </header>
  );
}
