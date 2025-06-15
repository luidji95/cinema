import { useEffect, useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import { uploadMovies } from "../Scripts/uploadMovies";
import Navigation from "./Navigation/Navigation";

const Dashboard = () => {
  const [movies, setMovies] = useState<singleMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await uploadMovies(); // ✅ prvo ubaci filmove u bazu

      const { data, error } = await supabase.from("movies").select("*");
      console.log("🎥 Fetchovani filmovi:", data);

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
            <div className="movie-card" key={movie.id}>
              <img src={movie.thumbnail} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>Ocena: {movie.rating}</p>
              <p>{movie.year}</p>
              <p>{movie.writers}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
