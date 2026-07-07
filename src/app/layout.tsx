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
    "Kunsthistorisch advies voor particuliere interieurs in Brugge & West-Vlaanderen. Ik help je echte kunst vinden die past bij je ruimte, je smaak en je budget — met montages die een werk in je huis tonen vóór je koopt.",
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
      "Kunsthistorisch advies voor particuliere interieurs. Echte kunst, met inzicht gekozen voor jouw ruimte.",
    url: SITE_URL,
    siteName: "Jelena Boydens Art Advisory",
    locale: "nl_BE",
    type: "website",
    // TODO: add an Open Graph image (e.g. /public/og.jpg, 1200x630) and
    // reference it here once real photography exists: images: ["/og.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jelena Boydens · Art Advisory",
    description: "Kunsthistorisch advies voor particuliere interieurs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${body.variable} ${heading.variable} ${wordmark.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
