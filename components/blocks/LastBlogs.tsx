"use client";

import { BlurFade } from "@/components/magic/blur-fade";
import { InteractiveHoverButton } from "@/components/magic/interactive-button";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BlogCard } from "../others/BlogCard";
import { useTranslations } from "next-intl";
import Routes from "@/constants/routes";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  href: string;
}

export default function LastBlogs() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations("lastBlogs");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const posts = await response.json();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };
    loadPosts();
  }, []);

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
          <Badge className="px-3 py-1 mb-4">{t("badge")}</Badge>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            {t("title")}
          </motion.h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
        >
          {blogPosts.map((blog, idx) => (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <BlogCard
                index={idx}
                key={idx}
                href={blog.href}
                image={blog.image}
                title={blog.title}
                date={blog.date}
                description={blog.description}
              />
            </BlurFade>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <InteractiveHoverButton>
            <Link href={Routes.Blog}>{t("button")}</Link>
          </InteractiveHoverButton>
        </motion.div>
      </div>
    </section>
  );
}
