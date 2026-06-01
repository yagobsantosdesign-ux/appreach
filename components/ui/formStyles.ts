import React from "react";

// Estilos compartilhados de formulário — usados no form de contato (Footer)
// e no form de banco de talentos (Carreiras). Fonte única ("nada solto").
export const INPUT: React.CSSProperties = {
  width: "100%",
  background: "#F7F7F9",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: "12px",
  padding: "13px 16px",
  fontSize: "15px",
  color: "#141414",
  outline: "none",
  transition: "border-color 0.15s",
};

export const LABEL: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#3D3D4A",
  marginBottom: "6px",
  display: "block",
};
