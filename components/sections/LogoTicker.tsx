"use client";
import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import { useInView } from "@/hooks/useInView";

const tickerLogos = [
  { src: "/ticker-logo-picpay.svg",        alt: "PicPay",        width: 108, height: 35 },
  { src: "/ticker-logo-casas-bahia.svg",   alt: "Casas Bahia",   width: 134, height: 14 },
  { src: "/ticker-logo-sams-club.svg",     alt: "Sam's Club",    width: 110, height: 42 },
  { src: "/ticker-logo-rei-do-pitado.svg", alt: "Rei do Pitaco", width: 130, height: 27 },
  { src: "/ticker-logo-btg.svg",           alt: "BTG",           width: 90,  height: 36 },
  { src: "/ticker-logo-reserva.svg",       alt: "Reserva",       width: 120, height: 42 },
  { src: "/ticker-logo-clickbus.svg",      alt: "ClickBus",      width: 124, height: 30 },
  { src: "/ticker-logo-inter.svg",         alt: "Banco Inter",   width: 122, height: 31 },
  { src: "/ticker-logo-habibs.svg",        alt: "Habib's",       width: 118, height: 32 },
  { src: "/ticker-logo-burger-king.svg",   alt: "Burger King",   width: 44,  height: 48 },
  { src: "/ticker-logo-paramount.svg",     alt: "Paramount+",    width: 128, height: 30 },
  { src: "/ticker-logo-carrefour.svg",     alt: "Carrefour",     width: 52,  height: 42 },
  { src: "/ticker-logo-bancopan.svg",      alt: "Banco Pan",     width: 110, height: 40 },
  { src: "/ticker-logo-natura.svg",        alt: "Natura",        width: 52,  height: 40 },
  { src: "/ticker-logo-ifood.svg",         alt: "iFood",         width: 68,  height: 36 },
  { src: "/ticker-logo-claro.svg",         alt: "Claro",         width: 96,  height: 35 },
  { src: "/ticker-logo-bradesco.svg",      alt: "Bradesco",      width: 130, height: 24 },
  { src: "/ticker-logo-netshoes.svg",      alt: "Netshoes",      width: 130, height: 20 },
];

const row1 = tickerLogos.slice(0, 9);
const row2 = tickerLogos.slice(9);

function LogoCard({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center"
      style={{
        width: "168px",
        height: "80px",
        background: "rgba(255,255,255,0.62)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.85)",
        borderRadius: "18px",
        boxShadow: "0 4px 24px rgba(101,87,234,0.07), 0 1px 0 rgba(255,255,255,0.9) inset",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
        style={{ filter: "brightness(0)", opacity: 0.65, maxWidth: "134px", maxHeight: "48px" }}
      />
    </div>
  );
}

export default function LogoTicker() {
  const { ref: leftRef, visible: leftVisible } = useInView();
  return (
    <section className="pb-24 lg:pb-32 pt-36 lg:pt-48 relative" style={{ background: "#ffffff" }}>
      {/* Bloom roxo — posicionado na área dos tickers (lado direito) */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "50%",
          right: "30%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(101,87,234,0.10) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16" style={{ position: "relative", zIndex: 1 }}>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-40">

          {/* Left — copy */}
          <div ref={leftRef as React.RefObject<HTMLDivElement>} className={`lg:w-[440px] lg:flex-shrink-0 reveal${leftVisible ? " visible" : ""}`}>
            <SectionBadge>Clientes</SectionBadge>
            <h2
              className="font-medium text-dark leading-tight mt-3"
              style={{ fontSize: "clamp(26px, 6vw, 40px)", letterSpacing: "-1.6px", textWrap: "balance" }}
            >
              Grandes apps crescem com a Appreach.
            </h2>
            <p className="mt-3" style={{ fontSize: "16px", color: "var(--color-muted)", lineHeight: 1.65 }}>
              +50 apps atendidos e +300 campanhas ativas — de startups a marcas que você já conhece.
            </p>
          </div>

          {/* Right — tickers */}
          <div className="flex-1 min-w-0 flex flex-col gap-6 relative">
            {/* Row 1 — esquerda */}
            <div
              className="overflow-hidden"
              style={{
                zIndex: 1,
                maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              }}
            >
              <div className="ticker-track items-center" style={{ gap: "20px" }}>
                {[...row1, ...row1].map((logo, i) => (
                  <LogoCard key={i} {...logo} />
                ))}
              </div>
            </div>

            {/* Row 2 — direita */}
            <div
              className="overflow-hidden"
              style={{
                zIndex: 1,
                maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              }}
            >
              <div className="ticker-track ticker-track-reverse items-center" style={{ gap: "20px" }}>
                {[...row2, ...row2].map((logo, i) => (
                  <LogoCard key={i} {...logo} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
