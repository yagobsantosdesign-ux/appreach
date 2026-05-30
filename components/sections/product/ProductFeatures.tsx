import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";

interface Feature {
  title: string;
  description: string;
  bullets: string[];
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

function ImagePlaceholder() {
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
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(101,87,234,0.09) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <span
          style={{
            position: "relative",
            fontSize: "12px",
            color: "var(--color-primary)",
            fontFamily: "var(--font-geist-mono)",
            letterSpacing: "1px",
            textTransform: "uppercase",
            opacity: 0.4,
          }}
        >
          placeholder
        </span>
      </div>
    </div>
  );
}

export default function ProductFeatures({
  badge,
  title,
  subtitle,
  features,
}: ProductFeaturesProps) {
  return (
    <section className="product-features-section" style={{ background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1350px", margin: "0 auto", padding: "0 40px" }}>

        {/* Header centralizado */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SectionBadge>{badge}</SectionBadge>
          </div>
          {/* H2 — 48px, semibold (600), -0.02em, 120% — conforme globals.css */}
          <h2
            style={{
              fontSize: "48px",
              color: "var(--color-heading)",
              maxWidth: "580px",
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
          {features.map((feature, i) => {
            const imageRight = i % 2 === 0;
            return (
              <div
                key={i}
                className={`product-feature-card flex flex-col ${imageRight ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EBEBEB",
                  borderRadius: "20px",
                  overflow: "hidden",
                  height: "580px",
                }}
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
                      maxWidth: "300px",
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
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                        }}
                      >
                        <CheckIcon />
                        <span
                          style={{
                            fontSize: "16px",
                            color: "var(--color-body)",
                            lineHeight: "160%",
                            maxWidth: "340px",
                          }}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lado placeholder */}
                <ImagePlaceholder />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
