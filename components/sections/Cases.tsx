"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

const cases = [
  {
    id: "roi",
    title: "Retorno sobre investimento",
    description:
      "Installs qualificados com otimização por LTV e criativos iterativos reduziram CPI em 42%.",
    metric: "+3×",
    logo: "/ticker-logo-1.svg",
    logoW: 124,
    logoH: 22,
    mesh: `
      radial-gradient(ellipse at 22% 18%, rgba(196,181,253,0.62) 0%, transparent 55%),
      radial-gradient(ellipse at 78% 82%, rgba(221,214,254,0.52) 0%, transparent 52%),
      radial-gradient(ellipse at 65% 12%, rgba(167,139,250,0.32) 0%, transparent 48%),
      radial-gradient(ellipse at 8%  70%, rgba(165,180,252,0.28) 0%, transparent 44%),
      #f8f6ff
    `,
    border: "linear-gradient(135deg, #c4b5fd 0%, #a5b4fc 45%, #ddd6fe 100%)",
  },
  {
    id: "retencao",
    title: "Retenção D30",
    description:
      "Sequência de push + in-app ativada por comportamento reengajou usuários inativos no momento certo.",
    metric: "+85%",
    logo: "/ticker-logo-2.svg",
    logoW: 61,
    logoH: 25,
    mesh: `
      radial-gradient(ellipse at 25% 20%, rgba(167,139,250,0.58) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 75%, rgba(196,181,253,0.52) 0%, transparent 52%),
      radial-gradient(ellipse at 12% 78%, rgba(165,180,252,0.38) 0%, transparent 44%),
      radial-gradient(ellipse at 68% 10%, rgba(221,214,254,0.45) 0%, transparent 48%),
      #f5f3ff
    `,
    border: "linear-gradient(135deg, #a78bfa 0%, #818cf8 52%, #c4b5fd 100%)",
  },
  {
    id: "aquisicao",
    title: "Aquisição em escala",
    description:
      "CTV + mídia programática escalou aquisição qualificada em múltiplos mercados simultâneos.",
    metric: "+520k",
    logo: "/ticker-logo-3.svg",
    logoW: 77,
    logoH: 35,
    mesh: `
      radial-gradient(ellipse at 22% 18%, rgba(216,180,254,0.58) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 78%, rgba(196,181,253,0.52) 0%, transparent 52%),
      radial-gradient(ellipse at 65% 12%, rgba(240,171,252,0.30) 0%, transparent 48%),
      radial-gradient(ellipse at 8%  72%, rgba(167,139,250,0.38) 0%, transparent 44%),
      #faf5ff
    `,
    border: "linear-gradient(135deg, #d8b4fe 0%, #c4b5fd 50%, #a78bfa 100%)",
  },
  {
    id: "roas",
    title: "ROAS de campanha",
    description:
      "Otimização contínua de criativos e estratégia de bidding maximizou retorno sobre investimento.",
    metric: "2.9×",
    logo: "/ticker-logo-4.svg",
    logoW: 54,
    logoH: 21,
    mesh: `
      radial-gradient(ellipse at 20% 20%, rgba(165,180,252,0.62) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 78%, rgba(196,181,253,0.52) 0%, transparent 52%),
      radial-gradient(ellipse at 62% 10%, rgba(167,139,250,0.38) 0%, transparent 48%),
      radial-gradient(ellipse at 10% 72%, rgba(221,214,254,0.48) 0%, transparent 44%),
      #f5f3ff
    `,
    border: "linear-gradient(135deg, #a5b4fc 0%, #c4b5fd 50%, #818cf8 100%)",
  },
];

const GAP = 20;

export default function Cases() {
  const [offset, setOffset] = useState(0);
  const [sliding, setSliding] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const maxOffset = cases.length - 2;

  const getTranslateX = (off: number) => {
    if (!containerRef.current) return 0;
    const w = containerRef.current.clientWidth;
    return -off * ((w + GAP) / 2);
  };

  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    setTranslateX(getTranslateX(offset));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  useEffect(() => {
    const handleResize = () => setTranslateX(getTranslateX(offset));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const navigate = (dir: "next" | "prev") => {
    if (sliding) return;
    const newOffset = dir === "next"
      ? Math.min(maxOffset, offset + 1)
      : Math.max(0, offset - 1);
    if (newOffset === offset) return;
    setSliding(true);
    setOffset(newOffset);
    setTimeout(() => setSliding(false), 420);
  };

  return (
    <section id="cases" className="py-24 lg:py-32" style={{ background: "#ffffff" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <SectionBadge>Nossos Cases</SectionBadge>
            <h2
              className="font-medium text-dark leading-tight mt-3"
              style={{ fontSize: "48px", letterSpacing: "-1.92px" }}
            >
              Resultados reais de<br />quem escalou com a gente
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => navigate("prev")}
              disabled={offset === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-dark)",
                opacity: offset === 0 ? 0.3 : 1,
              }}
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={() => navigate("next")}
              disabled={offset === maxOffset}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-dark)",
                opacity: offset === maxOffset ? 0.3 : 1,
              }}
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={containerRef} className="overflow-hidden">
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: sliding ? "transform 0.42s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
            }}
          >
            {cases.map((c) => (
              <div
                key={c.id}
                style={{
                  minWidth: `calc(50% - ${GAP / 2}px)`,
                  flexShrink: 0,
                  padding: "2px",
                  borderRadius: "22px",
                  background: c.border,
                }}
              >
                <div
                  className="rounded-[20px] flex flex-col justify-between"
                  style={{ background: c.mesh, minHeight: "360px", padding: "10px" }}
                >
                  {/* Inner white semi-transparent panel */}
                  <div
                    className="flex flex-col justify-between h-full rounded-[13px]"
                    style={{
                      background: "rgba(255,255,255,0.64)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      padding: "22px 26px 26px",
                      minHeight: "340px",
                    }}
                  >
                    {/* Top */}
                    <div>
                      <p
                        className="font-semibold text-dark"
                        style={{ fontSize: "15px", letterSpacing: "-0.2px" }}
                      >
                        {c.title}
                      </p>
                      <p
                        className="mt-2 leading-relaxed"
                        style={{ fontSize: "15px", color: "rgba(20,20,20,0.55)", maxWidth: "340px" }}
                      >
                        {c.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className="font-medium text-dark leading-none"
                          style={{ fontSize: "62px", letterSpacing: "-3px" }}
                        >
                          {c.metric}
                        </span>
                        <span
                          className="font-medium text-dark"
                          style={{ fontSize: "28px", letterSpacing: "-1px", lineHeight: 1 }}
                        >
                          ↑
                        </span>
                      </div>

                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.logo}
                        alt="Logo do cliente"
                        width={c.logoW}
                        height={c.logoH}
                        className="object-contain shrink-0"
                        style={{ maxHeight: "26px", maxWidth: "110px", opacity: 0.65 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
