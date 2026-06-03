"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Permite mais de um item aberto ao mesmo tempo. Padrão: false. */
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  // Abre e rola até o item correspondente à âncora da URL (deep-link),
  // tanto no carregamento quanto quando o hash muda na mesma página.
  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && items.some((it) => it.id === hash)) {
        setOpenIds([hash]);
        requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : allowMultiple
        ? [...prev, id]
        : [id]
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            id={item.id}
            style={{
              background: "#ffffff",
              border: "1px solid var(--color-border)",
              borderRadius: "20px",
              overflow: "hidden",
              scrollMarginTop: "100px",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "28px 32px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(20px, 2.4vw, 24px)",
                  fontWeight: 600,
                  color: "var(--color-heading)",
                  letterSpacing: "-0.02em",
                  lineHeight: "130%",
                }}
              >
                {item.title}
              </span>
              <span
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: isOpen ? "var(--color-primary)" : "var(--color-primary-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.25s ease",
                }}
              >
                <ChevronDown
                  size={18}
                  color={isOpen ? "#fff" : "var(--color-primary)"}
                  style={{
                    transition: "transform 0.25s ease",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </span>
            </button>

            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
                transition: "grid-template-rows 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
              }}
            >
              <div style={{ overflow: "hidden", minHeight: 0 }}>
                <div style={{ padding: "0 32px 32px" }}>{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
