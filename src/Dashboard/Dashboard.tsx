import { useEffect, useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import Navigation from "./Navigation/Navigation";
import MoviesSlider from "./MoviesSlider";
import MoviesSection from "./MoviesSection/MoviesSection";
import type { singleMovie } from "../MoviesData/dataMovies";
import SearchBar from "./SearchBar/SearchBar";

const Dashboard = () => {
  const [trendingMovies, setTrendingMovies] = useState<singleMovie[]>([]);
  const [index, setIndex] = useState(0);
  const perPage = 12;
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await supabase.from("trending_movies").select("*");
      setTrendingMovies(data || []);
    };

    fetchTrending();
  }, []);

  return (
    <div className="page">
      <Navigation />

      <div className="container">
        {trendingMovies.length > 0 && (
          <MoviesSlider
            movies={trendingMovies}
            index={index}
            setIndex={setIndex}
          />
        )}

        <SearchBar
          value={search}
          onChange={setSearch}
          onHomeClick={() => console.log("Home clicked")}
          onBookmarksClick={() => console.log("Bookmarks clicked")}
        />

        <MoviesSection perPage={perPage} searchTerm={search} />
      </div>
    </div>
  );
};

export default Dashboard;
