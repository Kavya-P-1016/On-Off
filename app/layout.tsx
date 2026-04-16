import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import { WelcomeOfferPopup } from "@/components/promo/welcome-offer-popup";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteConfig } from "@/lib/site-config";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "On & Off | Hydrating daily SPF for heat, humidity, and real life",
    template: "%s | On & Off",
  },
  description:
    "Premium-feeling, lightweight hydrating sunscreen for oily, combination, and acne-prone skin, made for Indian summers. Shelfie-worthy. Zero sticky drama.",
  keywords: [
    "On & Off",
    "skincare India",
    "hydrating sunscreen",
    "SPF oily skin",
    "non greasy sunscreen",
    "daily SPF",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "On & Off",
    title: "On & Off | Hydrating daily SPF",
    description:
      "Daily SPF that feels like skincare: lightweight, non-sticky, made for Indian weather.",
  },
  twitter: {
    card: "summary_large_image",
    title: "On & Off | Hydrating daily SPF",
    description:
      "Daily SPF that feels like skincare: lightweight, non-sticky, made for Indian weather.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = getSiteConfig();

  return (
    <html
      lang="en-IN"
      className={`${sora.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">
        <JsonLd config={config} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-surface-elevated focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-soft"
        >
          Skip to main content
        </a>
        {children}
        <WelcomeOfferPopup />
      </body>
    </html>
  );
}
