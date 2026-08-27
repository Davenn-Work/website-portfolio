import type { PortfolioCardData } from "@/lib/cores/features/splash/content";
import { ArrowUpRight } from "lucide-react";
import { textTheme } from "@/lib/cores/constants/text-theme";
import Image from "next/image";

export default function PortfolioCard({
  title,
  description,
  tone,
  imageSrc,
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
        <Image
          src={imageSrc}
          alt="Preview ilustrasi website Vaulttech"
          width={1080}
          height={1080}
          priority
          className="h-auto w-full shadow-2xl"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className={`${textTheme.subheading1}`}>{title}</h3>
          <p className={`mt-1 ${textTheme.body2} text-muted-foreground`}>
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
