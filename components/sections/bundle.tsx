import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import type { SiteConfig } from "@/lib/site-config";

export function BundleSection({ config }: { config: SiteConfig }) {
  return (
    <section
      id="routine"
      className="scroll-mt-36 border-y border-lilac/20 bg-gradient-to-br from-wash-lilac/40 via-surface-elevated to-sun-soft/30 py-16 sm:scroll-mt-40 sm:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Build your summer kit.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted">
              Start with daily SPF. Add a gentle cleanser and a barrier-friendly
              moisturizer when you expand the line. The site architecture is
              built to grow with you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-pill border border-pop-pink/25 bg-wash-blush/80 px-4 py-2 text-xs font-semibold text-ink-muted">
                SPF (hero)
              </span>
              <span className="rounded-pill border border-pop-pink/25 bg-wash-blush/80 px-4 py-2 text-xs font-semibold text-ink-muted">
                Cleanser (next)
              </span>
              <span className="rounded-pill border border-pop-pink/25 bg-wash-blush/80 px-4 py-2 text-xs font-semibold text-ink-muted">
                Lip care (later)
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-lg bg-gradient-to-br from-wash-mint/80 via-white to-peach/25 p-8 shadow-soft ring-1 ring-sky/25">
              <p className="text-sm font-medium text-ink">
                Routine card: pair SPF with minimal steps for oily skin.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink-muted">
                <li>AM: cleanse → hydrate → On &amp; Off SPF</li>
                <li>PM: double cleanse if makeup → barrier moisturizer</li>
                <li>Weekly: treat spots, not your whole personality</li>
              </ul>
              <ButtonLink href={config.primaryCta.href} className="mt-8">
                {config.mode === "shop"
                  ? "Shop the routine"
                  : "Get launch access"}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
