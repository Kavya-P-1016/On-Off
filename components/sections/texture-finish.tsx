import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function TextureFinishSection() {
  return (
    <section
      id="texture"
      className="scroll-mt-36 border-y border-sky/20 bg-gradient-to-b from-surface-elevated via-wash-sky/35 to-peach/15 py-16 sm:scroll-mt-40 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              The finish is the product.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
              We obsessed over the moment sunscreen stops being &quot;on your
              skin&quot; and starts feeling like your skin: smooth, fresh, and
              ready for concealer, blush, or nothing at all.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-pop-pink/10 bg-surface-elevated/90 p-5 shadow-sm ring-1 ring-sky/15">
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-deep">
                  Texture
                </dt>
                <dd className="mt-2 text-sm font-medium text-ink">
                  Bouncy-lotion glide → fast absorption
                </dd>
              </div>
              <div className="rounded-lg border border-pop-pink/10 bg-surface-elevated/90 p-5 shadow-sm ring-1 ring-sky/15">
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-deep">
                  Finish
                </dt>
                <dd className="mt-2 text-sm font-medium text-ink">
                  Natural radiance, not disco-ball glitter
                </dd>
              </div>
              <div className="rounded-lg border border-pop-pink/10 bg-surface-elevated/90 p-5 shadow-sm ring-1 ring-sky/15">
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-deep">
                  Wear test
                </dt>
                <dd className="mt-2 text-sm font-medium text-ink">
                  Commute, college, creator days, AC offices
                </dd>
              </div>
              <div className="rounded-lg border border-pop-pink/10 bg-surface-elevated/90 p-5 shadow-sm ring-1 ring-sky/15">
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-deep">
                  Skin types
                </dt>
                <dd className="mt-2 text-sm font-medium text-ink">
                  Oily · combo · acne-prone friendly philosophy
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-br from-surface-mist via-white to-sky-soft/40 shadow-soft ring-1 ring-border-soft">
              <div className="absolute inset-0 opacity-90 mix-blend-multiply">
                <div className="absolute left-[18%] top-[22%] h-[54%] w-[64%] rotate-[-8deg] rounded-[2.5rem] bg-gradient-to-b from-white/95 to-surface-mist shadow-lg ring-1 ring-border-soft" />
              </div>
              <div className="absolute bottom-10 left-10 right-10 rounded-md bg-surface-elevated/90 p-4 text-sm text-ink-muted shadow-md backdrop-blur-sm">
                <p className="font-medium text-ink">
                  Macro texture story: replace with lotion smear photography.
                </p>
                <p className="mt-1 text-xs text-ink-subtle">
                  Art-directed smear + dewy skin crop recommended for launch.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
