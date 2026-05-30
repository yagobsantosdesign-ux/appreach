"use client";

import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.80)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.9)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        overflow: "hidden",
      }}
    >
      <button
        className="w-full flex items-center gap-4 text-left"
        style={{ padding: "20px 24px", cursor: "pointer", background: "none", border: "none" }}
        onClick={onToggle}
      >
        {/* Question */}
        <span style={{
          flex: 1,
          fontSize: "16px",
          fontWeight: 600,
          letterSpacing: "-0.3px",
          color: "var(--color-dark)",
          lineHeight: 1.35,
          fontFamily: "var(--font-heading)",
        }}>
          {question}
        </span>

        {/* Chevron */}
        <span style={{
          flexShrink: 0,
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-primary)",
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}>
          <ChevronDown size={16} strokeWidth={2} />
        </span>
      </button>

      {/* Answer */}
      <div style={{
        maxHeight: isOpen ? "300px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <p style={{
          paddingTop: "0",
          paddingRight: "24px",
          paddingBottom: "22px",
          paddingLeft: "24px",
          fontSize: "14px",
          color: "var(--color-muted)",
          lineHeight: 1.75,
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
}
