import { BackgroundRoundedBlur } from "@/components/share/background-rounded-blur";
import { CTABanner } from "@/components/share/CTABanner";
import { Title } from "@/components/ui/title";
import type { Metadata } from "next";
import Clients from "./_components/Clients";
import Culture from "./_components/Culture";
import Stats from "./_components/Stats";
import { statsData } from "./_components/constant";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Expertice - IT Solutions",
  description:
    "Conoce más sobre Expertice, tu socio confiable en soluciones IT. Nuestra historia, misión, visión y el equipo detrás de nuestros servicios.",
  keywords: "sobre nosotros, historia, misión, visión, equipo IT, Expertice",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden relative pt-16 bg-primary/10">
      <BackgroundRoundedBlur left={false} />

      {/* Content */}
      <div className="relative container mx-auto py-12">
        <Title text="About Us" />

        <Culture />

        <Stats data={statsData} gridCols="4" />

        <Clients />

        <CTABanner />
      </div>
    </main>
  );
}
