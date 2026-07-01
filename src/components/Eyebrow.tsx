import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "muted",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "muted" | "black";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest",
        tone === "muted" ? "text-muted" : "text-black",
        className,
      )}
    >
      <span className="eyebrow-dot" aria-hidden="true" />
      {children}
    </p>
  );
}
