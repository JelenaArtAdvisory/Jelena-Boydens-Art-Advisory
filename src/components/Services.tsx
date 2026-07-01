import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";

const SERVICES = [
  {
    title: "Discovery & Proposal",
    description:
      "A home visit and conversation about your taste and space, followed by a curated proposal of a few works — with montages showing how they look in your home.",
  },
  {
    title: "Guidance to purchase",
    description:
      "I connect you with galleries and artists, arrange viewings, and guide the purchase from start to finish. Transparent about any commission.",
  },
  {
    title: "Buyer's representation",
    description:
      "Have a work in mind — at an auction, from a private seller or a gallery? I'm entirely on your side: I assess the price and negotiate for you.",
  },
];

export function Services() {
  return (
    <Section id="services" tone="offwhite">
      <Reveal>
        <Eyebrow>What I offer</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
          Three ways I can help you choose with confidence
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={i * 90}>
            <ServiceCard index={i + 1} title={service.title} description={service.description} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
