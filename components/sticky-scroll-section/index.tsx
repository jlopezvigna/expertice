"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StickyScrollSection({
  title,
  subTitle,
  children,
  reverse = false,
  media = null,
}: {
  title: string;
  subTitle: string;
  children: React.ReactNode;
  reverse?: boolean;
  media?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Get scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: rightColumnRef,
    offset: ["start end", "end end"],
  });

  // Transform the scroll progress to control the left column's position
  const leftColumnY = useTransform(
    scrollYProgress,
    [0, 0.85, 1], // Adjust these values to control when the left column starts moving
    ["0%", "0%", "0%"] // Adjust the final value based on how much you want it to move
  );

  return (
    <div ref={containerRef} className="relative mx-auto py-8">
      <div className={`grid grid-cols-1 gap-8 md:grid-cols-2`}>
        {/* Left column with sticky title */}
        <motion.div
          style={{ y: leftColumnY }}
          className={`md:sticky top-24 h-fit ${
            reverse ? "order-2" : "order-1"
          }`}
          // className="" // sticky top-24 is because of the header height
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-8"
          >
            {title}
          </motion.h2>
          {media && media}

          <p className="mt-4 text-lg text-muted-foreground">{subTitle}</p>
        </motion.div>

        {/* Right column with scrollable content */}
        <div
          ref={rightColumnRef}
          className={`space-y-8 ${reverse ? "order-1" : "order-2"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
