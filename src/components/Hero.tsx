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

        <div className="relative mt-7">
          <Reveal delay={80}>
            <PlaceholderImage
              alt="A collected, art-filled interior in soft daylight"
              label="[ hero photograph ]"
              aspect="aspect-[4/5] sm:aspect-[16/9]"
              rounded="rounded-4xl"
              priority
            />
          </Reveal>

          {/* subtle scrim so a heading placed over a real photo stays legible */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 rounded-b-4xl bg-gradient-to-t from-black/10 to-transparent"
          />

          {/* signature device: heading overlapping the photograph */}
          <Reveal
            delay={180}
            className="relative z-10 -mt-14 max-w-3xl px-1 sm:-mt-20 md:-mt-28"
          >
            <h1 className="font-heading text-[2.6rem] font-medium leading-[1.05] tracking-tight text-black sm:text-6xl md:text-7xl">
              Real art, chosen with insight for your space.
            </h1>
          </Reveal>
        </div>

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
