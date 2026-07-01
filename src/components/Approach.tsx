"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Conversation at home",
    description:
      "We look at the space together and uncover your style — what moves you, what doesn't, and what suits how you live.",
  },
  {
    title: "Curated proposal",
    description:
      "You receive a selection of works with notes on the artist and the price, plus montages showing each work in your interior.",
  },
  {
    title: "Purchase & placement",
    description:
      "We refine until it's right. I guide the purchase and think along about placement.",
  },
];

export function Approach() {
  const [active, setActive] = useState(0);

  return (
    <Section id="approach">
      <Reveal>
        <Eyebrow>How I work</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
          A calm, considered path from first visit to hanging the work
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {STEPS.map((step, i) => (
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
