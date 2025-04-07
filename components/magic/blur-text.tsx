"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ElementType } from "react";

export interface BlurTextProps {
  text: string;
  className?: string;
  as?: ElementType;
}

export function BlurText({
  text,
  className,
  as: Component = "p",
}: BlurTextProps) {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: -20,
        opacity: 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <Component
        className={cn(
          "text-lg text-gray-500 mt-8 dark:text-neutral-300",
          className
        )}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{
              filter: "blur(10px)",
              opacity: 0,
              y: 5,
            }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: 0.09 * index,
            }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}
