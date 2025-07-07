import { useState } from "react";
import { currentMovies } from "../MoviesData/currentMovies";
import MovieCard from "./MovieCard/MovieCard";

const MoviesSlider = () => {
  const moviesPerGroup = 4;

  // Podeli filmove u grupe po 4
  const groupMovies = () => {
    const groups = [];
    for (let i = 0; i < currentMovies.length; i += moviesPerGroup) {
      groups.push(currentMovies.slice(i, i + moviesPerGroup));
    }
    return groups;
  };

  const movieGroups = groupMovies();
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev === movieGroups.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? movieGroups.length - 1 : prev - 1));
  };

  return (
    <div className="movies-slider-container">
      <h2 className="slider-title">Currently trending</h2>
      <div className="slider">
        <button className="slider-arrow left" onClick={handlePrev}>
          &lt;
        </button>

        <div className="slider-window">
          <div
            className="slider-wrapper"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {movieGroups.map((group, groupIndex) => (
              <div className="slide" key={groupIndex}>
                {group.map((movie) => (
                  <MovieCard
                    key={movie.id + groupIndex}
                    id={movie.id}
                    title={movie.title}
                    thumbnail={movie.thumbnail}
                    rating={movie.rating}
                    year={movie.year}
                    genre={movie.genre.join(", ")}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <button className="slider-arrow right" onClick={handleNext}>
          &gt;
        </button>
      </div>

      <div className="slider-indicator">
        {index + 1}/{movieGroups.length}
      </div>
    </div>
  );
};

export default MoviesSlider;
