interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionBadge({ children, className = "", dark = false }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center mb-6 ${className}`}
      style={{ gap: "8px" }}
    >
      <span style={{
        display: "inline-block",
        width: "20px",
        height: "1.5px",
        background: dark ? "rgba(255,255,255,0.45)" : "var(--color-primary)",
        flexShrink: 0,
      }} />
      <span
        style={{
          fontSize: "11px",
          color: dark ? "rgba(255,255,255,0.55)" : "var(--color-primary)",
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
