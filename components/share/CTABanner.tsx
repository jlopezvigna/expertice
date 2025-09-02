"use client";

import { InteractiveHoverButton } from "@/components/magic/interactive-button";
import Routes from "@/constants/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
  className?: string;
  rounded?: boolean;
  buttonText?: string;
}

export const CTABanner = ({
  className,
  title = "Let&apos;s find more that brings us together.",
  description = "Connect with us to discover how our expertise in software development can help your business grow. From mobile apps to enterprise solutions, we&apos;re here to bring your vision to life.",
  buttonText = "Contact Us",
  rounded = true,
}: CTABannerProps) => {
  return (
    <section className={cn(className, "py-20")}>
      <div
        className={cn(
          "text-center bg-gradient-to-r from-primary to-accent-foreground rounded-2xl py-12 px-6",
          rounded ? "rounded-2xl" : "rounded-none"
        )}
      >
        <h2 className="text-xl md:text-3xl text-background font-bold mb-6">
          {title}
        </h2>
        <p className="text-md md:text-xl text-justify text-primary-foreground mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <InteractiveHoverButton>
          <Link href={Routes.Contact}>{buttonText}</Link>
        </InteractiveHoverButton>
      </div>
    </section>
  );
};
