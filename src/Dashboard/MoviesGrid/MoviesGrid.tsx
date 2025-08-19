import MovieCard from "../MovieCard/MovieCard";
import type { singleMovie } from "../../MoviesData/dataMovies";

type Props = {
  movies: singleMovie[];
  onSeeMore?: (id: string) => void;
};

export default function MoviesGrid({ movies, onSeeMore }: Props) {
  return (
    <div className="movies-grid">
      {movies.map((m) => (
        <MovieCard
          key={m.id}
          id={m.id}
          image={m.image}
          thumbnail={m.thumbnail}
          title={m.title}
          rating={Number(m.rating)}
          year={Number(m.year)}
          genre={Array.isArray(m.genre) ? m.genre.join(", ") : m.genre}
          onSeeMore={onSeeMore}
        />
      ))}
    </div>
  );
}
