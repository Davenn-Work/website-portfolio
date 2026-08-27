import { portfolioItems } from "@/lib/cores/features/splash/content";
import PortfolioCard from "@/lib/cores/features/splash/components/portfolio-card";

export default function PortfolioSection() {
  return (
    <section id="hasil-pekerjaan" className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="max-w-xl text-4xl font-semibold leading-none tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block">Hasil yang</span>
            <span className="block">berbicara sendiri.</span>
          </h2>

          <button
            type="button"
            className="hidden text-sm font-medium text-brand-soft transition-colors hover:text-background md:inline-flex"
            onClick={() => document.getElementById("keahlian")?.scrollIntoView({ behavior: "smooth" })}
          >
            Lihat Semua Pekerjaan
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
