export function ServiceCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-3xl border border-black/10 bg-white p-8 transition-all duration-300 ease-apple hover:-translate-y-1 hover:border-black/25 hover:shadow-soft">
      <span className="text-xs font-medium tracking-widest text-muted">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-black">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
