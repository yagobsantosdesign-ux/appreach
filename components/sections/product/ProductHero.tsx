"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";
import { useInView } from "@/hooks/useInView";

interface ProductHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  image?: { src: string; alt: string };
}

export default function ProductHero({ badge, title, subtitle, image }: ProductHeroProps) {
  const { ref: headRef, visible: headVisible } = useInView<HTMLDivElement>();
  const { ref: mediaRef, visible: mediaVisible } = useInView<HTMLDivElement>();

  return (
    <section style={{ background: "#ffffff", paddingTop: "134px", paddingBottom: "72px" }}>
      <div className="product-container">

        {/* Linha topo: bloco de texto esq | CTAs dir */}
        <div
          ref={headRef}
          className={`flex flex-col lg:flex-row reveal${headVisible ? " visible" : ""}`}
          style={{ alignItems: "flex-end", gap: "80px", marginBottom: "52px" }}
        >
          {/* Esquerda: badge + H1 + subtítulo */}
          <div style={{ flex: "1 1 auto", minWidth: 0 }}>
            <SectionBadge>{badge}</SectionBadge>
            {/* H1 — tamanho responsivo, semibold (600), Inter via globals.css */}
            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, var(--text-h1))",
                color: "var(--color-heading)",
                textWrap: "balance" as never,
                marginBottom: "20px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "var(--text-hero-sub)",
                color: "var(--color-body)",
                lineHeight: "160%",
                maxWidth: "480px",
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Direita: CTAs alinhados ao rodapé do bloco, encostados à borda direita */}
          <div style={{ marginLeft: "auto", flexShrink: 0 }}>
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

        {/* Imagem do produto (ou placeholder enquanto não houver) */}
        <div
          ref={mediaRef}
          className={`reveal-scale${mediaVisible ? " visible" : ""}`}
          style={{
            "--reveal-delay": "0.1s",
            width: "100%",
            aspectRatio: "16/9",
            background: "#F0EEFF",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
          } as React.CSSProperties}
        >
          {image ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <>
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
            </>
          )}
        </div>

      </div>
    </section>
  );
}
