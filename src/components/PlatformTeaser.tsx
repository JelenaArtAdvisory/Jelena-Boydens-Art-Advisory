"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

// TODO: wire this up to a real subscriber list (e.g. Mailchimp, ConvertKit,
// Resend Audiences) or a Next.js API route once the backend exists. For now
// it just confirms locally — no email is sent or stored anywhere.
export function PlatformTeaser() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="platform" tone="offwhite">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <Eyebrow className="justify-center" tone="muted">
            Coming soon
          </Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
            Soon: buy art you first see in your own room
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            I&rsquo;m building a platform where artists offer their work and you, through a scan
            of your interior, instantly see how a piece looks in your home. Accessible art,
            chosen with confidence. Want to be the first to know? Leave your email.
          </p>
        </Reveal>

        <Reveal delay={100}>
          {submitted ? (
            <p className="mt-8 text-sm font-medium text-black">
              Thank you — you&rsquo;ll be the first to know.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="teaser-email" className="sr-only">
                Email address
              </label>
              <input
                id="teaser-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full border border-black/15 bg-white px-5 py-3.5 text-sm text-black placeholder:text-muted/70 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 ease-apple hover:scale-[1.03] hover:shadow-soft"
              >
                Notify me
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
