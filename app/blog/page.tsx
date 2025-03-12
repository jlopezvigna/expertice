import { BlogCard } from "@/components/others/BlogCard";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      category: "Diseño",
      readTime: "5 min",
      image: data.articleImage,
      href: data.url,
    };
  });

  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
}

export default async function BlogPage() {
  const blogPosts = await getPosts();

  return (
    <main className="pt-16 overflow-hidden bg-background relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-[#2b7fff32] rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#ad46ff33] rounded-full blur-3xl" />
      </div>
      <div className="min-h-screen relative">
        <div className="container mx-auto pt-20">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-center">
            Our Blog
          </h1>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {blogPosts.map((blog, idx) => (
                <div key={idx}>
                  <BlogCard
                    index={idx}
                    href={blog.href}
                    image={blog.image}
                    title={blog.title}
                    description={blog.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
