function UAWidget() {
  const bars = [38, 52, 44, 68, 56, 82, 100];
  return (
    <div className="w-full h-full rounded-xl p-5 flex flex-col justify-between" style={{ background: "white" }}>
      <div className="flex items-start justify-between">
        <div>
          <p style={{ fontSize: "11px", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.4px" }}>Novos usuários</p>
          <div className="flex items-end gap-2 mt-1">
            <span style={{ fontSize: "26px", fontWeight: 700, color: "var(--color-dark)", letterSpacing: "-1px", lineHeight: 1 }}>12.4K</span>
            <span style={{ fontSize: "12px", color: "var(--color-success)", fontWeight: 600, paddingBottom: "2px" }}>↑ +18%</span>
          </div>
        </div>
        <div className="flex" style={{ gap: "-6px" }}>
          {["#c4b5fd", "#a78bfa", "#6557ea"].map((c, i) => (
            <div key={i} style={{ width: "26px", height: "26px", borderRadius: "50%", background: c, border: "2px solid white", marginLeft: i > 0 ? "-8px" : 0 }} />
          ))}
        </div>
      </div>
      <div className="flex items-end gap-1" style={{ height: "52px" }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "4px", background: i === bars.length - 1 ? "var(--color-primary)" : "var(--color-border)" }} />
        ))}
      </div>
      <p style={{ fontSize: "11px", color: "var(--color-muted)" }}>últimos 7 dias</p>
    </div>
  );
}

function RetargetingWidget() {
  return (
    <div className="w-full h-full rounded-xl p-4 flex flex-col gap-3" style={{ background: "white" }}>
      <div className="flex items-center gap-2.5">
        <div style={{ width: "32px", height: "32px", borderRadius: "9px", background: "var(--color-primary)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: "15px" }}>A</span>
        </div>
        <div>
          <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-dark)", lineHeight: 1.2 }}>Appreach</p>
          <p style={{ fontSize: "11px", color: "var(--color-muted)" }}>agora mesmo</p>
        </div>
      </div>
      <p style={{ fontSize: "14px", color: "var(--color-dark)", lineHeight: 1.45 }}>
        Ei! Sua oferta exclusiva expira em <strong>2h</strong>. Não perca a chance 🔥
      </p>
      <div className="flex gap-2 mt-auto">
        <div className="flex-1 flex items-center justify-center rounded-xl py-2.5" style={{ background: "var(--color-primary)" }}>
          <span style={{ fontSize: "12px", fontWeight: 600, color: "white" }}>Ver oferta</span>
        </div>
        <div className="flex-1 flex items-center justify-center rounded-xl py-2.5" style={{ background: "var(--color-surface)" }}>
          <span style={{ fontSize: "12px", color: "var(--color-muted)" }}>Depois</span>
        </div>
      </div>
    </div>
  );
}

function CTVWidget() {
  return (
    <div className="w-full h-full rounded-xl flex flex-col items-center justify-center gap-4" style={{ background: "#0F0F14" }}>
      <div className="flex items-center gap-2">
        <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ef4444" }} />
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.6px", textTransform: "uppercase" }}>Ao vivo · TV</span>
      </div>
      <div style={{ width: "60px", height: "60px", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "0", height: "0", borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "18px solid white", marginLeft: "4px" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ height: "1px", width: "36px", background: "rgba(255,255,255,0.12)" }} />
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>Ad · 0:15</span>
        <div style={{ height: "1px", width: "36px", background: "rgba(255,255,255,0.12)" }} />
      </div>
      <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>Baixe agora no seu celular</span>
      </div>
    </div>
  );
}

function PushWidget() {
  const notifications = [
    { color: "var(--color-primary)", title: "Promoção exclusiva", msg: "50% off por tempo limitado!", time: "2m" },
    { color: "#0F0F14", title: "Cashback creditado", msg: "R$24,90 disponíveis 🎉", time: "5m" },
  ];
  return (
    <div className="w-full h-full rounded-xl p-4 flex flex-col gap-2.5" style={{ background: "white" }}>
      <p style={{ fontSize: "11px", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.4px", marginBottom: "2px" }}>Notificações</p>
      {notifications.map((n, i) => (
        <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "var(--color-surface)" }}>
          <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: n.color, flexShrink: 0 }} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-dark)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{n.title}</p>
              <span style={{ fontSize: "10px", color: "var(--color-muted)", flexShrink: 0 }}>{n.time}</span>
            </div>
            <p style={{ fontSize: "11px", color: "var(--color-muted)", marginTop: "1px" }}>{n.msg}</p>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-1.5 mt-auto">
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-success)" }} />
        <span style={{ fontSize: "11px", color: "var(--color-muted)" }}>3 campanhas ativas</span>
      </div>
    </div>
  );
}

