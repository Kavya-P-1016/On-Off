"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { getSiteConfig } from "@/lib/site-config";
import { isPromoSuppressed, suppressPromoForCooldown } from "@/lib/promo-storage";

const SHOW_DELAY_MS = 1600;

/**
 * First-visit style welcome offer (industry pattern: delay, dismiss persistence,
 * email gate, not on every reload, which tanks trust).
 */
export function WelcomeOfferPopup() {
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"form" | "thanks">("form");

  const config = getSiteConfig();

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const debug =
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("promo") === "1";

    if (!debug && isPromoSuppressed()) return;

    const t = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [mounted]);

  const close = useCallback((saveCooldown: boolean) => {
    setStep("form");
    setEmail("");
    setOpen(false);
    if (saveCooldown) suppressPromoForCooldown();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusables = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const list = [...focusables].filter((el) => !el.hasAttribute("disabled"));

    const onTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener("keydown", onTrap);
    return () => panel.removeEventListener("keydown", onTrap);
  }, [open, step]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStep("thanks");
    suppressPromoForCooldown();
  };

  if (!mounted || !open) return null;

  const headline =
    config.mode === "shop"
      ? "New here? Here’s a little welcome."
      : "You made it. Small gift inside.";

  const sub =
    config.mode === "shop"
      ? "Take 15% off your first order when you drop your email. One code per person, no spam."
      : "Join the list and we’ll send a launch-only perk (think first-access pricing). One-time send, unsubscribe anytime.";

  const cta =
    config.mode === "shop" ? "Email me the code" : "Unlock my launch perk";

  return createPortal(
    <div
      className="fixed inset-0 z-[110] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/50 backdrop-blur-[2px] transition-opacity"
        aria-label="Close offer"
        onClick={() => close(true)}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative z-10 flex max-h-[min(92dvh,640px)] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-border-soft bg-surface-elevated shadow-hover sm:rounded-2xl"
      >
        <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
          <button
            ref={closeBtnRef}
            type="button"
            className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface-mist hover:text-ink"
            aria-label="Close"
            onClick={() => close(true)}
          >
            <span aria-hidden className="text-xl leading-none">
              ×
            </span>
          </button>
        </div>

        <div className="overflow-y-auto overscroll-contain px-6 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-deep">
            On &amp; Off
          </p>
          <h2
            id={titleId}
            className="font-display mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            {headline}
          </h2>
          <p
            id={descId}
            className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base"
          >
            {sub}
          </p>

          {step === "form" ? (
            <form className="mt-8 space-y-4" onSubmit={onSubmit}>
              <label htmlFor="promo-email" className="sr-only">
                Email
              </label>
              <input
                id="promo-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="min-h-12 w-full rounded-pill border border-border bg-surface px-5 text-sm text-ink shadow-sm placeholder:text-ink-subtle focus:border-brand-deep focus:outline-none focus:ring-2 focus:ring-brand/25"
              />
              <Button type="submit" className="min-h-12 w-full">
                {cta}
              </Button>
              <button
                type="button"
                className="w-full text-center text-xs font-medium text-ink-subtle underline-offset-2 hover:text-ink hover:underline"
                onClick={() => close(true)}
              >
                No thanks, I’ll browse without it
              </button>
              <p className="text-[10px] leading-relaxed text-ink-subtle">
                By continuing you agree to get this offer message (and launch
                updates if you’re on the list). See privacy in the footer.
              </p>
            </form>
          ) : (
            <div className="mt-8 rounded-lg border border-border-soft bg-surface-mist/50 p-5">
              <p className="font-display text-lg font-semibold text-ink">
                You’re in.
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                Check your inbox in a minute. If nothing lands, peek at
                promotions / spam.
              </p>
              <Button
                type="button"
                className="mt-6 w-full"
                onClick={() => close(false)}
              >
                Continue shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
