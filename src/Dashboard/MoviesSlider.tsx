import MovieCard from "./MovieCard/MovieCard";
import type { singleMovie } from "../MoviesData/dataMovies";

type Props = {
  movies: singleMovie[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>; // ✅ ispravljeno
};

const MoviesSlider = ({ movies, index, setIndex }: Props) => {
  const moviesPerGroup = 4;

  const groupMovies = () => {
    const groups = [];
    for (let i = 0; i < movies.length; i += moviesPerGroup) {
      groups.push(movies.slice(i, i + moviesPerGroup));
    }
    return groups;
  };

  const movieGroups = groupMovies();

  const handleNext = () => {
    setIndex((prev) => (prev === movieGroups.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? movieGroups.length - 1 : prev - 1));
  };

  return (
    <div className="movies-slider-container">
      <div className="slider-title-nav">
        <h2 className="slider-title">Currently trending</h2>
        <div className="slider-indicator">
          {movieGroups.map((_, i) => (
            <div
              key={i}
              className={`indicator-dot ${i === index ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>

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
            ))}
          </div>
        </div>

        <button className="slider-arrow right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MoviesSlider;
