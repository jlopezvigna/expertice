import { Cloud, Server, Shield } from "lucide-react";
import { ServiceFeature } from "../_components/ServiceFeature";
import { ServiceHeader } from "../_components/ServiceHeader";

export default function InfrastructureServicesPage() {
  return (
    <main className="relative bg-primary/10">
      <ServiceHeader
        title="Infrastructure Services"
        description="Certified specialists in virtualization, installation, configuration, high availability, security, and ongoing maintenance."
      />

      <ServiceFeature
        title="Plataforma en la Nube"
        description="Implementamos IaaS y PaaS para brindar infraestructura y plataformas escalables según la demanda de su negocio."
        imageSrc="/services/woman-call-center.jpg"
        imageAlt="Virtualization management interface"
        icon={<Server className="w-7 h-7 text-white" />}
        checkList={[
          "Reduzca costos de instalación y mantenimiento.",
          "Acceso rápido a servicios esenciales.",
          "Flexibilidad total para elegir solo las herramientas que necesita.",
        ]}
      />

      <ServiceFeature
        title="Consulting – Evaluación "
        description="Analizamos su infraestructura a nivel de arquitectura, integración, rendimiento y seguridad para garantizar su eficiencia."
        imageSrc="/services/woman-call-center.jpg"
        imageAlt="Security monitoring dashboard"
        icon={<Shield className="w-7 h-7 text-white" />}
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
        imageSrc="/services/woman-call-center.jpg"
        imageAlt="High availability system diagram"
        icon={<Cloud className="w-7 h-7 text-white" />}
        checkList={[
          "Backups on-premise y en la nube.",
          "Seguridad contra amenazas cibernéticas.",
          "Copias inmutables y recuperación garantizada.",
        ]}
      />
    </main>
  );
}
