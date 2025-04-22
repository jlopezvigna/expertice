import { ServiceHeader } from "../_components/ServiceHeader";

import {
  Cloud,
  // GitBranch,
  // Globe,
  LaptopMinimalCheck,
  // Network,
  Smartphone,
} from "lucide-react";

// import {
//   HorizontalScroll,
//   HorizontalItem,
// } from "@/components/others/HorizontalScroll";

import { CTABanner } from "@/components/blocks/CTABanner";
import { Badge } from "@/components/ui/badge";

// const data = [
//   {
//     title: "Mobile Development",
//     description:
//       "We develop mobile applications for iOS and Android platforms using the latest technologies and frameworks.",
//     icon: <Smartphone className="w-8 h-8 text-primary" />,
//   },
//   {
//     title: "Web Development",
//     description:
//       "We develop web applications using the latest technologies and frameworks.",
//     icon: <Globe className="w-8 h-8 text-primary" />,
//   },
//   {
//     title: "API Management",
//     description:
//       "We design, implement, and manage APIs that connect your services and applications seamlessly.",
//     icon: <Network className="w-8 h-8 text-primary" />,
//   },
//   {
//     title: "DevOps",
//     description:
//       "We implement DevOps solutions and best practices to streamline your development and operations.",
//     icon: <GitBranch className="w-8 h-8 text-primary" />,
//   },
// ];

export default function SoftwareDevelopmentPage() {
  return (
    <main className="container mx-auto">
      <ServiceHeader
        title="Software Development"
        description="Custom software development, microservices, testing, system analysis, and project management for scalable solutions."
        tag="WEB · MOBILE · DEVOPS · API"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="relative overflow-hidden w-full h-[400px] bg-gradient-to-r from-[#3485FD] to-[#FEBBFF] rounded-3xl p-8 flex flex-col gap-6">
          <div className="text-center">
            <Badge>Mobile Development</Badge>
          </div>

          <h3 className="text-2xl font-bold text-background text-center">
            Build your apps with our expert teams
          </h3>
          <Smartphone className="absolute bottom-0 -right-20 w-60 h-60 text-white/30" />
          <div className="absolute bottom-0 left-0 right-0 w-full h-full bg-gradient-to-t from-transparent to-background/50 rounded-3xl"></div>
        </div>
        <div className="relative overflow-hidden h-[400px] col-span-2 bg-muted rounded-3xl p-8 flex flex-col gap-6">
          <span className="text-center">
            <Badge>Web Development</Badge>
          </span>

          <h3 className="text-2xl font-bold text-foreground text-center">
            Outsourcing your software development needs
          </h3>
          <LaptopMinimalCheck className="absolute bottom-0 -right-20 w-60 h-60 text-black/30" />
          {/* <MonitorCog className="absolute bottom-0 -right-20 w-60 h-60 text-black/30" /> */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative overflow-hidden w-full h-[400px] bg-gradient-to-r from-[#3485FD] to-[#FEBBFF] rounded-3xl p-8 flex flex-col gap-6">
          <div className="text-center">
            <Badge>DevOps</Badge>
          </div>

          <h3 className="text-2xl font-bold text-background text-center">
            Mantain your cloud infrastructure
          </h3>
          <Cloud className="absolute bottom-0 -left-20 w-60 h-60 text-white/30" />

          <div className="absolute bottom-0 left-0 right-0 w-full h-full bg-gradient-to-t from-transparent to-background/50 rounded-3xl"></div>
        </div>
        <div className="relative overflow-hidden h-[400px] bg-muted rounded-3xl p-8 flex flex-col gap-6">
          <span className="text-center">
            <Badge>API</Badge>
          </span>

          <h3 className="text-2xl font-bold text-foreground text-center">
            Build your API with the best technologies
          </h3>
          <LaptopMinimalCheck className="absolute bottom-0 -right-20 w-60 h-60 text-black/30" />
          {/* <MonitorCog className="absolute bottom-0 -right-20 w-60 h-60 text-black/30" /> */}
        </div>
        <div className="relative overflow-hidden h-[400px] bg-muted rounded-3xl p-8 flex flex-col gap-6">
          <span className="text-center">
            <Badge>Web Development</Badge>
          </span>

          <h3 className="text-2xl font-bold text-foreground text-center">
            Outsourcing your software development needs
          </h3>
          <LaptopMinimalCheck className="absolute bottom-0 -right-20 w-60 h-60 text-black/30" />
          {/* <MonitorCog className="absolute bottom-0 -right-20 w-60 h-60 text-black/30" /> */}
        </div>
      </div>

      {/* 
      <HorizontalScroll>
        {data.map((item, index) => (
          <HorizontalItem key={index} className="w-[300px] h-[450px]">
            <div className="w-full h-full bg-muted rounded-3xl p-8 flex flex-col gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>

              <div className="mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-background" />
                  <div>
                    <p className="font-semibold">Cliente {index}</p>
                    <p className="text-sm text-muted-foreground">
                      CEO, Company {index}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </HorizontalItem>
        ))}
      </HorizontalScroll> */}

      <CTABanner />
    </main>
  );
}
