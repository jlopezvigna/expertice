"use client";
import { CTABanner } from "@/components/share/CTABanner";
import { Badge } from "@/components/ui/badge";
import { Award, Brain, GraduationCap, Headset, Lightbulb } from "lucide-react";
import { ServiceHeader } from "../_components/ServiceHeader";
import { Title } from "./_components/title";
import { BlurFade } from "@/components/magic/blur-fade";
import { AnimatedTestimonials } from "@/components/share/animated-testimonials";
import { Locale } from "@/lib/i18n";

const testimonials = [
  {
    quote:
      "El sistema operativo confiable y preparado para la nueva era. Te ayuda a simplificar la gestión de infraestructura, integrar contenedores, mejorar la seguridad y sostener el rendimiento en entornos híbridos.",
    name: "Enterprise Linux",
    src: <Title className="" title="Enterprise Linux" />,
    bulletPoints: [
      "Consistencia y estabilidad en cualquier arquitectura.",
      "Seguridad avanzada con enfoque en el futuro.",
      "Migración y gestión simplificadas.",
    ],
  },
  {
    quote:
      "La plataforma líder para acelerar el desarrollo de aplicaciones. Unificá tu ciclo de vida en Kubernetes con herramientas que reducen la complejidad y permiten a tus equipos enfocarse en la innovación.",
    name: "OpenShift AI",
    bulletPoints: [
      "Desarrollo, despliegue y gestión desde un solo lugar.",
      "Compatibilidad con nubes públicas, privadas o híbridas.",
      "Agilidad y eficiencia en todo el ciclo de aplicaciones.",
    ],
    src: <Title className="" title="OpenShift" />,
  },
  {
    quote:
      "Automatización a escala para todo tu entorno de TI.Desde tareas simples hasta procesos complejos, con control, seguridad y visibilidad.",
    name: "Ansible Automation Platform",
    bulletPoints: [
      "Operaciones más rápidas y sin errores.",
      "Estándares comunes que reducen riesgos.",
      "Escalable para redes, servidores y nubes híbridas.",
    ],
    src: <Title className="" title="Ansible" />,
  },
];

export function RedHatPageClient({ locale }: { locale: Locale }) {
  return (
    <main className=" min-h-screen">
      <ServiceHeader
        title="Transformamos tu negocio con soluciones Red Hat"
        description="Somos tu partner estratégico para implementar, optimizar y escalar tu infraestructura empresarial con las mejores tecnologías open source del mercado."
        topSlot={
          <div className="container mx-auto flex items-center justify-center gap-4">
            <Title title="" /> -
            <Badge variant="default" className="text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Partner Oficial Red Hat
            </Badge>
          </div>
        }
      />

      <section className="container mx-auto h-full py-10">
        <h2 className="text-3xl font-bold"> Como podemos ayudarte?</h2>
        <p className="text-muted-foreground mb-4 text-md">
          Ofrecemos un ecosistema completo de servicios para que tu empresa
          escale sin problemas
        </p>
        <div className="grid grid-rows-1 md:grid-cols-4 gap-4">
          <BlurFade delay={0.25 + 0.1} inView>
            <div className="relative grow overflow-hidden  bg-card rounded-2xl p-4 ">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold mb-4 text-foreground">
                  Consultores Especializados
                </h3>
                <div className="mb-6 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground md:line-clamp-3 mb-6">
                Equipo de expertos certificados en Red Hat con amplia
                experiencia en implementaciones empresariales.
              </p>
              <p className="text-muted-foreground text-sm md:line-clamp-3 mb-6">
                <ul className="list-disc list-inside text-primary">
                  <li>
                    <span className="text-foreground">
                      Certificaciones Red Hat
                    </span>
                  </li>
                  <li>
                    <span className="text-foreground">
                      Experiencia comprobada
                    </span>
                  </li>
                  <li>
                    <span className="text-foreground">Metodologías ágiles</span>
                  </li>
                </ul>
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.25 + 0.2} inView>
            <div className="relative grow overflow-hidden bg-card rounded-2xl p-4 ">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold mb-4 text-foreground">
                  Asesoría Estratégica
                </h3>
                <div className="mb-6 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground md:line-clamp-3 mb-6">
                Te ayudamos a definir la mejor estrategia tecnológica para tu
                negocio y objetivos específicos.
              </p>
              <p className="text-muted-foreground text-sm md:line-clamp-3 mb-6">
                <ul className="list-disc list-inside text-primary">
                  <li>
                    <span className="text-foreground">
                      Análisis de necesidades
                    </span>
                  </li>
                  <li>
                    <span className="text-foreground">Roadmap tecnológico</span>
                  </li>
                  <li>
                    <span className="text-foreground">
                      Optimización de costos
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.25 + 0.3} inView>
            <div className="relative grow overflow-hidden bg-card rounded-2xl p-4 ">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold mb-4 text-foreground">
                  Mentoring y Capacitación
                </h3>
                <div className="mb-6 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground md:line-clamp-3 mb-6">
                Formamos a tu equipo para que pueda gestionar y optimizar las
                soluciones implementadas.
              </p>
              <p className="text-muted-foreground text-sm md:line-clamp-3 mb-6">
                <ul className="list-disc list-inside text-primary">
                  <li>
                    <span className="text-foreground">
                      Capacitación técnica
                    </span>
                  </li>
                  <li>
                    <span className="text-foreground">Mejores prácticas</span>
                  </li>
                  <li>
                    <span className="text-foreground">
                      Transferencia de conocimiento
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.25 + 0.4} inView>
            <div className="relative grow overflow-hidden bg-card rounded-2xl p-4 ">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold mb-4 text-foreground">
                  Soporte Continuo
                </h3>
                <div className="mb-6 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Headset className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground md:line-clamp-3 mb-6">
                Acompañamiento permanente para garantizar el óptimo
                funcionamiento de tu infraestructura.
              </p>
              <p className="text-muted-foreground text-sm md:line-clamp-3 mb-6">
                <ul className="list-disc list-inside text-primary">
                  <li>
                    <span className="text-foreground">Soporte 24/7</span>
                  </li>
                  <li>
                    <span className="text-foreground">Monitoreo proactivo</span>
                  </li>
                  <li>
                    <span className="text-foreground">
                      Mantenimiento preventivo
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <section className="container mx-auto my-10">
        <div className="w-full flex flex-col items-end">
          <h2 className="text-3xl font-bold"> Productos más vendidos</h2>
          <p className="text-muted-foreground mb-4 text-md">
            Las soluciones Red Hat que más eligen nuestros clientes para
            transformar su infraestructura escale sin problemas
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} />
      </section>
      <CTABanner
        rounded={false}
        locale={locale}
        buttonText="Habla con un experto"
        title="¿Listo para modernizar tu infraestructura?"
        description="Impulsa tu negocio con sistemas preparados para AI, automatización y entornos híbridos. Te acompañamos en cada paso."
      />
    </main>
  );
}
