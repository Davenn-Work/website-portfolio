"use client";

import Navbar from "@/lib/cores/features/splash/components/navbar";
import HeroSection from "@/lib/cores/features/splash/components/hero-section";
import ValuePropositionSection from "@/lib/cores/features/splash/components/value-proposition-section";
import PortfolioSection from "@/lib/cores/features/splash/components/portfolio-section";
import ServicesSection from "@/lib/cores/features/splash/components/services-section";
import SiteFooter from "@/lib/cores/features/splash/components/site-footer";
import type { NavItem } from "@/lib/cores/features/splash/content";

const navItems: NavItem[] = [
  {
    text: "Hasil Pekerjaan",
    onClick: () => {
      document
        .getElementById("hasil-pekerjaan")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    text: "Layanan",
    onClick: () => {
      document
        .getElementById("keahlian")
        ?.scrollIntoView({ behavior: "smooth" });
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

export default function SplashClient() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar icons="Scaleweb" navItems={navItems} />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <PortfolioSection />
        <ServicesSection />
      </main>
      <SiteFooter navItems={navItems} />
    </div>
  );
}
