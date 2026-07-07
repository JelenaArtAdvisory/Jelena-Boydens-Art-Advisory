import type { Metadata } from "next";
import { body, heading, wordmark } from "@/lib/fonts";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const SITE_URL = "https://www.jelenaboydens.com"; // TODO: update once the domain is live

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jelena Boydens · Art Advisory",
    template: "%s — Jelena Boydens Art Advisory",
  },
  description:
    "Art-historical advice for private interiors. I help you find real art that fits your space, your taste and your budget — with montages that show a work in your home before you buy.",
  openGraph: {
    title: "Jelena Boydens · Art Advisory",
    description:
      "Art-historical advice for private interiors. Real art, chosen with insight for your space.",
    url: SITE_URL,
    siteName: "Jelena Boydens Art Advisory",
    locale: "en_US",
    type: "website",
    // TODO: add an Open Graph image (e.g. /public/og.jpg, 1200x630) and
    // reference it here once real photography exists: images: ["/og.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jelena Boydens · Art Advisory",
    description: "Art-historical advice for private interiors.",
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
