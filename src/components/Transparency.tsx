import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Transparency() {
  return (
    <Section id="transparency">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow className="justify-center">My promise</Eyebrow>
        <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
          Independent advice, and open about commissions
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          I advise in your interest, not a gallery&rsquo;s. When I receive a commission from a
          gallery on a purchase, I always say so openly — upfront and in plain language. So you
          know exactly what you&rsquo;re paying for and can choose with peace of mind.
        </p>
      </Reveal>
    </Section>
  );
}
