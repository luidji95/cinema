import { useEffect, useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import Navigation from "./Navigation/Navigation";
import MovieCard from "./MovieCard/MovieCard";
import MoviesSlider from "./MoviesSlider";
import type { singleMovie } from "../MoviesData/dataMovies";
import { uploadMoviesForSlider } from "../Scripts/uploadMovies";

const Dashboard = () => {
  const [movies, setMovies] = useState<singleMovie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<singleMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      // await uploadMoviesForSlider();
      const { data: moviesData } = await supabase.from("movies").select("*");
      const { data: trendingData } = await supabase
        .from("trending_movies")
        .select("*");

      setMovies(moviesData || []);
      setTrendingMovies(trendingData || []);
      setLoading(false);
    };

    fetchAll();
  }, []);

  return (
    <div>
      <Navigation />

      {!loading && <MoviesSlider movies={trendingMovies} />}

      {loading ? (
        <p>Učitavanje filmova...</p>
      ) : (
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
      )}
    </div>
  );
};

export default Dashboard;
