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
          variant="full"
          id={movie.id}
          image={movie.image}
          thumbnail={movie.thumbnail}
          title={movie.title}
          rating={Number(movie.rating)}
          year={Number(movie.year)}
          genre={
            Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre
          }
        />
      ))}
    </div>
  );
};

export default MoviesGrid;
