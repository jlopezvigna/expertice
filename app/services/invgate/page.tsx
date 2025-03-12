"use client";
import { ServiceHeader } from "@/app/services/_components/ServiceHeader";
import { motion } from "framer-motion";
import StickyScrollSection from "@/components/sticky-scroll-section";
import { Marquee } from "@/components/magic/marquee";
import { invgate_leader_logos } from "@/constants";
import Image from "next/image";
import { Video } from "@/components/ui/video";
import { CTABanner } from "@/components/blocks/CTABanner";
import { InvgateFeatureCard } from "./_components/invgate-feature-card";
import {
  assetsManagementFeatures,
  serviceManagementFeatures,
} from "./constant";

export default function ITServiceManagementPage() {
  return (
    <main className="container mx-auto">
      <ServiceHeader
        title="IT Service & Asset Management"
        description="Optimize IT service delivery with InvGate's help desk and asset management solutions for seamless operations."
        tag="IT SERVICE MANAGEMENT"
      />

      <StickyScrollSection
        title="InvGate Service Management"
        subTitle="Streamline your IT support with our comprehensive help desk solution, featuring ticket management and automated workflows."
        media={
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Video
              className="rounded-2xl"
              src="/invgate/service-management.mp4"
              width={1000}
              height={1000}
            />
          </motion.div>
        }
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {serviceManagementFeatures.map((feature, i) => (
            <InvgateFeatureCard
              key={i}
              idx={i}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Integrations</h4>
        </div>
      </StickyScrollSection>
      <div className="relative mx-auto py-16">
        <h3 className="text-lg font-semibold text-center">
          Globals leaders trust by InvGate
        </h3>

        {/* Globals Leader Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Marquee
            pauseOnHover
            className="[--duration:30s] [--gap:7rem]"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
            }}
          >
            {invgate_leader_logos.map((logo) => (
              <Image
                key={logo.imageUrl}
                src={logo.imageUrl}
                alt={logo.alt}
                width={100}
                height={100}
              />
            ))}
          </Marquee>
        </motion.div>
      </div>
      <StickyScrollSection
        reverse
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
