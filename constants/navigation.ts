import {
  LucideIcon,
  Headphones,
  Server,
  Cog,
  Terminal,
  LayoutGrid,
  Smartphone,
} from "lucide-react";
import Routes from "./routes";

export interface NavigationItem {
  name: string;
  href: string;
  submenu?: FeatureNavigationItem[];
}

interface FeatureNavigationItem extends NavigationItem {
  description: string;
  icon: LucideIcon;
}

export const featureNavigation: FeatureNavigationItem[] = [
  {
    name: "Tech Support",
    href: Routes.TechSupport,
    icon: Headphones,
    description:
      "Support for operating systems, databases, application servers, help desks.",
  },
  {
    name: "Infrastructure",
    href: Routes.InfrastructureServices,
    icon: Server,
    description:
      "Certified specialists in virtualization, configuration, security, and ongoing maintenance.",
  },
  {
    name: "Software Architecture",
    href: Routes.SoftwareArchitecture,
    icon: Cog,
    description:
      "Expert consulting, training, development, and support to automate business processes.",
  },
  {
    name: "Red Hat Solutions",
    href: Routes.RedHatSolutions,
    icon: Terminal,
    description:
      "Red Hat Enterprise Linux, OpenShift, and other Red Hat products.",
  },
  {
    name: "IT Service Management",
    href: Routes.ItServiceManagement,
    icon: LayoutGrid,
    description:
      "IT Service Management, including incident management, problem management, and change management.",
  },
  {
    name: "Tailored Development",
    href: Routes.TailoredDevelopment,
    icon: Smartphone,
    description: "Custom software development tailored to your business needs.",
  },
];

export const mainNavigation: NavigationItem[] = [
  { name: "About", href: Routes.About },
  {
    name: "Services",
    href: Routes.Services,
    submenu: featureNavigation,
  },
  { name: "Case Studies", href: Routes.CaseStudies },
  { name: "Blog", href: Routes.Blog },
  { name: "Contact", href: Routes.Contact },
];
