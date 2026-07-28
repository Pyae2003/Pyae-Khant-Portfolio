import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container grid min-h-screen place-items-center py-24">
      <div className="max-w-xl text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
          <Terminal aria-hidden="true" />
        </span>
        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">This route is not in the deployment.</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">The page may have moved, or the URL may be incorrect.</p>
        <Button asChild className="mt-8">
          <Link href="/">
            <ArrowLeft aria-hidden="true" /> Back to portfolio
          </Link>
        </Button>
      </div>
    </main>
  );
}
