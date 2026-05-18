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

// ─── Re-engagement (Retargeting) ─────────────────────────────────────────────
function ReengagementWidget() {
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <img
        src="/retargeting-widget.png"
        alt="Retargeting"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
}

// ─── App Chat & Push ──────────────────────────────────────────────────────────
const chatMsgs = [
  { text: "👋 Sentimos sua falta!",          delay: 500  },
  { text: "Temos oferta especial pra você!", delay: 1400 },
  { text: "30% off em planos Premium 🎉",    delay: 2300 },
];

const pushItems = [
  { title: "Seu carrinho espera!", body: "Conclua sua compra",   delay: 500  },
  { title: "Oferta exclusiva!",    body: "Só hoje: 30% off",     delay: 1400 },
  { title: "Em alta agora",        body: "+2.4K downloads hoje", delay: 2300 },
];

const pushIcons = [
  <svg key="cart" width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M1.5 2.5H3l2 7h6.5L13 4H4.5" stroke="#6557EA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6.5" cy="12.5" r="1.1" fill="#6557EA"/>
    <circle cx="10.5" cy="12.5" r="1.1" fill="#6557EA"/>
  </svg>,
  <svg key="bell" width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M7.5 1.5C5.3 1.5 3.5 3.3 3.5 5.5V9L2 10.5h11L11.5 9V5.5C11.5 3.3 9.7 1.5 7.5 1.5z"
      stroke="#6557EA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5" stroke="#6557EA" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>,
  <svg key="trend" width="15" height="15" viewBox="0 0 15 15" fill="none">
    <polyline points="1,12 5.5,7.5 8.5,10.5 14,4" stroke="#6557EA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="10,4 14,4 14,8" stroke="#6557EA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

function ChatBubbleWidget() {
  const [hoverOfertas, setHoverOfertas] = React.useState(false);
  const [hoverNotif, setHoverNotif] = React.useState(false);
  const transition = "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)";

  return (
    <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "72px", background: "linear-gradient(to bottom, transparent, #fcfcfe)", zIndex: 10, pointerEvents: "none" }} />
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", height: "100%", overflow: "hidden" }}>
        <img
          src="/widget-ofertas.png"
          alt="Ofertas App"
          onMouseEnter={() => setHoverOfertas(true)}
          onMouseLeave={() => setHoverOfertas(false)}
          style={{
            height: "calc(100% + 60px)", width: "auto", flexShrink: 0, position: "relative", zIndex: 1,
            transform: hoverOfertas ? "translateY(60px) scale(1.05)" : "translateY(60px)",
            transition,
            cursor: "pointer",
          }}
        />
        <img
          src="/widget-notifications.png"
          alt="Notificações"
          onMouseEnter={() => setHoverNotif(true)}
          onMouseLeave={() => setHoverNotif(false)}
          style={{
            height: "calc(90% + 60px)", width: "auto", flexShrink: 0, position: "relative", zIndex: 2,
            marginLeft: "-130px",
            transform: hoverNotif ? "translateY(60px) scale(1.05)" : "translateY(60px)",
            transition,
            cursor: "pointer",
          }}
        />
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

// ─── CTV ─────────────────────────────────────────────────────────────────────
function CTVWidget() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf: number;
    let cancelled = false;
    const t0 = performance.now();
    const DURATION = 1600;
    const step = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - t0) / DURATION);
      setCount(Math.round(42 * easeInOut(t)));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => { cancelled = true; cancelAnimationFrame(raf); };
  }, []);

  return (
    <div style={{ height: "240px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "22px" }}>
      <svg width="108" height="90" viewBox="0 0 108 90" fill="none">
        <rect x="1" y="1" width="106" height="66" rx="10" stroke="rgba(101,87,234,0.2)" strokeWidth="2" />
        <rect x="7" y="7" width="94" height="54" rx="7" fill="rgba(101,87,234,0.1)" />
        <ellipse cx="54" cy="34" rx="20" ry="16" fill="rgba(101,87,234,0.18)" />
        <polygon points="45,24 45,44 67,34" fill="rgba(101,87,234,0.85)" />
        <circle cx="90" cy="16" r="2.5" fill="rgba(34,197,94,0.9)" />
        <circle cx="97" cy="16" r="2.5" fill="rgba(34,197,94,0.55)" />
        <circle cx="104" cy="16" r="2.5" fill="rgba(34,197,94,0.25)" />
        <line x1="54" y1="67" x2="54" y2="78" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
        <rect x="36" y="78" width="36" height="5" rx="2.5" fill="rgba(0,0,0,0.07)" />
      </svg>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "44px", fontWeight: 700, color: "#0F0F14", letterSpacing: "-2px", lineHeight: 1 }}>
          {count}<span style={{ fontSize: "22px", color: "#6557EA", fontWeight: 600 }}>M</span>
        </div>
        <div style={{ fontSize: "11px", color: "#9B9BB0", marginTop: "6px" }}>households alcançados</div>
      </div>
      <div style={{ display: "flex", gap: "28px" }}>
        {[{ value: "150+", label: "plataformas" }, { value: "98%", label: "viewability" }].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#6557EA", letterSpacing: "-0.3px" }}>{s.value}</div>
            <div style={{ fontSize: "9.5px", color: "#9B9BB0", marginTop: "2px" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Preload ──────────────────────────────────────────────────────────────────
function PreloadWidget() {
  return (
    <div style={{ height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <img
        src="/preload-widget.png"
        alt="Preload"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "40%",
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,1))",
        pointerEvents: "none",
      }} />
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
  noPadding?: boolean;
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
    solid: true,
    textMarginTop: "16px",
    noPadding: true,
    widget: <ReengagementWidget />,
  },
  {
    title: "CTV",
    description: <>Anuncie em TVs conectadas e streaming<br />para construir brand awareness e escalar<br />o alcance do seu app.</>,
    span: "lg:col-span-1",
    widgetHeight: "240px",
    solid: true,
    textMarginTop: "16px",
    widget: <CTVWidget />,
  },
  {
    title: "App Chat & Push",
    description: <>Comunicação direta dentro e fora do app com mensagens<br />personalizadas para aumentar retenção e LTV.</>,
    span: "lg:col-span-2",
    widgetHeight: "280px",
    solid: true,
    descMaxWidth: "460px",
    textMarginTop: "16px",
    widget: <ChatBubbleWidget />,
  },
  {
    title: "Preload",
    description: <>Seu app pré-instalado em dispositivos novos, garantindo<br />presença desde o primeiro acesso do usuário.</>,
    span: "lg:col-span-2",
    widgetHeight: "240px",
    solid: true,
    noPadding: true,
    textMarginTop: "16px",
    widget: <PreloadWidget />,
  },
  {
    title: "Mídia Programática",
    description: <>Compra de mídia em escala com dados de<br />primeira parte para atingir o usuário certo,<br />no momento certo.</>,
    span: "lg:col-span-1",
    widgetHeight: "240px",
    solid: true,
    textMarginTop: "16px",
    widget: <MidiaProgramaticaWidget />,
  },
];

import React from "react";

export default function Strategies() {
  return (
    <section id="estrategias" className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundImage: "url('/bg-estrategias.png')", backgroundSize: "cover", backgroundPosition: "center" }}>

      <div className="relative max-w-[1200px] mx-auto px-4 lg:px-0" style={{ zIndex: 1 }}>
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
        <div className="relative">
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-3" style={{ zIndex: 1 }}>
            {strategies.map((s) => (
              <div
                key={s.title}
                className={`flex flex-col ${s.noPadding ? "" : "p-7"} ${s.span}`}
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
                  overflow: s.noPadding ? "hidden" : undefined,
                }}
              >
                {s.widget && (
                  <div style={{ flex: 1 }}>{s.widget}</div>
                )}
                <div style={{
                  marginTop: s.textMarginTop ?? "auto",
                  ...(s.noPadding ? { padding: "0 28px 28px 28px" } : {}),
                }}>
                  <h3
                    className="font-medium"
                    style={{ fontSize: s.titleSize ?? "24px", letterSpacing: "-0.4px", color: s.dark ? "rgba(255,255,255,0.92)" : "#0F0F14" }}
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
