"use client";

import { CTABanner } from "@/components/share/CTABanner";
import {
  Cloud,
  LaptopMinimalCheck,
  LayoutGrid,
  SmartphoneCharging,
} from "lucide-react";
import { ServiceCard } from "../_components/ServiceCard";
import { ServiceHeader } from "../_components/ServiceHeader";
import {
  apiFeatures,
  devOpsFeatures,
  mobileFeatures,
  webFeatures,
} from "./mock-data";

export default function SoftwareDevelopmentPage() {
  return (
    <main className="container mx-auto">
      <ServiceHeader
        title="Software Development"
        description="Acompañamos a organizaciones en su evolución tecnológica con soluciones adaptadas a sus necesidades. Nos especializamos en desarrollo a medida, integración de sistemas, modernización de infraestructura y mejora continua."
        tag="WEB · MOBILE · DEVOPS · API"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ServiceCard
          title="Build your apps with our expert teams"
          badge="Mobile Development"
          features={mobileFeatures}
          icon={SmartphoneCharging}
        />

        <ServiceCard
          title="Outsourcing your software development needs"
          badge="Web Development"
          features={webFeatures}
          icon={LaptopMinimalCheck}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ServiceCard
          title="Mantain your cloud infrastructure"
          badge="DevOps"
          features={devOpsFeatures}
          icon={Cloud}
        />

        <ServiceCard
          title="Build your API with the best technologies"
          badge="Gestión de APIs y Microservicios"
          features={apiFeatures}
          icon={LayoutGrid}
        />
      </div>

      <CTABanner
        title="¿Listo para llevar tu infraestructura al próximo nivel?"
        description="Hablemos sobre cómo podemos ayudarte a escalar, automatizar y modernizar tu negocio con soluciones a medida."
        buttonText="Quiero hablar con un experto"
      />
    </main>
  );
}