function PreloadWidget() {
  const apps = ["#6557ea", "#0F0F14", "#22C55E", "#3B82F6", "#F59E0B", "#EF4444"];
  return (
    <div className="w-full h-full rounded-xl p-5 flex flex-col justify-between" style={{ background: "white" }}>
      <div>
        <p style={{ fontSize: "11px", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.4px" }}>Pré-instalado</p>
        <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--color-dark)", marginTop: "4px", lineHeight: 1.3 }}>Pronto no primeiro acesso</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {apps.map((color, i) => (
          <div key={i} className="relative" style={{ aspectRatio: "1", borderRadius: "14px", background: color }}>
            {i === 0 && (
              <div style={{ position: "absolute", top: "-4px", right: "-4px", width: "16px", height: "16px", borderRadius: "50%", background: "var(--color-success)", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "8px", color: "white", fontWeight: 700, lineHeight: 1 }}>✓</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgramaticaWidget() {
  const metrics = [
    { label: "CPM médio", value: "R$12,40" },
    { label: "Alcance", value: "2.4M" },
    { label: "Conversões", value: "+34%" },
  ];
  return (
    <div className="w-full h-full rounded-xl p-5 flex flex-col" style={{ background: "white" }}>
      <div className="flex items-center justify-between mb-4">
        <p style={{ fontSize: "11px", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.4px" }}>Desempenho</p>
        <div className="flex items-center gap-1.5">
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-success)" }} />
          <span style={{ fontSize: "11px", color: "var(--color-muted)" }}>Ativo</span>
        </div>
      </div>
      <div className="flex flex-col">
        {metrics.map((m, i) => (
          <div key={i} className="flex items-center justify-between py-3" style={{ borderBottom: i < 2 ? "1px solid var(--color-border)" : "none" }}>
            <span style={{ fontSize: "13px", color: "var(--color-muted)" }}>{m.label}</span>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-dark)" }}>{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const strategies = [
  {
    title: "Aquisição de Usuários",
    description: "Campanhas de UA com segmentação precisa para atrair novos usuários qualificados e maximizar o volume de installs.",
    href: "/useracquisition-app",
    widget: <UAWidget />,
  },
  {
    title: "Retargeting",
    description: "Reengaje usuários que já instalaram seu app e converta intenções em compras e eventos de receita.",
    href: "/retargeting",
    widget: <RetargetingWidget />,
  },
  {
    title: "CTV",
    description: "Anuncie em TVs conectadas e streaming para construir brand awareness e escalar o alcance do seu app.",
    href: "/ctv-connected-tv",
    widget: <CTVWidget />,
  },
  {
    title: "App Chat & Push",
    description: "Comunicação direta dentro e fora do app com mensagens personalizadas para aumentar retenção e LTV.",
    href: "#estrategias",
    widget: <PushWidget />,
  },
  {
    title: "Preload",
    description: "Seu app pré-instalado em dispositivos novos, garantindo presença desde o primeiro acesso do usuário.",
    href: "#estrategias",
    widget: <PreloadWidget />,
  },
  {
    title: "Mídia Programática",
    description: "Compra de mídia em escala com dados de primeira parte para atingir o usuário certo, no momento certo.",
    href: "#estrategias",
    widget: <ProgramaticaWidget />,
  },
];

export default function Strategies() {
  return (
    <section id="estrategias" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              background: "var(--color-primary-subtle)",
              border: "1px solid rgba(101, 87, 234, 0.15)",
            }}
          >
            <span className="font-bold" style={{ fontSize: "12px", color: "var(--color-primary)" }}>A</span>
            <span className="shrink-0" style={{ width: "1px", height: "12px", background: "rgba(101,87,234,0.25)", display: "inline-block" }} />
            <span className="font-medium" style={{ fontSize: "11px", color: "var(--color-primary)", letterSpacing: "0.5px", textTransform: "uppercase" }}>
              Estratégias
            </span>
          </div>
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

        {/* Grid 3×2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {strategies.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-[28px] p-10"
              style={{ background: "#f7f7f7" }}
            >
              {/* Texts */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-semibold text-dark line-clamp-1"
                  style={{ fontSize: "20px", letterSpacing: "-0.4px" }}
                >
                  {s.title}
                </h3>
                <p
                  className="leading-relaxed line-clamp-3"
                  style={{ fontSize: "15px", color: "#7a7a7a" }}
                >
                  {s.description}
                </p>
              </div>

              {/* Widget */}
              <div className="w-full rounded-xl mt-6 overflow-hidden" style={{ height: "220px" }}>
                {s.widget}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
