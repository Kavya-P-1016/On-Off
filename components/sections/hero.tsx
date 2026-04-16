import { ProductTubeVisual } from "@/components/product/product-tube-visual";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { SiteConfig } from "@/lib/site-config";

export function HeroSection({ config }: { config: SiteConfig }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-pop-pink/15 bg-gradient-to-br from-sky/30 via-wash-blush to-sun-soft/40 pb-16 pt-6 sm:pb-24 sm:pt-10"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-pop-pink/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-brand-glow/35 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-sun/30 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-transparent bg-gradient-to-r from-brand-deep via-pop-rose to-pop-coral bg-clip-text">
              New-gen daily SPF
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              id="hero-heading"
              className="font-display mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]"
            >
              Hydration that doesn&apos;t sit heavy.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Daily SPF that feels like skin, not sunscreen. Lightweight finish
              for oily, combination, and acne-prone skin, tuned for Indian
              heat and humidity.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={config.primaryCta.href}>
                {config.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={config.secondaryCta.href}
                variant="secondary"
              >
                {config.secondaryCta.label}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <li className="rounded-pill bg-white/70 px-3 py-1 font-medium text-brand-deep shadow-sm ring-1 ring-sky/30 backdrop-blur-sm">
                Non-greasy texture
              </li>
              <li className="rounded-pill bg-white/70 px-3 py-1 text-ink-muted ring-1 ring-pop-pink/20 backdrop-blur-sm">
                Sheer, skin-like finish
              </li>
              <li className="rounded-pill bg-white/70 px-3 py-1 text-ink-muted ring-1 ring-sun/40 backdrop-blur-sm">
                Reel-ready packaging
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="relative flex justify-center lg:justify-end">
          <ProductTubeVisual />
        </Reveal>
      </Container>
    </section>
  );
}
