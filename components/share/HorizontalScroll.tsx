"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HorizontalScrollProps {
  children: React.ReactNode;
}

export const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-50%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-16 py-16 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 pl-[10vw]">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

// Componente auxiliar para los items del scroll horizontal
interface HorizontalItemProps {
  children: React.ReactNode;
  className?: string;
}

export const HorizontalItem = ({
  children,
  className = "",
}: HorizontalItemProps) => {
  return (
    <motion.div
      className={`flex-shrink-0 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
