"use client";
import React from "react";

const logos = [
  { src: "/ticker-logo-rei-do-pitado.svg", alt: "Rei do Pitaco",  h: 18  },
  { src: "/ticker-logo-netshoes.svg",       alt: "Netshoes",       h: 18  },
  { src: "/ticker-logo-burger-king.svg",    alt: "Burger King",    h: 48  },
  { src: "/ticker-logo-bradesco.svg",       alt: "Bradesco",       h: 26  },
  { src: "/ticker-logo-casas-bahia.svg",    alt: "Casas Bahia",    h: 16  },
  { src: "/ticker-logo-claro.svg",          alt: "Claro",          h: 32  },
  { src: "/ticker-logo-ifood.svg",          alt: "iFood",          h: 36  },
  { src: "/ticker-logo-btg.svg",            alt: "BTG",            h: 44  },
  { src: "/ticker-logo-natura.svg",         alt: "Natura",         h: 39  },
  { src: "/ticker-logo-bancopan.svg",       alt: "Banco Pan",      h: 44  },
  { src: "/ticker-logo-reserva.svg",        alt: "Reserva",        h: 18  },
  { src: "/ticker-logo-inter.svg",          alt: "Banco Inter",    h: 28  },
  { src: "/ticker-logo-habibs.svg",         alt: "Habib's",        h: 28  },
  { src: "/ticker-logo-paramount.svg",      alt: "Paramount+",     h: 26  },
  { src: "/ticker-logo-carrefour.svg",      alt: "Carrefour",      h: 28  },
  { src: "/ticker-logo-picpay.svg",         alt: "PicPay",         h: 28  },
  { src: "/ticker-logo-clickbus.svg",       alt: "ClickBus",       h: 30  },
];

export default function LogoTicker() {
  return (
    <section style={{ background: "#fafafa", padding: "80px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1350px", margin: "0 auto", position: "relative", overflow: "hidden" }}>
        {/* Gradient fade overlay — laterais */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, #fafafa 0%, transparent 10%, transparent 90%, #fafafa 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

      <div className="ticker-track" style={{ alignItems: "center", gap: "96px", zIndex: 1, position: "relative" }}>
        {[...logos, ...logos].map((logo, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            style={{ height: `${logo.h}px`, width: "auto", flexShrink: 0 }}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
