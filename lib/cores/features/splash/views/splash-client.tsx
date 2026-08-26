"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Boxes,
  Layers3,
  PencilRuler,
  Sparkles,
  SquareTerminal,
  Wand2,
} from "lucide-react";
import Navbar from "@/lib/cores/features/splash/components/navbar";

type ValueCardData = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
};

type ServiceCardData = {
  title: string;
  description: string;
  icon: ReactNode;
};

const navItems = [
  {
    text: "Hasil Pekerjaan",
    onClick: () => {
      document.getElementById("hasil-pekerjaan")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    text: "Layanan",
    onClick: () => {
      document.getElementById("keahlian")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    text: "Proses",
    onClick: () => {
      document.getElementById("proses")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    text: "Tentang",
    onClick: () => {
      document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
    },
  },
];

const valueCards: ValueCardData[] = [
  {
    id: "01",
    title: "Desain yang Berkesan",
    description:
      "Setiap tampilan disusun untuk meninggalkan kesan yang rapi, modern, dan terasa premium sejak pandangan pertama.",
    icon: <Sparkles className="size-4 text-[#635bff]" />,
  },
  {
    id: "02",
    title: "Cepat & Nyaman",
    description:
      "Struktur visual dibuat ringan, mudah dipahami, dan enak dipakai di desktop maupun mobile tanpa terasa padat.",
    icon: <SquareTerminal className="size-4 text-[#635bff]" />,
  },
  {
    id: "03",
    title: "Berorientasi pada Hasil",
    description:
      "Setiap section disusun untuk membantu pengunjung paham, percaya, lalu mengambil tindakan yang jelas.",
    icon: <Wand2 className="size-4 text-[#635bff]" />,
  },
];

const portfolioItems: {
  title: string;
  description: string;
  tone: "dark" | "light";
}[] = [
  {
    title: "Platform Analitik SaaS",
    description: "Desain arsitektur & pengembangan web",
    tone: "dark",
  },
  {
    title: "E-Commerce Premium",
    description: "Website bisnis & integrasi toko",
    tone: "light",
  },
];

const serviceCards: ServiceCardData[] = [
  {
    title: "Website Design",
    description:
      "Rancangan antarmuka yang estetik, jelas, dan terasa modern untuk kebutuhan brand yang ingin tampil lebih meyakinkan.",
    icon: <PencilRuler className="size-4 text-[#635bff]" />,
  },
  {
    title: "Website Development",
    description:
      "Pengembangan frontend dan backend yang rapi, responsif, dan siap berkembang mengikuti kebutuhan project.",
    icon: <Layers3 className="size-4 text-[#635bff]" />,
  },
  {
    title: "Landing Page",
    description:
      "Halaman konversi yang singkat, terarah, dan didesain untuk menyampaikan pesan dengan cepat.",
    icon: <Boxes className="size-4 text-[#635bff]" />,
  },
  {
    title: "Business Website",
    description:
      "Website profesional untuk company profile, service page, dan kebutuhan bisnis yang butuh kredibilitas lebih kuat.",
    icon: <Sparkles className="size-4 text-[#635bff]" />,
  },
  {
    title: "E-Commerce",
    description:
      "Tampilan toko online yang bersih, nyaman dipakai, dan mendukung pengalaman belanja yang lebih lancar.",
    icon: <SquareTerminal className="size-4 text-[#635bff]" />,
  },
  {
    title: "Website Optimization",
    description:
      "Penyempurnaan performa, struktur, dan aksesibilitas agar pengalaman pengguna terasa lebih mulus.",
    icon: <Wand2 className="size-4 text-[#635bff]" />,
  },
];

function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(99,91,255,0.18),transparent_58%)] blur-2xl" />

      <div className="relative rounded-[2rem] border border-black/8 bg-[#f3f0ea] p-4 shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
        <div className="rounded-[1.5rem] border border-black/8 bg-white p-3">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-black/10" />
            <span className="h-2 w-2 rounded-full bg-black/10" />
            <span className="h-2 w-2 rounded-full bg-black/10" />
          </div>

          <div className="overflow-hidden rounded-[1.25rem] border border-black/5 bg-[#f9f7f2]">
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#8b8b8b]">Studio Digital</p>
                <p className="mt-1 text-sm font-medium text-[#111111]">Designing modern digital experiences</p>
              </div>
              <div className="h-9 w-24 rounded-full border border-black/10 bg-white" />
            </div>

            <div className="grid gap-3 p-5">
              <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
                <div className="rounded-[1rem] bg-[#121212] p-4 text-white">
                  <div className="h-2 w-14 rounded-full bg-white/20" />
                  <div className="mt-5 space-y-2">
                    <div className="h-3 w-3/4 rounded-full bg-white/15" />
                    <div className="h-3 w-5/6 rounded-full bg-white/15" />
                    <div className="h-3 w-1/2 rounded-full bg-white/15" />
                  </div>
                  <div className="mt-6 flex items-end gap-2">
                    <div className="h-16 w-9 rounded-t-full bg-[#635bff]" />
                    <div className="h-24 w-9 rounded-t-full bg-[#a6a0ff]" />
                    <div className="h-12 w-9 rounded-t-full bg-[#d7d4ff]" />
                    <div className="h-28 w-9 rounded-t-full bg-[#635bff]" />
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-[1rem] border border-black/5 bg-white p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-2 w-16 rounded-full bg-black/10" />
                        <div className="mt-2 h-2 w-24 rounded-full bg-black/5" />
                      </div>
                      <div className="h-8 w-8 rounded-full bg-[#635bff]/10" />
                    </div>
                    <div className="mt-4 h-20 rounded-[0.9rem] bg-[linear-gradient(135deg,#f4f6ff_0%,#e9edff_100%)]" />
                  </div>
                  <div className="rounded-[1rem] bg-[#efeae4] p-4">
                    <div className="h-3 w-20 rounded-full bg-black/10" />
                    <div className="mt-3 h-12 rounded-[0.9rem] bg-white/70" />
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1rem] bg-white p-4">
                  <div className="h-2 w-14 rounded-full bg-[#635bff]/20" />
                  <div className="mt-4 h-16 rounded-[0.9rem] bg-[linear-gradient(180deg,#f4f7ff_0%,#dce2ff_100%)]" />
                </div>
                <div className="rounded-[1rem] bg-white p-4">
                  <div className="h-2 w-14 rounded-full bg-black/10" />
                  <div className="mt-4 h-16 rounded-[0.9rem] bg-[linear-gradient(180deg,#f4f4f4_0%,#dddddd_100%)]" />
                </div>
                <div className="rounded-[1rem] bg-white p-4">
                  <div className="h-2 w-14 rounded-full bg-black/10" />
                  <div className="mt-4 h-16 rounded-[0.9rem] bg-[linear-gradient(180deg,#fdf7f4_0%,#fde4d9_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ id, title, description, icon }: ValueCardData) {
  return (
    <article className="group rounded-[1.5rem] border border-black/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/10 hover:shadow-[0_20px_60px_rgba(17,17,17,0.06)] sm:p-7">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#635bff]">
        {icon}
        <span>{id}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#111111] sm:text-[1.65rem]">
        {title}
      </h3>
      <p className="mt-3 max-w-[28ch] text-sm leading-7 text-[#666666] sm:text-[15px]">
        {description}
      </p>
    </article>
  );
}

