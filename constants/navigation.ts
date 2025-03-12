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
    name: "techSupport.title",
    href: Routes.TechSupport,
    icon: Headphones,
    description: "techSupport.description",
  },
  {
    name: "infrastructure.title",
    href: Routes.InfrastructureServices,
    icon: Server,
    description: "infrastructure.description",
  },
  {
    name: "softwareArchitecture.title",
    href: Routes.SoftwareArchitecture,
    icon: Cog,
    description: "softwareArchitecture.description",
  },
  {
    name: "redHatSolutions.title",
    href: Routes.RedHatSolutions,
    icon: Terminal,
    description: "redHatSolutions.description",
  },
  {
    name: "itServiceManagement.title",
    href: Routes.ItServiceManagement,
    icon: LayoutGrid,
    description: "itServiceManagement.description",
  },
  {
    name: "tailoredDevelopment.title",
    href: Routes.TailoredDevelopment,
    icon: Smartphone,
    description: "tailoredDevelopment.description",
  },
];

export const mainNavigation: NavigationItem[] = [
  { name: "about", href: Routes.About },
  {
    name: "services",
    href: Routes.Services,
    submenu: featureNavigation,
  },
  { name: "caseStudies", href: Routes.CaseStudies },
  { name: "blog", href: Routes.Blog },
  { name: "contact", href: Routes.Contact },
];
