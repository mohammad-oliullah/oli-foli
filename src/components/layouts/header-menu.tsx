"use client";

import Link from "next/link";
import { useState } from "react";

import { products } from "@/data/products";

export function HeaderMenu() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav
      className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center"
      onMouseLeave={() => setProductsOpen(false)}
      aria-label="Products and blogs"
    >
      <button
        type="button"
        onClick={() => setProductsOpen((open) => !open)}
        onMouseEnter={() => setProductsOpen(true)}
        aria-expanded={productsOpen}
        aria-controls="header-products"
        className={`rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 ${
          productsOpen
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Products
      </button>

      <div
        id="header-products"
        className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${
          productsOpen ? "max-w-125 opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        {products.map((product) =>
          product.external ? (
            <a
              key={product.slug}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 whitespace-nowrap px-2 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {product.name}
            </a>
          ) : (
            <Link
              key={product.slug}
              href={product.href}
              className="shrink-0 whitespace-nowrap px-2 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {product.name}
            </Link>
          ),
        )}
      </div>

      <Link
        href="/blogs"
        className="shrink-0 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        Blogs
      </Link>
    </nav>
  );
}
