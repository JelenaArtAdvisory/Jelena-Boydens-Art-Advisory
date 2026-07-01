# Jelena Boydens · Art Advisory

Marketing website for **Jelena Boydens Art Advisory** — art-historical advice
for private interiors. Built with Next.js (App Router), TypeScript and Tailwind
CSS, designed to deploy on Vercel. English-language, single landing page.

---

## Getting started

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the local dev server
```

Then open **http://localhost:3000** in your browser. The page updates live as
you edit files.

Other commands:

```bash
npm run build    # production build (also type-checks the whole site)
npm run start    # serve the production build locally
npm run lint     # run ESLint
```

---

## Saving changes to GitHub

The project is connected to
[github.com/JelenaArtAdvisory/Jelena-Boydens-Art-Advisory](https://github.com/JelenaArtAdvisory/Jelena-Boydens-Art-Advisory).
After making edits:

```bash
git add -A
git commit -m "describe what you changed"
git push
```

---

## Where do I edit things?

Everything visitor-facing lives under `src/`. You rarely need to touch anything else.

| I want to change…                | Edit this file                                             |
| -------------------------------- | --------------------------------------------------------- |
| **Colors**                       | `tailwind.config.ts` → `theme.extend.colors`              |
| **Fonts**                        | `src/lib/fonts.ts` (see "Swapping in StudioSimms" below)  |
| **Page order / which sections**  | `src/app/page.tsx`                                         |
| **Header links & wordmark**      | `src/components/Header.tsx`                                |
| **Hero text**                    | `src/components/Hero.tsx`                                  |
| **About text + portrait**        | `src/components/About.tsx`                                 |
| **The 3 service cards**          | `src/components/Services.tsx`                              |
| **The 3 approach steps**         | `src/components/Approach.tsx`                              |
| **Before/after slider**          | `src/components/BeforeAfterSlider.tsx`                     |
| **Portfolio grid + testimonial** | `src/components/Portfolio.tsx`                             |
| **"Coming soon" email teaser**   | `src/components/PlatformTeaser.tsx`                        |
| **Transparency / Instagram**     | `src/components/Transparency.tsx`, `InstagramSection.tsx` |
| **Contact details + form**       | `src/components/Contact.tsx`                               |
| **Footer + VAT number**          | `src/components/Footer.tsx`                                |
| **Page title / SEO / social**    | `src/app/layout.tsx`                                       |
| **Privacy policy page**          | `src/app/privacy/page.tsx`                                 |

### Colors (design tokens)

Defined once in `tailwind.config.ts` and used everywhere as Tailwind classes
(e.g. `bg-offwhite`, `text-muted`):

| Token           | Hex       | Use                                       |
| --------------- | --------- | ----------------------------------------- |
| `white`         | `#FFFFFF` | main background                           |
| `offwhite`      | `#FAF8F4` | subtly alternating sections               |
| `cream`         | `#F4EADB` | warm accent sections (sparingly)          |
| `black`         | `#111111` | primary — text, buttons, lines            |
| `muted`         | `#6E6862` | secondary text                            |
| `milkshake`     | `#EBC4C1` | pink — tiny details only                  |
| `milkshakeDeep` | `#D89B96` | deeper pink — micro-accents (hover/focus) |

---

## Adding real images

Images use a reusable `PlaceholderImage` component
(`src/components/PlaceholderImage.tsx`). Each slot shows a calm grey placeholder
until you give it a real photo — no code rewrite needed.

1. Drop your image into the `public/images/` folder
   (create it if it doesn't exist), e.g. `public/images/hero.jpg`.
2. In the relevant component, add a `src` prop to the `PlaceholderImage`, e.g.:

   ```tsx
   <PlaceholderImage
     src="/images/hero.jpg"   // ← add this line
     alt="A collected, art-filled interior in soft daylight"
     label="[ hero photograph ]"
   />
   ```

That's it — it automatically switches to an optimized `next/image`.

For the **before/after slider**, the two placeholder blocks live inside
`src/components/BeforeAfterSlider.tsx` (marked with comments) — replace them
with your real "empty wall" and "wall with artwork" montage images.

---

## Swapping in the StudioSimms font

Headings currently use **Fraunces** (a free Google Font) as a stand-in for the
paid **StudioSimms** typeface, so the site looks right today. To switch:

1. Buy/download the StudioSimms webfont files (ideally `.woff2`).
2. Put them in the **`/fonts`** folder (see `fonts/README.md`).
3. Open **`src/lib/fonts.ts`**, comment out the `Fraunces` block, and uncomment
   the `localFont` block (adjusting the file names to match yours).
4. Restart `npm run dev`. Every heading updates automatically — nothing else to
   change.

---

## Deploying to Vercel (optional, recommended)

1. Create a free account at [vercel.com](https://vercel.com) and sign in with
   GitHub.
2. Click **Add New → Project**, choose the
   `Jelena-Boydens-Art-Advisory` repo, and click **Deploy**.
3. Every time you `git push`, Vercel rebuilds and updates the live site
   automatically.

---

## ⚠️ What still needs to be filled in

### Images / photography
- [ ] **Hero photograph** — `Hero.tsx` (`[ hero photograph ]`)
- [ ] **Portrait photo** of Jelena — `About.tsx` (`[ portrait photo ]`)
- [ ] **Before/after montage** images (empty wall + wall with artwork) —
      `BeforeAfterSlider.tsx`
- [ ] **4 portfolio projects** — `Portfolio.tsx` (`[ project 1 ]` … `[ project 4 ]`)
- [ ] **Open Graph share image** (1200×630) — see TODO in `layout.tsx`

### Text / details
- [ ] **Testimonial client name** — `Portfolio.tsx` (`[ client name, with permission ]`)
- [ ] **Contact email** — `Contact.tsx` (`CONTACT_EMAIL`, currently `[ your email ]`)
- [ ] **VAT number** — `Footer.tsx` (`VAT BE [ number ]`)
- [ ] **Privacy policy text** — `src/app/privacy/page.tsx`
- [ ] **Live domain** — update `SITE_URL` in `layout.tsx` once you have one

### Fonts
- [ ] **StudioSimms font files** — see "Swapping in StudioSimms" above

### Backend wiring (marked `TODO` in code, no backend yet)
- [ ] **"Coming soon" email sign-up** — `PlatformTeaser.tsx` (connect to a
      mailing list, e.g. Mailchimp/ConvertKit/Resend)
- [ ] **Contact form** — `Contact.tsx` (currently opens the visitor's email app
      via `mailto:`; swap for Formspree or an API route to receive submissions
      on the site)

---

## Project structure

```
src/
  app/
    layout.tsx        # <html>, fonts, SEO/metadata
    page.tsx          # assembles the landing page in order
    globals.css       # base styles, focus rings, scroll-reveal, reduced-motion
    privacy/page.tsx  # placeholder privacy policy
  components/          # one file per section + reusable UI (Button, Section…)
  hooks/useInView.ts  # scroll-reveal trigger
  lib/
    fonts.ts          # Poppins (body) + Fraunces/StudioSimms (headings)
    utils.ts          # small className helper
fonts/                # StudioSimms files go here (see fonts/README.md)
public/               # static assets (put real images under public/images/)
tailwind.config.ts    # colors, fonts, radii, animations as design tokens
```

Built as **Phase 1** (marketing site). No payments, database, uploads or
accounts yet — structured so the future artist platform (Phase 2) can build on
top of it.
