import { useEffect, useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import { uploadMovies } from "../Scripts/uploadMovies";
import Navigation from "./Navigation/Navigation";
import MovieCard from "./MovieCard/MovieCard";

const Dashboard = () => {
  const [movies, setMovies] = useState<singleMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await uploadMovies();

      const { data, error } = await supabase.from("movies").select("*");
      console.log(" Fetchovani filmovi:", data);

      if (error) {
        console.error("Greška pri dohvatanju filmova:", error.message);
      } else {
        setMovies(data || []);
      }

      setLoading(false);
    };

    init();
  }, []);

  return (
    <div>
      <Navigation />
      <h1>🎬 Prikaz filmova</h1>

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
              rating={movie.rating}
              year={movie.year}
              writers={movie.writers}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
