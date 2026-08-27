import { serviceCards } from "@/lib/cores/features/splash/content";
import ServiceCard from "@/lib/cores/features/splash/components/service-card";

export default function ServicesSection() {
  return (
    <section id="keahlian" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Keahlian Kami
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {serviceCards.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
