"use client";

import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span";
};

/**
 * Soft fade/slide scroll-reveal wrapper. Staggering is done by passing an
 * incrementing `delay` (ms) to siblings. Respects prefers-reduced-motion
 * via the [data-reveal] CSS rules in globals.css.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Comp = as as "div";

  return (
    <Comp
      ref={ref}
      data-reveal
      data-revealed={inView}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={className}
    >
      {children}
    </Comp>
  );
}
