import type { Metadata } from "next";
import { body, heading, wordmark } from "@/lib/fonts";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const SITE_URL = "https://www.boydensartadvisory.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jelena Boydens · Art Advisory — kunstadvies voor je interieur",
    template: "%s — Jelena Boydens Art Advisory",
  },
  description:
    "Kunsthistorisch advies voor particuliere en zakelijke interieurs in België. Ik help je echte kunst vinden die past bij je ruimte, je smaak en je budget — met montages die een werk in je huis tonen vóór je koopt.",
  keywords: [
    "kunstadvies",
    "art advisory",
    "kunst kopen",
    "kunsthistorica",
    "Brugge",
    "West-Vlaanderen",
    "Jelena Boydens",
    "interieur kunst",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Jelena Boydens · Art Advisory",
    description:
      "Kunsthistorisch advies voor particuliere en zakelijke interieurs. Echte kunst, met inzicht gekozen voor jouw ruimte.",
    url: SITE_URL,
    siteName: "Jelena Boydens Art Advisory",
    locale: "nl_BE",
    type: "website",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Een rustig, minimalistisch interieur met een groot kunstwerk aan de muur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jelena Boydens · Art Advisory",
    description: "Kunsthistorisch advies voor particuliere en zakelijke interieurs.",
    images: ["/images/og.jpg"],
  },
  verification: {
    google: "H5I_yhoaqvONDltLd2kFnkoEDVUy94leAINNxa0rTpA",
  },
};

// Links "Jelena Boydens" (person) and the business to their social profiles
// via schema.org sameAs — helps Google treat them as one entity. Add the
// TikTok URL to both sameAs arrays once available.
const SOCIAL_PROFILES = [
  "https://www.instagram.com/learnbylena/",
  "https://www.youtube.com/@LearnByLena",
  "https://www.tiktok.com/@learnbylena",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#jelena`,
      name: "Jelena Boydens",
      alternateName: "LearnByLena",
      url: SITE_URL,
      image: `${SITE_URL}/images/jelena-portrait.jpg`,
      jobTitle: "Kunsthistorica & kunstadviseur",
      sameAs: SOCIAL_PROFILES,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Jelena Boydens Art Advisory",
      url: SITE_URL,
      image: `${SITE_URL}/images/jelena-portrait.jpg`,
      description: "Kunsthistorisch advies voor particuliere en zakelijke interieurs.",
      email: "info@boydensartadvisory.com",
      telephone: "+32468326788",
      areaServed: "Brugge & West-Vlaanderen",
      founder: { "@id": `${SITE_URL}/#jelena` },
      sameAs: SOCIAL_PROFILES,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${body.variable} ${heading.variable} ${wordmark.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
