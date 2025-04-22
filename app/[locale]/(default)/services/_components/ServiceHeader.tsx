"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ServiceHeaderProps {
  title: string;
  description: string;
  tag: string;
}

export const ServiceHeader = ({
  title,
  description,
  tag,
}: ServiceHeaderProps) => {
  return (
    <div className="text-foreground py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="text-primary">
              {tag}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
