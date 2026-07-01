import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstagramSection } from "@/components/InstagramSection";
import { InteriorVisualization } from "@/components/InteriorVisualization";
import { PlatformTeaser } from "@/components/PlatformTeaser";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Transparency } from "@/components/Transparency";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Approach />
        <InteriorVisualization />
        <Portfolio />
        <PlatformTeaser />
        <Transparency />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
