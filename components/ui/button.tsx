import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-gradient-to-r from-pop-rose via-pop-pink to-pop-coral text-white shadow-soft [text-shadow:0_1px_0_rgb(0_0_0_/0.12)] hover:brightness-105 hover:shadow-hover active:scale-[0.98]",
  secondary:
    "border-2 border-sky bg-wash-sky/70 text-brand-deep shadow-sm hover:border-brand hover:bg-sky-soft/50 hover:text-brand-deep active:scale-[0.98]",
  ghost: "text-ink-muted hover:text-ink hover:bg-wash-mint/80",
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
