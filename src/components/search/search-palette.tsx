"use client";

import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { Search } from "lucide-react";

import { searchPortfolio } from "@/lib/search";
import { cn } from "@/lib/utils";
import type { SearchItem } from "@/types/search";

export function SearchPalette() {
  const router = useRouter();
  const inputId = useId();
  const listId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => searchPortfolio(query), [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
    dialogRef.current?.close();
  }, []);

  const openPalette = useCallback(() => {
    setOpen(true);
    dialogRef.current?.showModal();
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);

  const goTo = useCallback(
    (item: SearchItem) => {
      close();
      if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer");
        return;
      }
      router.push(item.href);
    },
    [close, router],
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (dialogRef.current?.open) {
          close();
        } else {
          openPalette();
        }
        return;
      }

      if (event.key === "Escape" && dialogRef.current?.open) {
        close();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, openPalette]);

  function onInputKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, Math.max(results.length - 1, 0)));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    }
    if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      goTo(results[activeIndex]);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        className="flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:px-3"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={inputId}
      >
        <Search className="size-4" aria-hidden />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] md:inline">
          Ctrl K
        </kbd>
      </button>

      <dialog
        ref={dialogRef}
        className="m-auto w-[min(100%,36rem)] rounded-lg border bg-background p-0 text-foreground shadow-lg backdrop:bg-black/50"
        aria-labelledby={inputId}
        onClose={close}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <div className="border-b p-3">
          <label htmlFor={inputId} className="sr-only">
            Search the portfolio
          </label>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={onInputKeyDown}
            placeholder="Search pages, projects, experience, skills…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            autoComplete="off"
            aria-autocomplete="list"
            aria-controls={listId}
            aria-activedescendant={
              results[activeIndex] ? `${listId}-${activeIndex}` : undefined
            }
          />
        </div>

        <ul
          id={listId}
          role="listbox"
          className="max-h-80 overflow-y-auto p-2"
        >
          {results.length === 0 ? (
            <li className="px-2 py-6 text-center text-sm text-muted-foreground">
              No matches.
            </li>
          ) : (
            results.map((item, index) => (
              <li key={item.id} role="option" id={`${listId}-${index}`} aria-selected={index === activeIndex}>
                <button
                  type="button"
                  onClick={() => goTo(item)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    "flex w-full flex-col items-start rounded-md px-3 py-2 text-left text-sm",
                    index === activeIndex
                      ? "bg-muted text-foreground"
                      : "text-foreground hover:bg-muted/60",
                  )}
                >
                  <span className="font-medium">{item.title}</span>
                  <span className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {item.group}
                    {item.external ? " · external" : ""}
                  </span>
                  <span className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                    {item.description}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      </dialog>
    </>
  );
}
