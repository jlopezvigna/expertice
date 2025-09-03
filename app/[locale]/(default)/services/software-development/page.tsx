import { Locale, locales } from "@/lib/i18n";
import { SoftwareDevelopmentPageClient } from "./software-development";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function SoftwareDevelopmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  return <SoftwareDevelopmentPageClient locale={locale} />;
}
