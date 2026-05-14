interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionBadge({ children, className = "", dark = false }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center px-3.5 py-1.5 rounded-full mb-6 ${className}`}
      style={
        dark
          ? { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }
          : { background: "var(--color-primary-light)", border: "1px solid rgba(101,87,234,0.18)" }
      }
    >
      <span
        style={{
          fontSize: "12px",
          color: dark ? "rgba(255,255,255,0.75)" : "var(--color-primary)",
          letterSpacing: "0.1px",
          fontWeight: 500,
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        {children}
      </span>
    </div>
  );
}
