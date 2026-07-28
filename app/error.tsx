"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container grid min-h-screen place-items-center py-24">
      <div className="max-w-xl text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
          <AlertTriangle aria-hidden="true" />
        </span>
        <h1 className="mt-7 text-4xl font-semibold tracking-tight">Something went wrong.</h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">The page encountered an unexpected error. Try rendering it again.</p>
        <Button type="button" className="mt-8" onClick={reset}>
          <RefreshCw aria-hidden="true" /> Try again
        </Button>
      </div>
    </main>
  );
}
