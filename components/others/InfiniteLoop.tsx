import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Slide {
  imageUrl: string;
  alt: string;
}

type Iprops = {
  slides: Slide[];
  reverse?: boolean;
};

const InfiniteLoop = ({ slides, reverse = false }: Iprops) => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
      }}
    >
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex"
        animate={{
          x: reverse ? ["0%", "-100%"] : ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, idx) => (
          <div
            key={`${slide.alt}-${idx}`}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex flex-col items-center justify-center h-full text-6xl">
              <Image
                className="dark:invert dark:opacity-50 dark:brightness-0 brightness-100"
                src={slide.imageUrl}
                alt={slide.alt}
                width={100}
                height={100}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteLoop;
