"use client";

import { InteractiveHoverButton } from "@/components/magic/interactive-button";
import { Badge } from "@/components/ui/badge";
import Routes from "@/constants/routes";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

import { useRef } from "react";
import { Post } from "@/interfaces/post";
import ListBlogs from "./ListBlogs";
import { getTranslations, Locale } from "@/lib/i18n";

interface LastBlogsClientProps {
  blogPosts: Post[];
  translations: ReturnType<typeof getTranslations>;
  locale: Locale;
}

export default function LastBlogsClient({
  blogPosts,
  translations,
  locale,
}: LastBlogsClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="px-3 py-1 mb-4">From Our Blog</Badge>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Latest Articles
          </motion.h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
        >
          <ListBlogs
            blogPosts={blogPosts}
            translations={translations}
            locale={locale}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <InteractiveHoverButton>
            <Link href={`/${locale}/${Routes.Blog}`}>View All</Link>
          </InteractiveHoverButton>
        </motion.div>
      </div>
    </section>
  );
}
