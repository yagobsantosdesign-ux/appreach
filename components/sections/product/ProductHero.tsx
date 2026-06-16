"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { useInView } from "@/hooks/useInView";

interface ProductHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  /** Imagem ao lado do título (layout estilo home). Opcional. */
  image?: { src: string; alt: string };
  /** Alinhamento da imagem no slot (object-position). Padrão: "center". */
  imagePosition?: string;
  /** Rótulo de placeholder quando ainda não há imagem definida pelo cliente. */
  placeholderLabel?: string;
}

export default function ProductHero({ badge, title, subtitle, image, imagePosition = "center", placeholderLabel }: ProductHeroProps) {
  const { ref: headRef, visible: headVisible } = useInView<HTMLDivElement>();
  const { ref: mediaRef, visible: mediaVisible } = useInView<HTMLDivElement>();

  return (
    <section style={{ background: "#ffffff", paddingTop: "134px", paddingBottom: "72px" }}>
      <div className="product-container">
        <div
          ref={headRef}
          className={`product-hero-row flex flex-col lg:flex-row reveal${headVisible ? " visible" : ""}`}
          style={{ alignItems: "stretch", gap: "56px" }}
        >
          {/* Esquerda: badge + H1 + subtítulo + CTAs */}
          <div className="product-hero-text" style={{ flex: "0 0 640px", maxWidth: "640px", minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <SectionBadge>{badge}</SectionBadge>
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
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
              <Button href="https://appreach.vercel.app/growth-navigator" size="xl" variant="gradient">
                Diagnóstico gratuito
              </Button>
              <Button href="#como-funciona" size="xl" variant="ghost">
                Como funciona
              </Button>
            </div>
          </div>

          {/* Direita: imagem (ou placeholder) preenchendo a altura do bloco de texto */}
          <div
            ref={mediaRef}
            className={`product-hero-media reveal-scale${mediaVisible ? " visible" : ""}`}
            style={{
              "--reveal-delay": "0.1s",
              flex: "1 1 auto",
              maxWidth: "600px",
              width: "100%",
              borderRadius: "20px",
              overflow: "hidden",
            } as React.CSSProperties}
          >
            {image ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: imagePosition, display: "block" }}
              />
            ) : (
              <ImagePlaceholder
                label={placeholderLabel ?? "Imagem do produto"}
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
