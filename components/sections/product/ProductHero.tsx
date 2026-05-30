import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";

interface ProductHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
}

export default function ProductHero({ badge, title, subtitle }: ProductHeroProps) {
  return (
    <section style={{ background: "#ffffff", paddingTop: "134px", paddingBottom: "72px" }}>
      <div style={{ maxWidth: "1350px", margin: "0 auto", padding: "0 40px" }}>

        {/* Linha topo: bloco de texto esq | CTAs dir */}
        <div
          className="flex flex-col lg:flex-row"
          style={{ alignItems: "flex-end", gap: "80px", marginBottom: "52px" }}
        >
          {/* Esquerda: badge + H1 + subtítulo */}
          <div style={{ flex: "0 0 55%" }}>
            <SectionBadge>{badge}</SectionBadge>
            {/* H1 — tamanho responsivo, semibold (600), Inter via globals.css */}
            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 60px)",
                fontWeight: 600,
                color: "#251d49",
                letterSpacing: "-0.04em",
                lineHeight: "110%",
                textWrap: "balance" as never,
                marginBottom: "20px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "#3d3d4a",
                lineHeight: "160%",
                maxWidth: "480px",
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Direita: CTAs alinhados ao rodapé do bloco */}
          <div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button href="#contato" size="xl" variant="gradient">
                Falar com especialista
              </Button>
              <Button href="#como-funciona" size="xl" variant="ghost">
                Como funciona
              </Button>
            </div>
          </div>
        </div>

        {/* Placeholder de imagem */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16/9",
            background: "#F0EEFF",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle, rgba(101,87,234,0.09) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <span
            style={{
              position: "relative",
              fontSize: "12px",
              color: "#6557EA",
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "1px",
              textTransform: "uppercase",
              opacity: 0.45,
            }}
          >
            screenshot do produto
          </span>
        </div>

      </div>
    </section>
  );
}
