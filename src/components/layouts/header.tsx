import { Search } from "lucide-react";

import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { HeaderMenu } from "./header-menu";

export function Header() {
  return (
    <header className="relative z-40 flex shrink-0 items-center border-b bg-background/95 px-3 backdrop-blur sm:px-4 lg:px-6">
      <a
        href="https://dev.to/oliullah"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-sm font-semibold tracking-tight"
      >
        OLI.DEV
      </a>

      <HeaderMenu />

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-3"
        >
          <Search className="size-4" />

          <span className="hidden sm:inline">Search</span>

          <kbd className="hidden rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] md:inline">
            ⌘K
          </kbd>
        </button>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
