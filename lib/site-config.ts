import { ROUTES, homeSection } from "@/lib/routes";

export type SiteMode = "waitlist" | "shop";

export type SiteConfig = {
  mode: SiteMode;
  announcement: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  nav: { label: string; href: string }[];
  productName: string;
  productTagline: string;
  productPriceDisplay: string;
};

function envMode(): SiteMode {
  const raw = process.env.NEXT_PUBLIC_SITE_MODE?.toLowerCase();
  return raw === "shop" ? "shop" : "waitlist";
}

export function getSiteConfig(): SiteConfig {
  const mode = envMode();

  if (mode === "shop") {
    return {
      mode,
      announcement:
        process.env.NEXT_PUBLIC_ANNOUNCEMENT_BAR ??
        "Free shipping on orders \u20B9999+ · Daily SPF, made for Indian summers",
      primaryCta: { label: "Shop sunscreen", href: homeSection("product") },
      secondaryCta: {
        label: "Explore the formula",
        href: homeSection("formula"),
      },
      nav: [
        { label: "Product", href: homeSection("product") },
        { label: "Formula", href: homeSection("formula") },
        { label: "Reviews", href: ROUTES.reviews },
        { label: "FAQ", href: homeSection("faq") },
      ],
      productName: "On & Off Hydrating SPF",
      productTagline: "Daily protection that feels like skincare.",
      productPriceDisplay:
        process.env.NEXT_PUBLIC_PRODUCT_PRICE ?? "From \u20B9899",
    };
  }

  return {
    mode,
    announcement:
      process.env.NEXT_PUBLIC_ANNOUNCEMENT_BAR ??
      "Launching soon. Join for early access and founder-only perks.",
    primaryCta: { label: "Get launch access", href: homeSection("cta") },
    secondaryCta: {
      label: "See the hero product",
      href: homeSection("product"),
    },
    nav: [
      { label: "Why us", href: homeSection("why") },
      { label: "Product", href: homeSection("product") },
      { label: "Formula", href: homeSection("formula") },
      { label: "FAQ", href: homeSection("faq") },
    ],
    productName: "On & Off Hydrating SPF",
    productTagline: "The daily essential you'll actually want to wear.",
    productPriceDisplay: "",
  };
}
