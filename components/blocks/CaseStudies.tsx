"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Carousel } from "@/components/carousel-case-studies";
import { useTranslations } from "next-intl";

const CaseStudies = () => {
  const t = useTranslations("caseStudies");
  return (
    <section
      id="case-studies"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {t("description")}
          </motion.p>
        </motion.div>

        <Carousel />
      </div>
    </section>
  );
};

export default CaseStudies;
