"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const themes = [
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    icon: Monitor,
  },
] as const;

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center rounded-md border p-1">
      {themes.map((item) => {
        const Icon = item.icon;
        const active = theme === item.value;

        return (
          <Button
            key={item.value}
            type="button"
            variant={active ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setTheme(item.value)}
            className="h-7 gap-1.5 px-2"
            aria-label={`Use ${item.label} theme`}
          >
            <Icon className="size-3.5" />
            <span className="hidden md:inline">{item.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
