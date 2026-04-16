/** Homepage anchor as a path so links work from /blog, /reviews, etc. */
export function homeSection(hash: string): string {
  const h = hash.replace(/^#/, "");
  return `/#${h}`;
}

export const ROUTES = {
  home: "/",
  blog: "/blog",
  reviews: "/reviews",
} as const;
