import { useEffect, useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import Navigation from "./Navigation/Navigation";
import MoviesSlider from "./MoviesSlider";
import MoviesSection from "./MoviesSection/MoviesSection";
import type { singleMovie } from "../MoviesData/dataMovies";

const Dashboard = () => {
  const [trendingMovies, setTrendingMovies] = useState<singleMovie[]>([]);
  const [index, setIndex] = useState(0);
  const perPage = 12;

  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await supabase.from("trending_movies").select("*");
      setTrendingMovies(data || []);
    };

    fetchTrending();
  }, []);

  return (
    <div>
      <Navigation />

      {trendingMovies.length > 0 && (
        <MoviesSlider
          movies={trendingMovies}
          index={index}
          setIndex={setIndex}
        />
      )}

      <MoviesSection perPage={perPage} />
    </div>
  );
};

export default Dashboard;
