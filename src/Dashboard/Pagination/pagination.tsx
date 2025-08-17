// src/components/Pagination/pagination.tsx
import "./pagination.css";

type Orientation = "horizontal" | "vertical";
type Size = "sm" | "md";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  orientation?: Orientation;
  size?: Size;
  className?: string;
  loading?: boolean; // ⬅️ novo
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  orientation = "vertical",
  size = "sm",
  className = "",
  loading = false, // ⬅️ novo
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const go = (page: number) => {
    if (loading) return; // blokiraj klik tokom fetch-a
    onPageChange(page);
  };

  return (
    <nav
      className={`pagination ${orientation} ${size} ${className}`}
      aria-label="Movies pagination"
    >
      <button
        disabled={currentPage === 1 || loading}
        onClick={() => go(currentPage - 1)}
        aria-label="Previous page"
      >
        ‹
      </button>

      <div className="pages">
        {pages.map((page) => (
          <button
            key={page}
            className={page === currentPage ? "active" : ""}
            onClick={() => go(page)}
            aria-current={page === currentPage ? "page" : undefined}
            disabled={loading} // ⬅️ sprečava spam klik dok traje fetch
          >
            {page}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages || loading}
        onClick={() => go(currentPage + 1)}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
};

export default Pagination;
