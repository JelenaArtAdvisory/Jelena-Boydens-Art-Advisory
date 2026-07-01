import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function InstagramSection() {
  return (
    <Section id="instagram" tone="cream">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow className="justify-center">A new way of looking</Eyebrow>
        <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
          On @jelly.arterior
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          I share stories about art that make you look at works differently. No sales talk — just
          the fascination of an art historian.
        </p>
        <a
          href="https://instagram.com/jelly.arterior"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 ease-apple hover:scale-[1.03] hover:shadow-soft"
        >
          Follow @jelly.arterior
        </a>
      </Reveal>
    </Section>
  );
}
