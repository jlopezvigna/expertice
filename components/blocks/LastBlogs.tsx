"use client";

import { BlurFade } from "@/components/magic/blur-fade";
import { InteractiveHoverButton } from "@/components/magic/interactive-button";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { BlogCard } from "../others/BlogCard";
import { useTranslations } from "next-intl";
import Routes from "@/constants/routes";

const blogPosts = [
  {
    title: "A Guide to Mastering Investment Tracking fdfdfdf",
    description:
      "Discover the best practices for managing your investments and achieving financial success.",
    image: "/blog/blog-1.jpg",
    href: "/blog/mastering-investment-tracking",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Start Planning for Retirement Today",
    description:
      "Learn how to start planning for retirement today to secure your financial future.",
    image: "/blog/blog-2.jpg",
    href: "/blog/start-planning-for-retirement-today",
    gradient: "from-teal-500/20 to-blue-500/20",
  },
  {
    title: "Regain Control with Debt Management",
    description:
      "Learn how to regain control of your finances and achieve debt freedom.",
    image: "/blog/blog-3.jpg",
    href: "/blog/regain-control-with-debt-management",
    gradient: "from-pink-500/20 to-purple-500/20",
  },
];

export default function LastBlogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const t = useTranslations("lastBlogs");

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
