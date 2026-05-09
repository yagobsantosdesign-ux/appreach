import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import Strategies from "@/components/sections/Strategies";
import FunnelGuide from "@/components/sections/FunnelGuide";
import Cases from "@/components/sections/Cases";
import Timeline from "@/components/sections/Timeline";
import Stats from "@/components/sections/Stats";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoTicker />
        <Strategies />
        <FunnelGuide />
        <Cases />
        <Timeline />
        <Stats />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
