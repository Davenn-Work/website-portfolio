import { valueCards } from "@/lib/cores/features/splash/content";
import ValueCard from "@/lib/cores/features/splash/components/value-card";

export default function ValuePropositionSection() {
  return (
    <section
      id="keunggulan"
      className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {valueCards.map((card) => (
          <ValueCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
