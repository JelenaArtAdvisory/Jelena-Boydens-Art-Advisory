"use client";

import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useT } from "@/lib/i18n";

export function Transparency() {
  const t = useT();
  return (
    <Section id="transparency">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow className="justify-center">{t.transparency.eyebrow}</Eyebrow>
        <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
          {t.transparency.heading}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{t.transparency.body}</p>
      </Reveal>
    </Section>
  );
}
