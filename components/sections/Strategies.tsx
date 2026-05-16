"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import { useEffect, useRef, useState } from "react";

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// ─── Aquisição de Usuários ───────────────────────────────────────────────────
function AquisicaoWidget() {
  const installsRef = useRef<HTMLSpanElement>(null);
  const cpiRef = useRef<HTMLSpanElement>(null);
  const roasRef = useRef<HTMLSpanElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  const bars = [38, 52, 45, 60, 55, 70, 78, 84];

  useEffect(() => {
    const start = Date.now();
    const duration = 1500;
    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / duration);
      const p = easeInOut(t);
      if (installsRef.current) installsRef.current.textContent = `${(p * 24.8).toFixed(1)}K`;
      if (cpiRef.current) cpiRef.current.textContent = `R$${(p * 1.24).toFixed(2)}`;
      if (roasRef.current) roasRef.current.textContent = `${(p * 4.8).toFixed(1)}×`;
      barRefs.current.forEach((el, i) => {
        if (el) el.style.height = `${bars[i] * p}%`;
      });
      if (t >= 1) clearInterval(id);
    };
    const id = setInterval(tick, 16);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ height: "240px", background: "#fff", borderRadius: "16px", padding: "20px 20px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
      {/* 3 metric tiles */}
      <div style={{ display: "flex", gap: "10px", flex: 1 }}>
        {[
          { label: "Installs", ref: installsRef, init: "0.0K", chip: "+18%", chipColor: "#22C55E", chipBg: "#F0FDF4" },
          { label: "CPI", ref: cpiRef, init: "R$0.00", chip: "↓24%", chipColor: "#6557EA", chipBg: "#F0EEFF" },
          { label: "ROAS", ref: roasRef, init: "0.0×", chip: "+62%", chipColor: "#22C55E", chipBg: "#F0FDF4" },
        ].map((m) => (
          <div key={m.label} style={{ flex: 1, background: "#F8F7FF", borderRadius: "12px", padding: "14px 12px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontSize: "11px", color: "#9B9BB0", fontWeight: 500 }}>{m.label}</span>
            <div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#0F0F14", letterSpacing: "-0.8px", lineHeight: 1 }}>
                <span ref={m.ref}>{m.init}</span>
              </div>
              <div style={{ display: "inline-block", marginTop: "6px", background: m.chipBg, color: m.chipColor, fontSize: "10px", fontWeight: 700, padding: "2px 7px", borderRadius: "99px" }}>{m.chip}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini bar chart */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "44px" }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, display: "flex", alignItems: "flex-end", height: "100%" }}>
            <div
              ref={(el) => { barRefs.current[i] = el; }}
              style={{
                width: "100%",
                height: "0%",
                background: i >= 5 ? "#6557EA" : "#E8E8F0",
                borderRadius: "3px 3px 2px 2px",
              }}
            />
          </div>
        ))}
        <div style={{ fontSize: "10px", color: "#6557EA", fontWeight: 600, whiteSpace: "nowrap", paddingBottom: "2px", paddingLeft: "4px" }}>↑ escala</div>
      </div>
    </div>
  );
}

