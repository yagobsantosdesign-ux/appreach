"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { useInView } from "@/hooks/useInView";

interface Feature {
  title: string;
  description: string;
  bullets: string[];
  image?: { src: string; alt: string };
  /** Quando não há imagem definida, descreve o tipo de imagem desejada. */
  placeholderLabel?: string;
}

interface ProductFeaturesProps {
  badge: string;
  title: string;
  subtitle: string;
  features: Feature[];
}

function CheckIcon() {
  return (
    <span
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "var(--color-primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: "2px",
      }}
    >
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path
          d="M1 4L3.5 6.5L9 1"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ImageSlot({ image, placeholderLabel }: { image?: { src: string; alt: string }; placeholderLabel?: string }) {
  return (
    <div
      style={{
        flex: "0 0 50%",
        padding: "40px",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          flex: 1,
          background: "var(--color-primary-light)",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: "500px",
        }}
      >
        {image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <ImagePlaceholder
            label={placeholderLabel ?? "placeholder"}
            style={{ width: "100%", height: "100%", background: "transparent" }}
          />
        )}
      </div>
    </div>
  );
}

function FeatureCard({ feature, i }: { feature: Feature; i: number }) {
  const { ref, visible } = useInView<HTMLDivElement>();
  const imageRight = i % 2 === 0;
  return (
    <div
      ref={ref}
      className={`product-feature-card reveal-scale${visible ? " visible" : ""} flex flex-col ${imageRight ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--color-border)",
        borderRadius: "20px",
        overflow: "hidden",
        height: "580px",
        "--card-index": i,
      } as React.CSSProperties}
    >
      {/* Lado texto */}
      <div
        style={{
          flex: "0 0 50%",
          padding: imageRight ? "40px" : "40px 40px 40px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h3
          className="product-feature-title"
          style={{
            fontSize: "32px",
            color: "var(--color-heading)",
            marginBottom: "14px",
            maxWidth: "360px",
            textWrap: "balance",
          } as React.CSSProperties}
        >
          {feature.title}
        </h3>
        <p
          style={{
            fontSize: "16px",
            color: "var(--color-body)",
            lineHeight: "160%",
            marginBottom: "28px",
            maxWidth: "380px",
            textWrap: "pretty",
          } as React.CSSProperties}
        >
          {feature.description}
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {feature.bullets.map((bullet, j) => (
            <li
              key={j}
              style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              <CheckIcon />
              <span
                style={{
                  fontSize: "16px",
                  color: "var(--color-body)",
                  lineHeight: "160%",
                }}
              >
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Lado imagem (ou placeholder enquanto não houver) */}
      <ImageSlot image={feature.image} placeholderLabel={feature.placeholderLabel} />
    </div>
  );
}

export default function ProductFeatures({
  badge,
  title,
  subtitle,
  features,
}: ProductFeaturesProps) {
  const { ref: headRef, visible: headVisible } = useInView<HTMLDivElement>();
  return (
    <section id="como-funciona" className="product-features-section" style={{ background: "#FFFFFF", scrollMarginTop: "100px" }}>
      <div className="product-container">

        {/* Header centralizado */}
        <div ref={headRef} className={`reveal${headVisible ? " visible" : ""}`} style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SectionBadge>{badge}</SectionBadge>
          </div>
          {/* H2 — 48px, semibold (600), -0.02em, 120% — conforme globals.css */}
          <h2
            style={{
              fontSize: "48px",
              color: "var(--color-heading)",
              maxWidth: "680px",
              margin: "0 auto 16px",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--color-body)",
              lineHeight: "160%",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Cards de features */}
        <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
