"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  Bot,
  FileText,
  FolderKanban,
  GitBranch,
  Home,
  Lightbulb,
  Mail,
  Menu,
  Sparkles,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { label: "Overview", href: "/", icon: Home },
  { label: "Experience", href: "/experience", icon: BriefcaseBusiness },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Skills", href: "/skills", icon: Sparkles },
  { label: "Engineering", href: "/engineering", icon: Lightbulb },
  { label: "Career", href: "/career", icon: UserRound },
  { label: "Now", href: "/now", icon: Bot },
  { label: "GitHub", href: "/github", icon: GitBranch },
  { label: "Resume", href: "/resume", icon: FileText },
];

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Open navigation" />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b px-6 py-5 text-left">
          <SheetTitle className="font-mono text-lg">OLI.DEV</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <SheetClose
                key={item.href}
                render={
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${
                      active
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  />
                }
              >
                <Icon className="size-4" />
                {item.label}
              </SheetClose>
            );
          })}

          <div className="my-3 border-t" />

          <SheetClose
            render={
              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              />
            }
          >
            <Mail className="size-4" />
            Contact
          </SheetClose>

          <SheetClose
            render={
              <Link
                href="/ai"
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              />
            }
          >
            <Bot className="size-4" />
            Ask Oli AI
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
