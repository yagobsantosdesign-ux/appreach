interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center px-3.5 py-1.5 rounded-full mb-6 ${className}`}
      style={{
        background: "#F7F7F7",
        border: "1px solid #EBEBEB",
      }}
    >
      <span
        style={{
          fontSize: "12px",
          color: "var(--color-body)",
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
