"use client";

import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

/**
 * Pill button with a subtle "magnetic" pull toward the cursor and a
 * gentle lift/scale on hover — disabled automatically for touch and for
 * prefers-reduced-motion, since both make the effect pointless or jarring.
 */
export function Button({ children, href, variant = "primary", className }: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.12}px, ${y * 0.28}px) scale(1.03)`;
  }

  function handleMouseLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "";
  }

  if (variant === "text") {
    return (
      <Link
        href={href}
        className={cn(
          "link-underline inline-flex items-center gap-1.5 text-sm font-medium text-black",
          className,
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-[transform,background-color,box-shadow] duration-300 ease-apple will-change-transform hover:shadow-soft",
        variant === "primary" && "bg-black text-white hover:scale-[1.03]",
        variant === "secondary" &&
          "border border-black/15 bg-transparent text-black hover:scale-[1.03] hover:border-black/30",
        className,
      )}
    >
      {children}
    </Link>
  );
}
