import { Search } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur lg:px-6">
      <div className="lg:hidden">
        <span className="font-mono text-sm font-semibold">OLI.DEV</span>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Search className="size-4" />

          <span className="hidden sm:inline">Search</span>

          <kbd className="hidden rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] sm:inline">
            ⌘K
          </kbd>
        </button>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
