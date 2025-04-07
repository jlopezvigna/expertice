"use client";

import { InteractiveHoverButton } from "@/components/magic/interactive-button";
import Routes from "@/constants/routes";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
  className?: string;
  rounded?: boolean;
}

export const CTABanner = ({
  className,
  title = "title",
  description = "description",
  rounded = true,
}: CTABannerProps) => {
  const t = useTranslations("ctaBanner");

  return (
    <section className={cn(className, "py-20")}>
      <div
        className={cn(
          "text-center bg-gradient-to-r from-primary to-accent-foreground rounded-2xl py-12 px-6",
          rounded ? "rounded-2xl" : "rounded-none"
        )}
      >
        <h2 className="text-xl md:text-3xl text-background font-bold mb-6">
          {t(title)}
        </h2>
        <p className="text-md md:text-xl text-justify text-primary-foreground mb-8 max-w-3xl mx-auto">
          {t(description)}
        </p>
        <InteractiveHoverButton>
          <Link href={Routes.Contact}>{t("button")}</Link>
        </InteractiveHoverButton>
      </div>
    </section>
  );
};
