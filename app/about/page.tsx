"use client";

import { InteractiveHoverButton } from "@/components/magic/interactive-button";
import Routes from "@/constants/routes";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Stats from "./_components/Stats";
import Culture from "./_components/Culture";
import { statsData } from "./_components/constant";
import Clients from "./_components/Clients";

const AboutPage = () => {
  const t = useTranslations("aboutPage");
  return (
    <main className="overflow-hidden relative pt-16 ">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-[#2b7fff32] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#ad46ff33] rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto py-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-center">
          {t("title")}
        </h1>

        {/* Culture Section*/}
        <Culture className="py-12" />

        {/* Stats Section */}
        <Stats className="py-12" data={statsData} gridCols="4" />

        {/* Clients Section */}
        <Clients />

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <InteractiveHoverButton>
              <Link href={Routes.Contact}>{t("cta.button")}</Link>
            </InteractiveHoverButton>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
