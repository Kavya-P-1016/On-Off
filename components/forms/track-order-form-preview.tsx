"use client";

export function TrackOrderFormPreview() {
  return (
    <form
      className="mt-10 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label
          htmlFor="order-id"
          className="text-xs font-semibold uppercase tracking-wider text-ink-muted"
        >
          Order number
        </label>
        <input
          id="order-id"
          name="orderId"
          type="text"
          autoComplete="off"
          placeholder="e.g. ONO-00000"
          className="mt-2 min-h-12 w-full rounded-pill border border-border bg-surface-elevated px-5 text-sm text-ink shadow-sm placeholder:text-ink-subtle focus:border-brand-deep focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>
      <div>
        <label
          htmlFor="track-email"
          className="text-xs font-semibold uppercase tracking-wider text-ink-muted"
        >
          Email used at checkout
        </label>
        <input
          id="track-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          className="mt-2 min-h-12 w-full rounded-pill border border-border bg-surface-elevated px-5 text-sm text-ink shadow-sm placeholder:text-ink-subtle focus:border-brand-deep focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>
      <button
        type="submit"
        className="min-h-12 w-full rounded-pill bg-cta px-6 text-sm font-semibold text-surface-elevated transition-colors hover:bg-cta-hover"
      >
        Track shipment
      </button>
    </form>
  );
}
