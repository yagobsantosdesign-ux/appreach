"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: React.ReactNode;
  /** "up" (fade + sobe) ou "scale" (fade + sobe + leve scale) */
  variant?: "up" | "scale";
  /** atraso da animação, ex.: "0.1s" */
  delay?: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Wrapper de animação de entrada no scroll (mesmo padrão das seções da home:
 * useInView + classes .reveal/.reveal-scale do globals.css).
 * Use em blocos (headers de seção, grids), não em filhos flex/grid com tamanho fixo.
 */
export default function Reveal({ children, variant = "up", delay = "0s", className = "", style }: RevealProps) {
  const { ref, visible } = useInView();
  const base = variant === "scale" ? "reveal-scale" : "reveal";
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${base}${visible ? " visible" : ""}${className ? " " + className : ""}`}
      style={{ "--reveal-delay": delay, ...style } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
