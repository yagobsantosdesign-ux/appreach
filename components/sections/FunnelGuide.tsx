"use client";
import { useRef, useEffect, useState, type ReactNode } from "react";
import { Tv2, UserPlus, MessageCircle, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionBadge from "@/components/ui/SectionBadge";

/* ── iPhone Mockup ────────────────────────────────────────── */

function IPhoneMockup({ children, bg }: { children: ReactNode; bg: string }) {
  return (
    <div style={{
      width: "155px",
      height: "308px",
      background: "#1c1c26",
      borderRadius: "38px",
      padding: "3px",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.10), 0 20px 56px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.10)",
      flexShrink: 0,
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: "36px",
        overflow: "hidden",
        background: bg,
        position: "relative",
      }}>
        {/* Dynamic Island */}
        <div style={{
          position: "absolute",
          top: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "46px",
          height: "13px",
          background: "#000",
          borderRadius: "99px",
          zIndex: 10,
        }} />
        <div style={{ paddingTop: "28px", height: "100%", overflow: "hidden" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function PhoneWidget({ bg, glow, children }: { bg: string; glow: string; children: ReactNode }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "20px 0",
      background: `radial-gradient(ellipse 70% 90% at center, ${glow} 0%, transparent 70%)`,
      borderRadius: "16px",
    }}>
      <IPhoneMockup bg={bg}>{children}</IPhoneMockup>
    </div>
  );
}

/* ── Telas de App ─────────────────────────────────────────── */

function AdFeedWidget() {
  return (
    <div style={{ borderRadius: "16px", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/funil-alcance.png"
        alt="Alcance"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

function AppStoreWidget() {
  return (
    <div style={{ borderRadius: "16px", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/funil-aquisicao.png"
        alt="Aquisição"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

function LockScreenWidget() {
  return (
    <div style={{ borderRadius: "16px", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/funil-engajamento.png"
        alt="Engajamento"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

function PurchaseWidget() {
  return (
    <div style={{ borderRadius: "16px", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/funil-receita.png"
        alt="Receita"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

/* ── Dados ───────────────────────────────────────────────── */

const stages = [
  {
    number: "01",
    title: "Alcance",
    description: "Construa presença antes do install — em TVs, dispositivos novos e inventários premium.",
    icon: Tv2,
    Widget: AdFeedWidget,
  },
  {
    number: "02",
    title: "Aquisição",
    description: "Atraia usuários com alto potencial de ativação com segmentação precisa e criativos otimizados.",
    icon: UserPlus,
    Widget: AppStoreWidget,
  },
  {
    number: "03",
    title: "Engajamento",
    description: "Ative e retenha usuários com comunicação personalizada dentro e fora do app.",
    icon: MessageCircle,
    Widget: LockScreenWidget,
  },
  {
    number: "04",
    title: "Receita",
    description: "Reengaje quem já instalou e converta intenções em compras, eventos e LTV crescente.",
    icon: TrendingUp,
    Widget: PurchaseWidget,
  },
];

/* ── Componente ──────────────────────────────────────────── */

const STICKY_BASE = 220;

export default function FunnelGuide() {
  const leftRef = useRef<HTMLDivElement>(null);
  const lastCardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastCardTopRef = useRef(STICKY_BASE);
  const [lastCardTop, setLastCardTop] = useState(STICKY_BASE);

  useEffect(() => {
    lastCardTopRef.current = lastCardTop;
  }, [lastCardTop]);

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
    const SCALE_ONSET = 0.0;

    const onScroll = () => {
      const winH = window.innerHeight;
      const stickyTops = stages.map((_, i) =>
        i === n - 1 ? lastCardTopRef.current : STICKY_BASE
      );

      const ONSET = 0.5;

      const rawTs = Array.from({ length: n - 1 }, (_, i) => {
        const nextEl = cardRefs.current[i + 1];
        if (!nextEl) return 0;
        const nextTop = nextEl.getBoundingClientRect().top;
        const nextStickyTop = stickyTops[i + 1];
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
    <section style={{ paddingBottom: "128px", background: "#ffffff" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        <div className="lg:flex lg:items-start lg:gap-20" style={{ paddingTop: "80px" }}>

          {/* LEFT — sticky; containing block = flex container (altura da col direita) */}
          <div ref={leftRef} className="lg:sticky lg:top-[220px] pb-12 lg:w-1/2 shrink-0">
            <SectionBadge>Funil</SectionBadge>
            <h2
              ref={headlineRef}
              className="font-medium text-dark leading-tight"
              style={{ fontSize: "clamp(28px, 6.5vw, 48px)", letterSpacing: "-1.92px", maxWidth: "520px", textWrap: "balance" }}
            >
              Onde está o seu app agora?
            </h2>
            <p
              className="leading-relaxed mt-3"
              style={{ fontSize: "16px", color: "var(--color-body)", maxWidth: "400px" }}
            >
              Cada app está em um momento diferente. Veja qual estratégia faz sentido para o estágio atual do seu crescimento.
            </p>
            <Button href="#contato" variant="gradient" size="md" className="mt-8">
              Diagnóstico gratuito
            </Button>
          </div>

          {/* RIGHT — cards com sticky stacking */}
          <div className="lg:flex-1 min-w-0" style={{ paddingBottom: "0px" }}>
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.number}
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
                    border: "1px solid rgba(255, 255, 255, 0.80)",
                    borderRadius: "24px",
                    boxShadow: "0 4px 32px rgba(101, 87, 234, 0.06), 0 1px 0 rgba(255,255,255,0.9) inset",
                    padding: "40px",
                    marginBottom: i < stages.length - 1 ? "16px" : "0",
                    transition: "none",
                    transformOrigin: "top center",
                  }}
                >
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="flex items-center justify-center rounded-full shrink-0"
                      style={{ width: "34px", height: "34px", background: "#6557ea" }}
                    >
                      <Icon size={15} color="#fff" strokeWidth={2.5} />
                    </div>
                    <p className="font-medium text-dark" style={{ fontSize: "26px", letterSpacing: "-0.5px" }}>
                      {stage.title}
                    </p>
                  </div>
                  <p style={{ fontSize: "16px", color: "var(--color-muted)", lineHeight: 1.65, maxWidth: "360px" }}>
                    {stage.description}
                  </p>

                  {/* Widget */}
                  <div style={{ marginTop: "32px" }}>
                    <stage.Widget />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
