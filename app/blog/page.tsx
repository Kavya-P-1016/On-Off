import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BlogSection } from "@/components/sections/blog-section";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { getSiteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Routines, SPF without fear-mongering, and honest product culture from On & Off.",
};

export default function BlogPage() {
  const config = getSiteConfig();

  return (
    <div id="top">
      <AnnouncementBar text={config.announcement} />
      <SiteHeader config={config} />
      <main id="main-content" tabIndex={-1}>
        <BlogSection />
      </main>
      <SiteFooter config={config} />
      <StickyMobileCta config={config} />
    </div>
  );
}
