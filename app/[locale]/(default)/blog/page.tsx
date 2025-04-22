import { BackgroundRoundedBlur } from "@/components/background-rounded-blur";
import { BlogCard } from "@/components/others/BlogCard";
import { Title } from "@/components/ui/title";
import { setRequestLocale } from "next-intl/server";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

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

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default async function BlogPage({ params }: Props) {
  // Enable static rendering
  const { locale } = await params;
  setRequestLocale(locale);

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
