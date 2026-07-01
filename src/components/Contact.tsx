"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

// TODO: replace with Formspree / a Next.js API route + email service (e.g.
// Resend) once there's a backend. Until then this opens the visitor's own
// mail client via a mailto: link — nothing is sent from the server.
const CONTACT_EMAIL = "[ your email ]";

const inputClass =
  "w-full rounded-2xl border border-black/15 bg-white px-5 py-3.5 text-sm text-black placeholder:text-muted/70 focus:outline-none";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(`Introduction — ${name || "new enquiry"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contact" tone="offwhite">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
            Let&rsquo;s meet
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            An empty wall, a question, or simply curious? A first introduction is free and
            without obligation.
          </p>

          <dl className="mt-9 space-y-3 text-sm text-black">
            <div className="flex gap-2">
              <dt className="text-muted">Email</dt>
              <dd>{CONTACT_EMAIL}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted">Instagram</dt>
              <dd>@jelly.arterior</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted">Region</dt>
              <dd>Bruges &amp; West Flanders — home visits by appointment</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me a little about your space, or ask a question"
                className={`${inputClass} rounded-3xl`}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 ease-apple hover:scale-[1.03] hover:shadow-soft"
            >
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
