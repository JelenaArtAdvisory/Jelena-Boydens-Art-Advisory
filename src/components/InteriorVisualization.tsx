"use client";

import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useT } from "@/lib/i18n";

export function InteriorVisualization() {
  const t = useT();
  return (
    <Section id="visualization" tone="white">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16">
        <Reveal>
          <Eyebrow>{t.visualization.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
            {t.visualization.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            {t.visualization.body}
          </p>
          <p className="mt-4 text-sm text-muted">{t.visualization.caption}</p>
        </Reveal>

        <Reveal delay={100}>
          <BeforeAfterSlider
            beforeSrc="/images/montage-without-v3.png"
            beforeAlt="The same bedroom with an empty wall above the bed"
            afterSrc="/images/montage-with-v3.png"
            afterAlt="The bedroom with the artwork hanging above the bed"
            aspect="aspect-[459/466]"
            priority
          />
        </Reveal>
      </div>
    </Section>
  );
}
