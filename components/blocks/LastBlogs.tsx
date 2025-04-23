import { getPosts } from "@/lib/blog";
import LastBlogsClient from "./LastBlogsClient";

export default async function LastBlogs() {
  const blogPosts = await getPosts();

  return <LastBlogsClient blogPosts={blogPosts} />;
}
