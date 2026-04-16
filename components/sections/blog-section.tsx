"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import {
  BLOG_FILTER_LABELS,
  BLOG_POSTS,
  type BlogFilterId,
  type BlogPost,
} from "@/lib/blog-data";
import { cn } from "@/lib/cn";
import { ROUTES } from "@/lib/routes";

function IconFlame({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-3.1-2-5.7-4.8-6.6.4 1.8-.4 3.4-1.8 4.1-.9-2.3-2.5-4-4.5-5.1-.1 1.7-.6 3.1-1.4 4.3C8.5 10.5 6 13.2 6 16a6 6 0 0 0 6 6Zm-1-18.5c.8 1.4 1.2 2.8 1.1 4.2 1.5-1 2.6-2.4 3.2-4.12.2 1.3 3.7 3.7 3.7 6.4a8 8 0 1 1-16 0c0-3.4 2.1-6.3 5.1-7.5.3 1.1.4 2.2.3 3.3 1.2-1 2-2.4 2.3-4 .9.4 1.7 1 2.3 1.7Z" />
    </svg>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function BlogCard({
  post,
  variant,
}: {
  post: BlogPost;
  variant: "carousel" | "grid";
}) {
  const href = `${ROUTES.blog}#blog-article-${post.slug}`;

  return (
    <article
      className={cn(
        "flex shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface-elevated shadow-sm transition-shadow hover:shadow-soft",
        variant === "carousel" ? "w-[min(85vw,340px)] sm:w-[360px]" : "w-full",
      )}
    >
      <a href={href} className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width:640px) 85vw, 360px"
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-pill bg-surface-elevated/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink shadow-sm backdrop-blur-sm">
          {post.category}
        </span>
      </a>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-base font-semibold leading-snug text-brand-deep sm:text-lg">
          <a href={href} className="hover:text-ink">
            {post.title}
          </a>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {post.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border-soft pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-deep">
            {post.author}
            <span className="mx-1.5 text-ink-subtle" aria-hidden>
              |
            </span>
            {post.dateLabel}
          </p>
          <a
            href={href}
            className="inline-flex items-center gap-1 rounded-pill bg-cta px-4 py-2 text-xs font-semibold text-surface-elevated transition-colors hover:bg-cta-hover"
          >
            Read more
            <span aria-hidden>›</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function BlogSection() {
  const [filter, setFilter] = useState<BlogFilterId>("All");
  const [query, setQuery] = useState("");

  const trending = useMemo(
    () => BLOG_POSTS.filter((p) => p.trending),
    [],
  );

  const filtered = useMemo(() => {
    let list = BLOG_POSTS;
    if (filter === "Trending") list = list.filter((p) => p.trending);
    else if (filter !== "All")
      list = list.filter((p) => p.category === filter);

    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter((p) => {
      const blob = [p.title, p.excerpt, ...p.body].join(" ").toLowerCase();
      return blob.includes(q);
    });
  }, [filter, query]);

  return (
    <section
      id="blog"
      className="scroll-mt-36 border-t border-border-soft bg-surface py-16 sm:scroll-mt-40 sm:py-24"
      aria-labelledby="blog-heading"
    >
      <Container>
        <Reveal>
          <h2
            id="blog-heading"
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Journal
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Routines, SPF without fear-mongering, and the culture around products
            you actually use. Everything below lives on this page only.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-8 max-w-2xl">
          <label htmlFor="blog-search" className="sr-only">
            Search blog posts
          </label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blog posts…"
            className="w-full rounded-pill border border-border bg-surface-elevated py-3.5 pl-5 pr-12 text-sm text-ink shadow-sm placeholder:text-ink-subtle focus:border-brand-deep focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
          <span
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-deep"
            aria-hidden
          >
            <IconSearch />
          </span>
        </div>
      </Container>

      <div className="mt-10">
        <Container>
          <div className="mb-4 flex items-center gap-2">
            <IconFlame className="text-brand-deep" />
            <h3 className="font-display text-lg font-semibold text-brand-deep sm:text-xl">
              Trending posts
            </h3>
          </div>
        </Container>
        <div
          className={cn(
            "flex gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8",
            "scroll-ps-4 scroll-pe-4 [-ms-overflow-style:none] [scrollbar-width:none]",
            "[&::-webkit-scrollbar]:hidden",
            "snap-x snap-mandatory touch-pan-x",
          )}
        >
          {trending.map((post) => (
            <BlogCard key={post.slug} post={post} variant="carousel" />
          ))}
        </div>
      </div>

      <Container className="mt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-subtle">
          Browse by topic
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {BLOG_FILTER_LABELS.map((id) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                className={cn(
                  "touch-manipulation rounded-pill border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                  active
                    ? "border-brand-deep bg-brand-deep text-surface-elevated"
                    : "border-border bg-surface-elevated text-ink hover:border-brand hover:text-brand-deep",
                )}
              >
                {id}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <Reveal key={post.slug} delay={0.04 * (i % 6)}>
              <BlogCard post={post} variant="grid" />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-sm text-ink-muted">
            No posts match. Try another topic or clear your search.
          </p>
        ) : null}
      </Container>

      <Container className="mt-20 border-t border-border-soft pt-16">
        <h3 className="font-display text-2xl font-semibold text-ink">
          Full articles
        </h3>
        <p className="mt-2 text-sm text-ink-muted">
          Read the full pieces below. Jump here from any card above.
        </p>
        <div className="mt-12 space-y-20">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              id={`blog-article-${post.slug}`}
              className="scroll-mt-40 border-b border-border-soft pb-16 last:border-0 last:pb-0"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[280px]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width:1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-deep">
                    {post.category}
                  </span>
                  <h4 className="font-display mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {post.title}
                  </h4>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                    {post.author} · {post.dateLabel}
                  </p>
                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {post.body.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                  <a
                    href={`${ROUTES.blog}#blog-heading`}
                    className="mt-8 inline-flex text-sm font-semibold text-brand-deep hover:text-ink"
                  >
                    ↑ Back to Journal
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
