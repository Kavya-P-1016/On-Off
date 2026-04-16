export type BlogCategory =
  | "Sunscreens"
  | "Skin Care"
  | "Routine"
  | "Ingredients";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  trending: boolean;
  author: string;
  dateLabel: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const BLOG_FILTER_LABELS = [
  "All",
  "Trending",
  "Sunscreens",
  "Skin Care",
  "Routine",
  "Ingredients",
] as const;

export type BlogFilterId = (typeof BLOG_FILTER_LABELS)[number];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "spf-without-the-grease",
    title: "SPF without the grease: what actually matters in humidity",
    excerpt:
      "Texture, reapplication, and why \"matte\" is not the only answer for oily skin in Mumbai summers.",
    category: "Sunscreens",
    trending: true,
    author: "On & Off Editorial",
    dateLabel: "12 APR 2026",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=500&fit=crop&q=80",
    imageAlt: "Skincare products and sunlight on a vanity",
    body: [
      "Most sunscreen advice ignores the part that decides whether you will reapply: how it feels after twenty minutes in humid air. A formula can look perfect in a reel and still fail the sweat-and-commute test.",
      "We care about spreadability, dry-down time, and whether your skin still feels like skin, not a plastic film. That is the bar we use when thinking about Indian weather, not just lab numbers on a chart.",
      "If you are oily or combination, look for comfortable hydration underneath your filters, not just powdery mattifiers. Comfort is what makes daily SPF a habit instead of a chore.",
    ],
  },
  {
    slug: "glass-skin-without-the-fear",
    title: "Glass skin energy, zero intimidation",
    excerpt:
      "How to chase dewy, reel-ready skin without twelve steps or a chemistry degree.",
    category: "Skin Care",
    trending: true,
    author: "On & Off Editorial",
    dateLabel: "08 APR 2026",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=500&fit=crop&q=80",
    imageAlt: "Close-up of dewy skin texture",
    body: [
      "Glass skin became a trend, then a standard, and then a reason people felt behind. The version we believe in is simpler: healthy barrier, consistent SPF, and hydration that does not suffocate.",
      "You do not need a cabinet of actives to look fresh on camera. You need a few trustworthy products that play well together and a finish you are happy to wear in daylight.",
      "Sunscreen is the bridge between glow and protection. If your SPF fights your moisturizer or your makeup, the whole routine falls apart, so we design for stackability first.",
    ],
  },
  {
    slug: "three-step-heatwave-routine",
    title: "A three-step heatwave routine that survives college and commutes",
    excerpt:
      "Cleanse smart, hydrate light, protect daily, without carrying a pharmacy in your tote.",
    category: "Routine",
    trending: true,
    author: "On & Off Editorial",
    dateLabel: "02 APR 2026",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=500&fit=crop&q=80",
    imageAlt: "Minimal skincare bottles on a shelf",
    body: [
      "Heat waves punish heavy layers. The winning routine is the one you will actually repeat at 3 p.m., not the one that looks aesthetic at 8 a.m.",
      "Start with a gentle cleanse that removes sweat and SPF without stripping. Add a thin layer of hydration: mist, serum, or light lotion, whatever your skin actually drinks.",
      "Finish with a daily SPF you can reapply. If reapplication feels embarrassing, choose a texture you are proud to pull out in public. Packaging psychology matters more than people admit.",
    ],
  },
  {
    slug: "humectants-and-filters-plain-english",
    title: "Humectants, filters, finish in plain English",
    excerpt:
      "A quick decode of the words you see on sunscreen labels, without the scare tactics.",
    category: "Ingredients",
    trending: false,
    author: "On & Off Editorial",
    dateLabel: "28 MAR 2026",
    image:
      "https://images.unsplash.com/photo-1584305574647-7e4e7a1d8e0e?w=800&h=500&fit=crop&q=80",
    imageAlt: "Laboratory glassware abstract skincare science",
    body: [
      "Humectants pull water into the upper layers of skin. They are part of why a hydrating SPF can feel bouncy instead of chalky. \"Chemical\" is not a dirty word here, it is just chemistry doing useful work.",
      "UV filters are the active protection. Brands combine them to balance protection, texture, and how the product wears on different skin tones. Final claims always belong on your box, not a blog paragraph.",
      "Finish is the sensory verdict: radiant, natural, velvety. It is where personal preference meets climate. What works in dry air might feel sticky by the sea, so tune for your real life.",
    ],
  },
  {
    slug: "white-cast-and-skin-tone",
    title: "White cast, skin tone, and honest mirror talk",
    excerpt:
      "Why \"no white cast\" is a finish claim, and how to test SPF like a human, not a trend.",
    category: "Sunscreens",
    trending: false,
    author: "On & Off Editorial",
    dateLabel: "22 MAR 2026",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=500&fit=crop&q=80",
    imageAlt: "Hands applying lotion",
    body: [
      "White cast shows up when the film of product reflects light differently from your skin. Amount applied, dry-down time, and undertone all change what you see in the mirror.",
      "We design for a sheer, skin-like finish, but honesty beats hype: test on your jawline in daylight, wait a few minutes, and see how it sits under your usual makeup.",
      "If a formula is not for you, that is data, not failure. The goal is a shortlist of textures you trust enough to wear every single day.",
    ],
  },
  {
    slug: "shelfie-as-self-care",
    title: "Why your shelfie is part of self-care, not vanity",
    excerpt:
      "Packaging you like is not shallow. It is a cue that you will actually use what you bought.",
    category: "Skin Care",
    trending: false,
    author: "On & Off Editorial",
    dateLabel: "15 MAR 2026",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=500&fit=crop&q=80",
    imageAlt: "Bathroom shelf with cosmetic bottles",
    body: [
      "Objects you enjoy looking at get picked up more often. That is true for books, mugs, and absolutely for sunscreen tubes rattling around in your bag.",
      "We treat packaging as part of the product experience: tactile caps, readable type, colors that feel fresh instead of clinical. It is brand, but it is also behavior design.",
      "If a gorgeous bottle gets you to reapply, the bottle did its job. Skincare only works when it leaves the shelf.",
    ],
  },
];
