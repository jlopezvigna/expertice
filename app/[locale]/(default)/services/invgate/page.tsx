import { Locale, locales } from "@/lib/i18n";
import { InvgatePageClient } from "./invgate-page";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function InvgatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  return <InvgatePageClient locale={locale} />;
}
