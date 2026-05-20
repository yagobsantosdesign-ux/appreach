import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import Strategies from "@/components/sections/Strategies";
import Platforms from "@/components/sections/Platforms";
import FunnelGuide from "@/components/sections/FunnelGuide";
import Cases from "@/components/sections/Cases";
import Timeline from "@/components/sections/Timeline";
import StatsBento from "@/components/sections/StatsBento";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>
        <Hero />
        <LogoTicker />
        <Strategies />
        <Platforms />
        <FunnelGuide />
        <Cases />
        <Timeline />
        <StatsBento />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
