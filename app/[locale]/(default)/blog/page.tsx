import { BackgroundRoundedBlur } from "@/components/share/background-rounded-blur";
import { BlogCard } from "@/components/features/blogs/BlogCard";
import { Title } from "@/components/ui/title";
import { getPosts } from "@/lib/blog";

export default async function BlogPage() {
  const blogPosts = await getPosts();

  return (
    <main className="overflow-hidden relative pt-16 bg-primary/10">
      <BackgroundRoundedBlur left={false} />

      <div className="min-h-screen relative container mx-auto py-12">
        <Title text="Our Blog" />

        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {blogPosts.map((blog, idx) => (
              <div key={idx}>
                <BlogCard
                  index={idx}
                  href={blog.href}
                  image={blog.image}
                  title={blog.title}
                  date={blog.date}
                  description={blog.description}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
