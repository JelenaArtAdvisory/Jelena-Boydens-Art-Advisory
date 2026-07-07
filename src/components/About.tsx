"use client";

import { Eyebrow } from "@/components/Eyebrow";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";

export function About() {
  const t = useT();
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 sm:px-8 md:grid-cols-2 md:gap-20">
        <Reveal>
          <PlaceholderImage
            src="/images/jelena-portrait.jpg"
            alt="Portrait of Jelena Boydens"
            label="[ portrait photo ]"
            aspect="aspect-[4/5]"
            className="max-w-md"
          />
        </Reveal>

        <Reveal delay={100}>
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
            {t.about.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{t.about.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
