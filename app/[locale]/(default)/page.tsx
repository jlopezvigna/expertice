import About from "@/components/features/about/About";
import LastBlogs from "@/components/features/blogs/LastBlogs";
import CaseStudies from "@/components/features/case-studies/CaseStudies";
import Hero from "@/components/features/home/Hero";
import Services from "@/components/features/services/Services";
import { VelocityScroll } from "@/components/magic/velocity-scrool";
import { CTABanner } from "@/components/share/CTABanner";
import { getTranslations, Locale, locales } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const translations = getTranslations(locale);
  return (
    <main className="min-h-screen">
      <Hero />
      <About translations={translations} locale={locale} />
      <Services translations={translations} locale={locale} />
      <CaseStudies />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20 bg-gradient-to-r from-primary to-accent-foreground">
        <VelocityScroll defaultVelocity={0.5} className="text-background">
          Innovation · AI · Agiles · Automation · Development · Consulting ·
          Support ·
        </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-accent-foreground" />
      </div>
      <LastBlogs translations={translations} locale={locale} />
      <CTABanner rounded={false} locale={locale} />
    </main>
  );
}
