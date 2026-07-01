import { Poppins, Fraunces } from "next/font/google";
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
 * TODO(StudioSimms): headings should use the licensed StudioSimms typeface.
 * Until those font files are purchased, Fraunces (a free, similarly
 * characterful editorial serif) stands in so the site builds and looks
 * right today. See /fonts/README.md for the exact swap-in steps.
 *
 * To swap in StudioSimms once you have the files:
 *   1. Drop the .woff2 files into /fonts
 *   2. Delete/comment the `Fraunces` block below
 *   3. Uncomment the `localFont` block below and point it at your files
 */
export const heading = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
