"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ScrollSectionProps {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
}

export const ScrollSection = ({
  title,
  description,
  items,
}: ScrollSectionProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        setIsSticky(containerTop <= 0);
      }
    };

    // Calcular la altura del contenedor cuando se monta el componente
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Columna izquierda - Sticky */}
          <motion.div
            className={`lg:w-1/2 ${
              isSticky ? "lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-10" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-background p-8 rounded-2xl shadow-lg">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>

          {/* Columna derecha - Scroll */}
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: isSticky ? containerHeight : "auto" }}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="bg-muted/50 p-6 rounded-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
