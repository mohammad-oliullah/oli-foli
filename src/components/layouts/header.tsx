import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { SearchPalette } from "@/components/search/search-palette";
import { HeaderMenu } from "./header-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex shrink-0 items-center border-b bg-background/95 px-3 backdrop-blur sm:px-4 lg:px-6">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-1.5 focus:text-sm"
      >
        Skip to content
      </a>
      <Link
        href="/"
        className="font-mono text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        OLI.DEV
      </Link>

      <HeaderMenu />

      <div className="ml-auto flex items-center gap-2">
        <SearchPalette />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
