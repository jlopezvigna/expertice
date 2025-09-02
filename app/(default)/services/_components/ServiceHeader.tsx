"use client";

import { Title } from "@/components/ui/title";
import { motion } from "framer-motion";

interface ServiceHeaderProps {
  title: string;
  description: string;
}

export const ServiceHeader = ({ title, description }: ServiceHeaderProps) => {
  return (
    <div className="text-foreground py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <Title
            text={title}
            className="text-4xl md:text-5xl font-bold text-foreground"
          />

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
