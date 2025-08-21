import { useEffect, useRef, useState } from "react";
import { supabase } from "../../Supabase/supabaseClient";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import Pagination from "../Pagination/pagination";
import GenresSidebar from "../GenresSidebar/GenresSidebar";
import type { singleMovie } from "../../MoviesData/dataMovies";
import { normalizeGenre } from "../../utils/normalizeGenres";
import "./moviesSection.css";

type Props = {
  perPage: number;
  searchTerm?: string;
};

const MoviesSection = ({ perPage, searchTerm = "" }: Props) => {
  const [movies, setMovies] = useState<singleMovie[]>([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // GLOBALNI žanrovi (učitavaju se jednom iz cele baze)
  const [allGenres, setAllGenres] = useState<string[]>([]);
  // Globalni filter po žanru
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const totalPages = Math.ceil(totalMovies / perPage);
  const topAnchorRef = useRef<HTMLDivElement>(null);

  // --- 1) Učitaj sve žanrove jednom ---
  useEffect(() => {
    const fetchAllGenres = async () => {
      const { data, error } = await supabase.from("movies").select("genre");
      if (error) {
        console.error("fetch genres error:", error);
        return;
      }
      const uniq = new Set<string>();
      data?.forEach((row: { genre: string }) => {
        normalizeGenre(row.genre).forEach((g) => uniq.add(g));
      });
      setAllGenres([...uniq].sort((a, b) => a.localeCompare(b)));
    };
    fetchAllGenres();
  }, []);

  // --- 2) Resetuj paginaciju kada se promeni search ili žanr ---
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedGenre]);

  // --- 3) Učitaj filmove - paging + filteri ---
  useEffect(() => {
    let cancel = false;

    const fetchMovies = async () => {
      setLoading(true);

      const from = (currentPage - 1) * perPage;
      const to = from + perPage - 1;

      let query = supabase.from("movies").select("*", { count: "exact" });

      // Filter po žanru (globalan)
      if (selectedGenre && selectedGenre !== "All") {
        query = query.ilike("genre", `%${selectedGenre}%`);
      }

      //  Globalni SEARCH (preko cele baze): pretraži title (i po želji genre)
      const term = searchTerm.trim();
      if (term) {
        query = query.or(`title.ilike.%${term}%,genre.ilike.%${term}%`);
      }

      const { data, count, error } = await query.range(from, to);

      if (error) console.error("fetch movies error:", error);
      if (cancel) return;

      setMovies(data || []);
      setTotalMovies(count ?? 0);
      setLoading(false);
    };

    fetchMovies();
    return () => {
      cancel = true;
    };
  }, [currentPage, perPage, selectedGenre, searchTerm]);

  //  Smooth scroll posle svakog učitavanja ---
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
    <section className="movies-row three-cols">
      {/*  paginacija */}
      <aside className="movies-side">
        <Pagination
          orientation="vertical"
          size="sm"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </aside>

      {/*  grid */}
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

      {/*  SVI žanrovi iz baze */}
      <GenresSidebar
        genres={allGenres}
        selected={selectedGenre}
        onSelect={(g) => {
          setSelectedGenre((prev) => (prev === g ? null : g)); // toggle
        }}
      />
    </section>
  );
};

export default MoviesSection;
