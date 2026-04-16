import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import type { SiteConfig } from "@/lib/site-config";
import { homeSection } from "@/lib/routes";

export function FinalCtaSection({ config }: { config: SiteConfig }) {
  return (
    <section
      id="cta"
      className="scroll-mt-20 bg-gradient-to-b from-surface-mist/60 to-surface py-16 sm:py-24"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2
              id="final-cta-heading"
              className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              {config.mode === "shop"
                ? "Ready for skin that feels like skin?"
                : "Get launch access before the feed finds out."}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              {config.mode === "shop"
                ? "Add the hero SPF to your bag: lightweight hydration, daily protection, zero sticky drama."
                : "Join the list for early access, launch pricing, and the kind of updates you’d actually open."}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-4">
            <ButtonLink href={config.primaryCta.href}>
              {config.primaryCta.label}
            </ButtonLink>
            {config.mode === "waitlist" ? (
              <div className="w-full max-w-md pt-4">
                <WaitlistForm />
              </div>
            ) : (
              <ButtonLink href={homeSection("product")} variant="secondary">
                View product details
              </ButtonLink>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
