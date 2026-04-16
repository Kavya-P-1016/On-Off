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
      className="border-b border-pop-pink/10 bg-gradient-to-r from-sun-soft/90 via-peach/40 to-lilac-soft/70 py-4"
      aria-label="Brand credibility"
    >
      <Container>
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-xs font-semibold text-ink sm:text-sm">
            {items.map((t, i) => (
              <li key={t} className="flex items-center gap-2">
                <span
                  className={
                    i % 4 === 0
                      ? "h-2 w-2 shrink-0 rounded-full bg-pop-pink shadow-sm"
                      : i % 4 === 1
                        ? "h-2 w-2 shrink-0 rounded-full bg-sky shadow-sm"
                        : i % 4 === 2
                          ? "h-2 w-2 shrink-0 rounded-full bg-sun shadow-sm"
                          : "h-2 w-2 shrink-0 rounded-full bg-brand shadow-sm"
                  }
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
