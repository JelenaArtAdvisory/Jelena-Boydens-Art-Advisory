# StudioSimms font files go here

`StudioSimms` is a paid, licensed typeface used for all headings (H1–H3) in
the design system. Until the licensed files are purchased and dropped in
here, the site uses **Fraunces** (a free Google Font with a similar
editorial-serif character) as the heading font — see `src/lib/fonts.ts`.

## How to swap StudioSimms in

1. Buy/download the licensed StudioSimms webfont files (ideally `.woff2`).
2. Place them in this folder, e.g.:
   - `StudioSimms-Regular.woff2`
   - `StudioSimms-Medium.woff2`
   - `StudioSimms-SemiBold.woff2`
3. Open `src/lib/fonts.ts` and:
   - Comment out (or delete) the `Fraunces` block.
   - Uncomment the `localFont` block, and adjust the file names/weights to
     match whatever files you actually have.
4. Restart `npm run dev`. Every heading on the site will now render in
   StudioSimms automatically — no other file needs to change, because all
   headings reference the shared `--font-heading` CSS variable.
