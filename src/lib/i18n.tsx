"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/**
 * Lightweight, dependency-free bilingual system.
 *
 * All site copy lives in the `dict` object below — Dutch (nl) and English (en)
 * side by side. To edit any text, change it here in BOTH languages.
 * Wrap a word in *asterisks* to render it in italics (see <Rich />).
 *
 * Default language is Dutch. The choice is remembered in the browser.
 */
export type Lang = "nl" | "en";

export const dict = {
  nl: {
    nav: {
      about: "Over",
      approach: "Aanpak",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Boek een kennismaking",
    },
    hero: {
      heading: "Kunst zorgvuldig geselecteerd, met inzicht voor *jouw* ruimte.",
      intro:
        "Elk kunstwerk heeft een verhaal. Ik help je het werk te vinden dat deel wordt van het jouwe. Een stuk dat nooit op de achtergrond verdwijnt, maar je blijft boeien, telkens als je er voorbijloopt.",
      ctaPrimary: "Boek een kennismaking",
      ctaSecondary: "Hoe ik werk →",
    },
    about: {
      eyebrow: "Wie ben ik ",
      heading: "Een geoefend oog, bewust onafhankelijk.",
      body: "Ik ben Jelena Boydens, kunsthistorica (Universiteit Gent). Voor velen voelt de eerste stap in het kopen van kunst als een uitdaging: te veel keuze, onduidelijke prijzen, en geen idee waar te beginnen. Laat me je helpen. Met een geoefend oog en kennis van de markt begeleid ik je helder, van het eerste gesprek tot het moment dat het werk aan je muur hangt. Onafhankelijk van galerie of kunstenaar, enkel tot jouw dienst en vrijblijvend, maar vooral transparant over hoe ik werk.",
    },
    approach: {
      eyebrow: "Hoe ik werk",
      heading: "Van ons eerste gesprek tot het werk aan je muur, volledig vrijblijvend.",
      steps: [
        {
          title: "Gesprek bij jou thuis",
          description:
            "We bekijken samen je ruimte en krijgen een gevoel voor jouw stijl: wat je aanspreekt, wat niet, en wat past bij hoe je leeft.",
        },
        {
          title: "Zorgvuldig voorstel",
          description:
            "Een gecureerde selectie, met beelden van elk werk in jouw ruimte. Vrijblijvend, gewoon een helder beeld van wat mogelijk is.",
        },
        {
          title: "Aankoop & plaatsing",
          description:
            "We verfijnen samen tot het goed voelt. Ik begeleid de aankoop en vind precies de juiste plek.",
        },
      ],
    },
    visualization: {
      eyebrow: "Zie het op zijn plek",
      heading: "Een kunstwerk in jouw ruimte, voordat je beslist",
      body: "Twijfel je hoe een werk in je huis zal aanvoelen? Ik maak montages zodat je het op ware grootte ziet, hangend in je eigen interieur.",
      caption: "Sleep de knop om de muur met en zonder het kunstwerk te vergelijken.",
    },
    portfolio: {
      eyebrow: "Portfolio",
      heading: "Een recent project",
      body: "Ik begeleidde A&K bij de aankoop van hun eerste kunstwerk. *Sleep de knop om hun interieur te zien veranderen.*",
    },
    transparency: {
      eyebrow: "Mijn belofte",
      heading: "Onafhankelijk advies, vrijblijvend",
      body: "Ik adviseer onafhankelijk, niet in het belang van een galerie. Ik communiceer open over eventuele commissies, zodat je precies weet waar ik sta.",
    },
    instagram: {
      eyebrow: "Een nieuwe manier van kijken",
      heading: "Op @LearnByLena",
      body: "Ik maak diepgaande video's over kunst(geschiedenis). Met de bedoeling je net iets anders naar bepaalde kunstwerken te laten kijken.",
      cta: "Volg @LearnByLena",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Laten we kennismaken",
      body: "Benieuwd wat mogelijk is voor jouw ruimte? Neem contact op. Vrijblijvend.",
      labelEmail: "E-mail",
      labelPhone: "Telefoon",
      labelInstagram: "Instagram",
      labelRegion: "Regio",
      labelFollow: "Volg",
      region: "Brugge & West-Vlaanderen — huisbezoeken op afspraak",
      placeholderName: "Naam",
      placeholderEmail: "E-mail",
      placeholderMessage: "Vertel me iets over je ruimte, of stel een vraag",
      submit: "Verstuur bericht",
    },
    slider: { before: "Voor", after: "Na" },
    footer: { privacy: "Privacybeleid", vat: "BTW" },
  },

  en: {
    nav: {
      about: "About",
      approach: "Approach",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Book an introduction",
    },
    hero: {
      heading: "Hand-picked art, with insight for *your* space.",
      intro:
        "Every artwork has a story. I help you find the one that becomes part of yours. A piece that never fades into the background, but keeps drawing you in, every time you walk past it.",
      ctaPrimary: "Book an introduction",
      ctaSecondary: "How I work →",
    },
    about: {
      eyebrow: "Who I am",
      heading: "A trained eye, independent by choice.",
      body: "I'm Jelena Boydens, an art historian (Ghent University). Many people find it difficult to start buying art: too much choice, unclear prices, and no idea where to begin. Let me help you. With a trained eye and knowledge of the market, I guide you clearly. From the first conversation to the moment the work hangs on your wall. Independent from any gallery or artist, only at your service and without obligation. But most importantly transparent about how I work.",
    },
    approach: {
      eyebrow: "How I work",
      heading: "From our first conversation to the work on your wall, without any obligation.",
      steps: [
        {
          title: "Conversation at home",
          description:
            "We look at the space together and get a feel for your style: what moves you, what doesn't, and what suits how you live.",
        },
        {
          title: "Curated proposal",
          description:
            "A curated selection, with visuals of each work in your space. No obligation, just a clear picture of what's possible.",
        },
        {
          title: "Purchase & placement",
          description:
            "We refine together until it feels right. I guide the purchase and find exactly the right spot.",
        },
      ],
    },
    visualization: {
      eyebrow: "See it in place",
      heading: "An artwork in your space, before you decide",
      body: "Not sure how a piece will feel in your home? I create montages so you see it at true scale, hanging in your own interior.",
      caption: "Drag the handle to compare the wall with and without the artwork.",
    },
    portfolio: {
      eyebrow: "Portfolio",
      heading: "A recent project",
      body: "I guided A&K with the purchase of their first artwork. *Drag the handle to see their interior change.*",
    },
    transparency: {
      eyebrow: "My promise",
      heading: "Independent advice, without obligation",
      body: "I advise independently, not in a gallery's interest. I communicate openly about any commissions, so you know exactly where I stand.",
    },
    instagram: {
      eyebrow: "A new way of looking",
      heading: "On @LearnByLena",
      body: "I make in-depth videos about art (history). With the intention to make you look slightly different at certain artworks.",
      cta: "Follow @LearnByLena",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's meet",
      body: "Curious what's possible for your space? Get in touch. Without obligation.",
      labelEmail: "Email",
      labelPhone: "Phone",
      labelInstagram: "Instagram",
      labelRegion: "Region",
      labelFollow: "Follow",
      region: "Bruges & West Flanders — home visits by appointment",
      placeholderName: "Name",
      placeholderEmail: "Email",
      placeholderMessage: "Tell me a little about your space, or ask a question",
      submit: "Send message",
    },
    slider: { before: "Before", after: "After" },
    footer: { privacy: "Privacy policy", vat: "VAT" },
  },
};

type Dict = (typeof dict)["en"];

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "jb-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Dutch; server and first client render match to avoid a flash.
  const [lang, setLangState] = useState<Lang>("nl");

  // On mount, restore a previously chosen language from the browser.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "nl" || stored === "en") setLangState(stored);
  }, []);

  // Keep <html lang> in sync for accessibility and SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "nl" ? "en" : "nl";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, setLang, toggle]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}

/** Returns the copy dictionary for the active language. */
export function useT(): Dict {
  const { lang } = useLang();
  return dict[lang];
}

/** Renders a string, turning *asterisk-wrapped* segments into italics. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          part
        ),
      )}
    </>
  );
}
