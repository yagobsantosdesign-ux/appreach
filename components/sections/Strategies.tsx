"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import { useEffect, useRef, useState, ElementType } from "react";
import { useInView } from "@/hooks/useInView";

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// ─── Aquisição de Usuários ───────────────────────────────────────────────────
const aquisicaoNotifs = [
  { line1: "Trial iniciado!",       line2: "João iniciou um novo Trial" },
  { line1: "Lucas instalou o app!", line2: "via Social Ads" },
  { line1: "47 installs hoje",      line2: "↑ 23% vs ontem" },
  { line1: "Ana converteu R$ 127",  line2: "In-app purchase" },
  { line1: "Pedro ativou premium!", line2: "Upgrade confirmado" },
];

const ACQS_CHANNELS: { id: string; label: string; count: number; pos: string }[] = [
  { id: "social",       label: "Social",       count: 342,  pos: "left-top"     },
  { id: "search",       label: "Search",       count: 1285, pos: "left-bottom"  },
  { id: "display",      label: "Display",      count: 632,  pos: "right-top"    },
  { id: "programatica", label: "Programática", count: 823,  pos: "right-bottom" },
];

function AcqChannelIcon({ id }: { id: string }) {
  const c = "#6557EA";
  const s = { stroke: c, fill: "none", strokeWidth: "1.5", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (id === "social")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4" stroke={c} strokeWidth="1.5"/>
        <path stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path stroke={c} strokeWidth="1.5" strokeLinecap="round" d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    );
  if (id === "search")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" {...s}/>
        <line x1="21" y1="21" x2="16.65" y2="16.65" {...s}/>
      </svg>
    );
  if (id === "display")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" {...s}/>
        <line x1="8" y1="21" x2="16" y2="21" {...s}/>
        <line x1="12" y1="17" x2="12" y2="21" {...s}/>
      </svg>
    );
  // programatica — bar chart
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <line x1="18" y1="20" x2="18" y2="10" {...s}/>
      <line x1="12" y1="20" x2="12" y2="4" {...s}/>
      <line x1="6" y1="20" x2="6" y2="14" {...s}/>
      <line x1="2" y1="20" x2="22" y2="20" {...s}/>
    </svg>
  );
}

