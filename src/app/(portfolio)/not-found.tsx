import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <p className="font-mono text-sm text-muted-foreground">/ 404</p>
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-sm text-muted-foreground">
        That route is not in this portfolio.
      </p>
      <Link href="/" className="inline-block text-sm underline underline-offset-2">
        Overview
      </Link>
    </div>
  );
}
