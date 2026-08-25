"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  {
    name: "Bhalobasha",
    href: "https://bhalobasha-plum.vercel.app",
  },
];

export function HeaderMenu() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav
      className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center"
      onMouseLeave={() => setProductsOpen(false)}
    >
      {/* Products */}
      <button
        type="button"
        onClick={() => setProductsOpen((open) => !open)}
        onMouseEnter={() => setProductsOpen(true)}
        className={`rounded-md px-3 py-2 text-sm transition-colors ${
          productsOpen
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Products
      </button>

      {/* Product items */}
      <div
        className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${
          productsOpen ? "max-w-125 opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        {products.map((product) => (
          <a
            key={product.href}
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 whitespace-nowrap px-2 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {product.name}
          </a>
        ))}
      </div>

      {/* Blogs */}
      <Link
        href="/blogs"
        className="shrink-0 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Blogs
      </Link>
    </nav>
  );
}