function PortfolioCard({
  title,
  description,
  tone,
}: {
  title: string;
  description: string;
  tone: "dark" | "light";
}) {
  const isDark = tone === "dark";

  return (
    <article className="group">
      <div
        className={`overflow-hidden rounded-[1.75rem] border border-white/10 ${
          isDark ? "bg-[#0e0e0e]" : "bg-[#e7dfd8]"
        }`}
      >
        <div className="border-b border-black/5 bg-white/80 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-black/10" />
              <span className="h-2 w-2 rounded-full bg-black/10" />
              <span className="h-2 w-2 rounded-full bg-black/10" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#888888]">Preview</span>
          </div>
        </div>

        <div className="relative p-4">
          {isDark ? (
            <div className="grid min-h-[320px] gap-4 rounded-[1.35rem] bg-[radial-gradient(circle_at_top,#24304d_0%,#0b0b0b_55%)] p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-2 w-20 rounded-full bg-white/20" />
                  <div className="mt-2 h-2 w-28 rounded-full bg-white/10" />
                </div>
                <div className="h-9 w-9 rounded-full border border-white/10 bg-white/5" />
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <div className="grid grid-cols-[1.15fr_0.85fr] gap-4">
                  <div className="rounded-[1rem] bg-[#121826] p-4">
                    <div className="h-2 w-16 rounded-full bg-[#635bff]" />
                    <div className="mt-4 h-36 rounded-[0.9rem] bg-[linear-gradient(180deg,#1a2b4b_0%,#0d1320_100%)]" />
                  </div>
                  <div className="grid gap-3">
                    <div className="h-20 rounded-[1rem] bg-white/10" />
                    <div className="h-20 rounded-[1rem] bg-white/10" />
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-3">
                <div className="h-16 flex-1 rounded-[1rem] bg-white/10" />
                <div className="h-24 flex-1 rounded-[1rem] bg-[#635bff]" />
                <div className="h-12 flex-1 rounded-[1rem] bg-white/10" />
              </div>
            </div>
          ) : (
            <div className="grid min-h-[320px] gap-4 rounded-[1.35rem] bg-[linear-gradient(180deg,#f7f3ed_0%,#ece5db_100%)] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-2 w-20 rounded-full bg-black/10" />
                  <div className="mt-2 h-2 w-28 rounded-full bg-black/5" />
                </div>
                <div className="h-9 w-24 rounded-full border border-black/10 bg-white" />
              </div>
              <div className="rounded-[1.25rem] border border-black/8 bg-white p-4 shadow-[0_16px_40px_rgba(17,17,17,0.05)]">
                <div className="grid grid-cols-[1fr_0.75fr] gap-4">
                  <div className="rounded-[1rem] bg-[#f3f6ff] p-4">
                    <div className="h-2 w-20 rounded-full bg-[#635bff]/20" />
                    <div className="mt-4 h-36 rounded-[0.9rem] bg-[linear-gradient(180deg,#f9fbff_0%,#dbe3ff_100%)]" />
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-[1rem] bg-[#faf7f2] p-4">
                      <div className="h-2 w-14 rounded-full bg-black/10" />
                      <div className="mt-4 h-16 rounded-[0.9rem] bg-white" />
                    </div>
                    <div className="rounded-[1rem] bg-[#faf7f2] p-4">
                      <div className="h-2 w-16 rounded-full bg-black/10" />
                      <div className="mt-4 h-16 rounded-[0.9rem] bg-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="h-16 rounded-[1rem] bg-white/80" />
                <div className="h-16 rounded-[1rem] bg-white/80" />
                <div className="h-16 rounded-[1rem] bg-white/80" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium tracking-[-0.03em] text-white/95 sm:text-[1.45rem]">
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/65">{description}</p>
        </div>
        <ArrowUpRight className="mt-1 size-5 shrink-0 text-white/85 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </article>
  );
}

function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardData) {
  return (
    <article className="rounded-[1.5rem] border border-black/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(17,17,17,0.05)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f3f0ff]">
        {icon}
      </div>
      <h3 className="mt-5 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#111111]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#666666]">{description}</p>
    </article>
  );
}

export default function SplashClient() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111]">
      <Navbar icons="Studio Digital" navItems={navItems} />

      <main>
        <section id="hero" className="mx-auto w-full max-w-[1280px] px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-10">
            <div className="max-w-[720px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#635bff]">
                Studio Digital
              </p>
              <h1 className="mt-5 max-w-[11ch] text-[clamp(3rem,7vw,5.65rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-[#111111]">
                Website yang berkesan. Nyaman digunakan. Dibuat untuk menghasilkan.
              </h1>
              <p className="mt-6 max-w-[44rem] text-[15px] leading-8 text-[#666666] sm:text-[16px]">
                Studio Digital menciptakan pengalaman digital premium yang membantu brand
                tampil lebih meyakinkan, lebih mudah dipahami, dan lebih siap mengubah
                perhatian menjadi tindakan.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button className="rounded-full bg-[#635bff] px-6 text-sm font-medium text-white shadow-none hover:bg-[#5346d8]">
                  Mulai Proyek
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-black/10 bg-white px-6 text-sm font-medium text-[#111111] hover:bg-black/[0.03]"
                  onClick={() => document.getElementById("hasil-pekerjaan")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Lihat Hasil Pekerjaan
                </Button>
              </div>
            </div>

            <HeroPreview />
          </div>
        </section>

        <section className="mx-auto mt-20 w-full max-w-[1280px] border-y border-black/8 px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-5 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#8a8a8a]">
              Dipercaya oleh berbagai brand visioner
            </p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4 text-sm font-medium tracking-[-0.02em] text-[#666666] sm:grid-cols-4">
              <span>ACME Corp</span>
              <span>Vortex</span>
              <span>Lumina</span>
              <span>Aura Systems</span>
            </div>
          </div>
        </section>

        <section id="proses" className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {valueCards.map((card) => (
              <ValueCard key={card.id} {...card} />
            ))}
          </div>
        </section>

        <section id="hasil-pekerjaan" className="bg-[#0f0f0f] text-white">
          <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <h2 className="max-w-[8ch] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                Hasil yang berbicara sendiri.
              </h2>

              <button
                type="button"
                className="hidden text-sm font-medium text-[#a6a0ff] transition-colors hover:text-white md:inline-flex"
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

        <section id="keahlian" className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-[clamp(2.1rem,4vw,3.5rem)] font-semibold tracking-[-0.05em] text-[#111111]">
              Keahlian Kami
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>
      </main>

      <footer id="kontak" className="bg-[#111111] text-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.75fr_0.7fr] lg:px-8">
          <div>
            <p className="text-2xl font-medium tracking-[-0.04em]">Studio Digital</p>
            <p className="mt-4 max-w-[28rem] text-sm leading-7 text-white/65">
              Menciptakan pengalaman digital premium untuk brand yang menghargai kualitas,
              kejelasan, dan hasil yang terasa nyata.
            </p>
            <p className="mt-12 text-xs uppercase tracking-[0.22em] text-white/40">
              © 2026 Studio Digital. All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">
              Navigasi
            </p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              {navItems.map((item) => (
                <button
                  key={item.text}
                  type="button"
                  onClick={item.onClick}
                  className="w-fit transition-colors hover:text-white"
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/45">
              Kontak
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              <p>halo@studiodigital.co</p>
              <p>+62 812 3456 7890</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
