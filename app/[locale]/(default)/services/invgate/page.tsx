import StickyScrollSection from "@/components/sticky-scroll-section";
import { ServiceHeader } from "../_components/ServiceHeader";

import { CTABanner } from "@/components/blocks/CTABanner";
import { Video } from "@/components/ui/video";
import { setRequestLocale } from "next-intl/server";
import { InvgateFeatureCard } from "./_components/invgate-feature-card";
import Wrapper from "./_components/wrapper";
import { assetsManagementFeatures } from "./constant";
type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function InvgatePage({ params }: Props) {
  // Enable static rendering
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="container mx-auto">
      <ServiceHeader
        title="IT Service & Asset Management"
        description="Optimize IT service delivery with InvGate's help desk and asset management solutions for seamless operations."
        tag="IT SERVICE MANAGEMENT"
      />
      <Wrapper />
      <StickyScrollSection
        title="InvGate Assets Management"
        subTitle="Streamline your IT support with our comprehensive help desk solution, featuring ticket management and automated workflows."
        media={
          <Video
            className="rounded-2xl"
            src="/invgate/insight.mp4"
            width={1000}
            height={1000}
          />
        }
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {assetsManagementFeatures.map((feature, i) => (
            <InvgateFeatureCard
              key={i}
              idx={i}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </StickyScrollSection>

      <CTABanner
        title="Ready to level up your process?"
        description="Contact us today to learn how InvGate and Expertice can help you achieve your goals."
      />
    </main>
  );
}
