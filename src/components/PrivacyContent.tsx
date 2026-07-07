"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLang } from "@/lib/i18n";

type Section = { heading: string; paragraphs?: string[]; list?: string[] };
type Policy = {
  back: string;
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
};

// Full privacy-policy copy kept here (not in the global i18n dict) to avoid
// bloating it. Edit both languages below. Replace [ adres ] with the real
// business address.
const PRIVACY: Record<"nl" | "en", Policy> = {
  nl: {
    back: "← Terug naar home",
    title: "Privacybeleid",
    updated: "Laatst bijgewerkt: 7 juli 2026",
    intro:
      "Jelena Boydens Art Advisory hecht belang aan je privacy. In dit beleid lees je welke persoonsgegevens ik verzamel, waarom, en welke rechten je hebt. Dit beleid is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR) en de Belgische privacywetgeving.",
    sections: [
      {
        heading: "1. Wie is verantwoordelijk voor je gegevens?",
        paragraphs: [
          "Jelena Boydens Art Advisory is verantwoordelijk voor de verwerking van je persoonsgegevens (de “verwerkingsverantwoordelijke”).",
          "Jelena Boydens — BTW BE1035559627. E-mail: info@boydensartadvisory.com — Tel: +32 468 32 67 88.",
        ],
      },
      {
        heading: "2. Welke gegevens verzamel ik?",
        list: [
          "Via het contactformulier: je naam, je e-mailadres en de inhoud van je bericht.",
          "Automatisch bij je bezoek: technische gegevens zoals je IP-adres, browsertype en tijdstip van bezoek (via de serverlogs van mijn hostingprovider), voor de goede werking en beveiliging van de site.",
          "Ik verzamel geen gevoelige gegevens en gebruik geen tracking- of advertentiecookies.",
        ],
      },
      {
        heading: "3. Waarvoor en op welke grondslag?",
        list: [
          "Contactformulier: om je vraag te beantwoorden en, indien gewenst, een adviestraject op te starten. Grondslag: je toestemming en/of het nemen van stappen op jouw verzoek vóór een eventuele overeenkomst (art. 6.1.a en 6.1.b AVG).",
          "Technische logbestanden: mijn gerechtvaardigd belang bij een veilige en goed werkende website (art. 6.1.f AVG).",
        ],
      },
      {
        heading: "4. Met wie deel ik je gegevens?",
        paragraphs: [
          "Ik verkoop je gegevens nooit. Ik doe beroep op een aantal dienstverleners die namens mij gegevens verwerken (verwerkers):",
        ],
        list: [
          "Formspree (Formspree Inc., VS) — verwerkt de inzendingen van het contactformulier.",
          "Vercel (Vercel Inc., VS) — host de website.",
          "Google (Google Workspace) — mijn e-maildienst.",
        ],
      },
      {
        heading: "5. Doorgifte buiten de EU",
        paragraphs: [
          "Sommige van bovenstaande dienstverleners zijn in de Verenigde Staten gevestigd. Doorgifte van gegevens gebeurt met passende waarborgen, zoals de EU-modelcontractbepalingen en/of het EU-VS Data Privacy Framework.",
        ],
      },
      {
        heading: "6. Hoe lang bewaar ik je gegevens?",
        paragraphs: [
          "Niet langer dan nodig. Berichten via het contactformulier bewaar ik zolang nodig om je vraag te behandelen en, als er een samenwerking uit voortvloeit, voor de duur daarvan en de wettelijke bewaartermijnen. Daarna verwijder ik ze.",
        ],
      },
      {
        heading: "7. Je rechten",
        paragraphs: [
          "Je hebt het recht op inzage, verbetering, verwijdering, beperking, overdraagbaarheid en bezwaar. Je kunt een gegeven toestemming op elk moment intrekken. Om een recht uit te oefenen, mail je naar info@boydensartadvisory.com.",
          "Ben je het niet eens met hoe ik met je gegevens omga? Dan kun je klacht indienen bij de Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel — contact@apd-gba.be — +32 (0)2 274 48 00 — www.gegevensbeschermingsautoriteit.be.",
        ],
      },
      {
        heading: "8. Cookies",
        paragraphs: [
          "Deze website gebruikt geen tracking- of advertentiecookies. Ze bewaart enkel je taalkeuze lokaal in je browser (een functionele voorkeur), zodat de site je voorkeurstaal onthoudt.",
        ],
      },
      {
        heading: "9. Beveiliging & wijzigingen",
        paragraphs: [
          "Ik neem redelijke technische en organisatorische maatregelen om je gegevens te beschermen. Ik kan dit privacybeleid af en toe aanpassen; de datum bovenaan geeft de laatste update aan.",
        ],
      },
    ],
  },

  en: {
    back: "← Back to home",
    title: "Privacy Policy",
    updated: "Last updated: 7 July 2026",
    intro:
      "Jelena Boydens Art Advisory values your privacy. This policy explains which personal data I collect, why, and what rights you have. It is drawn up in accordance with the General Data Protection Regulation (GDPR) and Belgian privacy law.",
    sections: [
      {
        heading: "1. Who is responsible for your data?",
        paragraphs: [
          "Jelena Boydens Art Advisory is responsible for processing your personal data (the “data controller”).",
          "Jelena Boydens — VAT BE1035559627. Email: info@boydensartadvisory.com — Phone: +32 468 32 67 88.",
        ],
      },
      {
        heading: "2. What data do I collect?",
        list: [
          "Via the contact form: your name, your email address and the content of your message.",
          "Automatically during your visit: technical data such as your IP address, browser type and time of visit (via my hosting provider's server logs), for the proper functioning and security of the site.",
          "I do not collect sensitive data and do not use tracking or advertising cookies.",
        ],
      },
      {
        heading: "3. Why, and on what legal basis?",
        list: [
          "Contact form: to answer your question and, if you wish, to start an advisory process. Legal basis: your consent and/or taking steps at your request prior to a possible agreement (art. 6.1.a and 6.1.b GDPR).",
          "Technical log files: my legitimate interest in a secure and well-functioning website (art. 6.1.f GDPR).",
        ],
      },
      {
        heading: "4. Who do I share your data with?",
        paragraphs: [
          "I never sell your data. I rely on a number of service providers that process data on my behalf (processors):",
        ],
        list: [
          "Formspree (Formspree Inc., USA) — processes contact-form submissions.",
          "Vercel (Vercel Inc., USA) — hosts the website.",
          "Google (Google Workspace) — my email service.",
        ],
      },
      {
        heading: "5. Transfers outside the EU",
        paragraphs: [
          "Some of the providers above are based in the United States. Data transfers take place with appropriate safeguards, such as the EU Standard Contractual Clauses and/or the EU-US Data Privacy Framework.",
        ],
      },
      {
        heading: "6. How long do I keep your data?",
        paragraphs: [
          "No longer than necessary. I keep contact-form messages for as long as needed to handle your request and, if a collaboration follows, for its duration and the applicable legal retention periods. After that, I delete them.",
        ],
      },
      {
        heading: "7. Your rights",
        paragraphs: [
          "You have the right to access, rectification, erasure, restriction, portability and objection. You can withdraw a given consent at any time. To exercise a right, email info@boydensartadvisory.com.",
          "If you disagree with how I handle your data, you can lodge a complaint with the Belgian Data Protection Authority: Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussels — contact@apd-gba.be — +32 (0)2 274 48 00 — www.dataprotectionauthority.be.",
        ],
      },
      {
        heading: "8. Cookies",
        paragraphs: [
          "This website does not use tracking or advertising cookies. It only stores your language choice locally in your browser (a functional preference), so the site remembers your preferred language.",
        ],
      },
      {
        heading: "9. Security & changes",
        paragraphs: [
          "I take reasonable technical and organisational measures to protect your data. I may occasionally update this privacy policy; the date at the top indicates the most recent update.",
        ],
      },
    ],
  },
};

export function PrivacyContent() {
  const { lang } = useLang();
  const p = PRIVACY[lang];

  return (
    <main className="mx-auto max-w-2xl px-6 py-28 sm:px-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="link-underline text-sm text-muted">
          {p.back}
        </Link>
        <LanguageToggle />
      </div>

      <h1 className="mt-8 font-heading text-4xl font-medium tracking-tight text-black">
        {p.title}
      </h1>
      <p className="mt-2 text-xs uppercase tracking-widest text-muted">{p.updated}</p>
      <p className="mt-6 text-base leading-relaxed text-muted">{p.intro}</p>

      <div className="mt-10 space-y-8">
        {p.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-heading text-xl font-medium tracking-tight text-black">
              {section.heading}
            </h2>
            {section.paragraphs?.map((para, i) => (
              <p key={i} className="mt-3 text-base leading-relaxed text-muted">
                {para}
              </p>
            ))}
            {section.list && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
