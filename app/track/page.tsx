import type { Metadata } from "next";
import Link from "next/link";
import { TrackOrderFormPreview } from "@/components/forms/track-order-form-preview";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { Container } from "@/components/ui/container";
import { getSiteConfig } from "@/lib/site-config";
import { homeSection } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Track order",
  description:
    "Track your On & Off shipment. Connect your logistics provider at launch.",
};

export default function TrackOrderPage() {
  const config = getSiteConfig();

  return (
    <div id="top">
      <AnnouncementBar text={config.announcement} />
      <SiteHeader config={config} />
      <main id="main-content" tabIndex={-1}>
        <section
          className="border-b border-border-soft bg-surface py-14 sm:py-20"
          aria-labelledby="track-heading"
        >
          <Container className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">
              Orders
            </p>
            <h1
              id="track-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Track your order
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              Enter the details from your confirmation email. This form is a
              layout preview until checkout and carrier APIs are connected.
            </p>
            <TrackOrderFormPreview />
            <p className="mt-8 text-sm text-ink-muted">
              Questions?{" "}
              <a
                href="mailto:hello@onandoff.in"
                className="font-semibold text-brand-deep hover:text-ink"
              >
                Email us
              </a>{" "}
              or see{" "}
              <Link
                href={homeSection("faq")}
                className="font-semibold text-brand-deep hover:text-ink"
              >
                shipping FAQ
              </Link>
              .
            </p>
          </Container>
        </section>
      </main>
      <SiteFooter config={config} />
      <StickyMobileCta config={config} />
    </div>
  );
}
