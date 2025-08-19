// src/Dashboard/MovieCard/MovieCard.tsx
export type BaseCardProps = {
  id: string;
  image: string; // full-res poster
  thumbnail: string; // može ostati u tipu, ali ga ne koristimo
};

export type MovieCardProps =
  | ({ variant: "slider" } & BaseCardProps)
  | ({
      variant: "full";
      title: string;
      rating: number;
      year: number;
      genre: string | string[];
    } & BaseCardProps);

const MovieCard = (props: MovieCardProps) => {
  const isSlider = props.variant === "slider";
  const alt = isSlider ? "Poster" : "title" in props ? props.title : "Poster";

  // normalize genre (ako je niz)
  const genreText =
    "genre" in props
      ? Array.isArray(props.genre)
        ? props.genre.join(", ")
        : props.genre
      : undefined;

  return (
    <div className={`movie-card ${isSlider ? "is-slider" : ""}`}>
      <img
        src={props.image}
        alt={alt}
        loading="lazy"
        decoding="async"
        {...(isSlider ? { fetchPriority: "high" as const } : {})}
      />

      {!isSlider && "title" in props && (
        <div className="meta">
          <h4 className="title">{props.title}</h4>
          <p className="sub">
            {props.year} • ⭐ {props.rating}
            {genreText ? ` • ${genreText}` : ""}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
