import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function TrustSection() {
  return (
    <section
      id="trust"
      className="scroll-mt-36 py-16 sm:scroll-mt-40 sm:py-20"
      aria-label="Trust and safety"
    >
      <Container>
        <Reveal>
          <div className="rounded-lg border border-border-soft bg-surface-elevated p-8 shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Trust, without the hospital vibe.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
              We believe proof should be readable, not loud. On-pack directions,
              honest finish notes, and clear guidance for acne-prone routines
              matter more than jargon. Final testing documentation and claims
              will be published to match regulatory requirements at launch.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              <li className="rounded-md bg-surface-mist/80 px-4 py-3 text-sm font-medium text-ink">
                Transparent labeling roadmap
              </li>
              <li className="rounded-md bg-surface-mist/80 px-4 py-3 text-sm font-medium text-ink">
                Sensitive-skin conscious formulation philosophy
              </li>
              <li className="rounded-md bg-surface-mist/80 px-4 py-3 text-sm font-medium text-ink">
                Customer care that speaks human
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
