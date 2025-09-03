import { Locale, locales } from "@/lib/i18n";
import { RedHatPageClient } from "./red-hat";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RedHatPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  return <RedHatPageClient locale={locale} />;
}
