"use client";

import { Button } from "@/components/ui/button";
import HeroPreview from "@/lib/cores/features/splash/components/hero-preview";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Scaleweb
          </p>
          <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <span className="block">Website yang berkesan.</span>
            <span className="block">Nyaman digunakan.</span>
            <span className="block">Dibuat untuk menghasilkan.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            Scaleweb menciptakan pengalaman digital premium yang membantu brand
            tampil lebih meyakinkan, lebih mudah dipahami, dan lebih siap
            mengubah perhatian menjadi tindakan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button className="px-6 text-sm font-medium">Mulai Proyek</Button>
            <Button
              variant="outline"
              className="border-border bg-card px-6 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() =>
                document
                  .getElementById("hasil-pekerjaan")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Lihat Hasil Pekerjaan
            </Button>
          </div>
        </div>

        <HeroPreview />
      </div>
    </section>
  );
}
