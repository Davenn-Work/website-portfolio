import { textTheme } from "@/lib/cores/constants/text-theme";
import { pricingCards } from "@/lib/cores/features/splash/content";
import PriceCard from "@/lib/cores/features/splash/components/price-card";

export default function PricingSection() {
  return (
    <section id="harga" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className={`${textTheme.heading2} text-foreground`}>
          Harga Transparan
        </h2>
        <p className={`mt-4 ${textTheme.body1} text-muted-foreground`}>
          Pilih paket yang sesuai dengan skala proyek Anda.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {pricingCards.map((card) => (
          <PriceCard key={card.name} {...card} />
        ))}
      </div>
    </section>
  );
}
