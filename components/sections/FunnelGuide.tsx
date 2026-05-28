"use client";
import React, { useRef, useEffect, useState } from "react";
import { Tv2, UserPlus, MessageCircle, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const stages = [
  {
    title: "Alcance",
    description: "Construa presença antes do install — em TVs, dispositivos novos e inventários premium.",
    icon: Tv2,
    img: "/funil-alcance.webp",
    imgAlt: "Alcance",
  },
  {
    title: "Aquisição",
    description: "Atraia usuários com alto potencial de ativação com segmentação precisa e criativos otimizados.",
    icon: UserPlus,
    img: "/funil-aquisicao.webp",
    imgAlt: "Aquisição",
  },
  {
    title: "Engajamento",
    description: "Ative e retenha usuários com comunicação personalizada dentro e fora do app.",
    icon: MessageCircle,
    img: "/funil-engajamento.webp",
    imgAlt: "Engajamento",
  },
  {
    title: "Receita",
    description: "Reengaje quem já instalou e converta intenções em compras, eventos e LTV crescente.",
    icon: TrendingUp,
    img: "/funil-receita.webp",
    imgAlt: "Receita",
  },
];

const STICKY_BASE = 220;

export default function FunnelGuide() {
  const leftRef      = useRef<HTMLDivElement>(null);
  const lastCardRef  = useRef<HTMLDivElement>(null);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const lastCardTopRef = useRef(STICKY_BASE);
  const [lastCardTop, setLastCardTop] = useState(STICKY_BASE);
  const { ref: headerRef, visible: headerVisible } = useInView();

  useEffect(() => { lastCardTopRef.current = lastCardTop; }, [lastCardTop]);

  useEffect(() => {
    const sync = () => {
      const left = leftRef.current;
      const card = lastCardRef.current;
      if (!left || !card) return;

      left.style.paddingBottom = "48px";
      const leftH = left.getBoundingClientRect().height;
      const cardH = card.getBoundingClientRect().height;

      const centered = Math.round(window.innerHeight / 2 - cardH / 2);
      setLastCardTop(Math.max(STICKY_BASE, centered));

      const extra = Math.max(0, cardH - leftH);
      left.style.paddingBottom = `${48 + extra}px`;
    };

    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  useEffect(() => {
    const n = stages.length;

    const onScroll = () => {
      const winH = window.innerHeight;
      const ONSET = 0.5;

      const rawTs = Array.from({ length: n - 1 }, (_, i) => {
        const nextEl = cardRefs.current[i + 1];
        if (!nextEl) return 0;
        const nextTop = nextEl.getBoundingClientRect().top;
        const nextStickyTop = i + 1 === n - 1 ? lastCardTopRef.current : STICKY_BASE;
        const startPoint = winH * (1 - ONSET);
        return Math.max(0, Math.min(1, (startPoint - nextTop) / (startPoint - nextStickyTop)));
      });

      const seqTs: number[] = [];
      for (let i = 0; i < n - 1; i++) {
        seqTs[i] = i === 0 ? rawTs[i] : (seqTs[i - 1] >= 1 ? rawTs[i] : 0);
      }

      cardRefs.current.forEach((el, i) => {
        if (!el || i === n - 1) return;
        const t = seqTs[i];
        el.style.opacity = `${1 - t}`;
        el.style.transform = `scale(${1 - t * 0.1})`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="funnel-section" style={{ background: "#fafafa", padding: "80px 40px" }}>
      <div
        className="funnel-layout"
        style={{ maxWidth: "1350px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
      >

        {/* LEFT — sticky */}
        <div
          ref={leftRef}
          className="funnel-left lg:sticky lg:top-[220px] funnel-card"
          style={{ width: "400px", flexShrink: 0 }}
        >
          <div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className={`reveal${headerVisible ? " visible" : ""}`}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Badge */}
            <div style={{ display: "inline-flex", gap: "8px", alignItems: "center" }}>
              <div style={{ background: "#6557ea", height: "1.5px", width: "20px", flexShrink: 0 }} />
              <span style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                color: "#6557ea",
                fontSize: "11px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}>
                Funil
              </span>
            </div>

            <h2 style={{ color: "#251d49", fontSize: "48px", fontWeight: 600, lineHeight: "120%", letterSpacing: "-0.02em" }}>
              Onde está o seu app agora?
            </h2>

            <p style={{ fontSize: "16px", color: "#3d3d4a", lineHeight: "160%", maxWidth: "379px" }}>
              Cada app está em um momento diferente. Veja qual estratégia faz sentido para o estágio atual do seu crescimento.
            </p>

            <a
              href="#contato"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#6557ea",
                color: "white",
                height: "48px",
                borderRadius: "12px",
                padding: "0 20px",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                textDecoration: "none",
                whiteSpace: "nowrap",
                alignSelf: "flex-start",
              }}
            >
              Diagnóstico gratuito
            </a>
          </div>
        </div>

        {/* RIGHT — stacking cards */}
        <div className="funnel-right" style={{ width: "542px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.title}
                className="funnel-card"
                ref={(el) => {
                  cardRefs.current[i] = el;
                  if (i === stages.length - 1) lastCardRef.current = el;
                }}
                style={{
                  position: "sticky",
                  top: i === stages.length - 1 ? `${lastCardTop}px` : `${STICKY_BASE}px`,
                  zIndex: i + 1,
                  background: "rgba(255, 255, 255, 0.55)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "24px",
                  padding: "41px",
                  marginBottom: i < stages.length - 1 ? "0" : "0",
                  transition: "none",
                  transformOrigin: "top center",
                }}
              >
                {/* Icon + Title */}
                <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "8px" }}>
                  <div style={{
                    width: "34px", height: "34px",
                    borderRadius: "50%",
                    background: "#6557ea",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={15} color="#fff" strokeWidth={2.5} />
                  </div>
                  <p className="funnel-stage-title" style={{ fontSize: "32px", fontWeight: 600, color: "#251d49", letterSpacing: "-0.02em", lineHeight: "140%" }}>
                    {stage.title}
                  </p>
                </div>

                <p style={{ fontSize: "16px", color: "#909090", lineHeight: "160%", maxWidth: "360px" }}>
                  {stage.description}
                </p>

                {/* Image */}
                <div style={{ marginTop: "32px", borderRadius: "16px", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={stage.img}
                    alt={stage.imgAlt}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
