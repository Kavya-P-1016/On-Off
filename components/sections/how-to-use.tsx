import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  {
    n: "01",
    title: "Cleanse + hydrate lightly",
    body: "Start with a gentle cleanse. If your skin drinks water, add a thin mist or serum.",
  },
  {
    n: "02",
    title: "Apply generously",
    body: "Use enough product for full-face coverage. Don’t tap-dab a pea and pray.",
  },
  {
    n: "03",
    title: "Reapply like it’s normal",
    body: "Keep it in your bag. Two finger-lengths of discipline beats one perfect morning.",
  },
];

export function HowToUseSection() {
  return (
    <section
      id="how"
      className="scroll-mt-36 bg-gradient-to-b from-peach/20 via-surface-elevated to-wash-mint/35 py-16 sm:scroll-mt-40 sm:py-24"
      aria-labelledby="how-heading"
    >
      <Container>
        <Reveal>
          <h2
            id="how-heading"
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            How to use, no 12-step fantasy.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.06 * i}>
              <li className="relative rounded-lg border border-sky/20 bg-surface-elevated/95 p-6 shadow-sm ring-1 ring-sun/15">
                <span className="font-display text-xs font-bold text-brand-deep">
                  {s.n}
                </span>
                <h3 className="font-display mt-3 text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
