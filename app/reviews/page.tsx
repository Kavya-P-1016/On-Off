import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { getSiteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What people are saying about daily SPF that feels like skincare, not a chore.",
};

export default function ReviewsPage() {
  const config = getSiteConfig();

  return (
    <div id="top">
      <AnnouncementBar text={config.announcement} />
      <SiteHeader config={config} />
      <main id="main-content" tabIndex={-1}>
        <TestimonialsSection />
      </main>
      <SiteFooter config={config} />
      <StickyMobileCta config={config} />
    </div>
  );
}
