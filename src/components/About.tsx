import { Eyebrow } from "@/components/Eyebrow";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 sm:px-8 md:grid-cols-2 md:gap-20">
        <Reveal>
          <PlaceholderImage
            alt="Portrait of Jelena Boydens"
            label="[ portrait photo ]"
            aspect="aspect-[4/5]"
            className="max-w-md"
          />
        </Reveal>

        <Reveal delay={100}>
          <Eyebrow>Who I am</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
            An art historian by your side, not a salesperson
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            I&rsquo;m Jelena Boydens, an art historian (Ghent University). Many people don&rsquo;t
            dare to buy art: too much choice, unclear prices, the fear of choosing &lsquo;wrong&rsquo;.
            I take that away. With a trained eye and knowledge of the market, I guide you calmly
            and clearly — from the first conversation to the moment the work hangs on your wall.
            Independent, and always transparent about how I work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
