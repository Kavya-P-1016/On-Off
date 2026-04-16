import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const items = [
  "Dermatologist-guided development",
  "Humidity-tested wear",
  "No sticky-film finish",
  "Made for everyday reapplication",
];

export function CredibilityStrip() {
  return (
    <section
      className="border-b border-border-soft bg-surface-elevated py-4"
      aria-label="Brand credibility"
    >
      <Container>
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-xs font-medium text-ink-muted sm:text-sm">
            {items.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  aria-hidden
                />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
