import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const bullets = [
  {
    title: "Humidity-aware wear",
    copy: "Less heavy film, more breathable comfort when the air feels thick.",
  },
  {
    title: "Heat + sweat realism",
    copy: "Built for reapplication culture: quick, easy, not a makeup disaster.",
  },
  {
    title: "Tanning + glare context",
    copy: "Daily protection messaging that respects Indian sun behavior, without fear tactics.",
  },
];

export function IndiaWeatherSection() {
  return (
    <section
      id="india"
      className="scroll-mt-36 bg-cta py-16 text-surface-elevated sm:scroll-mt-40 sm:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Made for Indian summers and the life that happens inside them.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sky-soft/95">
              From college runs to creator shoot days, your SPF should survive
              the weather in your DMs and the weather outside. On &amp; Off is
              tuned for the texture complaints we hear most: grease, stickiness,
              and that white-cast anxiety.
            </p>
          </Reveal>
          <div className="space-y-4">
            {bullets.map((b, i) => (
              <Reveal key={b.title} delay={0.06 * i}>
                <div className="rounded-lg border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="font-display text-lg font-semibold">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sky-soft/90">
                    {b.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
