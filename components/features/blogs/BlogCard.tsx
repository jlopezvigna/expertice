"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface BlogCardProps {
  href: string;
  image: string;
  title: string;
  date?: string;
  description?: string;
  index: number;
}

export const BlogCard = ({
  href,
  image,
  title,
  date = "",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  index,
}: BlogCardProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Link className="flex" href={`${href}`}>
      <motion.div
        className="relative grow overflow-hidden max-h-[600px] min-w-[150px] bg-card rounded-3xl p-8"
        onHoverStart={() => setHoveredIndex(index)}
        onHoverEnd={() => setHoveredIndex(null)}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}${image}`}
          alt={title}
          width={400}
          height={300}
          className="w-full h-52 object-cover rounded-2xl"
        />
        <h3 className="text-lg font-bold my-4 text-foreground">{title}</h3>
        <h5 className="text-md line-clamp-2 my-4 text-muted-foreground">
          {description}
        </h5>
        <span className="text-xs font-semibold my-4 text-primary">{date}</span>

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
                <span className="text-primary">Read More</span>
                <ArrowRight className="h-4 w-4 inline-block ml-2 text-primary" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};
