export const tabsData = [
  {
    title: "Enterprise Linux",
    description:
      "A secure, stable, and high-performance operating system optimized for enterprise workloads.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#FF5630" />
        <path
          d="M7 11h10M7 15h6"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="7" y="7" width="2" height="2" rx="1" fill="#fff" />
        <rect x="15" y="7" width="2" height="2" rx="1" fill="#fff" />
      </svg>
    ),
    content: (
      <div className="w-full">
        <h2 className="font-redhat font-semibold text-2xl text-center">
          Enterprise Linux
        </h2>
        <p>
          La nueva versión principal de Red Hat Enterprise Linux marca el inicio
          de una nueva era del sistema operativo, con capacidades avanzadas y
          preparación para inteligencia artificial. Está diseñada para ayudarte
          a enfrentar la falta de perfiles especializados en Linux, controlar
          desviaciones mediante tecnologías de contenedores, comenzar a
          implementar seguridad post-cuántica, y mucho más.
        </p>
        <ul>
          <li>Arquitecturas compatibles</li>
          <li>Automatización y gestión</li>
          <li>Herramientas de migración</li>
          <li>Seguridad y cumplimiento</li>
          <li>Rendimiento consistente</li>
        </ul>
      </div>
    ),
  },
  {
    title: "OpenShift",
    description:
      "A Kubernetes-based container platform for automating application deployment, scaling, and operations.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#FF5630" />
        <path
          d="M8 12h8M8 16h4"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="8" y="8" width="2" height="2" rx="1" fill="#fff" />
      </svg>
    ),
    content: (
      <div className="w-full">
        <h2 className="font-redhat font-semibold text-2xl text-center">
          OpenShift
        </h2>
        <p>
          Red Hat OpenShift es una plataforma unificada para crear, modernizar y
          desplegar aplicaciones a escala. Integra servicios confiables y
          comprobados para reducir la complejidad del desarrollo, despliegue,
          ejecución y gestión de aplicaciones en Kubernetes. Trabajá de forma
          más inteligente y rápida con un conjunto completo de herramientas que
          te permite llevar tus aplicaciones al mercado desde la infraestructura
          que elijas. OpenShift permite que los equipos se enfoquen en lo que
          realmente importa.
        </p>
        <ul>
          <li>
            Plataforma unificada para desarrollo, modernización y despliegue de
            aplicaciones.
          </li>
          <li>Servicios integrados que simplifican el uso de Kubernetes.</li>
          <li>
            Mayor velocidad y eficiencia en el ciclo de vida de las
            aplicaciones.
          </li>
          <li>
            Compatible con múltiples infraestructuras (on-premise, nube pública,
            híbrida).
          </li>
          <li>
            Permite a los equipos enfocarse en la innovación y el valor del
            negocio.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Ansible Automation Platform",
    description:
      "An IT automation tool for configuration management, application deployment, and orchestration.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#FF5630" />
        <path
          d="M12 8v4l3 3"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    content: (
      <div className="w-full">
        <h2 className="font-redhat font-semibold text-2xl text-center">
          Ansible Automation Platform
        </h2>
        <p>
          Ansible Automation Platform es una solución completa para automatizar
          a escala todo tu entorno de TI. Proporciona herramientas, marcos y
          servicios listos para usar que permiten a los equipos automatizar
          desde tareas simples hasta procesos complejos de forma segura y
          controlada. Con Ansible, podés estandarizar operaciones, reducir
          errores y acelerar la entrega de servicios.
        </p>
        <ul>
          <li>
            Plataforma integral para automatizar redes, servidores, nubes y
            aplicaciones.
          </li>
          <li>Acelera la implementación de infraestructura y software.</li>
          <li>
            Reduce riesgos operativos mediante la estandarización de procesos.
          </li>
          <li>
            Ofrece visibilidad, control y gobernanza sobre las automatizaciones.
          </li>
          <li>Escalable y adaptable a entornos híbridos o multi-nube.</li>
        </ul>
      </div>
    ),
  },
];
