"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Shelfie-style tube illustration; no external image required. */
export function ProductTubeVisual({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      className={className}
      aria-hidden
    >
      <motion.div
        className="relative mx-auto aspect-[3/5] w-[min(100%,220px)] sm:w-[260px]"
        animate={
          reduce
            ? undefined
            : { y: [0, -6, 0], rotate: [0, 0.6, 0] }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-surface-elevated via-wash-blush to-sky-soft/50 shadow-soft ring-1 ring-pop-pink/20"
          style={{
            boxShadow:
              "0 24px 80px -32px rgb(236 72 153 / 0.35), inset 0 1px 0 rgb(255 255 255 / 0.95)",
          }}
        />
        <div className="absolute inset-x-[12%] top-[8%] h-[18%] rounded-t-2xl bg-gradient-to-r from-pop-pink/30 via-sky/35 to-sun-soft/40" />
        <div className="absolute inset-x-[10%] bottom-[14%] top-[28%] rounded-2xl bg-gradient-to-b from-white/95 via-wash-mint/50 to-peach/20" />
        <div className="absolute inset-x-[18%] top-[38%] flex flex-col gap-2">
          <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.35em] text-ink-muted">
            On &amp; Off
          </span>
          <span className="font-display text-lg font-semibold leading-tight text-ink">
            Hydrating
            <br />
            SPF
          </span>
          <span className="text-xs font-medium text-ink-subtle">
            Daily · Lightweight · No white cast*
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[12%] rounded-b-[2rem] bg-gradient-to-r from-pop-rose/20 via-brand/20 to-sun/25" />
        <div className="pointer-events-none absolute -right-4 top-1/4 h-24 w-24 rounded-full bg-pop-pink/40 blur-2xl" />
        <div className="pointer-events-none absolute -left-6 bottom-1/4 h-28 w-28 rounded-full bg-sky/45 blur-3xl" />
      </motion.div>
      <p className="mt-3 text-center text-[10px] leading-snug text-ink-subtle">
        *Finish varies by skin tone. Designed for a sheer, skin-like look.
      </p>
    </div>
  );
}
