import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function InteriorVisualization() {
  return (
    <Section id="visualization" tone="cream">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16">
        <Reveal>
          <Eyebrow>See it in place</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
            A work in your space, before you decide
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Not sure a piece really &lsquo;works&rsquo; above your sofa? I create montages where
            you see the work at true scale, hanging in your own interior. So you choose with
            confidence.
          </p>
          <p className="mt-4 text-sm text-muted">
            Drag the handle — placeholder wall &amp; artwork shown until real montages are added.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <BeforeAfterSlider />
        </Reveal>
      </div>
    </Section>
  );
}
