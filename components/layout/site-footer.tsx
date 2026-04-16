import { Container } from "@/components/ui/container";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import type { SiteConfig } from "@/lib/site-config";
import { catalogNavSimple } from "@/lib/site-nav";
import { ROUTES, homeSection } from "@/lib/routes";

const helpLinks = [
  { label: "Track order", href: ROUTES.track },
  { label: "Shipping & delivery", href: homeSection("faq") },
  { label: "Returns", href: homeSection("faq") },
  { label: "Contact us", href: "mailto:hello@onandoff.in" },
];

const aboutLinks = [
  { label: "Why On & Off", href: homeSection("why") },
  { label: "Formula philosophy", href: homeSection("formula") },
  { label: "Reviews", href: ROUTES.reviews },
  { label: "How to use", href: homeSection("how") },
];

const legalLinks = [
  { label: "Privacy", href: homeSection("footer-legal") },
  { label: "Terms", href: homeSection("footer-legal") },
];

const exploreLinks = [
  { label: "Hydrating SPF", href: homeSection("product") },
  { label: "Why we exist", href: homeSection("why") },
  { label: "Formula & ingredients", href: homeSection("formula") },
  { label: "Texture & finish", href: homeSection("texture") },
  { label: "India summers", href: homeSection("india") },
  { label: "Customer reviews", href: ROUTES.reviews },
  { label: "How to use", href: homeSection("how") },
  { label: "Blog", href: ROUTES.blog },
];

export function SiteFooter({ config }: { config: SiteConfig }) {
  return (
    <footer className="border-t border-border bg-ink text-surface-elevated">
      <Container className="py-14 lg:py-16">
        <div
          id="footer-support"
          className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8"
        >
          <div className="lg:col-span-4">
            <p className="font-display text-2xl font-bold tracking-tight">
              ON <span className="text-brand-glow">&amp;</span> OFF
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sky-soft/90">
              A skincare brand built around one idea:{" "}
              <strong className="font-semibold text-surface-elevated">
                daily SPF you&apos;ll actually wear
              </strong>
              . Hydrating, lightweight, made for Indian heat and humidity, for
              oily, combination, and acne-prone skin.
            </p>
            <p className="mt-4 text-xs text-sky-soft/70">
              Not medical advice. Patch test new products. Final claims on-pack
              at launch.
            </p>
          </div>

          <nav className="lg:col-span-2" aria-label="Shop">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-glow/90">
              Shop
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-sky-soft/90">
              <li>
                <a
                  href={homeSection("product")}
                  className="hover:text-surface-elevated"
                >
                  Hydrating SPF
                </a>
              </li>
              {catalogNavSimple.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-surface-elevated">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={homeSection("routine")}
                  className="hover:text-surface-elevated"
                >
                  Routines &amp; kits
                </a>
              </li>
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Explore">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-glow/90">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-sky-soft/90">
              {exploreLinks.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="hover:text-surface-elevated">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Help">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-glow/90">
              Help
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-sky-soft/90">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-surface-elevated">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="About">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-glow/90">
              About
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-sky-soft/90">
              {aboutLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-surface-elevated">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-glow/90">
              {config.mode === "waitlist"
                ? "Notes from the founder"
                : "Order updates"}
            </p>
            <p className="mt-2 max-w-md text-sm text-sky-soft/90">
              {config.mode === "waitlist"
                ? "Email for launch access. No spam, just the good stuff."
                : "Get order tips, restock alerts, and routine reminders."}
            </p>
            <div className="mt-4 max-w-md [&_button]:bg-brand [&_button]:text-ink [&_button]:hover:bg-brand-glow [&_input]:border-white/20 [&_input]:bg-white/10 [&_input]:text-surface-elevated [&_input]:placeholder:text-sky-soft/50">
              <WaitlistForm />
            </div>
          </div>
          <div className="text-sm text-sky-soft/80">
            <p className="font-medium text-surface-elevated">We accept</p>
            <p className="mt-2 text-xs leading-relaxed">
              UPI · Cards · Netbanking. Connect your payment provider at launch.
              COD if you enable it.
            </p>
            <p className="mt-4 text-xs text-sky-soft/60">
              Instagram · YouTube. Add @handles when live.
            </p>
          </div>
        </div>

        <div
          id="footer-legal"
          className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-sky-soft/70 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {new Date().getFullYear()} On &amp; Off. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-surface-elevated"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
