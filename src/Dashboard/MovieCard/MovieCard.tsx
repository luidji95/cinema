// src/components/MovieCard/MovieCard.tsx
export type BaseCardProps = {
  id: string;
  thumbnail: string;
  image: string;
};

export type FullCardProps = BaseCardProps & {
  variant?: "full"; // default
  title: string;
  rating: number;
  year: number;
  genre: string;
};

export type SliderCardProps = BaseCardProps & {
  variant: "slider"; // ⬅️ obavezno kad je slider varijanta
};

// Discriminated union
export type MovieCardProps = FullCardProps | SliderCardProps;

const MovieCard = (props: MovieCardProps) => {
  const { image, thumbnail } = props;

  // Zajednički izgled slike/postera...
  return (
    <div
      className={`movie-card ${props.variant === "slider" ? "is-slider" : ""}`}
    >
      <img
        src={thumbnail || image}
        alt={("title" in props && props.title) || "Poster"}
      />

      {/* Renderuj detalje samo u full varijanti */}
      {"title" in props && props.variant !== "slider" && (
        <div className="meta">
          <h4>{props.title}</h4>
          <p>
            {props.year} • ⭐ {props.rating} • {props.genre}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
