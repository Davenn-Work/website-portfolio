import type { ServiceCardData } from "@/lib/cores/features/splash/content";
import { textTheme } from "@/lib/cores/constants/text-theme";

export default function ServiceCard({ title, description, icon }: ServiceCardData) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
        {icon}
      </div>
      <h3 className={`mt-5 ${textTheme.subheading3} text-foreground`}>
        {title}
      </h3>
      <p className={`mt-3 ${textTheme.body2} text-muted-foreground`}>{description}</p>
    </article>
  );
}
