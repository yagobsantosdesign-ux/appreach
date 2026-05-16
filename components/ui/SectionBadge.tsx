interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionBadge({ children, className = "", dark = false }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 mb-6 ${className}`}
      style={{
        background: dark ? "rgba(255,255,255,0.15)" : "var(--color-primary)",
        borderRadius: "6px",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          color: "white",
          letterSpacing: "0.8px",
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
