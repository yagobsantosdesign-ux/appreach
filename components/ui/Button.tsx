"use client";

import { ArrowRight } from "lucide-react";
import { ReactNode, CSSProperties } from "react";

type Variant = "gradient" | "primary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  arrow?: boolean;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

const sizes = {
  sm: { pl: "pl-4",  pr: "pr-1.5", py: "py-1.5", pyNoArrow: "py-2",   px: "px-4",  font: "13px", badge: 24, arrow: 11, gap: "gap-2" },
  md: { pl: "pl-5",  pr: "pr-1.5", py: "py-1.5", pyNoArrow: "py-2.5", px: "px-5",  font: "14px", badge: 28, arrow: 13, gap: "gap-2.5" },
  lg: { pl: "pl-6",  pr: "pr-2",   py: "py-2",   pyNoArrow: "py-3.5", px: "px-7",  font: "15px", badge: 32, arrow: 15, gap: "gap-3" },
};

export default function Button({
  variant = "primary",
  arrow = false,
  size = "md",
  href,
  onClick,
  type = "button",
  fullWidth = false,
  className = "",
  children,
}: ButtonProps) {
  const s = sizes[size];

  const variantClasses: Record<Variant, string> = {
    gradient: "text-white hover:brightness-110",
    primary:  "bg-primary text-white hover:brightness-110",
    ghost:    "border text-primary hover:bg-primary/5",
  };

  const variantStyle: CSSProperties =
    variant === "gradient"
      ? {
          background: "linear-gradient(167deg, #8B7FFF 0%, #5449D6 100%)",
          boxShadow: "0 8px 14px rgba(101,87,234,0.35)",
        }
      : variant === "primary"
      ? { boxShadow: "0 8px 14px rgba(101,87,234,0.3)" }
      : { borderColor: "var(--color-primary)" };

  const padding = arrow
    ? `${s.pl} ${s.pr} ${s.py} ${s.py}`
    : `${s.px} ${s.pyNoArrow}`;

  const classes = [
    "group inline-flex items-center rounded-full font-semibold",
    "transition-all duration-200",
    s.gap,
    padding,
    variantClasses[variant],
    "shadow-hover",
    fullWidth ? "w-full justify-center" : "",
    className,
  ].filter(Boolean).join(" ");

  const badgeBg    = variant === "ghost" ? "var(--color-primary-light)" : "rgba(255,255,255,0.28)";
  const badgeColor = variant === "ghost" ? "var(--color-primary)"       : "white";

  const arrowBadge = arrow ? (
    <span
      className="inline-flex items-center justify-center rounded-full shrink-0"
      style={{ width: s.badge, height: s.badge, background: badgeBg, color: badgeColor }}
    >
      <span className="transition-transform duration-200 group-hover:-rotate-45 inline-flex">
        <ArrowRight size={s.arrow} strokeWidth={2.5} />
      </span>
    </span>
  ) : null;

  const inner = (
    <>
      <span style={{ fontSize: s.font, letterSpacing: "-0.2px" }}>{children}</span>
      {arrowBadge}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} style={variantStyle}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={variantStyle}>
      {inner}
    </button>
  );
}
