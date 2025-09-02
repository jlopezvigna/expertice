"use client";

import { featureNavigation, mainNavigation } from "@/constants/navigation";
import Routes from "@/constants/routes";
import SocialLinks from "@/constants/social";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import Link from "next/link";
import ExperticeSvg from "./expertice-logo";
import type { getTranslations, Locale } from "@/lib/i18n";

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

const Footer = ({
  translations,
  locale,
}: {
  translations: ReturnType<typeof getTranslations>;
  locale: Locale;
}) => {
  const support_navigation = [
    { name: "faq", href: Routes.Faq },
    { name: "termConditions", href: Routes.Terms },
    { name: "privacyPolicy", href: Routes.Privacy },
    { name: "pageNotFound", href: Routes.PageNotFound },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary/10 to-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <ExperticeSvg />
            </div>
            <p className="text-muted-foreground mb-6">
              {translations.footer.description}
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-accent-foreground text-md font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {featureNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {
                      translations.nav[
                        item.name as keyof typeof translations.nav
                      ]
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-accent-foreground text-md font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${locale}${Routes.Home}`}
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              {mainNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {
                      translations.nav[
                        item.name as keyof typeof translations.nav
                      ]
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h3 className="text-accent-foreground text-md font-semibold mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {support_navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {
                      translations.nav[
                        item.name as keyof typeof translations.nav
                      ]
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4 md:mb-0">
            {translations.footer.copyright}
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
