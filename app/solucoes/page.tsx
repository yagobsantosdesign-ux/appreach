"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Strategies from "@/components/sections/Strategies";

export default function SolucoesPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>
        <Strategies showAll />
      </main>
      <Footer />
    </>
  );
}
