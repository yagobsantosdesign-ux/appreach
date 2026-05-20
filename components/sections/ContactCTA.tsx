import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section id="contato" className="py-16 lg:py-24" style={{ background: "#ffffff" }}>
      <div className="max-w-[1300px] mx-auto px-4 lg:px-16">

        {/* Banner card */}
        <div
          className="relative overflow-hidden rounded-[28px] flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: "url('/bg-cta.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "64px 56px",
            minHeight: "544px",
          }}
        >
          <div className="relative flex flex-col items-center gap-5" style={{ maxWidth: "600px", zIndex: 1 }}>
            <h2
              className="text-white font-medium"
              style={{ fontSize: "clamp(36px, 5vw, 52px)", letterSpacing: "-1.4px", lineHeight: 1.1, textWrap: "balance" }}
            >
              Pronto para escalar o seu app?
            </h2>
            <p
              style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.70)", maxWidth: "390px", textWrap: "balance" }}
            >
              Fale com a nossa equipe e descubra a estratégia certa para o seu momento de crescimento — sem custo e sem compromisso.
            </p>
            <Button href="mailto:fale@appreach.com.br" variant="white" arrow size="lg" className="mt-2">
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
