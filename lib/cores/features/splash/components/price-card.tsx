import { Button } from "@/components/ui/button";
import { textTheme } from "@/lib/cores/constants/text-theme";
import type { PricingCardData } from "@/lib/cores/features/splash/content";
import { Check } from "lucide-react";

type PriceCardProps = PricingCardData;

export default function PriceCard({
  name,
  description,
  price,
  features,
  featured = false,
  badge,
}: PriceCardProps) {
  return (
    <article
      className={[
        "flex flex-col rounded-3xl border p-6 sm:p-8",
        featured
          ? "border-primary/30 bg-primary/5"
          : "border-border bg-card",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className={`${textTheme.subheading2} text-foreground`}>{name}</h3>
          <p className={`mt-3 ${textTheme.body2} text-muted-foreground`}>
            {description}
          </p>
        </div>

        {badge ? (
          <span
            className={`rounded-full bg-primary px-3 py-1 ${textTheme.caption2} text-primary-foreground`}
          >
            {badge}
          </span>
        ) : null}
      </div>

      <p
        className={[
          "mt-6",
          textTheme.heading3,
          featured ? "text-primary" : "text-foreground",
        ].join(" ")}
      >
        {price}
      </p>

      <hr className="my-6 border-border" />

      <ul className="grid gap-3">
        {features.map((value) => (
          <li key={value} className="flex items-start gap-3">
            <Check
              className="mt-0.5 size-4 shrink-0 text-primary"
              strokeWidth={2.5}
            />
            <p className={`${textTheme.body2} text-foreground`}>{value}</p>
          </li>
        ))}
      </ul>

      <Button
        type="button"
        variant={featured ? "default" : "outline"}
        className={`mt-8 w-full rounded-xl px-6 ${textTheme.button1}`}
      >
        Pilih Paket
      </Button>
    </article>
  );
}
