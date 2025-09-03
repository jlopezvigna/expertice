import { Locale, locales } from "@/lib/i18n";
import type { Metadata } from "next";
import AboutPageClient from "./about";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Expertice - IT Solutions",
  description:
    "Conoce más sobre Expertice, tu socio confiable en soluciones IT. Nuestra historia, misión, visión y el equipo detrás de nuestros servicios.",
  keywords: "sobre nosotros, historia, misión, visión, equipo IT, Expertice",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  return <AboutPageClient locale={locale} />;
}
