import { ServiceHeader } from "@/app/services/_components/ServiceHeader";
import { CTABanner } from "@/components/blocks/CTABanner";
import { VelocityScroll } from "@/components/magic/velocity-scrool";
import { RedhatCard } from "./RedhatCard";

export default function RedHatSolutionsPage() {
  return (
    <main className="container mx-auto">
      <ServiceHeader
        title="Red Hat Enterprise Solutions"
        description="Comprehensive consulting, training, and implementation of Red Hat tools to optimize your business operations."
        tag="RED HAT SOLUTIONS"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-12">
        {solutions.map((solution, idx) => (
          <RedhatCard
            key={`${solution.name}-${idx}`}
            name={solution.name}
            description={solution.description}
            check={solution.check}
          />
        ))}
      </div>

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
const solutions = [
  {
    name: "Red Hat Enterprise Linux (RHEL)",
    description:
      "A secure, stable, and high-performance operating system optimized for enterprise workloads.",
    check: [
      "Scalability",
      "Security",
      "Long-term support",
      "Enterprise-grade performance",
    ],
  },
  {
    name: "Red Hat OpenShift",
    description:
      "A Kubernetes-based container platform for automating application deployment, scaling, and operations.",
    check: [
      "DevOps integration",
      "Multi-cloud compatibility",
      "Security",
      "Automation",
    ],
  },
  {
    name: "Red Hat Ansible Automation Platform",
    description:
      "An IT automation tool for configuration management, application deployment, and orchestration.",
    check: [
      "Agentless automation",
      "Scalability",
      "Integration with cloud & on-premise environments",
      "Security",
    ],
  },
  {
    name: "Red Hat OpenStack Platform",
    description:
      "An enterprise-ready cloud infrastructure based on OpenStack for building and managing private clouds.",
    check: [
      "Scalability",
      "High availability",
      "NFV support",
      "Integration with hybrid cloud",
    ],
  },
  {
    name: "Red Hat Satellite",
    description:
      "A system management solution for deploying, managing, and securing RHEL environments.",
    check: [
      "Patch management",
      "Provisioning",
      "Security compliance",
      "Centralized control",
    ],
  },
  {
    name: "Red Hat Quay",
    description:
      "A private container registry solution for storing, building, and distributing container images securely.",
    check: [
      "Image scanning",
      "Geo-replication",
      "Automation",
      "Role-based access",
    ],
  },
  {
    name: "Red Hat Fuse",
    description:
      "A distributed integration platform for connecting applications, services, and APIs across environments.",
    check: [
      "Cloud-native",
      "Microservices-based",
      "Integration with Red Hat products",
      "Scalability",
    ],
  },
  {
    name: "Red Hat 3scale API Management",
    description:
      "A robust API management solution for controlling, securing, and analyzing APIs.",
    check: [
      "Traffic control",
      "Access policies",
      "Analytics",
      "Monetization support",
    ],
  },
  {
    name: "Red Hat Advanced Cluster Security for Kubernetes",
    description:
      "A security platform that helps enterprises protect containerized applications running in Kubernetes.",
    check: [
      "Threat detection",
      "Policy enforcement",
      "Runtime security",
      "Compliance reporting",
    ],
  },
  {
    name: "Red Hat JBoss Enterprise Application Platform (EAP)",
    description:
      "A cloud-native, enterprise-grade Java EE application server for building scalable applications.",
    check: [
      "High performance",
      "Cloud compatibility",
      "Lightweight architecture",
      "Enterprise support",
    ],
  },
];
