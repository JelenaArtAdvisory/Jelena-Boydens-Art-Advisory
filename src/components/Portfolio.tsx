import { Eyebrow } from "@/components/Eyebrow";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const PROJECTS = [1, 2, 3, 4];

export function Portfolio() {
  return (
    <Section id="portfolio">
      <Reveal>
        <Eyebrow>Portfolio</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl">
          A selection of the work
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((n, i) => (
          <Reveal key={n} delay={i * 80}>
            <div className="group overflow-hidden rounded-3xl border border-transparent transition-all duration-300 ease-apple hover:-translate-y-1 hover:border-black/15">
              <PlaceholderImage
                alt={`Portfolio project ${n}`}
                label={`[ project ${n} ]`}
                aspect="aspect-[4/3]"
              />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={340} className="mx-auto mt-20 max-w-2xl text-center">
        <p className="font-heading text-xl italic leading-relaxed text-black sm:text-2xl">
          &ldquo;Jelena helped us choose a painting that makes us happy every single day — and now
          we understand why it works so well.&rdquo;
        </p>
        <p className="mt-5 text-sm uppercase tracking-widest text-muted">
          [ client name, with permission ]
        </p>
      </Reveal>
    </Section>
  );
}