function AquisicaoWidget() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>(ACQS_CHANNELS.map(() => null));
  const [counts, setCounts] = useState(ACQS_CHANNELS.map(() => 0));
  const [notifVisible, setNotifVisible] = useState(false);
  const [notifIdx, setNotifIdx] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    let rafId: number;
    type Particle = { chIdx: number; t: number; speed: number; alpha: number };
    const particles: Particle[] = [];
    let lastSpawn = 0;

    const getConn = () => {
      const W = wrapper.offsetWidth;
      const H = wrapper.offsetHeight;
      const ic = { x: W / 2, y: H / 2 };
      const wRect = wrapper.getBoundingClientRect();
      const cards = cardRefs.current.map((el, i) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        const x0 = r.left - wRect.left, y0 = r.top - wRect.top;
        const w = r.width, h = r.height;
        const p = ACQS_CHANNELS[i].pos;
        let sx = x0 + w / 2, sy = y0 + h / 2;
        if (p === "left-top" || p === "left-bottom") sx = x0 + w;
        if (p === "right-top" || p === "right-bottom") sx = x0;
        return { sx, sy };
      });
      return { ic, cards };
    };

    const getCPs = (sx: number, sy: number, ex: number, ey: number) => {
      const dx = ex - sx, dy = ey - sy;
      return Math.abs(dx) > Math.abs(dy)
        ? { cp1x: sx + dx * 0.5, cp1y: sy, cp2x: ex - dx * 0.5, cp2y: ey }
        : { cp1x: sx, cp1y: sy + dy * 0.5, cp2x: ex, cp2y: ey - dy * 0.5 };
    };

    const bpt = (t: number, sx: number, sy: number, cp1x: number, cp1y: number, cp2x: number, cp2y: number, ex: number, ey: number) => {
      const m = 1 - t;
      return {
        x: m*m*m*sx + 3*m*m*t*cp1x + 3*m*t*t*cp2x + t*t*t*ex,
        y: m*m*m*sy + 3*m*m*t*cp1y + 3*m*t*t*cp2y + t*t*t*ey,
      };
    };

    const drawFrame = (now: number) => {
      if (cancelled) return;
      const W = wrapper.offsetWidth;
      const H = wrapper.offsetHeight;
      if (canvas.width !== W || canvas.height !== H) {
        canvas.width = W; canvas.height = H;
        canvas.style.width = W + "px"; canvas.style.height = H + "px";
      }
      ctx.clearRect(0, 0, W, H);

      const { ic, cards } = getConn();

      ACQS_CHANNELS.forEach((ch, i) => {
        const c = cards[i]; if (!c) return;
        const { cp1x, cp1y, cp2x, cp2y } = getCPs(c.sx, c.sy, ic.x, ic.y);
        ctx.beginPath();
        ctx.moveTo(c.sx, c.sy);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, ic.x, ic.y);
        ctx.strokeStyle = "rgba(101,87,234,0.12)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      if (now - lastSpawn > 580) {
        const idx = Math.floor(Math.random() * ACQS_CHANNELS.length);
        particles.push({ chIdx: idx, t: 0, speed: 0.003 + Math.random() * 0.0014, alpha: 0 });
        lastSpawn = now;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.t += p.speed;
        if (p.t >= 1) { particles.splice(i, 1); continue; }
        p.alpha = p.t < 0.12 ? p.t / 0.12 : p.t > 0.84 ? (1 - p.t) / 0.16 : 1;
        const c = cards[p.chIdx]; if (!c) continue;
        const { cp1x, cp1y, cp2x, cp2y } = getCPs(c.sx, c.sy, ic.x, ic.y);
        const SEG = 0.09, t0 = Math.max(0, p.t - SEG), STEPS = 10;
        for (let s = 0; s < STEPS; s++) {
          const ta = t0 + (p.t - t0) * (s / STEPS);
          const tb = t0 + (p.t - t0) * ((s + 1) / STEPS);
          const prog = (s + 1) / STEPS;
          const ptA = bpt(ta, c.sx, c.sy, cp1x, cp1y, cp2x, cp2y, ic.x, ic.y);
          const ptB = bpt(tb, c.sx, c.sy, cp1x, cp1y, cp2x, cp2y, ic.x, ic.y);
          ctx.save();
          ctx.globalAlpha = p.alpha * prog * 0.70;
          ctx.beginPath(); ctx.moveTo(ptA.x, ptA.y); ctx.lineTo(ptB.x, ptB.y);
          ctx.strokeStyle = "#6557EA";
          ctx.lineWidth = 2.5;
          ctx.lineCap = "round";
          ctx.shadowColor = "#8B7FF5";
          ctx.shadowBlur = 6;
          ctx.stroke();
          ctx.restore();
        }
      }

      rafId = requestAnimationFrame(drawFrame);
    };

    rafId = requestAnimationFrame(drawFrame);
    return () => { cancelled = true; cancelAnimationFrame(rafId); };
  }, []);

  useEffect(() => {
    let raf: number, cancelled = false;
    const t0 = performance.now(), DURATION = 1400;
    const targets = ACQS_CHANNELS.map(ch => ch.count);
    const step = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - t0) / DURATION);
      const p = easeInOut(t);
      setCounts(targets.map(tgt => Math.round(tgt * p)));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => { cancelled = true; cancelAnimationFrame(raf); };
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

  const renderCard = (idx: number) => {
    const ch = ACQS_CHANNELS[idx];
    return (
      <div
        key={ch.id}
        ref={(el) => { cardRefs.current[idx] = el; }}
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "16px",
          padding: "10px 13px",
          display: "flex", alignItems: "center", gap: "10px",
          width: "142px",
          boxShadow: "0px 4px 20px rgba(16,16,25,0.07), 0 1px 0 rgba(255,255,255,0.9) inset",
          border: "1px solid rgba(255,255,255,0.80)",
        }}
      >
        <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: "rgba(101,87,234,0.10)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <AcqChannelIcon id={ch.id} />
        </div>
        <div>
          <div style={{ fontSize: "10.5px", fontWeight: 700, color: "#6557EA", letterSpacing: "-0.2px" }}>{ch.label}</div>
          <div style={{ fontSize: "8px", color: "#9B9BB0", marginTop: "1px" }}>Instalações</div>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "#0F0F14", letterSpacing: "-0.6px", lineHeight: 1.1, marginTop: "2px" }}>
            {counts[idx].toLocaleString("pt-BR")}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={wrapperRef} style={{ height: "300px", position: "relative", overflow: "hidden", background: "#F4F2FE", maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}>
      <canvas ref={canvasRef} style={{ display: "block", position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} />

      {/* Left column */}
      <div style={{ position: "absolute", left: "28px", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "10px", zIndex: 2 }}>
        {renderCard(0)}
        {renderCard(1)}
      </div>

      {/* iPhone — toca a base */}
      <div style={{ position: "absolute", left: "50%", top: "16px", transform: "translateX(-50%)", height: "calc(100% - 16px)", zIndex: 1, pointerEvents: "none" }}>
        <img src="/iphone-novo.png" alt="" style={{ height: "100%", width: "auto", display: "block" }} />
      </div>

      {/* Right column */}
      <div style={{ position: "absolute", right: "28px", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "10px", zIndex: 2 }}>
        {renderCard(2)}
        {renderCard(3)}
      </div>

      {/* Notification — centrada sobre a tela do iPhone */}
      <div style={{
        position: "absolute",
        top: "175px",
        left: "50%",
        transform: notifVisible
          ? "translateX(-50%) translateY(0) scale(1)"
          : "translateX(-50%) translateY(-8px) scale(0.97)",
        opacity: notifVisible ? 1 : 0,
        transition: "opacity 0.35s ease, transform 0.35s ease",
        width: "192px",
        background: "#ffffff",
        borderRadius: "14px",
        padding: "9px 11px",
        display: "flex", gap: "9px", alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.13), 0 20px 40px rgba(0,0,0,0.09)",
        zIndex: 10,
      }}>
        <img src="/appreach-icon.png" alt="Appreach" style={{ width: "28px", height: "28px", borderRadius: "7px", flexShrink: 0, objectFit: "cover" }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "4px" }}>
            <span style={{ fontSize: "9.5px", fontWeight: 700, color: "#0F0F14", lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{notif.line1}</span>
            <span style={{ fontSize: "8px", color: "#9B9BB0", flexShrink: 0 }}>Agora</span>
          </div>
          <div style={{ fontSize: "9px", color: "#7A7A8C", marginTop: "2px" }}>{notif.line2}</div>
        </div>
      </div>

    </div>
  );
}

