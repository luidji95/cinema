import { useEffect, useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import Navigation from "./Navigation/Navigation";
import MovieCard from "./MovieCard/MovieCard";
import MoviesSlider from "./MoviesSlider";
import Pagination from "./Pagination/Pagination"; // dodaj ovu komponentu
import type { singleMovie } from "../MoviesData/dataMovies";

const Dashboard = () => {
  const [movies, setMovies] = useState<singleMovie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<singleMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);

  const perPage = 12;
  const totalPages = Math.ceil(totalMovies / perPage);

  useEffect(() => {
    const fetchTrending = async () => {
      const { data: trendingData } = await supabase
        .from("trending_movies")
        .select("*");
      setTrendingMovies(trendingData || []);
    };

    fetchTrending();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      const from = (currentPage - 1) * perPage;
      const to = from + perPage - 1;

      const { data, error, count } = await supabase
        .from("movies")
        .select("*", { count: "exact" })
        .range(from, to);

      setMovies(data || []);
      setTotalMovies(count || 0);
      setLoading(false);
    };

    fetchMovies();
  }, [currentPage]);

  return (
    <div>
      <Navigation />

      {!loading && <MoviesSlider movies={trendingMovies} />}

      {loading ? (
        <p>Učitavanje filmova...</p>
      ) : (
        <>
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                thumbnail={movie.thumbnail}
                image={movie.image}
                rating={movie.rating}
                year={movie.year}
                genre={
                  Array.isArray(movie.genre)
                    ? movie.genre.join(", ")
                    : movie.genre
                }
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
