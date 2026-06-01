"use client";

import React from "react";

// template.tsx re-monta a cada navegação, então o fade roda em toda troca de página.
// Apenas opacity (sem transform) para não quebrar o position:fixed do Header.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
