import { BackgroundRoundedBlur } from "@/components/background-rounded-blur";
import { Title } from "@/components/ui/title";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({ id: fileName.replace(".md", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const postsDirectory = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDirectory, `${id}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    data.articleImage = `${process.env.NEXT_PUBLIC_BASE_PATH}${data.articleImage}`;

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
  } catch {
    return {
      title: "Artículo no encontrado",
      description: "El artículo que buscas no existe",
    };
  }
}

export default async function PostDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postsDirectory = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDirectory, `${id}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return (
      <main className="overflow-hidden relative pt-16 bg-primary/10">
        <BackgroundRoundedBlur left={false} />

        <div className="relative container mx-auto py-12">
          <div className="max-w-4xl mx-auto">
            <Title text={data.title} />
            {data.articleImage && (
              <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}${data.articleImage}`}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div
              className="prose prose-lg max-w-none mt-8 [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:tracking-tight [&>h1]:text-accent-foreground [&>h1]:mt-8 [&>h1]:mb-4
              [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-accent-foreground [&>h2]:mt-8 [&>h2]:mb-4
              [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:tracking-tight [&>h3]:text-accent-foreground [&>h3]:mt-6 [&>h3]:mb-4
              [&>h4]:text-xl [&>h4]:font-bold [&>h4]:tracking-tight [&>h4]:text-accent-foreground [&>h4]:mt-6 [&>h4]:mb-4
              [&>p]:text-muted-foreground [&>p]:leading-7 [&>p]:mt-4 [&>p]:mb-4
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:text-muted-foreground [&>ul]:mt-4 [&>ul]:mb-4
              [&>ul>li]:mt-2 [&>ul>li]:leading-7
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:text-muted-foreground [&>ol]:mt-4 [&>ol]:mb-4
              [&>ol>li]:mt-2 [&>ol>li]:leading-7
              [&>blockquote]:border-l-4 [&>blockquote]:border-primary/20 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-muted-foreground [&>blockquote]:mt-4 [&>blockquote]:mb-4
              [&>a]:text-primary [&>a]:underline [&>a]:underline-offset-4 hover:[&>a]:text-primary/80
              [&>p>a]:text-primary [&>p>a]:underline [&>p>a]:underline-offset-4 hover:[&>p>a]:text-primary/80 [&>p>a]:transition-colors
              [&>code]:bg-primary/10 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded [&>code]:font-mono [&>code]:text-sm [&>code]:text-primary
              [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:mt-4 [&>pre]:mb-4 [&>pre]:overflow-x-auto
              [&>img]:rounded-xl [&>img]:shadow-lg [&>img]:my-8
              [&>table]:w-full [&>table]:my-4
              [&>table>thead>tr>th]:border [&>table>thead>tr>th]:px-4 [&>table>thead>tr>th]:py-2 [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:font-bold [&>table>thead>tr>th]:bg-muted
              [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:px-4 [&>table>tbody>tr>td]:py-2 [&>table>tbody>tr>td]:text-left
              [&>hr]:border-border [&>hr]:my-8"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Publicado el{" "}
                {new Date(data.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}
