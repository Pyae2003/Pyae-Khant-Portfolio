"use client";

import Image, { type ImageProps } from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

interface ImageWithLoaderProps extends ImageProps {
  wrapperClassName?: string;
}

export function ImageWithLoader({ className, wrapperClassName, alt, ...props }: ImageWithLoaderProps) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-secondary", wrapperClassName)}>
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-secondary via-muted to-secondary transition-opacity duration-500",
          loaded && "pointer-events-none opacity-0",
        )}
      />
      <Image
        alt={alt}
        className={cn("transition duration-700", loaded ? "scale-100 opacity-100" : "scale-[1.03] opacity-0", className)}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
}
