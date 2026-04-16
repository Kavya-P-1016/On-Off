import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const highlights = [
  {
    name: "Hydration matrix",
    note: "Humectants + barrier-friendly moisturization, comfort that lasts through the day.",
  },
  {
    name: "Modern UV filters",
    note: "Thoughtful filter strategy for daily wear. Final INCI on-pack at launch.",
  },
  {
    name: "Finish-first formulating",
    note: "Texture agents chosen for spreadability and a skin-like dry-down.",
  },
];

export function IngredientsSection() {
  return (
    <section
      id="formula"
      className="scroll-mt-20 bg-gradient-to-b from-wash-mint/60 via-surface to-wash-blush/30 py-16 sm:py-24"
      aria-labelledby="formula-heading"
    >
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-transparent bg-gradient-to-r from-brand-deep to-pop-pink bg-clip-text">
              Formula philosophy
            </p>
            <h2
              id="formula-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Clear science. Zero intimidation.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              We&apos;re not here to bluff with a 40-ingredient flex. On &amp;
              Off is built around understandable benefits: hydration you can
              feel, protection you&apos;ll actually reapply, and a finish that
              respects how you live online and IRL.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-sm text-sm text-ink-subtle lg:text-right">
              Final claims, SPF label, and PA rating will match regulatory
              testing and on-pack copy.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.name} delay={0.05 * i}>
              <article className="relative overflow-hidden rounded-lg border border-lilac/20 bg-surface-elevated/95 p-6 shadow-sm ring-1 ring-sun/15">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/20 blur-2xl" />
                <h3 className="font-display text-lg font-semibold text-ink">
                  {h.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {h.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
