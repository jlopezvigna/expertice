"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const Photos = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "w-full flex flex-row gap-4 justify-center lg:w-1/2",
        className
      )}
    >
      <div className="relative w-[45%] aspect-[2/3] rounded-2xl overflow-hidden mb-8">
        <Image
          src="/vision-image.jpg"
          alt="Nuestra Visión"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative w-[45%] aspect-[2/3] rounded-2xl overflow-hidden mt-8">
        <Image
          src="/vision-image-2.jpg"
          alt="Nuestra Visión"
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
};

export default function Culture({ className }: { className?: string }) {
  const t = useTranslations("cultureComponent");
  return (
    <section className={cn("relative w-full py-20", className)}>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Columna izquierda - Imagen */}
        <Photos className="hidden md:flex" />
        {/* Columna derecha - Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <h2 className="text-2xl text-accent-foreground md:text-3xl font-bold">
            {t("title")}
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            {t("description")}
          </p>
          <Photos className="flex md:hidden" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                {t("mision.title")}
              </h3>
              <p className="">{t("mision.description")}</p>
            </div>
            <div className="">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">{t("vision.title")}</h3>
              <p className="">{t("vision.description")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
