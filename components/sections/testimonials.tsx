"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

/** Placeholder voices for layout. Names, regions, and portrait genders are aligned; swap for verified UGC at launch. */
const quotes = [
  {
    quote:
      "Finally something I can reapply without feeling glazed over, even when Mumbai turns into a steam room.",
    name: "Priya Nair, 24",
    meta: "India · combination skin",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a woman, professional headshot",
  },
  {
    quote:
      "I needed SPF that does not fight my moisturizer. This one sits quiet on my face.",
    name: "Marcus Brooks, 29",
    meta: "USA · sensitive / combo",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a man, neutral background",
  },
  {
    quote:
      "Shelfie cute, but the real win is I stopped skipping SPF before college.",
    name: "Ananya Iyer, 21",
    meta: "India · acne-prone",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a young woman smiling",
  },
  {
    quote:
      "Heat and subway sweat used to mean a shiny forehead by noon. Way more manageable now.",
    name: "Emily Carter, 27",
    meta: "USA · oily T-zone",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a woman outdoors",
  },
  {
    quote:
      "My dermatologist nagged me for years. This is the first tube I finished on purpose.",
    name: "Vikram Desai, 33",
    meta: "India · daily commuter SPF",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a man, close-up",
  },
  {
    quote:
      "Under makeup it does not pill the way my old sunscreen did. Huge for shoot days.",
    name: "Sarah Lin, 26",
    meta: "USA · creator / combination",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a woman, soft lighting",
  },
  {
    quote:
      "Humidity in Chennai broke every matte claim I tried. This one feels honest.",
    name: "Kavya Reddy, 23",
    meta: "India · very oily",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a young woman, studio light",
  },
  {
    quote:
      "Smells clean, not like a pool deck. Small thing, but it keeps me reaching for it.",
    name: "Tyler Dunn, 31",
    meta: "USA · post-shave friendly",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a man in a shirt",
  },
  {
    quote:
      "No chalky mask on my deeper tone when I blend it in properly. Finally feels considered.",
    name: "Ashley Rivera, 28",
    meta: "USA · deeper skin tone",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a woman, warm tones",
  },
  {
    quote:
      "Reapplication after lunch is not a full face redo anymore. That alone sold me.",
    name: "Rohan Kapoor, 25",
    meta: "India · office + gym",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a man, casual",
  },
  {
    quote:
      "I pack light for work trips. One reliable SPF beats three half-used bottles.",
    name: "James Whitaker, 35",
    meta: "USA · minimal routine",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a man smiling",
  },
  {
    quote:
      "Mom kept sending sunscreen links. This is the first one I did not argue about.",
    name: "Neha Joshi, 20",
    meta: "India · first real SPF habit",
    image:
      "https://images.unsplash.com/photo-1580489944761-6b691dcf8e4e?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a young woman smiling",
  },
  {
    quote:
      "Austin sun is no joke. I wanted protection without looking like I dipped in flour.",
    name: "Hannah Scott, 30",
    meta: "USA · fair / burns easily",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a woman with curly hair",
  },
  {
    quote:
      "Does not sting around my eyes when I sweat. Sounds basic, it is everything.",
    name: "Arjun Malhotra, 27",
    meta: "India · runs outdoors",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces&q=80",
    imageAlt: "Portrait of a man in business casual",
  },
] as const;

const MARQUEE_DURATION_SEC = 175;

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
      className="scroll-mt-20 border-t border-pop-pink/15 bg-gradient-to-b from-wash-lemon/70 via-surface-elevated to-lilac-soft/40 py-16 sm:py-24"
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
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              duration: MARQUEE_DURATION_SEC,
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
