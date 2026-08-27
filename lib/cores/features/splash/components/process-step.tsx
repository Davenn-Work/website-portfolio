import { textTheme } from "@/lib/cores/constants/text-theme";
import type { ProcessStepData } from "@/lib/cores/features/splash/content";

type ProcessStepProps = ProcessStepData & {
  isLast: boolean;
};

export default function ProcessStep({
  step,
  title,
  description,
  isLast,
}: ProcessStepProps) {
  return (
    <article className="grid grid-cols-[auto,1fr] gap-4">
      <div className="flex flex-col items-center">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full bg-primary ${textTheme.caption2} text-primary-foreground`}
        >
          {step}
        </span>
        {!isLast ? <span className="mt-3 h-16 w-px bg-background/15" /> : null}
      </div>

      <div className={`pb-2 ${isLast ? "md:pb-0" : ""}`}>
        <h3 className={`${textTheme.subheading3} text-background`}>{title}</h3>
        <p className={`mt-2 max-w-2xl ${textTheme.body2} text-background/70`}>
          {description}
        </p>
      </div>
    </article>
  );
}
