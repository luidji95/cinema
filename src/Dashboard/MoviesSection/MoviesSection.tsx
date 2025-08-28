import { useEffect, useRef, useState } from "react";
import { supabase } from "../../Supabase/supabaseClient";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import Pagination from "../Pagination/pagination";
import GenresSidebar from "../GenresSidebar/GenresSidebar";
import type { singleMovie } from "../../MoviesData/dataMovies";
import { normalizeGenre } from "../../utils/normalizeGenres";
import { getMyBookmarks, toggleBookmark } from "../../Api/bookmarks";
import "./moviesSection.css";

type Props = {
  perPage: number;
  searchTerm?: string;
  showBookmarksOnly?: boolean;
};

const MoviesSection = ({
  perPage,
  searchTerm = "",
  showBookmarksOnly = false,
}: Props) => {
  const [movies, setMovies] = useState<singleMovie[]>([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // GLOBALNI žanrovi (učitavaju se jednom)
  const [allGenres, setAllGenres] = useState<string[]>([]);
  // Globalni filter po žanru
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  // ⬇️ NOVO: ID-jevi mojih bookmarkovanih filmova
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  const totalPages = Math.ceil(totalMovies / perPage);
  const topAnchorRef = useRef<HTMLDivElement>(null);

  // 0) Učitaj bookmarkove korisnika (mount + na auth promenu)
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const ids = await getMyBookmarks();
        if (!cancelled) setBookmarkedIds(new Set(ids));
      } catch (e) {
        console.error("fetch bookmarks error:", e);
      }
    };
    load();
    const { data: sub } = supabase.auth.onAuthStateChange(() => load());
    return () => {
      cancelled = true;
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  // 1) Učitaj sve žanrove jednom
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

  // 2) Resetuj page na promenu search/žanra/flag-a “bookmarks only”
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedGenre, showBookmarksOnly]);

  // 3) Fetch filmova (paging + filters + bookmarks-only)
  useEffect(() => {
    let cancel = false;

    const fetchMovies = async () => {
      setLoading(true);

      // Ako tražimo SAMO bookmarkove a nema nijednog — skrati put (nema API)
      if (showBookmarksOnly && bookmarkedIds.size === 0) {
        if (!cancel) {
          setMovies([]);
          setTotalMovies(0);
          setLoading(false);
        }
        return;
      }

      const from = (currentPage - 1) * perPage;
      const to = from + perPage - 1;

      let query = supabase.from("movies").select("*", { count: "exact" });

      if (selectedGenre && selectedGenre !== "All") {
        query = query.ilike("genre", `%${selectedGenre}%`);
      }

      const term = searchTerm.trim();
      if (term) {
        query = query.or(`title.ilike.%${term}%,genre.ilike.%${term}%`);
      }

      // ⬇️ NOVO: ograniči na moje bookmarkove (server-side) kad je flag uključen
      if (showBookmarksOnly) {
        const ids = Array.from(bookmarkedIds);
        query = query.in("id", ids);
      }

      const { data, count, error } = await query.range(from, to);

      if (error) console.error("fetch movies error:", error);
      if (cancel) return;

      setMovies(data || []);
      setTotalMovies(count ?? 0);
      setLoading(false);
    };

    fetchMovies();
    // uključimo bookmarkedIds u deps samo kada filtriramo po bookmarkovima
  }, [
    currentPage,
    perPage,
    selectedGenre,
    searchTerm,
    showBookmarksOnly,
    bookmarkedIds,
  ]);

  // 4) Smooth scroll posle učitavanja
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

  // Handler: optimistički toggle + API
  const handleToggleBookmark = async (id: string) => {
    const next = !bookmarkedIds.has(id);

    setBookmarkedIds((prev) => {
      const s = new Set(prev);
      next ? s.add(id) : s.delete(id);
      return s;
    });

    try {
      await toggleBookmark(id);
    } catch (e) {
      setBookmarkedIds((prev) => {
        const s = new Set(prev);
        next ? s.delete(id) : s.add(id);
        return s;
      });
      console.error("toggle bookmark error:", e);
    }
  };

  return (
    <section className="movies-row three-cols">
      <aside className="movies-side">
        <Pagination
          orientation="vertical"
          size="sm"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </aside>

      <div className="movies-main">
        <div ref={topAnchorRef} className="scroll-anchor" />
        <div className={`grid-wrapper ${loading ? "is-loading" : ""}`}>
          <MoviesGrid
            movies={movies}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
          />
          {loading && (
            <div className="grid-overlay" aria-hidden="true">
              <div className="spinner" />
            </div>
          )}
        </div>
      </div>

      <GenresSidebar
        genres={allGenres}
        selected={selectedGenre}
        onSelect={(g) => {
          setSelectedGenre((prev) => (prev === g ? null : g));
        }}
      />
    </section>
  );
};

export default MoviesSection;
