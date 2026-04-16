import { AddToBagButton } from "@/components/forms/add-to-bag-button";
import { ProductTubeVisual } from "@/components/product/product-tube-visual";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import type { SiteConfig } from "@/lib/site-config";
import { homeSection } from "@/lib/routes";

export function ProductSpotlight({ config }: { config: SiteConfig }) {
  return (
    <section
      id="product"
      className="scroll-mt-20 border-y border-pop-pink/10 bg-gradient-to-br from-wash-mint/80 via-surface-elevated to-peach/25 py-16 sm:py-24"
      aria-labelledby="product-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <ProductTubeVisual className="lg:justify-self-start" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-transparent bg-gradient-to-r from-brand-deep to-pop-rose bg-clip-text">
                Hero product
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="product-heading"
                className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {config.productName}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-lg text-ink-muted">
                {config.productTagline}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-3 text-sm text-ink-muted">
                {[
                  "Hydrating base: comfort-first, not chalky-dry",
                  "Weightless wear for oily / combination / acne-prone skin",
                  "Designed for daily reapplication in heat + humidity",
                  "Shelfie-worthy packaging you'll actually want on your vanity",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span
                      className="mt-1.5 h-1 w-4 shrink-0 rounded-full bg-gradient-to-r from-brand to-sky"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.14} className="mt-10 space-y-4">
              {config.mode === "shop" ? (
                <>
                  {config.productPriceDisplay ? (
                    <p className="font-display text-2xl font-semibold text-ink">
                      {config.productPriceDisplay}
                    </p>
                  ) : null}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <AddToBagButton />
                    <ButtonLink href={homeSection("formula")} variant="secondary">
                      {config.secondaryCta.label}
                    </ButtonLink>
                  </div>
                </>
              ) : (
                <>
                  <ButtonLink href={config.primaryCta.href}>
                    {config.primaryCta.label}
                  </ButtonLink>
                  <p className="text-xs text-ink-subtle">
                    No spam: launch note, early access, and one surprise perk.
                  </p>
                </>
              )}
            </Reveal>
            {config.mode === "waitlist" ? (
              <Reveal delay={0.18} className="mt-8 max-w-md">
                <WaitlistForm />
              </Reveal>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
