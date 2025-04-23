import { BlogCard } from "../others/BlogCard";
import { BlurFade } from "../magic/blur-fade";
import { BlogPost } from "@/lib/blog";

interface ListBlogsProps {
  blogPosts: BlogPost[];
}

export default function ListBlogs({ blogPosts }: ListBlogsProps) {
  return (
    <>
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
    </>
  );
}
