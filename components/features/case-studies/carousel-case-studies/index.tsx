"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { carouselItems } from "./constant";

export const CarouselCaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 15000); // Cambia cada 5 segundos

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
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 md:col-span-1 h-[200px] md:h-[400px] relative rounded-3xl bg-white">
                <Image
                  src={carouselItems[currentIndex].image}
                  alt={`Slide ${currentIndex + 1}`}
                  fill
                  className="object-contain p-8 md:p-4"
                  priority
                />
              </div>
              <div className="col-span-3 md:col-span-2">
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-md text-foreground mb-6 text-justify"
                >
                  {carouselItems[currentIndex].quote}
                </motion.blockquote>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {carouselItems[currentIndex].industry}
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
