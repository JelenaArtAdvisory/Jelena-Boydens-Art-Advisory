import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstagramSection } from "@/components/InstagramSection";
import { InteriorVisualization } from "@/components/InteriorVisualization";
import { Portfolio } from "@/components/Portfolio";
import { Transparency } from "@/components/Transparency";
// PlatformTeaser ("Coming soon") removed per client request.

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Approach />
        <InteriorVisualization />
        <Portfolio />
        <Transparency />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
