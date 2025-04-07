"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CarouselCaseStudies } from "@/components/carousel-case-studies";
import { useTranslations } from "next-intl";

const CaseStudies = () => {
  const t = useTranslations("caseStudies");

  return (
    <section id="case-studies" className="py-20 min-h-screen bg-primary/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2"
        >
          <Badge className="px-3 py-1 mb-4">{t("badge")}</Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("title")}
          </motion.h2>
        </motion.div>

        <CarouselCaseStudies />
      </div>
    </section>
  );
};

export default CaseStudies;
