import About from "@/components/blocks/About";
import CaseStudies from "@/components/blocks/CaseStudies";
import { CTABanner } from "@/components/blocks/CTABanner";
import Hero from "@/components/blocks/Hero";
import LastBlogs from "@/components/blocks/LastBlogs";
import Services from "@/components/blocks/Services";
import { VelocityScroll } from "@/components/magic/velocity-scrool";

export default function Home() {
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
