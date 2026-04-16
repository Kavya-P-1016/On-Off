"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function WaitlistForm({ id }: { id?: string }) {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  return (
    <form
      id={id}
      className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("done");
      }}
      noValidate
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Email
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="you@email.com"
        className={cn(
          "min-h-12 flex-1 rounded-pill border border-border bg-surface-elevated px-5 text-sm text-ink shadow-sm",
          "placeholder:text-ink-subtle focus:border-brand-deep focus:outline-none focus:ring-2 focus:ring-brand/25",
        )}
      />
      <Button type="submit" className="min-h-12 shrink-0 sm:w-auto">
        {status === "done" ? "You’re in" : "Join the list"}
      </Button>
    </form>
  );
}
