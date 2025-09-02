"use client";

import { FeatureCard } from "@/components/features/services/FeatureCard";
import { Badge } from "@/components/ui/badge";
import { featureNavigation } from "@/constants/navigation";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magic/blur-fade";
import { getTranslations } from "@/lib/i18n";

const Services = ({
  translations,
}: {
  translations: ReturnType<typeof getTranslations>;
}) => {
  return (
    <section id="services" className="py-20 bg-background text-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="px-3 py-1 mb-4">Services</Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our diverse suite of finance solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our wide-ranging financial tools. Experience seamless,
            user-friendly, and efficient financial management at your
            fingertips.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featureNavigation.map((item, idx) => (
            <BlurFade key={idx} delay={0.25 + idx * 0.1} inView>
              <FeatureCard
                key={item.href}
                index={idx}
                title={
                  translations.nav[item.name as keyof typeof translations.nav]
                }
                description={
                  translations.nav[
                    item.description as keyof typeof translations.nav
                  ]
                }
                slug={item.href}
                Icon={item.icon}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
