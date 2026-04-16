import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const faqs = [
  {
    q: "Will this leave a white cast?",
    a: "We design for a sheer, skin-like finish, but cast can vary by skin tone and amount applied. Final on-pack guidance will include application tips for even blending.",
  },
  {
    q: "Is it okay for acne-prone skin?",
    a: "The line is developed with oily and acne-prone comfort in mind, but everyone’s skin is unique. Patch test when introducing new SPF, and pair with a gentle routine.",
  },
  {
    q: "How often should I reapply?",
    a: "Think two finger-lengths for face and neck, then reapply every 2 hours with sun exposure, or sooner with sweat and towels.",
  },
  {
    q: "Do you ship across India?",
    a: "Fulfillment details will be confirmed at launch. The site is built to plug into your logistics partner with clear delivery expectations.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-border-soft bg-surface-elevated py-16 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <Container>
        <Reveal>
          <h2
            id="faq-heading"
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            FAQ: quick, honest answers.
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-border-soft rounded-lg border border-border-soft bg-surface">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={0.04 * i}>
              <details className="group px-5 py-4 sm:px-6 sm:py-5">
                <summary className="cursor-pointer list-none font-medium text-ink marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span
                      className="text-brand-deep transition-transform group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
