"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavigation } from "@/constants/navigation";
import { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { setUserLocale } from "@/services/locale";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { startTransition, useEffect, useState } from "react";
import ExperticeSvg from "../expertice-logo";
import { NavigationMenu } from "./NavigationMenu";

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("navigation");
  const [isHeroSection, setIsHeroSection] = useState<boolean>(false);
  const pathname = usePathname();

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

  const onChange = (value: string) => {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

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
          <Link href="/" className="text-xl font-semibold text-foreground">
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
          <NavigationMenu isHeroSection={isHeroSection} />
        </motion.div>

        {/* Language Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex grow-0 items-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Select onValueChange={onChange} defaultValue={locale}>
              <SelectTrigger
                className={isHeroSection ? "text-white" : "text-foreground"}
              >
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
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
                        href={item.href}
                        className="text-2xl text-accent font-semibold hover:text-foreground transition-colors"
                      >
                        {t(item.name)}
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
