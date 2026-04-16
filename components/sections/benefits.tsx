import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const cards = [
  {
    title: "Feels like skincare",
    body: "A hydrating, skin-first base so daily protection doesn’t feel like a chore.",
  },
  {
    title: "No sticky drama",
    body: "Designed to melt in fast with a fresh, touchable finish, not a tacky film.",
  },
  {
    title: "Made for real weather",
    body: "Heat, sweat, and humidity are the brief. Comfort is the non-negotiable.",
  },
  {
    title: "Shelfie energy",
    body: "Modern packaging with editorial presence, built for feeds, not pharmacy aisles.",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="scroll-mt-36 bg-gradient-to-b from-wash-lilac/50 via-surface-elevated to-wash-mint/40 py-16 sm:scroll-mt-40 sm:py-24"
      aria-labelledby="benefits-heading"
    >
      <Container>
        <Reveal>
          <h2
            id="benefits-heading"
            className="font-display max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Looks good. Feels better. Works daily.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={0.04 * i}>
              <article className="group h-full rounded-lg border border-sky/25 bg-surface-elevated/95 p-6 shadow-sm ring-1 ring-pop-pink/10 transition-shadow duration-300 hover:border-pop-pink/25 hover:shadow-soft">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
