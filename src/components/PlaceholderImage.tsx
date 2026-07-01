import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  /** Pass a real path (e.g. "/images/hero.jpg") once you have the photo. */
  src?: string;
  alt: string;
  /** Shown inside the placeholder block, e.g. "[ hero photograph ]" */
  label: string;
  className?: string;
  aspect?: string;
  rounded?: string;
  priority?: boolean;
};

/**
 * Drop-in image slot: renders a calm placeholder block until a real `src`
 * is supplied, at which point it renders a proper next/image. This means
 * swapping in real photography later is a one-line prop change, not a
 * rewrite — see README.md.
 */
export function PlaceholderImage({
  src,
  alt,
  label,
  className,
  aspect = "aspect-[4/5]",
  rounded = "rounded-3xl",
  priority = false,
}: PlaceholderImageProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden", rounded, aspect, className)}>
        <Image src={src} alt={alt} fill priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden border border-black/10 bg-offwhite",
        rounded,
        aspect,
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <span className="px-6 text-center text-xs font-medium uppercase tracking-widest text-muted">
        {label}
      </span>
    </div>
  );
}
