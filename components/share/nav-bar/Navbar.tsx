"use client";

import ExperticeSvg from "@/components/share/expertice-logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavigation } from "@/constants/navigation";
import Routes from "@/constants/routes";
import { getTranslations, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Globe, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NavigationMenu } from "./NavigationMenu";

const Navbar = ({
  translations,
  locale,
}: {
  translations: ReturnType<typeof getTranslations>;
  locale: Locale;
}) => {
  const [isHeroSection, setIsHeroSection] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = () => {
    const newLocale = locale === "es" ? "en" : "es";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const checkHeroSection = () => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) {
      setIsHeroSection(false);
    } else {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      setIsHeroSection(heroBottom > 0);
    }
  };

  useEffect(() => {
    checkHeroSection();
    window.addEventListener("scroll", checkHeroSection);
    return () => window.removeEventListener("scroll", checkHeroSection);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md"
    >
      <nav className="container justify-between mx-auto h-16 flex items-center gap-8 md:justify-start">
        {/* Logo Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center grow-0 gap-2"
        >
          <Link
            href={`/${locale}${Routes.Home}`}
            className="text-xl font-semibold text-foreground"
          >
            <ExperticeSvg
              className={cn(isHeroSection ? "text-white" : "text-foreground")}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden grow md:flex items-center gap-2"
        >
          <NavigationMenu
            isHeroSection={isHeroSection}
            translations={translations}
            locale={locale}
          />
        </motion.div>

        {/* Language Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex grow-0 items-center gap-4"
        >
          <Button
            variant="link"
            size="icon"
            className={cn(
              isHeroSection ? "text-white" : "text-foreground",
              "h-6 w-6"
            )}
            onClick={switchLanguage}
          >
            <Globe className="w-4 h-4" />
            {locale === "es" ? "EN" : "ES"}
          </Button>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:hidden"
        >
          <Sheet>
            <SheetTrigger asChild>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu
                    className={cn(
                      isHeroSection ? "text-white" : "text-foreground",
                      "h-6 w-6"
                    )}
                  />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent className="bg-gradient-to-r from-primary to-accent-foreground border-border w-full">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8 mt-20"
              >
                {mainNavigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="text-center p-4"
                  >
                    <SheetClose asChild>
                      <Link
                        href={`/${locale}${item.href}`}
                        className="text-2xl text-accent font-semibold hover:text-foreground transition-colors"
                      >
                        {
                          translations.nav[
                            item.name as keyof typeof translations.nav
                          ]
                        }
                      </Link>
                    </SheetClose>
                  </motion.div>
                ))}
              </motion.div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
