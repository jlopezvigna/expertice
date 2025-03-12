"use client";

import { HeroVideoDialog } from "@/components/magic/hero-video-dialog";
import { InteractiveHoverButton } from "@/components/magic/interactive-button";
import { Badge } from "@/components/ui/badge";
import { company_check } from "@/constants";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations("about");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Left side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <Badge className="px-3 py-1">{t("badge")}</Badge>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            >
              {t("title")}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8"
            >
              {t("description")}
              <br />
              {t("description2")}
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              {company_check.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-md text-muted-foreground">
                    {t(feature)}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <InteractiveHoverButton>
              <Link href="/about">{t("learnMore")}</Link>
            </InteractiveHoverButton>
          </motion.div>

          {/* Right side - Image */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-video overflow-hidden rounded-xl"
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <HeroVideoDialog
                videoSrc="https://www.youtube.com/embed/1ayW0GrThyI"
                thumbnailSrc="/about/video-preview.png"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
