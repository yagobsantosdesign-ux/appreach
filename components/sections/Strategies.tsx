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
  const ringRef = useRef<SVGCircleElement>(null);
  const numRef = useRef<SVGTextElement>(null);
  const R = 50, CX = 70, CY = 70;
  const circumference = 2 * Math.PI * R;

  useEffect(() => {
    let raf: number;
    let cancelled = false;
    const t0 = performance.now();
    const DURATION = 1800;
    const step = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - t0) / DURATION);
      const p = easeInOut(t);
      const fill = circumference * 0.78 * p;
      if (ringRef.current) ringRef.current.setAttribute("stroke-dasharray", `${fill} ${circumference - fill}`);
      if (numRef.current) numRef.current.textContent = `${Math.round(78 * p)}%`;
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => { cancelled = true; cancelAnimationFrame(raf); };
  }, []);

  return (
    <div style={{ height: "240px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px", padding: "8px 20px" }}>
      <svg width="140" height="140" viewBox="0 0 140 140">
        <defs>
          <linearGradient id="reGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9B8FF5" />
            <stop offset="100%" stopColor="#6557EA" />
          </linearGradient>
        </defs>
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(101,87,234,0.12)" strokeWidth="10"
          strokeDasharray={`${circumference} 0`} transform={`rotate(-90 ${CX} ${CY})`} />
        <circle ref={ringRef} cx={CX} cy={CY} r={R} fill="none" stroke="url(#reGrad)" strokeWidth="10"
          strokeLinecap="round" strokeDasharray={`0 ${circumference}`}
          transform={`rotate(-90 ${CX} ${CY})`} />
        <text ref={numRef} x={CX} y={CY - 5} textAnchor="middle" fill="#0F0F14" fontSize="26" fontWeight="700" letterSpacing="-1">0%</text>
        <text x={CX} y={CY + 13} textAnchor="middle" fill="#9B9BB0" fontSize="10">reativados</text>
      </svg>
      <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
        {[{ value: "2.8K", label: "inativos" }, { value: "891", label: "convertidos" }].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#6557EA", letterSpacing: "-0.5px" }}>{s.value}</div>
            <div style={{ fontSize: "10px", color: "#9B9BB0", marginTop: "2px" }}>{s.label}</div>
          </div>
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
  const [visibleMsgs, setVisibleMsgs] = useState<number[]>([]);
  const [visiblePush, setVisiblePush] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const [dotCount, setDotCount] = useState(1);
  // "idle-chat" | "chat" | "idle-push" | "push"
  const [phase, setPhase] = useState<"idle-chat" | "chat" | "idle-push" | "push">("idle-chat");

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const runChat = () => {
      setVisibleMsgs([]); setTyping(false);
      setPhase("chat");
      chatMsgs.forEach((msg, i) => {
        if (i > 0) {
          timers.push(setTimeout(() => setTyping(true),  msg.delay - 550));
          timers.push(setTimeout(() => { setTyping(false); setVisibleMsgs(p => [...p, i]); }, msg.delay));
        } else {
          timers.push(setTimeout(() => setVisibleMsgs(p => [...p, i]), msg.delay));
        }
      });
      // dismiss chat, then show push
      timers.push(setTimeout(() => {
        setPhase("idle-chat");
        timers.push(setTimeout(() => runPush(), 520));
      }, 4000));
    };

    const runPush = () => {
      setVisiblePush([]);
      setPhase("push");
      pushItems.forEach((item, i) =>
        timers.push(setTimeout(() => setVisiblePush(p => [...p, i]), 400 + i * 700))
      );
      // dismiss push, then show chat
      timers.push(setTimeout(() => {
        setPhase("idle-push");
        timers.push(setTimeout(() => runChat(), 520));
      }, 3800));
    };

    // small initial delay so the slide-up is visible on mount
    timers.push(setTimeout(() => runChat(), 300));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!typing) { setDotCount(1); return; }
    const id = setInterval(() => setDotCount(c => c === 3 ? 1 : c + 1), 380);
    return () => clearInterval(id);
  }, [typing]);

  useEffect(() => {
    if (document.getElementById("chat-kf")) return;
    const s = document.createElement("style");
    s.id = "chat-kf";
    s.textContent = `@keyframes chatIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}`;
    document.head.appendChild(s);
  }, []);

  const chatVisible = phase === "chat";
  const pushVisible = phase === "push";

  const modalStyle = (visible: boolean): React.CSSProperties => ({
    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
    display: "flex", alignItems: "center", justifyContent: "center",
    transform: visible ? "translateY(0)" : "translateY(56px)",
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? "auto" : "none",
    transition: "transform 0.44s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
    zIndex: visible ? 2 : 1,
  });

  return (
    <div style={{ height: "240px", position: "relative", overflow: "hidden" }}>
      {/* Chat modal */}
      <div style={modalStyle(chatVisible)}>
        <div style={{
          width: "260px", background: "#fff", borderRadius: "18px", overflow: "hidden",
          boxShadow: "0 8px 32px rgba(101,87,234,0.13), 0 2px 8px rgba(0,0,0,0.06)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderBottom: "1px solid #F0EFF8" }}>
            <div style={{ width: "22px", height: "22px", borderRadius: "7px", background: "linear-gradient(135deg, #6557EA, #9B8FF5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <img src="/appreach-icon.png" alt="" style={{ width: "14px", height: "14px", borderRadius: "3px" }} />
            </div>
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#0F0F14", flex: 1 }}>Ofertas App</span>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E" }} />
          </div>
          <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: "6px", minHeight: "108px", justifyContent: "flex-end", background: "#FAFAFE" }}>
            {chatMsgs.map((msg, i) => (
              visibleMsgs.includes(i) && (
                <div key={i} style={{ display: "flex", animation: "chatIn 0.3s ease forwards" }}>
                  <div style={{
                    background: "#fff", color: "#0F0F14",
                    borderRadius: "12px 12px 12px 2px",
                    padding: "6px 10px", fontSize: "10.5px", maxWidth: "82%", lineHeight: 1.4,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                  }}>{msg.text}</div>
                </div>
              )
            ))}
            {typing && (
              <div style={{ display: "flex" }}>
                <div style={{ background: "#fff", borderRadius: "12px 12px 12px 2px", padding: "8px 12px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)", display: "flex", gap: "4px", alignItems: "center" }}>
                  {[1, 2, 3].map(d => (
                    <div key={d} style={{ width: "4px", height: "4px", borderRadius: "50%",
                      background: d <= dotCount ? "#6557EA" : "rgba(101,87,234,0.18)", transition: "background 0.1s" }} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Push modal */}
      <div style={modalStyle(pushVisible)}>
        <div style={{
          width: "260px", background: "#fff", borderRadius: "18px", overflow: "hidden",
          boxShadow: "0 8px 32px rgba(101,87,234,0.13), 0 2px 8px rgba(0,0,0,0.06)",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderBottom: "1px solid #F0EFF8" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <img src="/appreach-icon.png" alt="" style={{ width: "18px", height: "18px", borderRadius: "5px" }} />
              <span style={{ fontSize: "11px", fontWeight: 600, color: "#0F0F14" }}>Notificações</span>
            </div>
            <span style={{ fontSize: "8px", background: "#0F0F14", color: "white", padding: "2px 6px", borderRadius: "4px", fontWeight: 700, letterSpacing: "0.3px" }}>PUSH</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#F0EFF8" }}>
            {pushItems.map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: "10px", alignItems: "center",
                background: "#fff", padding: "10px 14px",
                opacity: visiblePush.includes(i) ? 1 : 0,
                transform: visiblePush.includes(i) ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.38s ease, transform 0.38s ease",
              }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "9px",
                  background: "linear-gradient(135deg, #EDE9FE, #DDD6FE)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {pushIcons[i]}
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, color: "#0F0F14" }}>{item.title}</div>
                  <div style={{ fontSize: "9.5px", color: "#9B9BB0", marginTop: "1px" }}>{item.body}</div>
                </div>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6557EA", flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
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
        <rect x="1" y="1" width="106" height="66" rx="10" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
        <rect x="7" y="7" width="94" height="54" rx="7" fill="rgba(101,87,234,0.22)" />
        <ellipse cx="54" cy="34" rx="20" ry="16" fill="rgba(101,87,234,0.3)" />
        <polygon points="45,24 45,44 67,34" fill="rgba(155,143,245,0.95)" />
        <circle cx="90" cy="16" r="2.5" fill="rgba(34,197,94,0.9)" />
        <circle cx="97" cy="16" r="2.5" fill="rgba(34,197,94,0.55)" />
        <circle cx="104" cy="16" r="2.5" fill="rgba(34,197,94,0.25)" />
        <line x1="54" y1="67" x2="54" y2="78" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
        <rect x="36" y="78" width="36" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
      </svg>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "44px", fontWeight: 700, color: "rgba(255,255,255,0.92)", letterSpacing: "-2px", lineHeight: 1 }}>
          {count}<span style={{ fontSize: "22px", color: "rgba(155,143,245,0.85)", fontWeight: 600 }}>M</span>
        </div>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "6px" }}>households alcançados</div>
      </div>
      <div style={{ display: "flex", gap: "28px" }}>
        {[{ value: "150+", label: "plataformas" }, { value: "98%", label: "viewability" }].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "rgba(155,143,245,0.85)", letterSpacing: "-0.3px" }}>{s.value}</div>
            <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Preload ──────────────────────────────────────────────────────────────────
function PreloadWidget() {
  const [activeStep, setActiveStep] = useState(-1);
  const [iconVisible, setIconVisible] = useState(false);
  const [iconScale, setIconScale] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setActiveStep(-1); setIconVisible(false); setIconScale(0);
      timers.push(setTimeout(() => setActiveStep(0), 500));
      timers.push(setTimeout(() => setActiveStep(1), 1300));
      timers.push(setTimeout(() => setActiveStep(2), 2100));
      timers.push(setTimeout(() => {
        setIconVisible(true);
        setTimeout(() => setIconScale(1), 40);
      }, 2300));
      timers.push(setTimeout(() => run(), 5200));
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  const steps = [
    { label: "Fábrica",      sublabel: "Dispositivo criado"   },
    { label: "Distribuição", sublabel: "App pré-instalado"    },
    { label: "Usuário",      sublabel: "Primeiro acesso"       },
  ];
  const APP_POS = 5;

  return (
    <div style={{ height: "240px", display: "flex", gap: "24px", alignItems: "center", padding: "12px 28px" }}>
      {/* Timeline */}
      <div style={{ display: "flex", flexDirection: "column", flex: "0 0 auto" }}>
        {steps.map((s, i) => (
          <div key={i}>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20px" }}>
                <div style={{
                  width: "16px", height: "16px", borderRadius: "50%", flexShrink: 0,
                  background: activeStep >= i ? "rgba(101,87,234,0.7)" : "rgba(255,255,255,0.08)",
                  border: activeStep >= i ? "2px solid rgba(155,143,245,0.8)" : "2px solid rgba(255,255,255,0.14)",
                  boxShadow: activeStep >= i ? "0 0 10px rgba(101,87,234,0.45)" : "none",
                  transition: "all 0.45s ease",
                }} />
                {i < steps.length - 1 && (
                  <div style={{
                    width: "2px", height: "30px", margin: "3px 0",
                    background: activeStep > i ? "rgba(101,87,234,0.5)" : "rgba(255,255,255,0.1)",
                    transition: "background 0.45s ease",
                  }} />
                )}
              </div>
              <div style={{ paddingBottom: i < steps.length - 1 ? "30px" : 0 }}>
                <div style={{ fontSize: "12px", fontWeight: 600, lineHeight: 1.2,
                  color: activeStep >= i ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.22)",
                  transition: "color 0.45s ease" }}>{s.label}</div>
                <div style={{ fontSize: "10px", marginTop: "2px",
                  color: activeStep >= i ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.13)",
                  transition: "color 0.45s ease" }}>{s.sublabel}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Phone */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{
          width: "136px", height: "200px",
          border: "2px solid rgba(255,255,255,0.14)", borderRadius: "24px",
          background: "rgba(255,255,255,0.04)",
          display: "flex", flexDirection: "column", overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}>
          {/* Status bar */}
          <div style={{ height: "18px", borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 10px", gap: "4px" }}>
            {[0.18, 0.18, activeStep >= 2 ? 0.85 : 0.18].map((op, idx) => (
              <div key={idx} style={{ width: "4px", height: "4px", borderRadius: "50%",
                background: idx === 2 && activeStep >= 2 ? "rgba(34,197,94,0.85)" : `rgba(255,255,255,${op})`,
                transition: "background 0.4s ease" }} />
            ))}
          </div>
          {/* App grid */}
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", padding: "12px 10px" }}>
            {Array.from({ length: 12 }).map((_, idx) => (
              <div key={idx} style={{ aspectRatio: "1", borderRadius: "8px",
                background: idx === APP_POS ? "transparent" : "rgba(255,255,255,0.07)" }}>
                {idx === APP_POS && (
                  <img src="/appreach-icon.png" alt="" style={{
                    width: "100%", height: "100%", borderRadius: "8px", objectFit: "cover",
                    opacity: iconVisible ? 1 : 0,
                    transform: `scale(${iconScale})`,
                    transition: "opacity 0.45s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                    boxShadow: iconVisible ? "0 0 14px rgba(101,87,234,0.55)" : "none",
                  }} />
                )}
              </div>
            ))}
          </div>
          {/* Home indicator */}
          <div style={{ height: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "32px", height: "3px", borderRadius: "99px", background: "rgba(255,255,255,0.14)" }} />
          </div>
        </div>
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
    widget: <ReengagementWidget />,
  },
  {
    title: "CTV",
    description: <>Anuncie em TVs conectadas e streaming<br />para construir brand awareness e escalar<br />o alcance do seu app.</>,
    span: "lg:col-span-1",
    widgetHeight: "240px",
    dark: true,
    widget: <CTVWidget />,
  },
  {
    title: "App Chat & Push",
    description: <>Comunicação direta dentro e fora do app com mensagens<br />personalizadas para aumentar retenção e LTV.</>,
    span: "lg:col-span-2",
    widgetHeight: "240px",
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
    dark: true,
    widget: <PreloadWidget />,
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
        <div className="relative rounded-[32px] p-4" style={{ background: "linear-gradient(160deg, #F2EFFF 0%, #F8F6FF 30%, #EEF0FF 65%, #F5F2FF 100%)" }}>
          {/* Blobs */}
          <div style={{ position: "absolute", top: "0px", left: "0px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(101,87,234,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "40%", right: "0px", width: "340px", height: "340px", borderRadius: "50%", background: "radial-gradient(circle, rgba(155,145,255,0.09) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "0px", left: "35%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,140,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

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
