"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import type { SiteConfig } from "@/lib/site-config";

export function StickyMobileCta({ config }: { config: SiteConfig }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const hero = document.getElementById("hero");
    if (!hero) {
      queueMicrotask(() => {
        if (!cancelled) setVisible(true);
      });
      return () => {
        cancelled = true;
      };
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!cancelled) setVisible(!entry?.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px" },
    );

    io.observe(hero);
    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border-soft bg-surface/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg items-center gap-3">
        {config.mode === "shop" && config.productPriceDisplay ? (
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-ink-muted">
              {config.productName}
            </p>
            <p className="font-display text-sm font-semibold text-ink">
              {config.productPriceDisplay}
            </p>
          </div>
        ) : (
          <p className="flex-1 text-xs font-medium leading-snug text-ink-muted">
            Launch perks for early subscribers.
          </p>
        )}
        <ButtonLink
          href={config.primaryCta.href}
          className="!px-4 !py-3 text-xs whitespace-nowrap"
        >
          {config.primaryCta.label}
        </ButtonLink>
      </div>
    </div>
  );
}
