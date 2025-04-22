import matter from "gray-matter";
import fs from "fs";
import { join } from "path";
import { Post } from "@/interfaces/post";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostMetadata(): Post[] {
  const files = getPostSlugs();
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // get the file data
  const posts = markdownPosts
    .map((filename) => {
      const fileContents = fs.readFileSync(
        `${postsDirectory}/${filename}`,
        "utf8"
      );
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        image: matterResult.data.articleImage,
        date: matterResult.data.date,
        description: matterResult.data.description,
        slug: filename.replace(".md", ""),
        href: matterResult.data.url, // TODO: remove href
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  return posts;
}

// export function getPostBySlug(slug: string) {
//   const realSlug = slug.replace(/\.md$/, "");
//   const fullPath = join(postsDirectory, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const { data, content } = matter(fileContents);

//   return { ...data, slug: realSlug, content } as Post;
// }

// export function getAllPosts(): Post[] {
//   const slugs = getPostSlugs();
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
//   return posts;
// }
