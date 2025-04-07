import { NextResponse } from "next/server";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

export async function GET() {
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

  const sortedPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return NextResponse.json(sortedPosts);
}
