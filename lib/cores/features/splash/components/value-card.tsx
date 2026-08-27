import type { ValueCardData } from "@/lib/cores/features/splash/content";
import { textTheme } from "@/lib/cores/constants/text-theme";

export default function ValueCard({ id, title, description }: ValueCardData) {
  return (
    <article className="border-t border-border bg-transparent p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
      <div
        className={`flex items-center gap-2 ${textTheme.label1} font-bold text-primary`}
      >
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
