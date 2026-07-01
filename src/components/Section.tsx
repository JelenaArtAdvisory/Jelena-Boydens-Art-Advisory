import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  tone?: "white" | "offwhite" | "cream";
  className?: string;
  hairlineTop?: boolean;
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  white: "bg-white",
  offwhite: "bg-offwhite",
  cream: "bg-cream",
};

export function Section({ id, children, tone = "white", className, hairlineTop = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-24 sm:py-32",
        toneClasses[tone],
        hairlineTop && "border-t border-black/10",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">{children}</div>
    </section>
  );
}
