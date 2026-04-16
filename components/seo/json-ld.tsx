import type { SiteConfig } from "@/lib/site-config";

export function JsonLd({ config }: { config: SiteConfig }) {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const product: Record<string, unknown> = {
    "@type": "Product",
    name: config.productName,
    description: config.productTagline,
    brand: { "@type": "Brand", name: "On & Off" },
  };

  if (config.mode === "shop") {
    product.offers = {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
    };
  }

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#org`,
        name: "On & Off",
        url: base,
        description:
          "Affordable, aesthetic, effective skincare for Indian summers: hydrating daily SPF with a lightweight finish.",
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: "On & Off",
        publisher: { "@id": `${base}/#org` },
        inLanguage: "en-IN",
      },
      product,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
