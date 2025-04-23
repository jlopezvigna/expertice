import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export type BlogPost = {
  title: string;
  description: string;
  date: string;
  image: string;
  href: string;
};

export async function getPosts() {
  const postsDirectory = join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const fullPath = join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
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
    .slice(0, 3);
}
