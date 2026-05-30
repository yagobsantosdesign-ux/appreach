"use client";

import { ReactNode, CSSProperties } from "react";

type Variant = "gradient" | "glass" | "ghost" | "white" | "dark";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const sizes = {
  sm: { px: "px-4", font: "13px", gap: "gap-2",   height: 44 },
  md: { px: "px-5", font: "14px", gap: "gap-2.5", height: 44 },
  lg: { px: "px-7", font: "15px", gap: "gap-3",   height: 44 },
  xl: { px: "px-5", font: "16px", gap: "gap-2.5", height: 48 },
};

export default function Button({
  variant = "gradient",
  size = "md",
  href,
  onClick,
  type = "button",
  fullWidth = false,
  className = "",
  style: styleProp,
  children,
}: ButtonProps) {
  const s = sizes[size];

  const variantClasses: Record<Variant, string> = {
    gradient: "text-white",
    glass:    "text-white hover:bg-white/20",
    ghost:    "border text-primary hover:bg-primary/5",
    white:    "bg-white text-[#141414]",
    dark:     "text-white",
  };

  const variantStyle: CSSProperties =
    variant === "gradient"
      ? {
          background: "var(--color-primary)",
        }
      : variant === "glass"
      ? {
          background: "rgba(255,255,255,0.13)",
          border: "1px solid rgba(255,255,255,0.22)",
          backdropFilter: "blur(10px)",
        }
      : variant === "white"
      ? { boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }
      : variant === "dark"
      ? { background: "#141414", boxShadow: "0 4px 16px rgba(0,0,0,0.30)" }
      : { borderColor: "var(--color-primary)" };

  const hoverClass = variant === "white" ? "shadow-hover-white"
                  : variant === "dark"  ? "shadow-hover-dark"
                  : "";

  const classes = [
    "group inline-flex items-center rounded-xl font-semibold",
    "transition-all duration-200 hover:-translate-y-0.5",
    s.gap,
    s.px,
    variantClasses[variant],
    hoverClass,
    fullWidth ? "w-full justify-center" : "",
    className,
  ].filter(Boolean).join(" ");

  const buttonStyle: CSSProperties = {
    ...variantStyle,
    minHeight: s.height,
    ...styleProp,
  };

  const inner = (
    <span style={{ fontSize: s.font, letterSpacing: "-0.2px" }}>{children}</span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} style={buttonStyle}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={buttonStyle}>
      {inner}
    </button>
  );
}
