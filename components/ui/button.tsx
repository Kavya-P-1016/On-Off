import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-cta text-surface-elevated shadow-soft hover:bg-cta-hover hover:shadow-hover active:scale-[0.98]",
  secondary:
    "bg-surface-elevated text-ink border border-border hover:border-brand hover:text-brand-deep shadow-sm active:scale-[0.98]",
  ghost: "text-ink-muted hover:text-ink hover:bg-surface-mist",
} as const;

type Variant = keyof typeof variants;

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: Variant }) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
