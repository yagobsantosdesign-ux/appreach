import React from "react";

interface ImagePlaceholderProps {
  /** Texto curto descrevendo a imagem desejada (para pesquisa de referência). */
  label?: string;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Placeholder visual no padrão do site (fundo lilás + padrão de pontos).
 * Usado onde o cliente pediu uma imagem que ainda não foi fornecida —
 * o `label` indica que tipo de imagem deve entrar no lugar.
 */
export default function ImagePlaceholder({
  label = "imagem",
  style,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        background: "#F0EEFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        ...style,
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
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          opacity: 0.6,
          textAlign: "center",
          lineHeight: 1.55,
          padding: "0 20px",
          maxWidth: "320px",
        }}
      >
        {label}
      </span>
    </div>
  );
}
