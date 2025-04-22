import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  slug: string;
  Icon: LucideIcon;
  index: number;
}

export const FeatureCard = ({
  title,
  description,
  slug,
  Icon,
  index,
}: FeatureCardProps) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <Link className="flex" href={`${slug}`}>
      <motion.div
        className="relative grow overflow-hidden max-h-[300px] min-w-[200px] bg-card rounded-3xl p-8 md:h-[270px]"
        onHoverStart={() => setHoveredIndex(index)}
        onHoverEnd={() => setHoveredIndex(null)}
      >
        <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground md:line-clamp-3 mb-6">
          {description}
        </p>

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
