"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Approach() {
  const t = useT();
  const [active, setActive] = useState(0);

  return (
    <Section id="approach" tone="offwhite">
      <Reveal>
        <Eyebrow>{t.approach.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
          {t.approach.heading}
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {t.approach.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 100}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group w-full text-left"
            >
              <span
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border text-sm font-medium transition-colors duration-300 ease-apple",
                  active === i
                    ? "border-milkshakeDeep text-milkshakeDeep"
                    : "border-black/20 text-black",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-black">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </button>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
