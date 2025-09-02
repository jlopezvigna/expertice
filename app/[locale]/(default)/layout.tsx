import Footer from "@/components/share/Footer";
import Navbar from "@/components/share/nav-bar/Navbar";
import { getTranslations, locales, type Locale } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Layout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const translations = getTranslations(locale);
  return (
    <>
      <Navbar translations={translations} locale={locale} />
      {children}
      <Footer translations={translations} locale={locale} />
    </>
  );
}
