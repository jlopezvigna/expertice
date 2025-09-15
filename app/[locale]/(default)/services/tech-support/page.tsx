import { Locale, locales } from "@/lib/i18n";
import { Metadata } from "next";
import { TechSupportPage as TechSupportPageComponent } from "./tech-support-page";

export const metadata: Metadata = {
  title: "Tech Support | Expertice - IT Solutions",
  description: "Tech Support | Expertice - IT Solutions",
  keywords: "Tech Support, Expertice, IT Solutions",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function TechSupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  return <TechSupportPageComponent locale={locale} />;
}
