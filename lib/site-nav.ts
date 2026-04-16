/** Header / footer IA. Use homeSection() for on-page sections from any route. */

import { ROUTES, homeSection } from "@/lib/routes";

export type NavChild = { label: string; href: string };

export type NavColumn = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const catalogNav: NavColumn[] = [
  {
    label: "Shop all",
    href: homeSection("product"),
    children: [
      { label: "Hydrating SPF (hero)", href: homeSection("product") },
      { label: "Routines & kits", href: homeSection("routine") },
      { label: "How to use", href: homeSection("how") },
    ],
  },
  {
    label: "Skin concern",
    href: homeSection("why"),
    children: [
      { label: "Heat & humidity", href: homeSection("india") },
      { label: "Texture & finish", href: homeSection("texture") },
      { label: "Trust & safety", href: homeSection("trust") },
    ],
  },
  {
    label: "Ingredients",
    href: homeSection("formula"),
    children: [
      { label: "Formula philosophy", href: homeSection("formula") },
      { label: "Benefits overview", href: homeSection("benefits") },
      { label: "FAQ", href: homeSection("faq") },
    ],
  },
  {
    label: "Skin type",
    href: homeSection("benefits"),
    children: [
      { label: "Oily / combo / acne-prone", href: homeSection("benefits") },
      { label: "Daily wear comfort", href: homeSection("texture") },
      { label: "Reviews", href: ROUTES.reviews },
    ],
  },
];

export const catalogNavSimple: NavChild[] = [
  { label: "Best sellers", href: homeSection("product") },
  { label: "New arrivals", href: homeSection("cta") },
  { label: "Blog", href: ROUTES.blog },
];
