"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  Home,
  Lightbulb,
  Sparkles,
  UserRound,
} from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";

const navigation = [
  { label: "Overview", href: "/", icon: Home },
  { label: "Experience", href: "/experience", icon: BriefcaseBusiness },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Skills", href: "/skills", icon: Sparkles },
  { label: "Engineering", href: "/engineering", icon: Lightbulb },
  { label: "Career", href: "/career", icon: UserRound },
  { label: "GitHub", href: "/github", icon: FaSquareGithub },
  { label: "Resume", href: "/resume", icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full w-12 shrink-0 border-r bg-background sm:w-14 lg:w-16 xl:w-56">
      <nav className="flex h-full flex-col gap-1 p-1.5 sm:p-2 xl:p-3">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.label}
              aria-current={active ? "page" : undefined}
              className={`flex items-center justify-center gap-3 rounded-md px-2 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 xl:justify-start xl:px-3 ${
                active
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="size-4 shrink-0" />

              <span className="hidden xl:inline">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
