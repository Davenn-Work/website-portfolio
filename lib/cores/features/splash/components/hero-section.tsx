"use client";

import { Button } from "@/components/ui/button";
import HeroPreview from "@/lib/cores/features/splash/components/hero-preview";
import { textTheme } from "@/lib/cores/constants/text-theme";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="max-w-3xl">
          <p className={`${textTheme.label1} text-primary`}>
            Scaleweb
          </p>
          <h1 className={`mt-5 max-w-xl ${textTheme.heading1} text-foreground`}>
            <span className="block">Website yang berkesan.</span>
            <span className="block">Nyaman digunakan.</span>
            <span className="block">Dibuat untuk menghasilkan.</span>
          </h1>
          <p className={`mt-6 max-w-3xl ${textTheme.body1} text-muted-foreground`}>
            Scaleweb menciptakan pengalaman digital premium yang membantu brand
            tampil lebih meyakinkan, lebih mudah dipahami, dan lebih siap
            mengubah perhatian menjadi tindakan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button className={`px-6 ${textTheme.button1}`}>Mulai Proyek</Button>
            <Button
              variant="outline"
              className={`border-border bg-card px-6 ${textTheme.button1} text-foreground hover:bg-muted`}
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
