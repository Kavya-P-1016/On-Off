import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BenefitsSection } from "@/components/sections/benefits";
import { BrandWorldSection } from "@/components/sections/brand-world";
import { BundleSection } from "@/components/sections/bundle";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { HowToUseSection } from "@/components/sections/how-to-use";
import { IndiaWeatherSection } from "@/components/sections/india-weather";
import { IngredientsSection } from "@/components/sections/ingredients";
import { ProblemSection } from "@/components/sections/problem";
import { ProductSpotlight } from "@/components/sections/product-spotlight";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TextureFinishSection } from "@/components/sections/texture-finish";
import { TrustSection } from "@/components/sections/trust";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { getSiteConfig } from "@/lib/site-config";

export default function Home() {
  const config = getSiteConfig();

  return (
    <div id="top">
      <AnnouncementBar text={config.announcement} />
      <SiteHeader config={config} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection config={config} />
        <CredibilityStrip />
        <ProblemSection />
        <ProductSpotlight config={config} />
        <BenefitsSection />
        <TextureFinishSection />
        <IngredientsSection />
        <IndiaWeatherSection />
        <TrustSection />
        <TestimonialsSection />
        <HowToUseSection />
        <BundleSection config={config} />
        <BrandWorldSection />
        <FaqSection />
        <FinalCtaSection config={config} />
      </main>
      <SiteFooter config={config} />
      <StickyMobileCta config={config} />
    </div>
  );
}
