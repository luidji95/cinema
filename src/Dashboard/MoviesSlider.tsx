import { useState } from "react";

import { currentMovies } from "../MoviesData/currentMovies";
import MovieCard from "./MovieCard/MovieCard";

const MoviesSlider = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const moviesPerGroup = 4;
  const totalGroups = Math.ceil(currentMovies.length / moviesPerGroup);

  const currentMoviesGroup = currentMovies.slice(
    currentGroup * moviesPerGroup,
    (currentGroup + 1) * moviesPerGroup
  );

  const goToNextGroup = () => {
    setCurrentGroup((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));
  };

  const goToPrevGroup = () => {
    setCurrentGroup((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };

  return (
    <div className="movies-slider-container">
      <h2 className="slider-title">Currently trending</h2>
      <div className="movies-slider">
        <button className="slider-arrow left" onClick={goToPrevGroup}>
          &lt;
        </button>

        <div className="movies-group">
          {currentMoviesGroup.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              thumbnail={movie.thumbnail}
              rating={movie.rating}
              year={movie.year}
              genre={movie.genre.join(", ")}
            />
          ))}
        </div>

        <button className="slider-arrow right" onClick={goToNextGroup}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MoviesSlider;
