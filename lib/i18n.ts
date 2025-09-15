export const defaultLocale = "es" as const;
export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const translations = {
  es: {
    blog: {
      badge: "Nuestro blog",
      title: "Últimos artículos & noticias",
      subtitle:
        "Mantente al día con las últimas características, actualizaciones de productos y tendencias de la industria.",
      button: "Ver todos los artículos",
    },
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
      badge: "Acerca de Nosotros",
      title: "Innovando a través de Tecnología y Expertise",
      description:
        "At Expertice, we connect ideas with technology. As a leading tech consulting firm in Latin America, we specialize in infrastructure, software architecture, and system migrations.",
      description2:
        "We provide consulting, development, and support to help businesses streamline operations, enhance productivity, and maximize their tech investments.",
      checklist: {
        years: "15 años de experiencia",
        clients: "3K+ Clientes",
      },
    },
    services: {
      title: "Our diverse suite of finance solutions",
      description:
        "Discover our wide-ranging financial tools. Experience seamless, user-friendly, and efficient financial management at your fingertips.",
      badge: "Servicios",
      exploreNow: "Explorar Ahora",
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
    blog: {
      title: "Latest updates & news",
      subtitle:
        "Stay uo to date with the latest deatures, product updates, and industry trends.",
      badge: "From our blog",
      button: "View all articles",
    },
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
      faq: "FAQ",
      termConditions: "Term & Conditions",
      privacyPolicy: "Privacy Policy",
      pageNotFound: "404",
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
      badge: "Acerca de Nosotros",
      title: "Innovando a través de Tecnología y Expertise",
      description:
        "At Expertice, we connect ideas with technology. As a leading tech consulting firm in Latin America, we specialize in infrastructure, software architecture, and system migrations.",
      description2:
        "We provide consulting, development, and support to help businesses streamline operations, enhance productivity, and maximize their tech investments.",
      checklist: {
        years: "15 años de experiencia",
        clients: "3K+ Clientes",
      },
    },
    services: {
      title: "Our diverse suite of finance solutions",
      description:
        "Discover our wide-ranging financial tools. Experience seamless, user-friendly, and efficient financial management at your fingertips.",
      badge: "Servicios",
      exploreNow: "Explorar Ahora",
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
