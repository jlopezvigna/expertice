import { BlurFade } from "@/components/magic/blur-fade";
import { BlogCard } from "@/components/others/BlogCard";
import { getPostMetadata } from "@/lib/api";

export default async function ListBlogs() {
  const blogPosts = await getPostMetadata();

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
