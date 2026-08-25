import type { ReactNode } from "react";

import { BottomBar } from "./bottom-bar";
import { Header } from "./header";
import { RightSidebar } from "./right-sidebar";
import { Sidebar } from "./sidebar";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main workspace */}
      <div className="flex min-h-0 flex-1">
        {/* Left navigation */}
        <Sidebar />

        {/* Only this area scrolls */}
        <main className="min-w-0 flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* Contextual navigation */}
        <RightSidebar />
      </div>

      {/* Bottom actions */}
      <BottomBar />
    </div>
  );
}
