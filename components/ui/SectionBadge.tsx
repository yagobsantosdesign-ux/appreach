interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  /** Sobrescreve a cor de destaque (dash + texto). Padrão: var(--color-primary). */
  color?: string;
}

export default function SectionBadge({ children, className = "", dark = false, color }: SectionBadgeProps) {
  const accent = color ?? "var(--color-primary)";
  return (
    <div
      className={`inline-flex items-center mb-6 ${className}`}
      style={{ gap: "8px" }}
    >
      <span style={{
        display: "inline-block",
        width: "20px",
        height: "1.5px",
        background: dark ? "rgba(255,255,255,0.45)" : accent,
        flexShrink: 0,
      }} />
      <span
        style={{
          fontSize: "11px",
          color: dark ? "rgba(255,255,255,0.55)" : accent,
          letterSpacing: "1px",
          fontWeight: 600,
          fontFamily: "var(--font-geist-mono)",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  );
}
