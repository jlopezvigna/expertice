import { BackgroundRoundedBlur } from "@/components/share/background-rounded-blur";
import { ServiceFeature } from "../_components/ServiceFeature";
import { ServiceHeader } from "../_components/ServiceHeader";
import { Code, Workflow } from "lucide-react";

export default function SoftwareArchitecturePage() {
  return (
    <main className="relative bg-primary/10">
      <BackgroundRoundedBlur />
      <ServiceHeader
        title="Software Architecture & Automation Solutions"
        description="Expert consulting, training, development, and support to streamline and automate business processes."
        tag="SOFTWARE ARCHITECTURE"
      />

      <ServiceFeature
        title="Training & Continuous Support"
        description="En un entorno de constante cambio tecnológico, mantener actualizado a su equipo es clave. La falta de formación limita el crecimiento y aumenta la dependencia de talento externo. Además, la escasez de técnicos incrementa la rotación de personal, haciendo esencial la inversión en capacitación."
        imageSrc="/services/woman-call-center.jpg"
        imageAlt="Process automation workflow diagram"
        icon={<Workflow className="w-7 h-7 text-primary" />}
        checkList={[
          "Cursos especializados adaptados a su empresa.",
          "Workshops y mentorías con expertos del sector.",
          "Certificaciones oficiales para su equipo.",
        ]}
      />

      <ServiceFeature
        title="Consulting & Assessment"
        description="Asegurar que su infraestructura tecnológica sea escalable, segura y eficiente es clave para mantener la competitividad. Nuestro equipo de expertos analiza su ecosistema digital para optimizar su rendimiento y alinearlo con sus objetivos de negocio."
        imageSrc="/services/woman-call-center.jpg"
        imageAlt="Custom software development interface"
        icon={<Code className="w-7 h-7 text-primary" />}
        reversed
        checkList={[
          "Evaluamos su arquitectura para adoptar nuevas tecnologías de manera efectiva.",
          "Mejoramos la interoperabilidad, seguridad y disponibilidad de sus sistemas.",
          "Implementamos buenas prácticas para maximizar el uso de plataformas de desarrollo.",
          "Diseñamos prototipos de soluciones y lo guiamos en la transformación digital.",
        ]}
      />
    </main>
  );
}
