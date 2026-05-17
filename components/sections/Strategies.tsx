"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import { useEffect, useRef, useState } from "react";

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// ─── Aquisição de Usuários ───────────────────────────────────────────────────
const IPHONE_W = 220;

const aquisicaoNotifs = [
  { line1: "Trial iniciado!",       line2: "João iniciou um novo Trial" },
  { line1: "Lucas instalou o app!", line2: "via Social Ads" },
  { line1: "47 installs hoje",      line2: "↑ 23% vs ontem" },
  { line1: "Ana converteu R$ 127",  line2: "In-app purchase" },
  { line1: "Pedro ativou premium!", line2: "Upgrade confirmado" },
];

function AquisicaoWidget() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [notifVisible, setNotifVisible] = useState(false);
  const [notifIdx, setNotifIdx] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = wrapper.offsetWidth;
    const H = wrapper.offsetHeight;
    canvas.width = W;
    canvas.height = H;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";

    // ── Channels ──────────────────────────────────────────────────
    const channels = [
      { label: "Social",       color: "#3B82F6" },
      { label: "Search",       color: "#10B981" },
      { label: "Display",      color: "#F59E0B" },
      { label: "CTV",          color: "#EF4444" },
      { label: "Programática", color: "#8B5CF6" },
    ];

    const PILL_H = 28, PILL_GAP = 12;
    const PILL_PAD = 10, DOT_DIAM = 7, DOT_LABEL_GAP = 6;
    ctx.font = "600 11.5px -apple-system,system-ui,sans-serif";
    const maxLabelW = Math.max(...channels.map(ch => ctx.measureText(ch.label).width));
    const PILL_W = Math.ceil(PILL_PAD + DOT_DIAM + DOT_LABEL_GAP + maxLabelW + PILL_PAD);
    const xOffsets = [0, 0, 0, 0, 0];
    const pillWidths = channels.map(() => PILL_W);

    const totalPillH = channels.length * PILL_H + (channels.length - 1) * PILL_GAP;
    const pillStartY = (H - totalPillH) / 2;
    const pillCentersY = channels.map((_, i) => pillStartY + i * (PILL_H + PILL_GAP) + PILL_H / 2);

    // ── Particles ─────────────────────────────────────────────────
    type Particle = { idx: number; t: number; speed: number; alpha: number };
    const particles: Particle[] = [];
    let lastSpawn = 0;

    const rRect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y);
      ctx.arcTo(x + w, y, x + w, y + r, r);
      ctx.lineTo(x + w, y + h - r);
      ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
      ctx.lineTo(x + r, y + h);
      ctx.arcTo(x, y + h, x, y + h - r, r);
      ctx.lineTo(x, y + r);
      ctx.arcTo(x, y, x + r, y, r);
      ctx.closePath();
    };

    const lineTarget = { x: W - IPHONE_W - 10 - 1, y: H / 2 };
    const bezierPt = (t: number, fromX: number, fromY: number) => {
      const dx = lineTarget.x - fromX;
      const cp1x = fromX + dx * 0.42, cp1y = fromY;
      const cp2x = fromX + dx * 0.68, cp2y = lineTarget.y;
      const mt = 1 - t;
      return {
        x: mt*mt*mt*fromX + 3*mt*mt*t*cp1x + 3*mt*t*t*cp2x + t*t*t*lineTarget.x,
        y: mt*mt*mt*fromY + 3*mt*mt*t*cp1y + 3*mt*t*t*cp2y + t*t*t*lineTarget.y,
      };
    };

    // ── Draw helpers ──────────────────────────────────────────────
    const drawLines = (_now: number) => {
      pillCentersY.forEach((fromY, i) => {
        const fromX = xOffsets[i] + pillWidths[i];
        const dx = lineTarget.x - fromX;
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.bezierCurveTo(fromX + dx * 0.42, fromY, fromX + dx * 0.68, lineTarget.y, lineTarget.x, lineTarget.y);
        ctx.strokeStyle = "rgba(101,87,234,0.11)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
    };

    const drawPills = () => {
      const DOT_R = DOT_DIAM / 2, DOT_X = PILL_PAD + DOT_R, TEXT_X_OFFSET = PILL_PAD + DOT_DIAM + DOT_LABEL_GAP;
      channels.forEach((ch, i) => {
        const px = xOffsets[i];
        const py = pillStartY + i * (PILL_H + PILL_GAP);
        const cy = py + PILL_H / 2;
        const pw = pillWidths[i];
        const radius = 8;

        // white background + soft shadow
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.08)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetY = 3;
        rRect(px, py, pw, PILL_H, radius);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.restore();

        // green status dot
        ctx.save();
        ctx.beginPath();
        ctx.arc(px + DOT_X, cy, DOT_R, 0, Math.PI * 2);
        ctx.fillStyle = "#22C55E";
        ctx.fill();
        ctx.restore();

        // label
        ctx.save();
        ctx.font = "600 11.5px -apple-system,system-ui,sans-serif";
        ctx.fillStyle = "#1a1a2e";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(ch.label, px + TEXT_X_OFFSET, cy);
        ctx.restore();
      });
    };

    let cancelled = false;
    let rafId: number;

    const drawFrame = (now: number) => {
      if (cancelled) return;
      ctx.clearRect(0, 0, W, H);

      drawLines(now);

      // Spawn & draw particles
      if (now - lastSpawn > 650) {
        const idx = Math.floor(Math.random() * channels.length);
        particles.push({ idx, t: 0, speed: 0.003 + Math.random() * 0.0015, alpha: 0 });
        lastSpawn = now;
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.t += p.speed;
        if (p.t >= 1) { particles.splice(i, 1); continue; }
        p.alpha = p.t < 0.12 ? p.t / 0.12 : p.t > 0.84 ? (1 - p.t) / 0.16 : 1;
        const fromX = xOffsets[p.idx] + pillWidths[p.idx], fromY = pillCentersY[p.idx];

        const SEG = 0.09;
        const t0 = Math.max(0, p.t - SEG);
        const STEPS = 10;

        for (let s = 0; s < STEPS; s++) {
          const ta = t0 + (p.t - t0) * (s / STEPS);
          const tb = t0 + (p.t - t0) * ((s + 1) / STEPS);
          const prog = (s + 1) / STEPS;
          const ptA = bezierPt(ta, fromX, fromY);
          const ptB = bezierPt(tb, fromX, fromY);

          ctx.save();
          ctx.globalAlpha = p.alpha * prog * 0.55;
          ctx.beginPath(); ctx.moveTo(ptA.x, ptA.y); ctx.lineTo(ptB.x, ptB.y);
          ctx.strokeStyle = "#8B7FF5";
          ctx.lineWidth = 3;
          ctx.lineCap = "round";
          ctx.shadowColor = "#6557EA";
          ctx.shadowBlur = 8;
          ctx.stroke();
          ctx.restore();
        }
      }

      drawPills();
      rafId = requestAnimationFrame(drawFrame);
    };

    rafId = requestAnimationFrame(drawFrame);
    return () => { cancelled = true; cancelAnimationFrame(rafId); };
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      setNotifVisible(true);
      let idx = 0;
      interval = setInterval(() => {
        setNotifVisible(false);
        setTimeout(() => {
          idx = (idx + 1) % aquisicaoNotifs.length;
          setNotifIdx(idx);
          setNotifVisible(true);
        }, 400);
      }, 3500);
    }, 700);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, []);

  const notif = aquisicaoNotifs[notifIdx];

  return (
    <div ref={wrapperRef} style={{ height: "240px", position: "relative", overflow: "visible" }}>
      <canvas ref={canvasRef} style={{ display: "block", position: "absolute", top: 0, left: 0 }} />
      {/* iPhone */}
      <div style={{ position: "absolute", right: "10px", top: 0, width: `${IPHONE_W}px`, height: "240px", overflow: "hidden" }}>
        <img
          src="/iphone-lockscreen.png"
          alt=""
          style={{ position: "absolute", top: 0, left: 0, width: "auto", height: "100%", pointerEvents: "none" }}
        />
      </div>
      {/* Notification — 3D pop-out */}
      <div style={{
        position: "absolute", top: "148px", right: "0px",
        width: "240px",
        background: "#ffffff",
        borderRadius: "14px",
        padding: "10px 12px",
        display: "flex", gap: "10px", alignItems: "center",
        opacity: notifVisible ? 1 : 0,
        transform: notifVisible ? "translateY(0) scale(1)" : "translateY(-10px) scale(0.97)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.13), 0 20px 40px rgba(0,0,0,0.09)",
        zIndex: 10,
      }}>
        <img src="/appreach-icon.png" alt="Appreach" style={{ width: "30px", height: "30px", borderRadius: "8px", flexShrink: 0, objectFit: "cover" }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "4px" }}>
            <span style={{ fontSize: "9.5px", fontWeight: 700, color: "#0F0F14", lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{notif.line1}</span>
            <span style={{ fontSize: "8px", color: "#9B9BB0", flexShrink: 0 }}>Agora</span>
          </div>
          <div style={{ fontSize: "9px", color: "#7A7A8C", marginTop: "2px" }}>{notif.line2}</div>
        </div>
      </div>
      {/* Bottom fade to crop the phone */}
      <div style={{ position: "absolute", right: "10px", top: 0, width: `${IPHONE_W}px`, height: "240px", background: "linear-gradient(to bottom, transparent 58%, white 100%)", pointerEvents: "none" }} />
    </div>
  );
}

