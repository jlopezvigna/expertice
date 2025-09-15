"use client";
import { motion } from "framer-motion";
import { Check, Headphones, Server, Shield } from "lucide-react";
import Image from "next/image";
import { ServiceHeader } from "../_components/ServiceHeader";
import { RetentionWidget } from "./retention-widget";
import { RevenueWidget } from "./revenue-widget";
import { SLAWidget } from "./sla-widget";
import { CTABanner } from "@/components/share/CTABanner";
import { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function TechSupportPage({ locale }: { locale: Locale }) {
  return (
    <main
      className={cn("relative", {
        "bg-[#FAFAFA]": false,
      })}
    >
      <ServiceHeader
        title="Tech Support"
        description="At Expertice, we offer a range of technology infrastructure support solutions designed to ensure high quality, multi-skilled expertise, fast response times, and the best value for your investment."
      />

      <div className="py-12">
        <div className="container mx-auto space-y-12">
          <div
            className={`flex flex-col ${
              false ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12`}
          >
            <motion.div
              initial={{ opacity: 0, x: false ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1 px-0 md:px-12"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {<Headphones className="w-5 h-5 text-primary" />}
                </div>
                <h2 className="text-2xl font-bold text-accent-foreground break-words">
                  Operations Support
                </h2>
              </div>

              <p className="text-md text-muted-foreground leading-relaxed mb-4">
                Our Operations Support Service guarantees the seamless daily
                operation of your IT infrastructure, following industry best
                practices. This service includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                {[
                  "24/7 Customer Support",
                  "Real-Time Alerts & Reporting",
                  "Optimization & Continuous Improvement",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 mb-4">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary stroke-[4.5]" />
                    </div>
                    <p className="text-muted-foreground break-words">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: false ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1 relative flex justify-center"
            >
              <SLAWidget className="absolute top-32 sm:top-44 left-0 z-10 w-[280px] sm:w-[300px] py-4 gap-2 border-none shadow-xl" />
              <div className="w-full sm:w-[85%] aspect-[4/3] sm:aspect-[3/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={"/services/call-center.png"}
                  alt={"woman call center"}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
          {/* 2nd feature */}
          <div
            className={`flex flex-col ${
              true ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12`}
          >
            <motion.div
              initial={{ opacity: 0, x: true ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1 px-0 md:px-12"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {<Server className="w-5 h-5 text-primary" />}
                </div>
                <h2 className="text-2xl font-bold text-accent-foreground break-words">
                  Consulting for Projects & Planned Tasks
                </h2>
              </div>

              <p className="text-md text-muted-foreground leading-relaxed mb-4">
                Expert guidance for critical IT operations, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                {[
                  "Production Deployments & Migrations",
                  "Enhancing system efficiency and security.",
                  "Specialized Expertise",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 mb-4">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary stroke-[4.5]" />
                    </div>
                    <p className="text-muted-foreground break-words">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: true ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1 relative flex justify-center"
            >
              <RetentionWidget className="absolute top-32 sm:top-44 left-0 z-10 w-[280px] sm:w-[300px] py-4 gap-2 border-none shadow-xl" />
              <div className="w-full sm:w-[85%] aspect-[4/3] sm:aspect-[3/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={"/services/people-discussing-meeting.jpg"}
                  alt={"people discussing meeting"}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
          {/* 3rd feature */}
          <div
            className={`flex flex-col ${
              false ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12`}
          >
            <motion.div
              initial={{ opacity: 0, x: false ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1 px-0 md:px-12"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {<Shield className="w-5 h-5 text-primary" />}
                </div>
                <h2 className="text-2xl font-bold text-accent-foreground break-words">
                  Professional IT Services & Outsourcing
                </h2>
              </div>

              <p className="text-md text-muted-foreground leading-relaxed mb-4">
                We provide access to a highly qualified team of certified IT
                consultants, ensuring:
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                {[
                  "Top-tier technical expertise",
                  "Business continuity assurance",
                  "In-house IT support team.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 mb-4">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary stroke-[4.5]" />
                    </div>
                    <p className="text-muted-foreground break-words">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: false ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1 relative flex justify-center"
            >
              <RevenueWidget className="absolute top-32 sm:top-44 left-0 z-10 w-[280px] sm:w-[300px] py-4 gap-2 border-none shadow-xl" />
              <div className="w-full sm:w-[85%] aspect-[4/3] sm:aspect-[3/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={"/services/man-working-computer.jpg"}
                  alt={"man working computer"}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
          {/* CTA Banner */}
          <CTABanner
            locale={locale as Locale}
            title="¿Listo para modernizar tu infraestructura?"
            description="Impulsa tu negocio con sistemas preparados para AI, automatización y entornos híbridos. Te acompañamos en cada paso."
            buttonText="Habla con un experto"
          />
        </div>
      </div>
    </main>
  );
}
