import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section id="contato" className="py-16 lg:py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        {/* Banner card */}
        <div
          className="relative overflow-hidden rounded-[28px] flex flex-col items-center justify-center text-center"
          style={{
            background: "linear-gradient(145deg, #1E1640 0%, #2D1F5E 55%, #1a1438 100%)",
            padding: "64px 56px",
            minHeight: "480px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Blob decorativo */}
          <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(101,87,234,0.30) 0%, transparent 65%)", pointerEvents: "none" }} />

          <div className="relative flex flex-col items-center gap-5" style={{ maxWidth: "560px", zIndex: 1 }}>
            {/* Badge */}
            <span style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              color: "#9B91FF",
              background: "rgba(155,145,255,0.15)",
              border: "1px solid rgba(155,145,255,0.25)",
              borderRadius: "99px",
              padding: "5px 14px",
            }}>
              Fale com a gente
            </span>

            <h2
              className="text-white font-medium"
              style={{ fontSize: "clamp(32px, 4.5vw, 48px)", letterSpacing: "-1.4px", lineHeight: 1.1, textWrap: "balance" }}
            >
              Pronto para escalar o seu app?
            </h2>
            <p
              style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.60)", maxWidth: "380px", textWrap: "balance" }}
            >
              Fale com a nossa equipe e descubra a estratégia certa para o seu momento de crescimento — sem custo e sem compromisso.
            </p>
            <Button href="mailto:fale@appreach.com.br" variant="gradient" size="lg" className="mt-2">
              Falar com especialista
            </Button>
          </div>
        </div>

        {/* Form Netlify oculto */}
        <form name="contato" method="POST" data-netlify="true" style={{ display: "none" }}>
          <input type="hidden" name="form-name" value="contato" />
          <input name="nome" type="text" />
          <input name="email" type="email" />
          <input name="whatsapp" type="tel" />
          <input name="app" type="text" />
          <textarea name="mensagem" />
        </form>

      </div>
    </section>
  );
}
