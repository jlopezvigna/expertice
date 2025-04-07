import { cn } from "@/lib/utils";
import React from "react";

interface VideoProps {
  src: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  preload?: "auto" | "metadata" | "none";
  className?: string;
  caption?: {
    src: string;
    lang: string;
    label: string;
  };
}

export function Video({
  src,
  width = 320,
  height = 240,
  caption,
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  controls = false,
  className,
}: VideoProps) {
  return (
    <video
      width={width}
      height={height}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      preload={preload}
      className={cn(className)}
      controls={controls}
      playsInline
      webkit-playsinline
    >
      <source src={src} type="video/mp4" />
      {caption && (
        <track
          src={caption.src}
          kind="subtitles"
          srcLang={caption.lang}
          label={caption.label}
        />
      )}
      Your browser does not support the video tag.
    </video>
  );
}
