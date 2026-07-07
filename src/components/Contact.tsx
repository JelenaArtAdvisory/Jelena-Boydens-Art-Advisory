"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useT } from "@/lib/i18n";

const CONTACT_EMAIL = "info@boydensartadvisory.com";

// Formspree endpoint — submissions land in the info@ inbox. Manage/upgrade at formspree.io.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdlwloz";

const inputClass =
  "w-full rounded-2xl border border-black/15 bg-white px-5 py-3.5 text-sm text-black placeholder:text-muted/70 focus:outline-none";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const t = useT();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" tone="white">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
            {t.contact.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {t.contact.body}
          </p>

          <dl className="mt-9 space-y-3 text-sm text-black">
            <div className="flex gap-2">
              <dd>{t.contact.region}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted">{t.contact.labelEmail}</dt>
              <dd>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted">{t.contact.labelPhone}</dt>
              <dd>
                <a href="tel:+32468326788" className="hover:underline">
                  +32 468 32 67 88
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted">{t.contact.labelFollow}</dt>
              <dd className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/learnbylena/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram — LearnByLena"
                  className="text-black transition-opacity hover:opacity-60"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@LearnByLena"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="YouTube — LearnByLena"
                  className="text-black transition-opacity hover:opacity-60"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@learnbylena"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="TikTok — LearnByLena"
                  className="text-black transition-opacity hover:opacity-60"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
                <span>@learnbylena</span>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={100}>
          {status === "success" ? (
            <div className="flex min-h-[18rem] flex-col items-center justify-center rounded-3xl border border-black/10 bg-offwhite p-8 text-center">
              <p className="font-heading text-xl leading-relaxed text-black">
                {t.contact.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  {t.contact.placeholderName}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.placeholderName}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  {t.contact.placeholderEmail}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.contact.placeholderEmail}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  {t.contact.placeholderMessage}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.placeholderMessage}
                  className={`${inputClass} rounded-3xl`}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 ease-apple hover:scale-[1.03] hover:shadow-soft disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? t.contact.sending : t.contact.submit}
              </button>
              {status === "error" && (
                <p className="text-sm text-milkshakeDeep">{t.contact.error}</p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
