import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import WhyAppreach from "@/components/sections/WhyAppreach";
import Strategies from "@/components/sections/Strategies";
import Platforms from "@/components/sections/Platforms";
import FunnelGuide from "@/components/sections/FunnelGuide";
import Cases from "@/components/sections/Cases";
import Timeline from "@/components/sections/Timeline";
import StatsBento from "@/components/sections/StatsBento";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ background: "#ffffff" }}>
        <Hero />
        <LogoTicker />
        <WhyAppreach />
        <Strategies />
        <Platforms />
        <FunnelGuide />
        <Cases />
        <Timeline />
        <StatsBento />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
