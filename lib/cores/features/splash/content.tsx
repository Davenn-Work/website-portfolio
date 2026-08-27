import type { ReactNode } from "react";
import {
  Boxes,
  Layers3,
  PencilRuler,
  Sparkles,
  SquareTerminal,
  Wand2,
} from "lucide-react";

export type NavItem = {
  text: string;
  onClick: () => void;
};

export type ValueCardData = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
};

export type PortfolioCardData = {
  title: string;
  description: string;
  tone: "dark" | "light";
};

export type ServiceCardData = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type ProcessStepData = {
  step: string;
  title: string;
  description: string;
};

export type PricingCardData = {
  name: string;
  description: string;
  price: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

export const valueCards: ValueCardData[] = [
  {
    id: "01",
    title: "Desain yang Berkesan",
    description:
      "Setiap tampilan disusun untuk meninggalkan kesan yang rapi, modern, dan terasa premium sejak pandangan pertama.",
    icon: <Sparkles className="size-4 text-primary" />,
  },
  {
    id: "02",
    title: "Cepat & Nyaman",
    description:
      "Struktur visual dibuat ringan, mudah dipahami, dan enak dipakai di desktop maupun mobile tanpa terasa padat.",
    icon: <SquareTerminal className="size-4 text-primary" />,
  },
  {
    id: "03",
    title: "Berorientasi pada Hasil",
    description:
      "Setiap section disusun untuk membantu pengunjung paham, percaya, lalu mengambil tindakan yang jelas.",
    icon: <Wand2 className="size-4 text-primary" />,
  },
];

export const portfolioItems: PortfolioCardData[] = [
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

export const serviceCards: ServiceCardData[] = [
  {
    title: "Website Design",
    description:
      "Rancangan antarmuka yang estetik, jelas, dan terasa modern untuk kebutuhan brand yang ingin tampil lebih meyakinkan.",
    icon: <PencilRuler className="size-4 text-primary" />,
  },
  {
    title: "Website Development",
    description:
      "Pengembangan frontend dan backend yang rapi, responsif, dan siap berkembang mengikuti kebutuhan project.",
    icon: <Layers3 className="size-4 text-primary" />,
  },
  {
    title: "Landing Page",
    description:
      "Halaman konversi yang singkat, terarah, dan didesain untuk menyampaikan pesan dengan cepat.",
    icon: <Boxes className="size-4 text-primary" />,
  },
  {
    title: "Business Website",
    description:
      "Website profesional untuk company profile, service page, dan kebutuhan bisnis yang butuh kredibilitas lebih kuat.",
    icon: <Sparkles className="size-4 text-primary" />,
  },
  {
    title: "E-Commerce",
    description:
      "Tampilan toko online yang bersih, nyaman dipakai, dan mendukung pengalaman belanja yang lebih lancar.",
    icon: <SquareTerminal className="size-4 text-primary" />,
  },
  {
    title: "Website Optimization",
    description:
      "Penyempurnaan performa, struktur, dan aksesibilitas agar pengalaman pengguna terasa lebih mulus.",
    icon: <Wand2 className="size-4 text-primary" />,
  },
];

export const processSteps: ProcessStepData[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Kami menyimak kebutuhan, memahami audiens, dan merumuskan arah yang paling sesuai untuk project Anda.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Struktur visual disusun jadi konsep yang rapi, jelas, dan mudah dikembangkan ke tahap berikutnya.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Desain diterjemahkan ke implementasi yang responsif, optimal, dan siap dipakai di berbagai perangkat.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Kami memastikan performa, detail akhir, dan peluncuran berjalan mulus tanpa mengorbankan kualitas.",
  },
];

export const pricingCards: PricingCardData[] = [
  {
    name: "Esensial",
    description:
      "Cocok untuk startup dan bisnis kecil yang membutuhkan website profesional lebih cepat.",
    price: "Mulai Rp 15 Jt",
    features: [
      "Desain Landing Page",
      "Pengembangan Frontend Dasar",
      "Responsif Mobile",
    ],
  },
  {
    name: "Profesional",
    description:
      "Solusi lengkap untuk perusahaan yang membutuhkan platform digital lebih komprehensif.",
    price: "Mulai Rp 45 Jt",
    features: [
      "Full UX/UI Design System",
      "Full-stack Web App Development",
      "Integrasi CMS & API",
      "3 Bulan Maintenance",
    ],
    featured: true,
    badge: "Populer",
  },
];
