import Link from "next/link";

function getVisiblePages(currentPage: number, totalPages: number): number[] {
  const firstPage = Math.max(1, currentPage - 2);
  const lastPage = Math.min(totalPages, currentPage + 2);
  const pages = new Set([1, totalPages]);

  for (let page = firstPage; page <= lastPage; page += 1) {
    pages.add(page);
  }

  return Array.from(pages).sort((left, right) => left - right);
}

export function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) {
    return null;
  }

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav aria-label="Feedback pages" className="flex flex-wrap items-center justify-center gap-2">
      {currentPage > 1 ? (
        <Link
          className="rounded-lg px-3 py-2 text-sm font-medium text-indigo-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          href={`/feedback-me?page=${currentPage - 1}`}
        >
          Previous
        </Link>
      ) : (
        <span aria-disabled="true" className="cursor-not-allowed rounded-lg px-3 py-2 text-sm text-slate-600">
          Previous
        </span>
      )}

      {visiblePages.map((page, index) => {
        const previousPage = visiblePages[index - 1];
        const needsEllipsis = previousPage !== undefined && page - previousPage > 1;

        return (
          <span className="contents" key={page}>
            {needsEllipsis ? <span className="px-1 text-slate-500">…</span> : null}
            {page === currentPage ? (
              <span aria-current="page" className="rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white">
                {page}
              </span>
            ) : (
              <Link
                className="rounded-lg px-3 py-2 text-sm font-medium text-indigo-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                href={`/feedback-me?page=${page}`}
              >
                {page}
              </Link>
            )}
          </span>
        );
      })}

      {currentPage < totalPages ? (
        <Link
          className="rounded-lg px-3 py-2 text-sm font-medium text-indigo-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          href={`/feedback-me?page=${currentPage + 1}`}
        >
          Next
        </Link>
      ) : (
        <span aria-disabled="true" className="cursor-not-allowed rounded-lg px-3 py-2 text-sm text-slate-600">
          Next
        </span>
      )}
    </nav>
  );
}
