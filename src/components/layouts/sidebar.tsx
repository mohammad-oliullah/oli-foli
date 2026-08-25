import Link from "next/link";
import {
  BriefcaseBusiness,
  Bot,
  FileText,
  FolderKanban,
  Home,
  Lightbulb,
  Mail,
  Sparkles,
  UserRound,
  GitBranch,
} from "lucide-react";

const navigation = [
  {
    label: "Overview",
    href: "/",
    icon: Home,
  },
  {
    label: "Experience",
    href: "/experience",
    icon: BriefcaseBusiness,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Skills",
    href: "/skills",
    icon: Sparkles,
  },
  {
    label: "Engineering",
    href: "/engineering",
    icon: Lightbulb,
  },
  {
    label: "Career",
    href: "/career",
    icon: UserRound,
  },
  {
    label: "Now",
    href: "/now",
    icon: Bot,
  },
  {
    label: "GitHub",
    href: "/github",
    icon: GitBranch,
  },
  {
    label: "Resume",
    href: "/resume",
    icon: FileText,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-64 shrink-0 border-r bg-background lg:flex lg:flex-col">
      <div className="flex h-16 items-center border-b px-6">
        <Link
          href="/"
          className="font-mono text-lg font-semibold tracking-tight"
        >
          OLI.DEV
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-6">
        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t p-3">
        <Link
          href="/contact"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Mail className="size-4" />
          <span>Contact</span>
        </Link>

        <Link
          href="/ai"
          className="mt-1 flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Bot className="size-4" />
          <span>Ask Oli AI</span>
        </Link>
      </div>
    </aside>
  );
}
