import { BlogCard } from "./BlogCard";
import { BlurFade } from "../../magic/blur-fade";
import { Post } from "@/interfaces/post";
import { Locale, getTranslations } from "@/lib/i18n";

interface ListBlogsProps {
  blogPosts: Post[];
  translations: ReturnType<typeof getTranslations>;
  locale: Locale;
}

export default function ListBlogs({ blogPosts, locale }: ListBlogsProps) {
  return (
    <>
      {blogPosts.map((blog, idx) => (
        <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
          <BlogCard
            index={idx}
            key={idx}
            href={`/${locale}/${blog.href}`}
            image={blog.image}
            title={blog.title}
            date={blog.date}
            description={blog.description}
          />
        </BlurFade>
      ))}
    </>
  );
}
