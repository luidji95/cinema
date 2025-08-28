import MovieCard from "../MovieCard/MovieCard";
import type { singleMovie } from "../../MoviesData/dataMovies";

type Props = {
  movies: singleMovie[];
  bookmarkedIds?: Set<string>;
  onToggleBookmark?: (id: string) => void;
};

const MoviesGrid = ({ movies, bookmarkedIds, onToggleBookmark }: Props) => {
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
          genre={m.genre}
          isBookmarked={bookmarkedIds?.has(m.id)}
          onToggleBookmark={onToggleBookmark}
        />
      ))}
    </div>
  );
};

export default MoviesGrid;
