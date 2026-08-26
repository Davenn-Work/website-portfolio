import { Metadata } from "next";
import SplashClient from "@/lib/cores/features/splash/views/splash-client";

export const metadata: Metadata = {
  title: "Studio Digital",
  description:
    "Website jasa pembuatan website yang berkesan, nyaman digunakan, dan berorientasi pada hasil.",
};

export default function SplashPage() {
  return <SplashClient />;
}
