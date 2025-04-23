import { CTABanner } from "@/components/share/CTABanner";
import { ServiceHeader } from "../_components/ServiceHeader";
import { Title } from "./_components/title";
import { redHatSolutions } from "./constant";

export default function RedHatPage() {
  return (
    <main className="bg-primary/10">
      <ServiceHeader
        title="Red Hat Enterprise Solutions"
        description="Comprehensive consulting, training, and implementation of Red Hat tools to optimize your business operations."
        tag="RED HAT SOLUTIONS"
      />

      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {redHatSolutions.map((solution, idx) => (
            <div
              key={`${solution.name}-${idx}`}
              className={`relative overflow-hidden h-[400px] bg-muted rounded-3xl p-8 flex flex-col gap-6 ${solution.className}`}
            >
              <Title title={solution.name} />

              <h3 className="text-xl font-bold text-foreground text-center pt-8">
                {solution.description}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Ready to transform your business with Red Hat?"
        description="Contact us to discuss how Red Hat solutions can help you achieve your business goals."
      />

      {/* <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll defaultVelocity={0.5} className="text-[#ee0000]">
          Red Hat Enterprise Linux · Red Hat OpenShift · Kubernetes Solutions ·
          Red Hat Ansible Automation · Red Hat Cloud · Red Hat Consulting &
          Support ·
        </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div> */}
    </main>
  );
}
