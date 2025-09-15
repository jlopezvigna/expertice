"use client";

import { BentoCard, BentoGrid } from "@/components/magic/bento-grid";
import { Marquee } from "@/components/magic/marquee";
import { CTABanner } from "@/components/share/CTABanner";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import Routes from "@/constants/routes";
import { Locale } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Cloud,
  LaptopMinimalCheck,
  LayoutGrid,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { ServiceHeader } from "../_components/ServiceHeader";

export function SoftwareDevelopmentPageClient({ locale }: { locale: Locale }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Get scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: rightColumnRef,
    offset: ["start end", "end end"],
  });

  // Transform the scroll progress to control the left column's position
  const leftColumnY = useTransform(
    scrollYProgress,
    [0, 0.85, 1], // Adjust these values to control when the left column starts moving
    ["0%", "0%", "0%"] // Adjust the final value based on how much you want it to move
  );

  const features = [
    {
      Icon: Smartphone,
      name: "Mobile Development",
      // description: "Build your apps with our expert teams.",
      description:
        "Desarrollamos apps móviles intuitivas y completas con tecnologías de vanguardia, mejorando la relación con tus clientes y ofreciendo experiencias excepcionales en todas las plataformas.",
      className: "col-span-3 lg:col-span-1",
      href: `${locale}/${Routes.Contact}?service=mobile-development`,
      cta: "Let’s build your app",
      background: (
        <>
          <Marquee pauseOnHover className="absolute [--duration:20s]">
            {[
              {
                image: "/mobile-development/kotlin.png",
                alt: "Kotlin",
                width: 100,
                height: 100,
              },
              {
                image: "/mobile-development/firebase.png",
                alt: "Firebase",
                width: 100,
                height: 100,
              },
              {
                image: "/mobile-development/flutter.png",
                alt: "Flutter",
                width: 100,
                height: 100,
              },
              {
                image: "/mobile-development/reactjs.png",
                alt: "ReactJS",
                width: 100,
                height: 100,
              },
              {
                image: "/mobile-development/swift.png",
                alt: "Swift",
                width: 70,
                height: 70,
              },
              {
                image: "/mobile-development/expo2.png",
                alt: "Expo",
                width: 80,
                height: 80,
              },
            ].map((f, idx) => (
              <Image
                key={idx}
                src={f.image}
                alt={f.alt}
                width={f.width}
                height={f.height}
                className="object-contain transition-all duration-300 ease-out"
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </>
      ),
    },
    {
      Icon: LaptopMinimalCheck,
      name: "Web Development",
      description:
        "Build scalable, modern websites and web apps with cutting-edge technologies, enhancing user engagement and performance across all devices.",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90">
          CONTENIDO
        </div>
      ),
    },
    {
      Icon: Cloud,
      name: "DevOps",
      description:
        "Streamline development and operations with automation, CI/CD, and cloud solutions, improving efficiency, reliability, and deployment speed",
      className: "col-span-3 lg:col-span-2",
      href: `${locale}/${Routes.Contact}?service=devops`,
      cta: "Let's talk with an expert",
      background: (
        <>
          <Marquee
            pauseOnHover
            className="absolute top-5 [--duration:20s] 
        
        "
          >
            {[
              { image: "/devops/azure.png", alt: "Azure" },
              { image: "/devops/docker.png", alt: "Docker" },
              { image: "/devops/gitlab.png", alt: "GitLab" },
              { image: "/devops/jenkins.png", alt: "Jenkins" },
              { image: "/devops/github.png", alt: "GitHub" },
              { image: "/devops/terraform.png", alt: "Terraform" },
              { image: "/devops/kubernetes.png", alt: "Kubernetes" },
              { image: "/devops/aws.png", alt: "AWS" },
            ].map((f, idx) => (
              <Image
                key={idx}
                src={f.image}
                alt={f.alt}
                width={50}
                height={50}
                className="h-12 w-min object-contain transition-all duration-300 ease-out"
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </>
      ),
    },
    {
      Icon: LayoutGrid,
      name: "Gestión de APIs y Microservicios",
      description: "Build your API with the best technologies.",
      className: "col-span-3 lg:col-span-1",
      background: (
        <Calendar
          mode="single"
          selected={new Date(2022, 4, 11, 0, 0, 0)}
          className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
        />
      ),
    },
  ];
  return (
    <main className="container mx-auto">
      <ServiceHeader
        title="Software Development"
        description="Acompañamos a organizaciones en su evolución tecnológica con soluciones adaptadas a sus necesidades. Nos especializamos en desarrollo a medida, integración de sistemas, modernización de infraestructura y mejora continua."
      />
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>

      <div ref={containerRef} className="relative mx-auto py-16">
        <div className={`grid grid-cols-1 gap-8 md:grid-cols-2`}>
          {/* Left column with sticky title */}
          <motion.div
            style={{ y: leftColumnY }}
            className={`md:sticky top-24 h-fit order-1 mx-20`}
            // className="" // sticky top-24 is because of the header height
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold tracking-tight"
            >
              How is our process?
            </motion.h4>
            <p className="text-md text-muted-foreground">
              We help you define your goals, create a plan, and track your
              progress.
            </p>
            {/* {media && media} */}
          </motion.div>

          {/* Right column with scrollable content */}
          <div ref={rightColumnRef} className={`space-y-8 order-2`}>
            <div className="bg-[#fafafa] p-4 rounded-xl w-full h-40">
              <div className="flex items-center gap-2">
                <Badge className="text-xs w-6 h-6 inline-flex items-center justify-center rounded-full">
                  1
                </Badge>
                <h3 className="text-lg font-bold">Define your goals</h3>
              </div>
              <p className="text-sm">
                We help you define your goals, create a plan, and track your
                progress.
              </p>
            </div>

            <div className="bg-[#fafafa] p-4 rounded-xl w-full h-40">
              <div className="flex items-center gap-2">
                <Badge className="text-xs w-6 h-6 inline-flex items-center justify-center rounded-full">
                  2
                </Badge>
                <h3 className="text-lg font-bold">Create a plan</h3>
              </div>
              <p className="text-sm">
                We help you define your goals, create a plan, and track your
                progress.
              </p>
            </div>
            <div className="bg-[#fafafa] p-4 rounded-xl w-full h-40">
              <div className="flex items-center gap-2">
                <Badge className="text-xs w-6 h-6 inline-flex items-center justify-center rounded-full">
                  3
                </Badge>
                <h3 className="text-lg font-bold">Achieve your goals</h3>
              </div>
              <p className="text-sm">
                We help you define your goals, create a plan, and track your
                progress.
              </p>
            </div>
            <div className="bg-[#fafafa] p-4 rounded-xl w-full h-40">
              <div className="flex items-center gap-2">
                <Badge className="text-xs w-6 h-6 inline-flex items-center justify-center rounded-full">
                  4
                </Badge>
                <h3 className="text-lg font-bold">Monitor your progress</h3>
              </div>
              <p className="text-sm">
                We help you define your goals, create a plan, and track your
                progress.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CTABanner
        title="¿Listo para llevar tu infraestructura al próximo nivel?"
        description="Hablemos sobre cómo podemos ayudarte a escalar, automatizar y modernizar tu negocio con soluciones a medida."
        buttonText="Quiero hablar con un experto"
        locale={locale}
      />
    </main>
  );
}
