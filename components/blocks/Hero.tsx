"use client";

import { BlurText } from "@/components/magic/blur-text";
import { Marquee } from "@/components/magic/marquee";
import { Badge } from "@/components/ui/badge";
import { messages_chat, partner_logos } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import ChatPreview from "../others/ChatPreview";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("heroPage");
  return (
    <div
      id="hero"
      className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-r from-primary to-accent-foreground"
    >
      <div className="container mx-auto pt-8 md:pt-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <Badge variant="secondary" className="text-accent-foreground">
                {t("badge")}
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-background"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="block"
              >
                {t("ideas")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="block"
              >
                {t("solutions")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="block"
              >
                {t("innovations")}
              </motion.span>
            </motion.h1>

            <BlurText className="text-background" text={t("subtitle")} />
          </motion.div>

          <ChatPreview messages={messages_chat} />
        </div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <Marquee
            pauseOnHover
            className="[--duration:30s] [--gap:7rem]"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
            }}
          >
            {partner_logos.map((logo) => (
              <Image
                key={logo.imageUrl}
                src={logo.imageUrl}
                alt={logo.alt}
                width={100}
                height={100}
              />
            ))}
          </Marquee>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
