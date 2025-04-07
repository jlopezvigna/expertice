"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { carouselItems } from "./constant";
import { useTranslations } from "next-intl";

export const CarouselCaseStudies = () => {
  const t = useTranslations("carouselCaseStudies");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-6 h-6 mx-auto my-6 text-primary opacity-50" />
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-md font-medium text-foreground mb-6 text-justify"
            >
              {t(carouselItems[currentIndex].quote)}
            </motion.blockquote>
            <div className="relative w-[200] mx-auto mt-4 mb-6 aspect-video rounded-3xl overflow-hidden">
              <Image
                src={carouselItems[currentIndex].image}
                alt={`Slide ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {t(carouselItems[currentIndex].industry)}
              </Badge>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-8">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-primary" : "bg-primary"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
