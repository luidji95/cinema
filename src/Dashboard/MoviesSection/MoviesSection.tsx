import { useEffect, useRef, useState } from "react";
import { supabase } from "../../Supabase/supabaseClient";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import Pagination from "../Pagination/pagination";
import type { singleMovie } from "../../MoviesData/dataMovies";
import "./moviesSection.css";

type Props = { perPage: number };

const MoviesSection = ({ perPage }: Props) => {
  const [movies, setMovies] = useState<singleMovie[]>([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(totalMovies / perPage);
  const topAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchMovies = async () => {
      setLoading(true);

      const from = (currentPage - 1) * perPage;
      const to = from + perPage - 1;

      const { data, count } = await supabase
        .from("movies")
        .select("*", { count: "exact" })
        .range(from, to);

      if (cancelled) return;

      setMovies(data || []);
      setTotalMovies(count || 0);
      setLoading(false);
    };

    fetchMovies();
    return () => {
      cancelled = true;
    };
  }, [currentPage, perPage]);

  useEffect(() => {
    if (!loading && topAnchorRef.current) {
      requestAnimationFrame(() => {
        topAnchorRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [loading]);

  return (
    <section className="movies-row">
      {/* LEVO: paginacija */}
      <aside className="movies-side">
        <Pagination
          orientation="vertical"
          size="sm"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          loading={loading}
        />
      </aside>

      {/* DESNO: grid */}
      <div className="movies-main">
        <div ref={topAnchorRef} className="scroll-anchor" />
        <div className={`grid-wrapper ${loading ? "is-loading" : ""}`}>
          <MoviesGrid movies={movies} />
          {loading && (
            <div className="grid-overlay" aria-hidden="true">
              <div className="spinner" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MoviesSection;
