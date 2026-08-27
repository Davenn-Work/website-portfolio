import { textTheme } from "@/lib/cores/constants/text-theme";
import { processSteps } from "@/lib/cores/features/splash/content";
import ProcessStep from "@/lib/cores/features/splash/components/process-step";

export default function ProcessSection() {
  return (
    <section id="proses-kerja" className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className={`${textTheme.heading2} text-background`}>
            Proses Kerja
          </h2>
        </div>

        <div className="mt-10 grid gap-6">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.step}
              {...step}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
