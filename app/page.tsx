import { Metadata } from "next";
import SplashClient from "@/lib/cores/features/splash/views/splash-client";

export const metadata: Metadata = {
  title: "Scaleweb - Jasa Pembuatan Website Professional",
  description:
    "Menyediakan jasa pembuatan website company profile, UMKM, landing page, dan dashboard.",
};

export default function SplashPage() {
  return <SplashClient />;
}
