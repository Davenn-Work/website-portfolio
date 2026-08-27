import type { ValueCardData } from "@/lib/cores/features/splash/content";

export default function ValueCard({ id, title, description, icon }: ValueCardData) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </span>
        <span>{id}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
