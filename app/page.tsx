import About from "@/components/blocks/About";
import Services from "@/components/blocks/Services";
import Hero from "@/components/blocks/Hero";
import LastBlogs from "@/components/blocks/LastBlogs";
import CaseStudies from "@/components/blocks/CaseStudies";
import { CTABanner } from "@/components/blocks/CTABanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />

      <CaseStudies />
      <CTABanner className="container mx-auto" />
      <LastBlogs />
    </main>
  );
}