// ─── Retargeting ─────────────────────────────────────────────────────────────
function RetargetingWidget() {
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    const show = () => {
      setVisible([false, false, false]);
      const t1 = setTimeout(() => setVisible([true, false, false]), 400);
      const t2 = setTimeout(() => setVisible([true, true, false]), 900);
      const t3 = setTimeout(() => setVisible([true, true, true]), 1400);
      return [t1, t2, t3];
    };

    let timers = show();
    const loop = setInterval(() => {
      timers.forEach(clearTimeout);
      timers = show();
    }, 4000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  const notifications = [
    { emoji: "🛒", title: "Seu carrinho espera!", body: "3 itens — R$ 247,00" },
    { emoji: "🎮", title: "Você ganhou 500 coins!", body: "Volte e resgate agora" },
    { emoji: "✈️", title: "Oferta só para você", body: "Voo + hotel com 40% off" },
  ];

  return (
    <div style={{ height: "240px", background: "#fff", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "center" }}>
      {notifications.map((n, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: "10px",
          background: "#F8F7FF", borderRadius: "12px", padding: "10px 12px",
          opacity: visible[i] ? 1 : 0,
          transform: visible[i] ? "translateX(0)" : "translateX(18px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
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
    <div style={{ height: "240px", background: "#fff", borderRadius: "16px", padding: "18px 20px", display: "flex", gap: "14px", alignItems: "stretch" }}>
      {/* Push Notification */}
      <div style={{
        flex: 1, background: "#F8F7FF", borderRadius: "14px", padding: "16px",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        opacity: show[0] ? 1 : 0,
        transform: show[0] ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px" }}>
            <div style={{ width: "26px", height: "26px", borderRadius: "7px", background: "#6557EA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>🔔</div>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#6557EA", letterSpacing: "0.3px" }}>PUSH</span>
          </div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F0F14", lineHeight: 1.35, marginBottom: "6px" }}>Oferta exclusiva para você</div>
          <div style={{ fontSize: "11px", color: "#9B9BB0", lineHeight: 1.5 }}>30% off até hoje. Não perca essa chance.</div>
        </div>
        <div style={{ display: "flex", gap: "6px", marginTop: "10px" }}>
          <div style={{ flex: 1, background: "#6557EA", color: "#fff", fontSize: "11px", fontWeight: 600, padding: "6px", borderRadius: "8px", textAlign: "center" }}>Ver oferta</div>
          <div style={{ flex: 1, background: "#EBEBF0", color: "#7A7A8C", fontSize: "11px", fontWeight: 600, padding: "6px", borderRadius: "8px", textAlign: "center" }}>Fechar</div>
        </div>
      </div>

      {/* In-App Message */}
      <div style={{
        flex: 1, background: "linear-gradient(145deg, #6557EA 0%, #7C6FF0 100%)", borderRadius: "14px", padding: "16px",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        opacity: show[1] ? 1 : 0,
        transform: show[1] ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}>
        <div>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: "0.3px", marginBottom: "10px" }}>IN-APP MESSAGE</div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff", lineHeight: 1.35, marginBottom: "6px" }}>Bem-vindo de volta! 👋</div>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>Continue de onde você parou. Sua sessão foi salva.</div>
        </div>
        <button style={{ marginTop: "10px", background: "rgba(255,255,255,0.18)", color: "#fff", border: "1px solid rgba(255,255,255,0.28)", borderRadius: "8px", padding: "7px 0", fontSize: "11px", fontWeight: 700, cursor: "pointer", width: "100%" }}>
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

  const r = 64, cx = 90, cy = 82;
  const circumference = Math.PI * r;
  const TARGET = 0.87;

  const segments = [
    { label: "Interesses", pct: 92, color: "#6557EA" },
    { label: "Comportamento", pct: 85, color: "#9B8FF5" },
    { label: "Lookalike", pct: 78, color: "#C4BCFB" },
  ];

  useEffect(() => {
    const start = Date.now();
    const duration = 1600;
    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / duration);
      const p = easeInOut(t);
      const fill = circumference * TARGET * p;
      if (arcRef.current) arcRef.current.setAttribute("stroke-dasharray", `${fill} ${circumference}`);
      if (numRef.current) numRef.current.textContent = `${Math.round(87 * p)}%`;
      segments.forEach((seg, i) => {
        if (segBarRefs.current[i]) segBarRefs.current[i]!.style.width = `${seg.pct * p}%`;
        if (segNumRefs.current[i]) segNumRefs.current[i]!.textContent = `${Math.round(seg.pct * p)}%`;
      });
      if (t >= 1) clearInterval(id);
    };
    const id = setInterval(tick, 16);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ height: "240px", background: "#fff", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <svg width="180" height="112" viewBox="0 0 180 112" fill="none">
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          stroke="#E8E8F0" strokeWidth="10" strokeLinecap="round" fill="none"
        />
        <path
          ref={arcRef}
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          stroke="#6557EA" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={`0 ${circumference}`}
          fill="none"
        />
        <text ref={numRef} x={cx} y={cy - 10} textAnchor="middle" fill="#0F0F14" fontSize="24" fontWeight="700">0%</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill="#9B9BB0" fontSize="11">audience match</text>
      </svg>

      {/* Segment bars */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
        {segments.map((seg, i) => (
          <div key={seg.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "10px", color: "#9B9BB0", width: "88px", textAlign: "right", flexShrink: 0 }}>{seg.label}</span>
            <div style={{ flex: 1, height: "5px", background: "#E8E8F0", borderRadius: "99px", overflow: "hidden" }}>
              <div
                ref={(el) => { segBarRefs.current[i] = el; }}
                style={{ height: "100%", width: "0%", background: seg.color, borderRadius: "99px" }}
              />
            </div>
            <span
              ref={(el) => { segNumRefs.current[i] = el; }}
              style={{ fontSize: "10px", color: seg.color, fontWeight: 700, width: "28px" }}
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
  widget?: React.ReactNode;
}[] = [
  {
    title: "Aquisição de Usuários",
    description: <>Campanhas de UA com segmentação precisa para atrair<br />novos usuários qualificados e maximizar o volume de installs.</>,
    span: "lg:col-span-2",
    widgetHeight: "240px",
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
                    : "rgba(255, 255, 255, 0.55)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  border: s.dark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(255, 255, 255, 0.80)",
                  borderRadius: "24px",
                  boxShadow: s.dark
                    ? "0 4px 32px rgba(0,0,0,0.18)"
                    : "0 4px 32px rgba(101, 87, 234, 0.06), 0 1px 0 rgba(255,255,255,0.9) inset",
                  minHeight: `calc(${s.widgetHeight} + 120px)`,
                }}
              >
                {s.widget && (
                  <div style={{ marginBottom: "16px" }}>{s.widget}</div>
                )}
                <div style={{ marginTop: "auto" }}>
                  <h3
                    className="font-medium"
                    style={{ fontSize: "24px", letterSpacing: "-0.4px", color: s.dark ? "rgba(255,255,255,0.92)" : undefined }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="leading-relaxed mt-2"
                    style={{ fontSize: "15px", color: s.dark ? "rgba(255,255,255,0.45)" : "#7A7A8C" }}
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
