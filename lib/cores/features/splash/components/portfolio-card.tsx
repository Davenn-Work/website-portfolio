import type { PortfolioCardData } from "@/lib/cores/features/splash/content";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioCard({
  title,
  description,
  tone,
}: PortfolioCardData) {
  const isDark = tone === "dark";

  return (
    <article className="group">
      <div
        className={[
          "overflow-hidden rounded-3xl border",
          isDark
            ? "border-foreground/10 bg-foreground text-background"
            : "border-border bg-card text-foreground",
        ].join(" ")}
      >
        <div
          className={
            isDark
              ? "border-b border-background/10 bg-background/5 px-4 py-3"
              : "border-b border-border bg-background px-4 py-3"
          }
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span
                className={
                  isDark
                    ? "h-2 w-2 rounded-full bg-background/20"
                    : "h-2 w-2 rounded-full bg-foreground/10"
                }
              />
              <span
                className={
                  isDark
                    ? "h-2 w-2 rounded-full bg-background/20"
                    : "h-2 w-2 rounded-full bg-foreground/10"
                }
              />
              <span
                className={
                  isDark
                    ? "h-2 w-2 rounded-full bg-background/20"
                    : "h-2 w-2 rounded-full bg-foreground/10"
                }
              />
            </div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Preview
            </span>
          </div>
        </div>

        <div className="p-4">
          {isDark ? (
            <div className="grid min-h-80 gap-4 rounded-2xl bg-background/5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-2 w-20 rounded-full bg-background/20" />
                  <div className="mt-2 h-2 w-28 rounded-full bg-background/10" />
                </div>
                <div className="h-9 w-9 rounded-full border border-background/10 bg-background/5" />
              </div>

              <div className="rounded-2xl border border-background/10 bg-background/5 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-background/5 p-4">
                    <div className="h-2 w-16 rounded-full bg-primary" />
                    <div className="mt-4 h-36 rounded-2xl border border-background/10 bg-background/10" />
                  </div>
                  <div className="grid gap-3">
                    <div className="h-20 rounded-2xl border border-background/10 bg-background/5" />
                    <div className="h-20 rounded-2xl border border-background/10 bg-background/5" />
                  </div>
                </div>
              </div>

              <div className="flex items-end gap-3">
                <div className="h-16 flex-1 rounded-2xl border border-background/10 bg-background/5" />
                <div className="h-24 flex-1 rounded-2xl bg-primary" />
                <div className="h-12 flex-1 rounded-2xl border border-background/10 bg-background/5" />
              </div>
            </div>
          ) : (
            <div className="grid min-h-80 gap-4 rounded-2xl bg-secondary p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-2 w-20 rounded-full bg-foreground/10" />
                  <div className="mt-2 h-2 w-28 rounded-full bg-foreground/5" />
                </div>
                <div className="h-9 w-24 rounded-full border border-border bg-card" />
              </div>

              <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-brand-soft p-4">
                    <div className="h-2 w-20 rounded-full bg-primary/20" />
                    <div className="mt-4 h-36 rounded-2xl border border-border bg-background" />
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-2xl border border-border bg-background p-4">
                      <div className="h-2 w-14 rounded-full bg-foreground/10" />
                      <div className="mt-4 h-16 rounded-2xl bg-secondary" />
                    </div>
                    <div className="rounded-2xl border border-border bg-background p-4">
                      <div className="h-2 w-16 rounded-full bg-foreground/10" />
                      <div className="mt-4 h-16 rounded-2xl bg-secondary" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="h-16 rounded-2xl bg-card" />
                <div className="h-16 rounded-2xl bg-card" />
                <div className="h-16 rounded-2xl bg-card" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium tracking-tight text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <ArrowUpRight className="mt-1 size-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </article>
  );
}