// ─── Retargeting ─────────────────────────────────────────────────────────────
function RetargetingWidget() {
  const [visible, setVisible] = useState([false, false, false]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible([true, false, false]), 400);
    const t2 = setTimeout(() => setVisible([true, true, false]), 900);
    const t3 = setTimeout(() => setVisible([true, true, true]), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const notifications = [
    { emoji: "🛒", title: "Seu carrinho espera!", body: "3 itens — R$ 247,00" },
    { emoji: "🎮", title: "Você ganhou 500 coins!", body: "Volte e resgate agora" },
    { emoji: "✈️", title: "Oferta só para você", body: "Voo + hotel com 40% off" },
  ];

  return (
    <div style={{ height: "240px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "center" }}>
      {notifications.map((n, i) => (
        <div key={i}
          onMouseEnter={() => setHoveredIdx(i)}
          onMouseLeave={() => setHoveredIdx(null)}
          style={{
          display: "flex", alignItems: "center", gap: "10px",
          background: "#ffffff", borderRadius: "12px", padding: "10px 12px", boxShadow: "0 2px 12px rgba(16,16,25,0.07)",
          opacity: visible[i] ? 1 : 0,
          transform: visible[i] ? (hoveredIdx === i ? "translateX(0) scale(1.03)" : "translateX(0) scale(1)") : "translateX(18px) scale(1)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          cursor: "default",
        }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>
            {n.emoji}
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: "12px", fontWeight: 600, color: "#0F0F14", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{n.title}</div>
            <div style={{ fontSize: "11px", color: "#9B9BB0", marginTop: "2px" }}>{n.body}</div>
          </div>
          <div style={{ marginLeft: "auto", flexShrink: 0 }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6557EA" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── App Chat & Push ──────────────────────────────────────────────────────────
function AppChatWidget() {
  const [show, setShow] = useState([false, false]);

  useEffect(() => {
    const t1 = setTimeout(() => setShow([true, false]), 300);
    const t2 = setTimeout(() => setShow([true, true]), 850);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{ height: "240px", display: "flex", gap: "12px", alignItems: "stretch" }}>
      {/* Push Notification */}
      <div style={{
        flex: 1,
        background: "rgba(255,255,255,0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.9)",
        borderRadius: "18px",
        padding: "18px",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        boxShadow: "0 2px 20px rgba(101,87,234,0.07)",
        opacity: show[0] ? 1 : 0,
        transform: show[0] ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "linear-gradient(135deg, #6557EA, #9B8FF5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>🔔</div>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#6557EA", letterSpacing: "0.5px" }}>PUSH</span>
          </div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#0F0F14", lineHeight: 1.3, marginBottom: "6px" }}>Oferta exclusiva para você</div>
          <div style={{ fontSize: "12px", color: "#9B9BB0", lineHeight: 1.5 }}>30% off até hoje. Não perca essa chance.</div>
        </div>
        <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
          <div style={{ flex: 1, background: "#6557EA", color: "#fff", fontSize: "12px", fontWeight: 600, padding: "8px", borderRadius: "10px", textAlign: "center" }}>Ver oferta</div>
          <div style={{ flex: 1, background: "rgba(0,0,0,0.06)", color: "#7A7A8C", fontSize: "12px", fontWeight: 600, padding: "8px", borderRadius: "10px", textAlign: "center" }}>Fechar</div>
        </div>
      </div>

      {/* In-App Message */}
      <div style={{
        flex: 1,
        background: "linear-gradient(145deg, #6557EA 0%, #7C6FF0 100%)",
        borderRadius: "18px",
        padding: "18px",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        boxShadow: "0 4px 24px rgba(101,87,234,0.22)",
        opacity: show[1] ? 1 : 0,
        transform: show[1] ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}>
        <div>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.5px", marginBottom: "12px" }}>IN-APP MESSAGE</div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: "6px" }}>Bem-vindo de volta! 👋</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>Continue de onde você parou. Sua sessão foi salva.</div>
        </div>
        <button style={{ marginTop: "12px", background: "rgba(255,255,255,0.16)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "10px", padding: "8px 0", fontSize: "12px", fontWeight: 700, cursor: "pointer", width: "100%" }}>
          Continuar →
        </button>
      </div>
    </div>
  );
}

// ─── Mídia Programática ───────────────────────────────────────────────────────
function MidiaProgramaticaWidget() {
  const arcRef = useRef<SVGPathElement>(null);
  const numRef = useRef<SVGTextElement>(null);
  const segBarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const segNumRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const r = 82, cx = 100, cy = 106;
  const circumference = Math.PI * r;
  const TARGET = 0.87;

  const segments = [
    { label: "Interesses", pct: 92, color: "#6557EA" },
    { label: "Comportamento", pct: 85, color: "#9B8FF5" },
    { label: "Lookalike", pct: 78, color: "#C4BCFB" },
  ];

  useEffect(() => {
    let raf: number;
    let cancelled = false;
    const t0 = performance.now();
    const FILL_MS = 1600;

    const step = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - t0) / FILL_MS);
      const p = easeInOut(t);
      const fill = circumference * TARGET * p;
      if (arcRef.current) arcRef.current.setAttribute("stroke-dasharray", `${fill} ${circumference}`);
      if (numRef.current) numRef.current.textContent = `${Math.round(87 * p)}%`;
      segments.forEach((seg, i) => {
        if (segBarRefs.current[i]) segBarRefs.current[i]!.style.width = `${seg.pct * p}%`;
        if (segNumRefs.current[i]) segNumRefs.current[i]!.textContent = `${Math.round(seg.pct * p)}%`;
      });
      if (t < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => { cancelled = true; cancelAnimationFrame(raf); };
  }, []);

  return (
    <div style={{ height: "240px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 4px" }}>
      <svg width="100%" viewBox="0 0 200 120" fill="none" style={{ overflow: "visible", maxWidth: "220px" }}>
        <defs>
          <linearGradient id="mpArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9B8FF5" />
            <stop offset="100%" stopColor="#6557EA" />
          </linearGradient>
        </defs>
        {/* Track */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          stroke="rgba(101,87,234,0.14)" strokeWidth="11" strokeLinecap="round" fill="none"
        />
        {/* Fill */}
        <path
          ref={arcRef}
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          stroke="url(#mpArcGrad)" strokeWidth="11" strokeLinecap="round"
          strokeDasharray={`0 ${circumference}`}
          fill="none"
        />
        {/* Big number */}
        <text ref={numRef} x={cx} y={cy - 22} textAnchor="middle" fill="#0F0F14" fontSize="40" fontWeight="700" letterSpacing="-2">0%</text>
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#9B9BB0" fontSize="11" letterSpacing="0.2">audience match</text>
      </svg>

      {/* Segment bars */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "9px", marginTop: "12px" }}>
        {segments.map((seg, i) => (
          <div key={seg.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "11px", color: "#9B9BB0", width: "96px", textAlign: "right", flexShrink: 0, letterSpacing: "-0.1px" }}>{seg.label}</span>
            <div style={{ flex: 1, height: "6px", background: "rgba(101,87,234,0.12)", borderRadius: "99px", overflow: "hidden" }}>
              <div
                ref={(el) => { segBarRefs.current[i] = el; }}
                style={{ height: "100%", width: "0%", background: seg.color, borderRadius: "99px" }}
              />
            </div>
            <span
              ref={(el) => { segNumRefs.current[i] = el; }}
              style={{ fontSize: "11px", color: seg.color, fontWeight: 700, width: "30px", letterSpacing: "-0.2px" }}
            >0%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Strategies section ───────────────────────────────────────────────────────
const strategies: {
  title: string;
  description: React.ReactNode;
  span: string;
  widgetHeight: string;
  dark?: boolean;
  solid?: boolean;
  titleSize?: string;
  descSize?: string;
  descMaxWidth?: string;
  textMarginTop?: string;
  widget?: React.ReactNode;
}[] = [
  {
    title: "Aquisição de Usuários",
    description: "Campanhas de UA com segmentação precisa para atrair novos usuários qualificados e maximizar o volume de installs.",
    span: "lg:col-span-2",
    widgetHeight: "240px",
    solid: true,
    descMaxWidth: "460px",
    textMarginTop: "16px",
    widget: <AquisicaoWidget />,
  },
  {
    title: "Retargeting",
    description: <>Reengaje usuários que já instalaram seu app<br />e converta intenções em compras<br />e eventos de receita.</>,
    span: "lg:col-span-1",
    widgetHeight: "240px",
    widget: <RetargetingWidget />,
  },
  {
    title: "App Chat & Push",
    description: <>Comunicação direta dentro e fora do app com mensagens<br />personalizadas para aumentar retenção e LTV.</>,
    span: "lg:col-span-2",
    widgetHeight: "240px",
    widget: <AppChatWidget />,
  },
  {
    title: "CTV",
    description: <>Anuncie em TVs conectadas e streaming<br />para construir brand awareness e escalar<br />o alcance do seu app.</>,
    span: "lg:col-span-1",
    widgetHeight: "240px",
    dark: true,
  },
  {
    title: "Preload",
    description: <>Seu app pré-instalado em dispositivos novos, garantindo<br />presença desde o primeiro acesso do usuário.</>,
    span: "lg:col-span-2",
    widgetHeight: "240px",
    dark: true,
  },
  {
    title: "Mídia Programática",
    description: <>Compra de mídia em escala com dados de<br />primeira parte para atingir o usuário certo,<br />no momento certo.</>,
    span: "lg:col-span-1",
    widgetHeight: "240px",
    widget: <MidiaProgramaticaWidget />,
  },
];

import React from "react";

export default function Strategies() {
  return (
    <section id="estrategias" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionBadge>Estratégias</SectionBadge>
          <h2
            className="font-medium text-dark leading-tight mb-4"
            style={{ fontSize: "48px", letterSpacing: "-1.92px" }}
          >
            Cobertura completa<br />do funil do seu app
          </h2>
          <p className="text-body leading-relaxed" style={{ fontSize: "16px" }}>
            Da primeira impressão ao evento de receita — cada estratégia foi
            desenvolvida para uma etapa específica da jornada do usuário.
          </p>
        </div>

        {/* Bento grid */}
        <div className="relative overflow-hidden rounded-[32px] p-4" style={{ background: "linear-gradient(160deg, #F2EFFF 0%, #F8F6FF 30%, #EEF0FF 65%, #F5F2FF 100%)" }}>
          {/* Blobs */}
          <div style={{ position: "absolute", top: "-60px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(101,87,234,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "40%", right: "-80px", width: "340px", height: "340px", borderRadius: "50%", background: "radial-gradient(circle, rgba(155,145,255,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-40px", left: "35%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,140,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-3" style={{ zIndex: 1 }}>
            {strategies.map((s) => (
              <div
                key={s.title}
                className={`flex flex-col p-7 ${s.span}`}
                style={{
                  background: s.dark
                    ? "linear-gradient(145deg, #1E1640 0%, #2D1F5E 100%)"
                    : s.solid
                      ? "#fcfcfe"
                      : "rgba(255, 255, 255, 0.55)",
                  backdropFilter: s.dark || s.solid ? undefined : "blur(18px)",
                  WebkitBackdropFilter: s.dark || s.solid ? undefined : "blur(18px)",
                  border: s.dark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : s.solid
                      ? "1px solid #e5e5eb"
                      : "1px solid rgba(255, 255, 255, 0.80)",
                  borderRadius: "24px",
                  boxShadow: s.dark
                    ? "0 4px 32px rgba(0,0,0,0.18)"
                    : s.solid
                      ? "0px 4px 20px 0px rgba(16,16,25,0.06)"
                      : "0 4px 32px rgba(101, 87, 234, 0.06), 0 1px 0 rgba(255,255,255,0.9) inset",
                  minHeight: `calc(${s.widgetHeight} + 120px)`,
                }}
              >
                {s.widget && (
                  <div style={{ flex: 1 }}>{s.widget}</div>
                )}
                <div style={{ marginTop: s.textMarginTop ?? "auto" }}>
                  <h3
                    className="font-medium"
                    style={{ fontSize: s.titleSize ?? "24px", letterSpacing: "-0.4px", color: s.dark ? "rgba(255,255,255,0.92)" : s.solid ? "#101019" : undefined }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="leading-relaxed mt-2"
                    style={{ fontSize: s.descSize ?? "15px", color: s.dark ? "rgba(255,255,255,0.45)" : s.solid ? "#7e7e92" : "#7A7A8C", maxWidth: s.descMaxWidth }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
