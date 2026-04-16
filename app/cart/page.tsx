import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getSiteConfig } from "@/lib/site-config";
import { homeSection } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Bag",
  description: "Your On & Off bag. Checkout connects at launch.",
};

export default function CartPage() {
  const config = getSiteConfig();

  return (
    <div id="top">
      <AnnouncementBar text={config.announcement} />
      <SiteHeader config={config} />
      <main id="main-content" tabIndex={-1}>
        <section
          className="border-b border-border-soft bg-surface py-14 sm:py-20"
          aria-labelledby="bag-heading"
        >
          <Container className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">
              Shopping bag
            </p>
            <h1
              id="bag-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Your bag
            </h1>
            <div className="mt-10 rounded-2xl border border-border-soft bg-surface-elevated p-8 shadow-sm sm:p-10">
              <p className="text-center text-sm text-ink-muted sm:text-base">
                Nothing here yet. When checkout is live, your items and totals
                will show in this space.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <ButtonLink href={homeSection("product")}>
                  Shop hydrating SPF
                </ButtonLink>
                <Link
                  href="/"
                  className="text-sm font-semibold text-brand-deep underline-offset-2 hover:underline"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter config={config} />
      <StickyMobileCta config={config} />
    </div>
  );
}
