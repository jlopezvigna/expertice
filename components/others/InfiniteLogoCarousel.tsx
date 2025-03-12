"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Slide {
  imageUrl: string;
  alt?: string;
}

interface InfiniteLogoCarouselProps {
  slides: Slide[];
  speed?: number;
  direction?: "left" | "right";
}

const InfiniteLogoCarousel = ({
  slides,
  speed = 20,
  direction = "left",
}: InfiniteLogoCarouselProps) => {
  const slideWidth = slides.length * 128; // 96px width + 32px gap

  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex gap-8"
        animate={{
          x: direction === "left" ? [0, -slideWidth] : [-slideWidth, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="flex-shrink-0">
            <Image
              src={slide.imageUrl}
              alt={slide.alt || "Partner logo"}
              width={96}
              height={32}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
        {slides.map((slide, i) => (
          <div key={`duplicate-${i}`} className="flex-shrink-0">
            <Image
              src={slide.imageUrl}
              alt={slide.alt || "Partner logo"}
              width={96}
              height={32}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteLogoCarousel;
