import { ArrowRight } from "lucide-react";
import Image from "next/image";

const avatars = ["/avatar-3.jpg", "/avatar-2.jpg", "/avatar-1.jpg"];

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden" style={{ minHeight: "100vh", paddingTop: "138px", paddingBottom: "64px" }}>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 flex flex-col gap-[72px]">

        {/* ── Row 1: Título (esquerda) + Descrição + CTA (direita) ── */}
        <div className="flex items-end justify-between gap-8">
          <div className="relative shrink-0 hero-fade-up hero-fade-up-1" style={{ maxWidth: "500px" }}>
            <h1
              className="font-medium leading-[1.05] text-dark"
              style={{ fontSize: "60px", letterSpacing: "-2.4px" }}
            >
              Do primeiro<br />install à receita
            </h1>
          </div>

          <div className="flex flex-col gap-6 items-end shrink-0 hero-fade-up hero-fade-up-2" style={{ maxWidth: "500px" }}>
            <p className="text-right leading-relaxed" style={{ fontSize: "18px", color: "#7a7a7a", maxWidth: "500px" }}>
              Cobrimos cada etapa do funil, da aquisição de<br />usuários até eventos de compra e escala de receita.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-white font-semibold hover:opacity-90 transition-opacity shrink-0"
              style={{
                fontSize: "14px",
                letterSpacing: "-0.28px",
                background: "linear-gradient(167deg, #8B7FFF 0%, #5449D6 100%)",
                boxShadow: "0 8px 14px rgba(101,87,234,0.4)",
              }}
            >
              Fale conosco
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* ── Row 2: Container do celular ── */}
        {/*
          Estrutura:
          - Wrapper externo: 560px, overflow: visible (permite o phone vazar pelo topo)
          - Gray box: absolute inset-0, SEM overflow:hidden (só o fundo visual)
          - Phone: absolute bottom:0 — irmão do gray box, ancorado na base do wrapper.
            Como é mais alto que 560px, vaza naturalmente para cima.
            O bottom do wrapper (560px) serve como "corte" visual inferior.
        */}
        <div className="relative hero-fade-up hero-fade-up-3" style={{ height: "560px", overflow: "visible", clipPath: "inset(-9999px -9999px 0px -9999px)" }}>

          {/* Gray box — fundo visual, SEM overflow:hidden */}
          <div
            className="absolute inset-0 rounded-[18px]"
            style={{
              background: "#F7F7F7",
            }}
          />

          {/* Phone — irmão do gray box, bottom:0 do wrapper.
              Imagem com width:100% height:auto → mais alta que 560px → vaza pelo topo. */}
          <div
            className="absolute"
            style={{
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%) translateY(185px)",
              width: "86%",
              pointerEvents: "none",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-phone.png"
              alt="App mobile demonstrando a plataforma Appreach"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>

          {/* Widget claro 1 — Installs (esquerda) */}
          <div
            className="absolute flex flex-col gap-1.5 pointer-events-none widget-float"
            style={{
              left: "40px",
              top: "148px",
              zIndex: 15,
              background: "#ffffff",
              borderRadius: "16px",
              padding: "16px 20px",
              minWidth: "186px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.04)",
            }}
          >
            <p style={{ fontSize: "11px", color: "#a1a1ae", letterSpacing: "0.22px" }}>Installs esta semana</p>
            <p style={{ fontSize: "28px", fontWeight: 600, color: "#0F0F14", letterSpacing: "-1px", lineHeight: 1 }}>12.450</p>
            <div className="flex items-center gap-1.5">
              <span style={{ fontSize: "12px", color: "#22C55E", fontWeight: 600 }}>↑ +24%</span>
              <span style={{ fontSize: "12px", color: "#a1a1ae" }}>vs semana passada</span>
            </div>
          </div>

          {/* Widget claro 2 — ROAS (direita) */}
          <div
            className="absolute flex items-center gap-3 pointer-events-none widget-float-2"
            style={{
              right: "40px",
              top: "268px",
              zIndex: 15,
              background: "#ffffff",
              borderRadius: "16px",
              padding: "14px 18px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{
              width: "42px", height: "42px", borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg, #8B7FFF 0%, #5449D6 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "white", fontSize: "20px", lineHeight: 1 }}>↗</span>
            </div>
            <div>
              <p style={{ fontSize: "20px", fontWeight: 700, color: "#0F0F14", letterSpacing: "-0.6px", lineHeight: 1 }}>2.4x ROAS</p>
              <p style={{ fontSize: "11px", color: "#a1a1ae", marginTop: "3px" }}>Média dos clientes</p>
            </div>
          </div>

          {/* Widget escuro 1 — pill topo direito */}
          <div
            className="absolute inline-flex items-center gap-2 pointer-events-none widget-float-3"
            style={{
              right: "172px",
              top: "48px",
              zIndex: 15,
              background: "#0F0F14",
              borderRadius: "100px",
              padding: "9px 15px",
            }}
          >
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
            <span style={{ fontSize: "13px", fontWeight: 500, color: "#ffffff", whiteSpace: "nowrap" }}>Aquisição inteligente</span>
          </div>

          {/* Widget escuro 2 — pill meio esquerdo */}
          <div
            className="absolute inline-flex items-center gap-2 pointer-events-none widget-float-4"
            style={{
              left: "172px",
              top: "356px",
              zIndex: 15,
              background: "#0F0F14",
              borderRadius: "100px",
              padding: "9px 15px",
            }}
          >
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22C55E", flexShrink: 0 }} />
            <span style={{ fontSize: "13px", fontWeight: 500, color: "#ffffff", whiteSpace: "nowrap" }}>Escala de receita</span>
          </div>

          {/* Overlay gradient — sobre o celular, ancorado na base do container cinza */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none rounded-b-[18px]"
            style={{
              height: "220px",
              background: "linear-gradient(to top, #F7F7F7 20%, transparent 100%)",
              zIndex: 5,
            }}
            aria-hidden="true"
          />

        </div>


      </div>
    </section>
  );
}
