"use client";

import Image, { type ImageProps } from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

interface ImageWithLoaderProps extends ImageProps {
  wrapperClassName?: string;
}

export function ImageWithLoader({
  className,
  wrapperClassName,
  alt,
  onLoad,
  ...props
}: ImageWithLoaderProps) {
  const [loaded, setLoaded] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  // Handle cached images where onLoad might not fire on mount
  React.useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-secondary",
        wrapperClassName,
      )}
    >
      {/* Loading placeholder skeleton */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-10 animate-pulse bg-gradient-to-br from-secondary via-muted to-secondary transition-opacity duration-500",
          loaded && "pointer-events-none opacity-0",
        )}
      />

      {/* Next.js Image component */}
      <Image
        ref={imgRef}
        alt={alt}
        className={cn(
          "block h-full w-full object-cover",
          className,
        )}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        {...props}
      />
    </div>
  );
}