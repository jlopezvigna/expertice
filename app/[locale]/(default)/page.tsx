import About from "@/components/blocks/About";
import Services from "@/components/blocks/Services";
import Hero from "@/components/blocks/Hero";
import LastBlogs from "@/components/blocks/LastBlogs";
import CaseStudies from "@/components/blocks/CaseStudies";
import { CTABanner } from "@/components/blocks/CTABanner";
import { VelocityScroll } from "@/components/magic/velocity-scrool";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function Home({ params }: Props) {
  // Enable static rendering
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20 bg-gradient-to-r from-primary to-accent-foreground">
        <VelocityScroll
          defaultVelocity={0.5}
          // className="text-accent-foreground"
          className="text-background"
        >
          Innovation · AI · Agiles · Automation · Development · Consulting ·
          Support ·
        </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-accent-foreground" />
      </div>
      <LastBlogs />
      <CTABanner rounded={false} />
    </main>
  );
}
