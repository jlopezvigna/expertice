interface CarouselItem {
  image: string;
  quote: string;
  author: string;
  industry: string;
}

export const carouselItems: CarouselItem[] = [
  {
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}clients/pronto-pago.svg`,
    quote:
      "Desarrollamos aplicaciones mobile que le permiten al cliente ampliar su control y cartera de negocios, llegando a miles de usuarios. Trabajamos en el deploy de servicios que integrados a su aplicación core business, le permite interactuar con terceras partes y lograr mayor amplitud del portfolio y servicios a sus clientes.",
    author: "Pronto Pago",
    industry: "Fintech",
  },
  {
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}clients/aerolineas-argentinas.svg`,
    quote:
      "Trabajamos desde hace 20 años proveyendo servicios informáticos, tecnología y software. Comenzamos brindando servicios profesionales de programación, luego acompañamos a la compañía en la adquisición de suscripciones Red Hat, adicionalmente gracias a conformar el servicio de mesa de ayuda y soporte on site para microinformática durante muchos años, pudimos participar de la transformación digital implementando la suite completa de InvGate, para sus productos Assets Management y Service Management, plataforma donde día a día brindamos consultoría y soporte.",
    author: "Aerolineas Argentinas",
    industry: "Aeronautics",
  },
  {
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}clients/byma.svg`,
    quote:
      "Proveemos servicios profesionales que conforman el equipo de Seguridad Informática del cliente. Tenemos un esquema flexible que permite incorporar los talentos, generando una continuidad operativa asegurada y promoviendo la inversión en conocimiento de los recursos. Bajo esta operativa, podemos interpretar las diferentes oportunidades de mejora que colaboran con la transformación digital, naciendo de esta manera el caso de éxito de automatización de Red Hat Ansible Platform. Con el objetivo de reducir el tiempo de configuración de los S.O. de los servidores e introducir cambios a nivel de seguridad, parcheo y certificados, BYMA implementó las soluciones de Red Hat Ansible Automation Platform y Red Hat Entreprise Linux. A partir de la automatización se logró disminuir el tiempo de configuración de respuesta de minutos a segundos, así como se redujeron los errores de cambio de password y se aplicó una metodología que permite de forma automatizada verificar estados de cliente y controlar situaciones complejas",
    author: "BYMA - Caja de Valores ",
    industry: "Banking",
  },
  {
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}clients/dhl.svg`,
    quote:
      "Brindamos Soporte sobre tecnología IBM/Informix, hemos trabajado desde hace más de 20 años atendiendo sus necesidades de mantenimiento de programas, interfaces, administración de base de datos y sysadmin. Desarrollamos y mantenemos las integraciones que día a día el negocio requiere en diversas tecnologías. Somos referidos como el proveedor de confianza al que acuden cuando necesitan un servicio tanto para trabajos onsite en proyectos específicos del sector de Tecnología, microinformática, como también para tareas remotas. Atendemos migraciones, actualizaciones o trobleshooting desde Argentina al resto de LATAM.",
    author: "DHL",
    industry: "Logistics",
  },
  {
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}clients/loma-negra.svg`,
    quote:
      "Brindamos soporte sobre Service Management y Assets Management de InvGate. Desde el inicio del proyecto acompañar al cliente para rearmar sus procesos fue un gran desafío. La empresa logró certificar SOX con el apoyo de nuestro equipo de consultoría. Nuestro cliente administra todos los incidentes que llegan al área de IT, logrando una mejora total en la operatoria diaria. El éxito de implementación en el sector de IT hizo punta para extender la herramienta hacia otras áreas de servicio dentro de la compañía. Actualmente sumamos nuestro servicio de mesa de ayuda, profesionalizando y elevando la calidad de análisis y la imagen del área. Adicionalmente asumimos parte del Soporte en planta, logrando a partir de nuestra experta supervisión, una garantía de servicio.",
    author: "Loma Negra",
    industry: "Metals",
  },
  {
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}clients/swiss-medical.svg`,
    quote:
      "Apoyamos al equipo de Tecnología en el correcto uso del software Asset Management de Invgate, optimizando las funcionalidades del mismo y capacitando constantemente al equipo en las nuevas funcionalidades del software. Customizamos la implementación del ciclo de vida de los activos para dar solución integral tanto a los equipos en línea como al equipamiento en stock.",
    author: "Swiss Medical",
    industry: "Healthcare",
  },
  {
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}clients/gire.svg`,
    quote:
      "Trabajamos en el proceso de aumentar sus capacidades para la innovación y construcción ágil de soluciones de software modernas para acompañar su crecimiento y la Transformación Digital de sus Clientes. Expertice S.A. fue elegido para llevar adelante la adopción de prácticas DevOps, con el fin de incorporar una cultura integral de trabajo orientada a mejorar el Time-to-Market y la Calidad de sus productos. Seleccionamos Red Hat Openshift, una plataforma de desarrollo y ejecución de aplicaciones diseñada específicamente para dar soporte a estas prácticas y 3Scale para construir APIs con el fin de exponer funcionalidades que puedan ser reutilizadas, monetizarlas, contar con la posibilidad de orquestar servicios y hacer transformaciones.",
    author: "Gire",
    industry: "Healthcare",
  },
];
