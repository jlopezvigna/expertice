import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Post, PostMetadata } from "@/interfaces/post";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getFileContents(slug: string, extension: boolean = true) {
  const fullPath = join(postsDirectory, `${slug}${extension ? ".md" : ""}`);
  return fs.readFileSync(fullPath, "utf8");
}

export async function getPosts(limit?: number): Promise<Post[]> {
  const fileNames = getPostSlugs();
  limit = limit || fileNames.length;

  const posts = fileNames.map((fileName) => {
    const fileContents = getFileContents(fileName, false);
    const { data } = matter(fileContents);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.articleImage,
      href: data.url,
    };
  });

  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getPostMetadata(data: PostMetadata) {
  return {
    title: data.title,
    description: data.description || "Artículo del blog de Expertice",
    authors: [{ name: data.author || "Expertice" }],
    openGraph: {
      title: data.title,
      description: data.description || "Artículo del blog de Expertice",
      type: "article",
      publishedTime: data.date,
      authors: [data.author || "Expertice"],
      images: data.articleImage
        ? [
            {
              url: data.articleImage,
              width: 1200,
              height: 630,
              alt: data.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description || "Artículo del blog de Expertice",
      images: data.articleImage ? [data.articleImage] : [],
    },
  };
}
