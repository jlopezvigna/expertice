"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

interface ServiceFeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  reversed?: boolean;
  checkList?: string[];
}

export const ServiceFeature = ({
  title,
  description,
  imageSrc,
  imageAlt,
  icon,
  reversed = false,
  checkList = [],
}: ServiceFeatureProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div
          className={`flex flex-col ${
            reversed ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-12`}
        >
          <motion.div
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6 px-0 md:px-12"
          >
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <h2 className="text-3xl font-bold text-foreground break-words">
                {title}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <ul className="list-disc list-inside text-muted-foreground">
              {checkList.map((item) => (
                <li key={item} className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground break-words">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 relative flex justify-center"
          >
            <div className="relative w-[85%] aspect-[3/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
