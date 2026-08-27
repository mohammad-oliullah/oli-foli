import Link from "next/link";
import { Bot, Mail } from "lucide-react";

export function BottomBar() {
  return (
    <footer className="shrink-0 border-t bg-background">
      <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Link
          href="/contact"
          className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Mail className="size-3.5" aria-hidden />
          Contact
        </Link>

        <Link
          href="/ai"
          className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <Bot className="size-3.5" aria-hidden />
          Ask Oli AI
        </Link>
      </div>
    </footer>
  );
}
