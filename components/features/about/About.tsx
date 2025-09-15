"use client";

import { HeroVideoDialog } from "@/components/magic/hero-video-dialog";
import { InteractiveHoverButton } from "@/components/magic/interactive-button";
import { Badge } from "@/components/ui/badge";
import { getTranslations, Locale } from "@/lib/i18n";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const About = ({
  translations,
  locale,
}: {
  translations: ReturnType<typeof getTranslations>;
  locale: Locale;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
              <Badge className="px-3 py-1">{translations.about.badge}</Badge>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            >
              {translations.about.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8"
            >
              {translations.about.description}
              <br />
              <br />
              {translations.about.description2}
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              {[
                translations.about.checklist.years,
                translations.about.checklist.clients,
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary stroke-[4.5]" />
                  </div>
                  <span className="text-md text-muted-foreground ">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* <ul className="list-disc list-inside text-muted-foreground mt-2">
              {testimonials[active].bulletPoints.map((b) => {
                return (
                  <li key={b} className="flex items-center gap-4 mb-4">
                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary stroke-[4.5]" />
                    </div>
                    <p className="text-sm text-gray-500 break-words">{b}</p>
                  </li>
                );
              })}
            </ul> */}

            <InteractiveHoverButton>
              <Link href={`/${locale}/about`}>Learn More</Link>
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
                thumbnailSrc={`about/video-preview.png`}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
