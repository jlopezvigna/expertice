import { ServiceFeature } from "@/app/services/_components/ServiceFeature";
import { ServiceHeader } from "@/app/services/_components/ServiceHeader";
import { Server, Shield, Cloud } from "lucide-react";

export default function InfrastructureServicesPage() {
  return (
    <main className="container mx-auto">
      <ServiceHeader
        title="Infrastructure Services"
        description="Certified specialists in virtualization, installation, configuration, high availability, security, and ongoing maintenance."
        tag="INFRASTRUCTURE"
      />

      <ServiceFeature
        title="Plataforma en la Nube"
        description="Implementamos IaaS y PaaS para brindar infraestructura y plataformas escalables según la demanda de su negocio."
        imageSrc="https://fakeimg.pl/800x600/0066ff,128/ffffff,255/?text=Virtualization"
        imageAlt="Virtualization management interface"
        icon={<Server className="w-7 h-7 text-blue-500" />}
        checkList={[
          "Reduzca costos de instalación y mantenimiento.",
          "Acceso rápido a servicios esenciales.",
          "Flexibilidad total para elegir solo las herramientas que necesita.",
        ]}
      />

      <ServiceFeature
        title="Consulting – Evaluación "
        description="Analizamos su infraestructura a nivel de arquitectura, integración, rendimiento y seguridad para garantizar su eficiencia."
        imageSrc="https://fakeimg.pl/800x600/0066ff,128/ffffff,255/?text=Security+%26+Compliance"
        imageAlt="Security monitoring dashboard"
        icon={<Shield className="w-7 h-7 text-blue-500" />}
        reversed
        checkList={[
          "Evaluación de software, hardware y necesidades del usuario.",
          "Prototipos funcionales para validar soluciones.",
          "Optimización de inversiones tecnológicas.",
        ]}
      />

      <ServiceFeature
        title="Recuperación y Seguridad de datos"
        description="Proteja sus datos con estrategias avanzadas de respaldo y recuperación."
        imageSrc="https://fakeimg.pl/800x600/0066ff,128/ffffff,255/?text=High+Availability"
        imageAlt="High availability system diagram"
        icon={<Cloud className="w-7 h-7 text-blue-500" />}
        checkList={[
          "Backups on-premise y en la nube.",
          "Seguridad contra amenazas cibernéticas.",
          "Copias inmutables y recuperación garantizada.",
        ]}
      />
    </main>
  );
}
