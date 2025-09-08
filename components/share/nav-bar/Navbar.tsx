"use client";

import ExperticeSvg from "@/components/share/expertice-logo";
import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet";
import { mainNavigation } from "@/constants/navigation";
import Routes from "@/constants/routes";
import { getTranslations, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Globe, Menu, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NavigationMenu } from "./NavigationMenu";

import { socials } from "../Footer";

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
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const switchLanguage = () => {
    const newLocale = locale === "es" ? "en" : "es";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const closeMobileNav = () => {
    setMobileNav(false);
    setOpenSubmenu(null);
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

  // Deshabilitar scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function para restaurar el scroll cuando el componente se desmonte
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileNav]);

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
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground relative z-10"
            onClick={() => setMobileNav((prev) => !prev)}
          >
            <Menu
              className={cn(
                isHeroSection ? "text-white" : "text-foreground",
                "h-6 w-6"
              )}
            />
          </Button>
          <AnimatePresence>
            {mobileNav && (
              <MotionConfig
                transition={{
                  type: "spring",
                  bounce: 0.1,
                }}
              >
                <motion.div
                  key="mobile-nav"
                  variants={{
                    hide: {
                      x: "-100%",
                      transition: {
                        type: "spring",
                        bounce: 0.1,
                        when: "afterChildren",
                        staggerChildren: 0.25,
                      },
                    },
                    show: {
                      x: "0%",
                      transition: {
                        type: "spring",
                        bounce: 0.1,
                        when: "beforeChildren",
                        staggerChildren: 0.25,
                      },
                    },
                  }}
                  initial="hide"
                  animate="show"
                  exit="hide"
                  className="fixed inset-0 bg-gradient-to-r from-primary to-accent-foreground p-6 flex flex-col justify-center space-y-10 h-dvh lg:hidden"
                >
                  <motion.ul
                    variants={{
                      hide: {
                        y: "25%",
                        opacity: 0,
                      },
                      show: {
                        y: "0%",
                        opacity: 1,
                      },
                    }}
                    className="list-none space-y-6"
                  >
                    {mainNavigation.map((item) => (
                      <li key={item.name} className="space-y-4">
                        {item.submenu ? (
                          <div>
                            <button
                              className="text-2xl font-semibold text-white hover:underline transition-colors text-left flex items-center gap-2"
                              onClick={() =>
                                setOpenSubmenu(
                                  openSubmenu === item.name ? null : item.name
                                )
                              }
                            >
                              {
                                translations.nav[
                                  item.name as keyof typeof translations.nav
                                ]
                              }
                              {openSubmenu === item.name ? (
                                <ChevronDown className="w-6 h-6" />
                              ) : (
                                <ChevronUp className="w-6 h-6" />
                              )}
                            </button>
                            <AnimatePresence>
                              {openSubmenu === item.name && (
                                <motion.ul
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-4 space-y-3 pl-6"
                                >
                                  {item.submenu.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={`/${locale}${subItem.href}`}
                                        className="text-xl mx-4 font-semibold text-white hover:underline transition-colors flex items-center gap-3"
                                        onClick={closeMobileNav}
                                      >
                                        <subItem.icon className="w-5 h-5" />
                                        {
                                          translations.nav[
                                            subItem.name as keyof typeof translations.nav
                                          ]
                                        }
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={`/${locale}${item.href}`}
                            className="text-2xl font-semibold text-white hover:underline transition-colors"
                            onClick={closeMobileNav}
                          >
                            {
                              translations.nav[
                                item.name as keyof typeof translations.nav
                              ]
                            }
                          </Link>
                        )}
                      </li>
                    ))}
                  </motion.ul>
                  <motion.div
                    variants={{
                      hide: {
                        y: "25%",
                        opacity: 0,
                      },
                      show: {
                        y: "0%",
                        opacity: 1,
                      },
                    }}
                    className="w-full h-px bg-white/30"
                  ></motion.div>
                  <motion.ul
                    variants={{
                      hide: {
                        y: "25%",
                        opacity: 0,
                      },
                      show: {
                        y: "0%",
                        opacity: 1,
                      },
                    }}
                    className="list-none flex justify-center gap-x-4"
                  >
                    {socials.map((social) => (
                      <li key={social.name}>
                        <Link
                          key={social.name}
                          href={social.href}
                          className="font-semibold text-white hover:underline transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.icon}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>
              </MotionConfig>
            )}
          </AnimatePresence>
          {/* <Sheet>
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
          </Sheet> */}
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
