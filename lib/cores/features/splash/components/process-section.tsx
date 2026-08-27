import { textTheme } from "@/lib/cores/constants/text-theme";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { processSteps } from "@/lib/cores/features/splash/content";
import "react-vertical-timeline-component/style.min.css";

export default function ProcessSection() {
  return (
    <section id="proses-kerja" className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className={`${textTheme.heading2} text-background`}>
            Proses Kerja
          </h2>
        </div>
        <div className="relative mt-16">
          <div className="space-y-16">
            <VerticalTimeline layout="1-column" lineColor="#111111">
              {processSteps.map((step) => (
                <VerticalTimelineElement
                  key={step.step}
                  contentStyle={{
                    background: "transparent",
                    boxShadow: "none",
                    padding: "0 0 0 32px",
                  }}
                  contentArrowStyle={{
                    display: "none",
                  }}
                  iconStyle={{
                    borderRadius: 16,
                    background: "#111111",
                    border: "1px solid white",
                    boxShadow: "none",
                  }}
                  icon={
                    <div className="flex h-full w-full items-center justify-center text-lg font-semibold">
                      {step.step}
                    </div>
                  }
                >
                  <div className="pt-1">
                    <h3 className={`${textTheme.subheading1}`}>{step.title}</h3>

                    <p
                      className={`mt-2 max-w-md ${textTheme.body1} text-gray-350`}
                    >
                      {step.description}
                    </p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
