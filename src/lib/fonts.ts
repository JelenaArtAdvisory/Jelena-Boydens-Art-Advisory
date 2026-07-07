import { Poppins, Playfair_Display, Jost } from "next/font/google";
// import localFont from "next/font/local";

/**
 * Body & UI font — Poppins, per the design system.
 */
export const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

/**
 * Wordmark font — Jost, a free geometric sans-serif used as a stand-in for the
 * paid "Coco Gothic" (Canva). Currently only used for the "Jelena Boydens"
 * wordmark in the hero. To swap in the real Coco Gothic web font later,
 * replace this with a `localFont` block pointing at the .woff2 files.
 */
export const wordmark = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-wordmark",
  display: "swap",
});

/**
 * Headings — Playfair Display (chosen by the client): a high-contrast,
 * editorial serif with a chic gallery/fashion feel.
 *
 * NOTE: The design system originally specified the paid StudioSimms font.
 * If you ever want to switch to StudioSimms instead:
 *   1. Drop the .woff2 files into /fonts (see /fonts/README.md)
 *   2. Delete/comment the `Playfair_Display` block below
 *   3. Uncomment the `localFont` block below and point it at your files
 */
export const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

// export const heading = localFont({
//   src: [
//     {
//       path: "../../fonts/StudioSimms-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../fonts/StudioSimms-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../fonts/StudioSimms-SemiBold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//   ],
//   variable: "--font-heading",
//   display: "swap",
// });
