import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  Icon: LucideIcon;
  index: number;
  isInView: boolean;
}

export const Card = ({
  title,
  description,
  slug,
  Icon,
  index,
  isInView,
}: ServiceCardProps) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Link className="flex" href={`/services/${slug}`}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
        className="relative grow overflow-hidden max-h-[400px] min-w-[200px] bg-card rounded-3xl p-8"
        onHoverStart={() => setHoveredIndex(index)}
        onHoverEnd={() => setHoveredIndex(null)}
      >
        <div className="flex flex-row items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>

        <AnimatePresence>
          {hoveredIndex === index && (
            <motion.div
              className="absolute inset-0 z-10 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute bg-foreground pointer-events-none opacity-10 h-full w-full" />

              <motion.div
                className="bg-primary-foreground font-semibold text-sm z-10 px-3 py-2 rounded-full cursor-pointer hover:bg-muted transition-colors"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                <span className="text-primary">Explore Now</span>
                <ArrowRight className="h-4 w-4 inline-block ml-2 text-primary" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};
