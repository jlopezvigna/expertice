import { getPosts } from "@/lib/blog";
import LastBlogsClient from "./LastBlogsClient";
import { getTranslations, Locale } from "@/lib/i18n";

export default async function LastBlogs({
  translations,
  locale,
}: {
  translations: ReturnType<typeof getTranslations>;
  locale: Locale;
}) {
  const blogPosts = await getPosts(3);

  return (
    <LastBlogsClient
      blogPosts={blogPosts}
      translations={translations}
      locale={locale}
    />
  );
}
