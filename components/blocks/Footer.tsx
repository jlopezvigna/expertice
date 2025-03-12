"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import Routes from "@/constants/routes";
import { featureNavigation, mainNavigation } from "@/constants/navigation";
import SocialLinks from "@/constants/social";

const socials = [
  {
    name: "LinkedIn",
    href: SocialLinks.LinkedIn,
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    href: SocialLinks.Instagram,
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "Facebook",
    href: SocialLinks.Facebook,
    icon: <Facebook className="w-5 h-5" />,
  },
];

const Footer = () => {
  const t = useTranslations("navigation");
  const t_footer = useTranslations("footer");
  const t_features = useTranslations("features");

  const support_navigation = [
    { name: t_footer("navigation.faq"), href: Routes.Faq },
    { name: t_footer("navigation.termConditions"), href: Routes.Terms },
    { name: t_footer("navigation.privacyPolicy"), href: Routes.Privacy },
    { name: t_footer("navigation.pageNotFound"), href: Routes.PageNotFound },
  ];

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logos/expertice-logotipo.png"
                alt="Expertice Logo"
                width={120}
                height={20}
                layout="fixed"
              />
            </div>
            <p className="text-muted-foreground mb-6">{t_footer("subtitle")}</p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-foreground font-semibold mb-4">
              {t_footer("titles.services")}
            </h3>
            <ul className="space-y-3">
              {featureNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t_features(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-foreground font-semibold mb-4">
              {t_footer("titles.company")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={Routes.Home}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              {mainNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h3 className="text-foreground font-semibold mb-4">
              {t_footer("titles.support")}
            </h3>
            <ul className="space-y-3">
              {support_navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4 md:mb-0">
            {t_footer("copyright")}
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
