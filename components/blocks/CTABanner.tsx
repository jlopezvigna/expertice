"use client";

import { InteractiveHoverButton } from "@/components/magic/interactive-button";
import Routes from "@/constants/routes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
  className?: string;
}

export const CTABanner = ({
  className,
  title = "title",
  description = "description",
}: CTABannerProps) => {
  const t = useTranslations("ctaBanner");
  return (
    <section className={cn("relative overflow-hidden my-8", className)}>
      <div className="mx-auto">
        <div className="bg-muted rounded-3xl py-8 px-8">
          <div className="max-w-4xl">
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t(title)}
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t(description)}
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <InteractiveHoverButton>
                <Link href={Routes.Contact}>{t("button")}</Link>
              </InteractiveHoverButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
