import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function ProblemSection() {
  return (
    <section
      id="why"
      className="scroll-mt-24 py-16 sm:py-24"
      aria-labelledby="why-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2
              id="why-heading"
              className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Sunscreen shouldn&apos;t feel like a punishment.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                Most SPF is either thick and cast-heavy, or so &quot;matte&quot;
                it leaves skin feeling tight. In Indian summers, the real enemy
                is texture: sweat, humidity, and that greasy film that makes you
                want to skip reapplication.
              </p>
              <p>
                <strong className="font-semibold text-ink">
                  On &amp; Off exists for the in-between:
                </strong>{" "}
                premium skin feel, clear benefits, and a finish you&apos;d
                happily wear under makeup, or on bare skin for the group
                photo.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
