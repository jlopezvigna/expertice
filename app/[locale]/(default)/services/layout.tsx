import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Expertice - IT Solutions",
  description:
    "Descubre nuestra gama completa de servicios IT: desarrollo de software, arquitectura de software, soporte técnico, servicios de infraestructura y más.",
  keywords:
    "servicios IT, desarrollo de software, arquitectura de software, soporte técnico, infraestructura IT",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