// ─── Re-engagement (Retargeting) ─────────────────────────────────────────────
const reengagementLabels = [
  { text: "Usuário inativo", color: "#9B9BB0", bg: "rgba(155,155,176,0.15)" },
  { text: "Retornando...",   color: "#F59E0B", bg: "rgba(245,158,11,0.12)"  },
  { text: "Reengajado!",     color: "#6557EA", bg: "rgba(101,87,234,0.12)"  },
];

const USER_TRIOS = [[0,1,2],[3,4,5]];

function ReengagementWidget() {
  const [phase, setPhase] = useState(2);
  const [trioIdx, setTrioIdx] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let t: ReturnType<typeof setTimeout>;
    const DURATIONS = [1800, 900, 2200];
    let ph = 2;
    let ti = 0;
    const tick = () => {
      if (cancelled) return;
      ph = (ph + 1) % 3;
      if (ph === 0) { ti = (ti + 1) % USER_TRIOS.length; setTrioIdx(ti); }
      setPhase(ph);
      t = setTimeout(tick, DURATIONS[ph]);
    };
    t = setTimeout(tick, DURATIONS[ph]);
    return () => { cancelled = true; clearTimeout(t); };
  }, []);

  const label       = reengagementLabels[phase];
  const opacity     = [0.3, 0.65, 1][phase];
  const filter      = ["grayscale(1) brightness(0.7)", "grayscale(0.4)", "grayscale(0)"][phase];
  const scale       = [1, 1.03, 1.06][phase];
  const pulse       = phase === 2 ? "rg-pulse 2s ease-in-out infinite" : "none";
  const trio        = USER_TRIOS[trioIdx];

  return (
    <div style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: "#ffffff",
      maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
      position: "relative",
      gap: "18px",
    }}>
      <style>{`
        @keyframes rg-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(101,87,234,0.35); } 50% { box-shadow: 0 0 0 18px rgba(101,87,234,0); } }
        @keyframes rg-dot   { 0%,80%,100% { transform: scale(0.6); opacity: 0.3; } 40% { transform: scale(1); opacity: 1; } }
      `}</style>

      <div style={{ position: "absolute", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(101,87,234,0.08) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />

      {/* 3 avatares no mesmo estado */}
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        {trio.map((u, i) => {
          const isCenter = i === 1;
          const size = isCenter ? "80px" : "60px";
          return (
          <div key={u} style={{
            width: size, height: size, borderRadius: "50%", overflow: "hidden",
            border: `2.5px solid ${phase === 2 ? "rgba(101,87,234,0.5)" : "rgba(101,87,234,0.12)"}`,
            animation: pulse,
            transition: "opacity 0.6s, filter 0.6s, transform 0.6s, border-color 0.6s",
            opacity, filter, transform: `scale(${scale})`,
          }}>
            <img src={`/widget-user-0${u + 1}.png`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          );
        })}
      </div>

      {/* Badge compartilhado */}
      <div style={{ padding: "7px 18px", borderRadius: "99px", background: label.bg, border: `1px solid ${label.color}33`, transition: "background 0.5s" }}>
        <span style={{ fontSize: "13px", fontWeight: 600, color: label.color, letterSpacing: "-0.1px", transition: "color 0.5s" }}>
          {label.text}
        </span>
      </div>

      {/* Loading dots */}
      <div style={{ display: "flex", gap: "6px", opacity: phase === 1 ? 1 : 0, transition: "opacity 0.4s" }}>
        {[0, 0.18, 0.36].map((delay, i) => (
          <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6557EA", animation: phase === 1 ? `rg-dot 1.2s ease-in-out ${delay}s infinite` : "none" }} />
        ))}
      </div>
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
    <div style={{ height: "280px", background: "#F4F2FE", overflow: "hidden", maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)", position: "relative" }}>

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

  const r = 82, cx = 100, cy = 106;
  const circumference = Math.PI * r;
  const TARGET = 0.87;

  useEffect(() => {
    let raf: number;
    let cancelled = false;
    const t0 = performance.now();
    const FILL_MS = 1600;

    const step = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - t0) / FILL_MS);
      const p = easeInOut(t);
      const arcProgress = p * TARGET;
      const fill = circumference * arcProgress;
      if (arcRef.current) arcRef.current.setAttribute("stroke-dasharray", `${fill} ${circumference}`);
      if (numRef.current) numRef.current.textContent = `${Math.round(87 * p)}%`;

      if (t < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => { cancelled = true; cancelAnimationFrame(raf); };
  }, []);

  return (
    <div style={{ height: "240px", background: "#ffffff", overflow: "hidden", maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "24px 12px 0" }}>
      {/* Widget card */}
      <div style={{
        width: "100%", maxWidth: "260px",
        background: "#fff",
        borderRadius: "20px",
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 0" }}>
          <span style={{ fontSize: "12px", fontWeight: 600, color: "#0F0F14", letterSpacing: "-0.2px" }}>Audience Match</span>
          <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "10px", fontWeight: 600, color: "#16a34a", background: "rgba(22,163,74,0.08)", borderRadius: "99px", padding: "2px 8px" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#16a34a", display: "inline-block" }} />
            Live
          </span>
        </div>

        {/* Chart area */}
        <div style={{ padding: "4px 8px 8px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
          <svg width="100%" viewBox="0 0 200 140" fill="none" style={{ overflow: "hidden", maxWidth: "220px" }}>
            <defs>
              <linearGradient id="mpArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9B8FF5" />
                <stop offset="100%" stopColor="#6557EA" />
              </linearGradient>
            </defs>
            <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} stroke="rgba(101,87,234,0.12)" strokeWidth="14" strokeLinecap="round" fill="none" />
            <path ref={arcRef} d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} stroke="url(#mpArcGrad)" strokeWidth="14" strokeLinecap="round" strokeDasharray={`0 ${circumference}`} fill="none" />
            <text ref={numRef} x={cx} y={cy - 26} textAnchor="middle" fill="#0F0F14" fontSize="36" fontWeight="800" letterSpacing="-2">0%</text>
            <text x={cx} y={cy - 10} textAnchor="middle" fill="#9B9BB0" fontSize="10" letterSpacing="0.5">de segmentação precisa</text>
            <text x={cx - r + 4} y={cy + 18} textAnchor="middle" fill="rgba(101,87,234,0.4)" fontSize="9" letterSpacing="0.5">0%</text>
            <text x={cx + r - 4} y={cy + 18} textAnchor="middle" fill="#6557EA" fontSize="9" letterSpacing="0.5" fontWeight="600">100%</text>
          </svg>
        </div>

      </div>
    </div>
  );
}

// ─── CTV ─────────────────────────────────────────────────────────────────────
const CTV_SLOTS = [
  { src: "/ctv-1.png", bg: "#12101F" },
  { src: "/ctv-2.png", bg: "#0D1B2A" },
  { src: "/ctv-3.png", bg: "#1A240F" },
  { src: "/ctv-4.png", bg: "#2A1015" },
];
const CTV_INTERVAL = 2800;

function CTVWidget() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % CTV_SLOTS.length);
        setVisible(true);
      }, 350);
    }, CTV_INTERVAL);
    return () => clearInterval(t);
  }, []);

  const slot = CTV_SLOTS[idx];

  return (
    <div style={{ height: "280px", background: "#ffffff", overflow: "hidden", maskImage: "linear-gradient(to bottom, black 62%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 62%, transparent 100%)", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "24px" }}>

      {/* Vídeo 16:9 — alinhado ao topo */}
      <div style={{ position: "relative", width: "calc(100% - 56px)", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden", background: slot.bg, flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={idx}
          src={slot.src}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: visible ? 1 : 0, transition: "opacity 0.35s ease" }}
        />
      </div>

{/* Mão com controle remoto — na frente de tudo, base alinhada ao fundo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ctv-hand.png"
        alt=""
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "55%",
          width: "auto",
          objectFit: "contain",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

// ─── Preload ──────────────────────────────────────────────────────────────────
function PreloadWidget() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const icons = [
    { src: "/icons/apple-photos.svg",   alt: "Photos" },
    { src: "/icons/apple-camera.svg",   alt: "Camera" },
    { src: "/icons/apple-messages.svg", alt: "Messages" },
    { src: "/icons/app-appreach.png",    alt: "Appreach" },
    { src: "/icons/apple-phone.svg",    alt: "Phone" },
    { src: "/icons/apple-safari.svg",   alt: "Safari" },
    { src: "/icons/apple-clock.svg",    alt: "Clock" },
  ];

  return (
    <div style={{
      height: "240px",
      position: "relative",
      overflow: "hidden",
      background: "#F4F2FE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "48px",
      maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.52)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: "28px",
        padding: "14px 20px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        border: "1px solid rgba(255,255,255,0.85)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.9) inset",
      }}>
        {icons.map((icon, i) => {
          const isCenter = i === 3;
          const size = isCenter ? "68px" : "50px";
          const radius = isCenter ? "17px" : "12px";
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              style={{
                width: size,
                height: size,
                borderRadius: radius,
                transform: hoveredIdx === i ? "scale(1.18)" : "scale(1)",
                transition: "transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)",
                animation: `iconEntry 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.06}s both`,
                cursor: "default",
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            />
          );
        })}
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
  noPadding?: boolean;
  noWidgetPadding?: boolean;
  bgImage?: string;
  widgetBg?: string;
  titleSize?: string;
  descSize?: string;
  descMaxWidth?: string;
  textMarginTop?: string;
  href?: string;
  widget?: React.ReactNode;
}[] = [
  {
    title: "Aquisição de Usuários",
    description: "Campanhas de UA com segmentação precisa para atrair novos usuários qualificados e maximizar o volume de installs.",
    span: "lg:col-span-2",
    widgetHeight: "300px",
    solid: true,
    noPadding: true,
    descMaxWidth: "460px",
    textMarginTop: "16px",
    href: "/useracquisition-app",
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
    href: "/retargeting",
    widget: <ReengagementWidget />,
  },
  {
    title: "CTV",
    description: <>Anuncie em TVs conectadas e streaming<br />para construir brand awareness e escalar<br />o alcance do seu app.</>,
    span: "lg:col-span-1",
    widgetHeight: "280px",
    solid: true,
    noPadding: true,
    textMarginTop: "16px",
    href: "/ctv-connected-tv",
    widget: <CTVWidget />,
  },
  {
    title: "App Chat & Push",
    description: <>Comunicação direta dentro e fora do app com mensagens<br />personalizadas para aumentar retenção e LTV.</>,
    span: "lg:col-span-2",
    widgetHeight: "280px",
    solid: true,
    noPadding: true,
    descMaxWidth: "460px",
    textMarginTop: "16px",
    href: "/app-chat-push",
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
    href: "/preload",
    widget: <PreloadWidget />,
  },
  {
    title: "Mídia Programática",
    description: <>Compra de mídia em escala com dados de<br />primeira parte para atingir o usuário certo,<br />no momento certo.</>,
    span: "lg:col-span-1",
    widgetHeight: "240px",
    solid: true,
    noPadding: true,
    textMarginTop: "16px",
    href: "/midia-programatica",
    widget: <MidiaProgramaticaWidget />,
  },
];

import React from "react";

export default function Strategies() {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const s0 = useInView();
  const s1 = useInView();
  const s2 = useInView();
  const s3 = useInView();
  const s4 = useInView();
  const s5 = useInView();
  const cardViews = [s0, s1, s2, s3, s4, s5];
  return (
    <section id="estrategias" className="relative py-24 lg:py-32" style={{ background: "#ffffff" }}>

      {/* Background gradient blobs — visíveis através dos bentos semitransparentes */}
      <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "visible", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-70%)", width: "1600px", height: "1600px", background: "radial-gradient(ellipse, rgba(155,145,255,0.11) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", top: "52%", left: "50%", transform: "translateX(-30%)", width: "1400px", height: "1400px", background: "radial-gradient(ellipse, rgba(196,181,253,0.08) 0%, transparent 60%)" }} />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-4 lg:px-16" style={{ zIndex: 1 }}>
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto mb-16 reveal${headerVisible ? " visible" : ""}`}
        >
          <SectionBadge>Soluções</SectionBadge>
          <h2
            className="font-medium text-dark leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 6.5vw, 48px)", letterSpacing: "-1.4px", textWrap: "balance" }}
          >
            Nossas Soluções
          </h2>
          <p className="text-body leading-relaxed" style={{ fontSize: "16px" }}>
            Cada solução atua em uma frente específica — combinadas, cobrem o funil completo do seu app.
          </p>
        </div>

        {/* Bento grid */}
        <div className="relative">
          <div
            className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
            style={{ zIndex: 1 }}
          >
            {strategies.map((s, idx) => {
              const Tag = (s.href ? "a" : "div") as ElementType;
              const { ref: cardRef, visible: cardVisible } = cardViews[idx];
              return (
                <Tag
                  key={s.title}
                  ref={cardRef as React.Ref<HTMLAnchorElement & HTMLDivElement>}
                  {...(s.href ? { href: s.href } : {})}
                  className={`strategies-card group flex flex-col ${s.noPadding ? "" : "p-7"} ${s.span} ${s.href ? "cursor-pointer" : ""} reveal-scale${cardVisible ? " visible" : ""}`}
                  style={{
                    background: s.dark
                      ? "linear-gradient(145deg, #1E1640 0%, #2D1F5E 100%)"
                      : "rgba(255, 255, 255, 0.62)",
                    backdropFilter: s.dark ? undefined : "blur(20px)",
                    WebkitBackdropFilter: s.dark ? undefined : "blur(20px)",
                    border: s.dark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(255, 255, 255, 0.80)",
                    borderRadius: "24px",
                    boxShadow: s.dark
                      ? "0 4px 32px rgba(0,0,0,0.18)"
                      : s.solid
                        ? "0px 4px 20px 0px rgba(16,16,25,0.06)"
                        : "0 4px 32px rgba(101, 87, 234, 0.06), 0 1px 0 rgba(255,255,255,0.9) inset",
                    minHeight: `calc(${s.widgetHeight} + 120px)`,
                    overflow: s.noPadding ? "hidden" : undefined,
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  } as React.CSSProperties}
                  onMouseEnter={s.href ? (e: React.MouseEvent<HTMLElement>) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = s.dark
                      ? "0 12px 40px rgba(0,0,0,0.28)"
                      : "0px 12px 32px 0px rgba(16,16,25,0.10)";
                  } : undefined}
                  onMouseLeave={s.href ? (e: React.MouseEvent<HTMLElement>) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = s.dark
                      ? "0 4px 32px rgba(0,0,0,0.18)"
                      : s.solid
                        ? "0px 4px 20px 0px rgba(16,16,25,0.06)"
                        : "0 4px 32px rgba(101, 87, 234, 0.06), 0 1px 0 rgba(255,255,255,0.9) inset";
                  } : undefined}
                >
                  {s.widget && (
                    <div className="strategies-widget" style={{ flex: 1 }}>{s.widget}</div>
                  )}
                  <div style={{
                    marginTop: s.textMarginTop ?? "auto",
                    ...(s.noPadding ? { padding: "0 28px 28px 28px" } : {}),
                  }}>
                    <h3
                      className="font-medium"
                      style={{ fontSize: s.titleSize ?? "26px", letterSpacing: "-0.4px", color: s.dark ? "rgba(255,255,255,0.92)" : "#0F0F14" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="leading-relaxed mt-2"
                      style={{ fontSize: s.descSize ?? "16px", color: s.dark ? "rgba(255,255,255,0.45)" : "#909090", maxWidth: s.descMaxWidth }}
                    >
                      {s.description}
                    </p>
                    {s.href && (
                      <div
                        className="inline-flex items-center gap-1.5"
                        style={{
                          marginTop: "16px",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: s.dark ? "rgba(255,255,255,0.7)" : "var(--color-primary)",
                          background: s.dark ? "rgba(255,255,255,0.08)" : "var(--color-primary-light)",
                          borderRadius: "99px",
                          padding: "5px 12px",
                          letterSpacing: "-0.1px",
                        }}
                      >
                        Ver solução
                      </div>
                    )}
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
