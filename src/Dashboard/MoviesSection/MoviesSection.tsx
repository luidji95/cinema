import { useEffect, useState, useRef } from "react";
import { supabase } from "../../Supabase/supabaseClient";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import Pagination from "../Pagination/pagination";
// import { singleMovie } from "../../MoviesData/dataMovies";

type Props = {
  perPage: number;
};

const MoviesSection = ({ perPage }: Props) => {
  const [movies, setMovies] = useState<singleMovie[]>([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const totalPages = Math.ceil(totalMovies / perPage);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      const from = (currentPage - 1) * perPage;
      const to = from + perPage - 1;

      const { data, count } = await supabase
        .from("movies")
        .select("*", { count: "exact" })
        .range(from, to);

      setMovies(data || []);
      setTotalMovies(count || 0);
      setLoading(false);
    };

    fetchMovies();
  }, [currentPage, perPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });
  };

  return (
    <div ref={sectionRef}>
      {loading ? (
        <p className="min-height">Učitavanje filmova...</p>
      ) : (
        <>
          <MoviesGrid movies={movies} />
        </>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MoviesSection;
