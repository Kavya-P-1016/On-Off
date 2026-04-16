"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ROUTES } from "@/lib/routes";

const marquee = [
  "Shelfie-worthy",
  "Heat-tested",
  "Humidity-smart",
  "Skin-first",
  "Scroll-worthy",
  "Reapply-friendly",
];

export function BrandWorldSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="brand"
      className="scroll-mt-36 overflow-hidden bg-surface py-14 sm:scroll-mt-40 sm:py-20"
    >
      <Container>
        <Reveal>
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Premium skincare meets internet culture.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-ink-muted sm:text-base">
            On &amp; Off is founder-led, visually intentional, and built for the
            generation that reads packaging like a moodboard.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-xs text-ink-subtle sm:text-sm">
            <a
              href={ROUTES.blog}
              className="font-medium text-brand-deep underline-offset-2 hover:underline"
            >
              Read the Journal
            </a>{" "}
            for routines, SPF without scare tactics, and launch notes.
          </p>
        </Reveal>
      </Container>
      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
        <motion.div
          className="flex gap-10 whitespace-nowrap px-6 text-xs font-semibold uppercase tracking-[0.35em] text-ink-subtle sm:text-sm"
          animate={
            reduce
              ? undefined
              : { x: ["0%", "-50%"] }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...marquee, ...marquee].map((word, i) => (
            <span key={`${word}-${i}`} className="flex items-center gap-10">
              <span>{word}</span>
              <span className="h-1 w-1 rounded-full bg-brand" aria-hidden />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
