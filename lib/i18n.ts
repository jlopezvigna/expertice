export const defaultLocale = "es" as const;
export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      caseStudies: "Casos de Exito",
      blog: "Blog",
      contact: "Contacto",
      techSupport: "Tech Support",
      infrastructure: "Infrastructure",
      softwareArchitecture: "Software Architecture",
      redHatSolutions: "Red Hat Solutions",
      itServiceManagement: "IT Service Management",
      tailoredDevelopment: "Tailored Development",
      techSupportDescription:
        "Support for operating systems, databases, application servers, help desks.",
      infrastructureDescription:
        "Certified specialists in virtualization, configuration, security, and ongoing maintenance.",
      softwareArchitectureDescription:
        "Expert consulting, training, development, and support to automate business processes.",
      redHatSolutionsDescription:
        "Red Hat Enterprise Linux, OpenShift, and other Red Hat products.",
      itServiceManagementDescription:
        "IT Service Management, including incident management, problem management, and change management.",
      tailoredDevelopmentDescription:
        "Custom software development tailored to your business needs.",
      faq: "FAQ",
      termConditions: "Term & Conditions",
      privacyPolicy: "Privacy Policy",
      pageNotFound: "404",
    },
    home: {
      title: "Bienvenido a Nuestro Sitio",
      subtitle: "Un proyecto multi-idioma con Next.js",
      description:
        "Este es un ejemplo de un sitio web estático con soporte para múltiples idiomas usando Next.js. Navega entre las páginas y cambia el idioma para ver la funcionalidad.",
      features: {
        title: "Características",
        static: "Exportación Estática",
        staticDesc: "Sitio completamente estático para máximo rendimiento",
        multilang: "Multi-idioma",
        multilangDesc: "Soporte para español e inglés",
        responsive: "Responsive",
        responsiveDesc: "Diseño adaptable a todos los dispositivos",
      },
    },
    about: {
      title: "Acerca de Nosotros",
      subtitle: "Conoce más sobre nuestro proyecto",
      description:
        "Somos un equipo dedicado a crear experiencias web excepcionales. Este proyecto demuestra cómo implementar internacionalización en Next.js con exportación estática.",
      mission: {
        title: "Nuestra Misión",
        text: "Crear soluciones web accesibles y eficientes que funcionen para usuarios de todo el mundo, sin importar su idioma o ubicación.",
      },
      tech: {
        title: "Tecnologías Utilizadas",
        nextjs: "Next.js para el framework",
        tailwind: "Tailwind CSS para estilos",
        typescript: "TypeScript para tipado",
      },
    },
    common: {
      changeLanguage: "Cambiar idioma",
      backToHome: "Volver al inicio",
    },
    footer: {
      description: "Ayudamos a nuestros clientes a alcanzar sus objectivos.",
      copyright: "Copyright Expertice. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      caseStudies: "Case Studies",
      blog: "Blog",
      contact: "Contact",
      techSupport: "Tech Support",
      infrastructure: "Infrastructure",
      softwareArchitecture: "Software Architecture",
      redHatSolutions: "Red Hat Solutions",
      itServiceManagement: "IT Service Management",
      tailoredDevelopment: "Tailored Development",
      techSupportDescription:
        "Support for operating systems, databases, application servers, help desks.",
      infrastructureDescription:
        "Certified specialists in virtualization, configuration, security, and ongoing maintenance.",
      softwareArchitectureDescription:
        "Expert consulting, training, development, and support to automate business processes.",
      redHatSolutionsDescription:
        "Red Hat Enterprise Linux, OpenShift, and other Red Hat products.",
      itServiceManagementDescription:
        "IT Service Management, including incident management, problem management, and change management.",
      tailoredDevelopmentDescription:
        "Custom software development tailored to your business needs.",
    },
    home: {
      title: "Welcome to Our Site",
      subtitle: "A multi-language project with Next.js",
      description:
        "This is an example of a static website with multi-language support using Next.js. Navigate between pages and change the language to see the functionality.",
      features: {
        title: "Features",
        static: "Static Export",
        staticDesc: "Fully static site for maximum performance",
        multilang: "Multi-language",
        multilangDesc: "Support for Spanish and English",
        responsive: "Responsive",
        responsiveDesc: "Adaptive design for all devices",
      },
    },
    about: {
      title: "About Us",
      subtitle: "Learn more about our project",
      description:
        "We are a team dedicated to creating exceptional web experiences. This project demonstrates how to implement internationalization in Next.js with static export.",
      mission: {
        title: "Our Mission",
        text: "Create accessible and efficient web solutions that work for users worldwide, regardless of their language or location.",
      },
      tech: {
        title: "Technologies Used",
        nextjs: "Next.js for the framework",
        tailwind: "Tailwind CSS for styling",
        typescript: "TypeScript for typing",
      },
    },
    common: {
      changeLanguage: "Change language",
      backToHome: "Back to home",
    },
    footer: {
      description: "We help our clients achieve their objectives.",
      copyright: "Copyright Expertice. All right reserved.",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}
