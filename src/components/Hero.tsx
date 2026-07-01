import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pb-8 pt-36 sm:pt-44">
      {/* faint pink glow — the one allowed "jewel" moment in the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-milkshake/25 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <Eyebrow>Art-historical advice · private interiors</Eyebrow>
        </Reveal>

        <Reveal delay={80} className="relative mt-7">
          <PlaceholderImage
            src="/images/hero-interior.jpg"
            alt="A calm, minimalist living room in warm neutral tones with a large abstract painting on the wall, opening onto greenery through a sliding glass wall"
            label="[ hero photograph ]"
            aspect="aspect-[4/5] sm:aspect-[16/9]"
            rounded="rounded-4xl"
            priority
          />

          {/* dark scrim at the bottom so the white heading stays legible over the photo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 rounded-b-4xl bg-gradient-to-t from-black/70 via-black/30 to-transparent"
          />

          {/* signature device: large heading sitting over the photograph */}
          <h1 className="absolute inset-x-0 bottom-0 z-10 max-w-4xl px-6 pb-7 font-heading text-[2.3rem] font-semibold leading-[1.08] tracking-tight text-white sm:px-8 sm:pb-9 sm:text-6xl md:text-7xl">
            Hand-picked art, chosen with insight for your space.
          </h1>
        </Reveal>

        <Reveal delay={260} className="mt-9 max-w-xl">
          <p className="text-lg leading-relaxed text-muted">
            I help you find a work that fits — your interior, your taste, your budget — and tell
            you the story behind it. Not decoration, but a considered choice that keeps
            captivating.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button href="#contact">Book an introduction</Button>
            <Button href="#approach" variant="text">
              How I work →
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
