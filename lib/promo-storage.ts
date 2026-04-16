/** localStorage helpers: suppress welcome offer after dismiss / signup. */

export const PROMO_STORAGE_KEY = "onoff:welcome-offer:v1";

/** How long to hide the popup after the user closes it or claims the offer. */
export const PROMO_COOLDOWN_MS = 1000 * 60 * 60 * 24 * 14; // 14 days

export function getPromoSuppressedUntil(): number | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(PROMO_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { until?: number };
    return typeof parsed.until === "number" ? parsed.until : null;
  } catch {
    return null;
  }
}

export function isPromoSuppressed(): boolean {
  const until = getPromoSuppressedUntil();
  return until != null && Date.now() < until;
}

export function suppressPromoForCooldown(): void {
  if (typeof window === "undefined") return;
  const until = Date.now() + PROMO_COOLDOWN_MS;
  window.localStorage.setItem(PROMO_STORAGE_KEY, JSON.stringify({ until }));
}
