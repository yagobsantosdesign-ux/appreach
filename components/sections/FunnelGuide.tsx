"use client";
import { useRef, useEffect, useState } from "react";
import { Tv2, UserPlus, MessageCircle, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionBadge from "@/components/ui/SectionBadge";

/* ── Widgets ─────────────────────────────────────────────── */

function GaugeWidget() {
  const r = 64;
  const cx = 90;
  const cy = 80;
  const circumference = Math.PI * r;
  const fill = circumference * 0.72;

  return (
    <div className="flex flex-col items-center justify-center" style={{ height: "190px", background: "#fff", borderRadius: "16px" }}>
      <svg width="180" height="110" viewBox="0 0 180 110" fill="none">
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          stroke="#E8E8F0"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          stroke="#6557ea"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${fill} ${circumference}`}
          fill="none"
        />
        <text x={cx} y={cy - 8} textAnchor="middle" fill="#0F0F14" fontSize="22" fontWeight="700" fontFamily="inherit">2.4M</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill="#9B9BB0" fontSize="11" fontFamily="inherit">impressões / mês</text>
      </svg>
      <div className="flex gap-6 mt-1">
        {["CTV", "Preload", "Mídia Prog."].map((s) => (
          <span key={s} style={{ fontSize: "11px", color: "#9B9BB0", fontWeight: 500 }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function BarChartWidget() {
  const bars = [68, 74, 72, 65, 58, 50, 44, 38].map((h, i) => ({ h, active: i === 7 }));
  const labels = ["Sem 1", "", "", "", "", "", "", "Sem 8"];

  return (
    <div style={{ height: "190px", background: "#fff", borderRadius: "16px", padding: "20px 20px 12px" }}>
      <div className="flex items-end gap-2 h-[120px]">
        {bars.map((b, i) => (
          <div key={i} className="flex flex-col items-center gap-1 flex-1">
            <div
              style={{
                height: `${b}%`,
                background: b.active || i === 7 ? "#6557ea" : i >= 5 ? "#6557ea" : "#E8E8F0",
                borderRadius: "4px 4px 0 0",
                width: "100%",
                opacity: i >= 5 ? 1 : 0.35 + i * 0.09,
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span style={{ fontSize: "10px", color: "#9B9BB0" }}>Sem 1</span>
        <div style={{ fontSize: "11px", color: "#6557ea", fontWeight: 600, background: "#F0EEFF", padding: "2px 8px", borderRadius: "99px" }}>
          R$1,24 CPI ↓
        </div>
        <span style={{ fontSize: "10px", color: "#9B9BB0" }}>Sem 8</span>
      </div>
    </div>
  );
}

function RetentionWidget() {
  const points: [number, number][] = [[20, 20], [55, 34], [90, 44], [125, 52], [160, 58]];
  const labels = ["D1", "D7", "D14", "D21", "D30"];
  const values = ["100%", "94%", "91%", "88%", "85%"];
  const pathD = `M ${points.map(([x, y]) => `${x},${y}`).join(" L ")}`;
  const areaD = `M ${points[0][0]},80 L ${points.map(([x, y]) => `${x},${y}`).join(" L ")} L ${points[points.length - 1][0]},80 Z`;

  return (
    <div style={{ height: "190px", background: "#fff", borderRadius: "16px", padding: "16px 20px 12px" }}>
      <svg width="100%" height="110" viewBox="0 0 180 90" preserveAspectRatio="none">
        <defs>
          <linearGradient id="retGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6557ea" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#6557ea" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#retGrad)" />
        <polyline points={points.map(([x, y]) => `${x},${y}`).join(" ")} fill="none" stroke="#6557ea" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 4 ? 4 : 2.5} fill={i === 4 ? "#6557ea" : "#fff"} stroke="#6557ea" strokeWidth="2" />
        ))}
      </svg>
      <div className="flex justify-between mt-1">
        {labels.map((l, i) => (
          <div key={l} className="flex flex-col items-center gap-0.5">
            <span style={{ fontSize: "11px", fontWeight: i === 4 ? 700 : 500, color: i === 4 ? "#6557ea" : "#9B9BB0" }}>{values[i]}</span>
            <span style={{ fontSize: "10px", color: "#C4C4D4" }}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ROASWidget() {
  const pts: [number, number][] = [[10, 75], [35, 72], [60, 62], [85, 48], [110, 30], [135, 20], [160, 16], [175, 14]];
  const areaD = `M 10,80 L ${pts.map(([x, y]) => `${x},${y}`).join(" L ")} L 175,80 Z`;

  return (
    <div style={{ height: "190px", background: "#fff", borderRadius: "16px", padding: "16px 20px 12px" }}>
      <svg width="100%" height="110" viewBox="0 0 185 90" preserveAspectRatio="none">
        <defs>
          <linearGradient id="roasGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6557ea" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#6557ea" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="10" y1="45" x2="175" y2="45" stroke="#E8E8F0" strokeWidth="1" strokeDasharray="4 3" />
        <path d={areaD} fill="url(#roasGrad)" />
        <polyline points={pts.map(([x, y]) => `${x},${y}`).join(" ")} fill="none" stroke="#6557ea" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="4" fill="#6557ea" stroke="#fff" strokeWidth="2" />
        <rect x="118" y="4" width="62" height="20" rx="6" fill="#F0EEFF" />
        <text x="149" y="17" textAnchor="middle" fill="#6557ea" fontSize="10" fontWeight="700" fontFamily="inherit">4.8× ROAS</text>
      </svg>
      <div className="flex justify-between mt-1">
        <span style={{ fontSize: "10px", color: "#C4C4D4" }}>Início</span>
        <span style={{ fontSize: "11px", color: "#6557ea", fontWeight: 600 }}>Crescimento contínuo ↑</span>
        <span style={{ fontSize: "10px", color: "#C4C4D4" }}>Hoje</span>
      </div>
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
    Widget: GaugeWidget,
  },
  {
    number: "02",
    title: "Aquisição",
    description: "Atraia usuários com alto potencial de ativação com segmentação precisa e criativos otimizados.",
    icon: UserPlus,
    Widget: BarChartWidget,
  },
  {
    number: "03",
    title: "Engajamento",
    description: "Ative e retenha usuários com comunicação personalizada dentro e fora do app.",
    icon: MessageCircle,
    Widget: RetentionWidget,
  },
  {
    number: "04",
    title: "Receita",
    description: "Reengaje quem já instalou e converta intenções em compras, eventos e LTV crescente.",
    icon: TrendingUp,
    Widget: ROASWidget,
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
    // 0 = efeito começa quando o card aparece na base da tela
    // 0.3 = efeito só começa quando o card já percorreu 30% da viewport vindo de baixo
    const SCALE_ONSET = 0.0;

    const onScroll = () => {
      const winH = window.innerHeight;
      const stickyTops = stages.map((_, i) =>
        i === n - 1 ? lastCardTopRef.current : STICKY_BASE
      );

      // efeito começa quando card[i+1] está na metade inferior do viewport
      const ONSET = 0.5;

      // rawTs: progresso bruto de cada card, sem restrição de ordem
      const rawTs = Array.from({ length: n - 1 }, (_, i) => {
        const nextEl = cardRefs.current[i + 1];
        if (!nextEl) return 0;
        const nextTop = nextEl.getBoundingClientRect().top;
        const nextStickyTop = stickyTops[i + 1];
        const startPoint = winH * (1 - ONSET);
        return Math.max(0, Math.min(1, (startPoint - nextTop) / (startPoint - nextStickyTop)));
      });

      // seqTs: só um card some por vez — card[i] só começa após card[i-1] terminar
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
    <section className="bg-white" style={{ paddingBottom: "128px" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        <div className="lg:flex lg:items-start lg:gap-20" style={{ paddingTop: "200px" }}>

          {/* LEFT — sticky; containing block = flex container (altura da col direita) */}
          <div ref={leftRef} className="lg:sticky lg:top-[220px] pb-12 lg:w-1/2 shrink-0">
            <SectionBadge>Qual estratégia é ideal?</SectionBadge>
            <h2
              ref={headlineRef}
              className="font-medium text-dark leading-tight"
              style={{ fontSize: "48px", letterSpacing: "-1.92px", maxWidth: "520px" }}
            >
              A estratégia certa para cada etapa do funil
            </h2>
            <p
              className="leading-relaxed mt-3"
              style={{ fontSize: "16px", color: "var(--color-body)", maxWidth: "400px" }}
            >
              Não existe fórmula única. Identificamos onde seu app está na jornada
              e aplicamos as estratégias que entregam os melhores resultados naquele estágio.
            </p>
            <Button href="#contato" variant="gradient" arrow size="md" className="mt-8">
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
                    background: "linear-gradient(to bottom, #F5F4FF 0%, #ffffff 100%)",
                    border: "1px solid #E8E4F0",
                    borderRadius: "20px",
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
