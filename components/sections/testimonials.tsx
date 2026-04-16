"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

const quotes = [
  {
    quote:
      "Finally something I can reapply without feeling like a glazed donut, even in Mumbai humidity.",
    name: "Aisha, 24",
    meta: "Combination skin",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&h=240&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a woman in professional attire, natural light",
  },
  {
    quote:
      "Looks expensive on my shelf. Feels even better when I blend it in.",
    name: "Meera, 21",
    meta: "Acne-prone",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=240&h=240&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a young woman outdoors, candid smile",
  },
  {
    quote:
      "The brief was simple: SPF I won't skip. This is the first one that feels designed for that.",
    name: "Rhea, 27",
    meta: "Creator / oily skin",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=240&h=240&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a man in a casual shirt, warm tones",
  },
] as const;

function TestimonialCard({
  quote,
  name,
  meta,
  image,
  imageAlt,
}: {
  quote: string;
  name: string;
  meta: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <blockquote className="flex h-full w-[min(100vw-2rem,320px)] shrink-0 gap-4 rounded-lg border border-border-soft bg-surface-elevated p-5 shadow-sm sm:w-[340px] sm:p-6">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand/20 sm:h-16 sm:w-16">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm leading-relaxed text-ink">&ldquo;{quote}&rdquo;</p>
        <footer className="mt-4 text-xs font-semibold text-ink-muted">
          {name}
          <span className="mt-1 block font-normal text-ink-subtle">{meta}</span>
        </footer>
      </div>
    </blockquote>
  );
}

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const loop = [...quotes, ...quotes, ...quotes];

  return (
    <section
      id="reviews"
      className="scroll-mt-20 border-t border-border-soft bg-surface-mist/30 py-16 sm:py-24"
      aria-labelledby="reviews-heading"
    >
      <Container>
        <Reveal>
          <h2
            id="reviews-heading"
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Customer love, straight from the feed.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-ink-muted sm:text-base">
            Sample voices for layout. Swap for verified UGC and real customer
            photos at launch.
          </p>
        </Reveal>
      </Container>

      <div className="relative mt-12 w-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-mist/30 to-transparent sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-mist/30 to-transparent sm:w-20"
          aria-hidden
        />

        {reduceMotion ? (
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {quotes.map((q) => (
                <TestimonialCard key={q.name} {...q} />
              ))}
            </div>
          </Container>
        ) : (
          <motion.div
            className="flex w-max gap-5 px-4 sm:gap-6 sm:px-6"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{
              duration: 42,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {loop.map((q, i) => (
              <TestimonialCard key={`${q.name}-${i}`} {...q} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
