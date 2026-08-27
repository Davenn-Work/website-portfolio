import type { ValueCardData } from "@/lib/cores/features/splash/content";
import { textTheme } from "@/lib/cores/constants/text-theme";

export default function ValueCard({ id, title, description, icon }: ValueCardData) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
      <div className={`flex items-center gap-2 ${textTheme.label1} text-primary`}>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </span>
        <span>{id}</span>
      </div>
      <h3 className={`mt-5 ${textTheme.subheading1} text-foreground`}>
        {title}
      </h3>
      <p className={`mt-3 max-w-sm ${textTheme.body2} text-muted-foreground`}>
        {description}
      </p>
    </article>
  );
}
