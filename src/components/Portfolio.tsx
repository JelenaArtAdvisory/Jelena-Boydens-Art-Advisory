"use client";

import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Rich, useT } from "@/lib/i18n";

export function Portfolio() {
  const t = useT();
  return (
    <Section id="portfolio" tone="offwhite">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal delay={100} className="order-2 md:order-1">
          <BeforeAfterSlider
            beforeSrc="/images/portfolio-sofia-before.jpg"
            beforeAlt="The living space with an empty wall beside the kitchen"
            afterSrc="/images/portfolio-sofia-after.jpg"
            afterAlt="The same wall with the chosen painting in place"
            aspect="aspect-[3/4]"
            maxWidth="max-w-sm"
          />
        </Reveal>

        <Reveal className="order-1 md:order-2">
          <Eyebrow>{t.portfolio.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
            {t.portfolio.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            <Rich text={t.portfolio.body} />
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
