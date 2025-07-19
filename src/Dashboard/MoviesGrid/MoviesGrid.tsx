import MovieCard from "../MovieCard/MovieCard";
import type { singleMovie } from "../../MoviesData/dataMovies";

type Props = {
  movies: singleMovie[];
};

const MoviesGrid = ({ movies }: Props) => {
  return (
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
            Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre
          }
        />
      ))}
    </div>
  );
};

export default MoviesGrid;
