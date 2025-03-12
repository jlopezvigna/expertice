import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magic/interactive-button";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("page404");
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
      {/* Número 404 en el fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <span className="text-[12rem] sm:text-[20rem] md:text-[30rem] lg:text-[40rem] font-bold text-gray-800 dark:text-neutral-200">
          404
        </span>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          {t("title")}
        </h1>

        <p className="text-lg text-muted-foreground mb-12">
          {t("description")}
        </p>

        <InteractiveHoverButton className="bg-foreground text-primary-foreground dark:bg-neutral-200 dark:text-neutral-800">
          <Link href="/">{t("button")}</Link>
        </InteractiveHoverButton>
      </div>
    </main>
  );
}
