export type BaseCardProps = {
  id: string;
  thumbnail: string;
  image: string;
};

export type MovieCardProps =
  | ({ variant: "slider" } & BaseCardProps)
  | ({
      variant: "full";
      title: string;
      rating: number;
      year: number;
      genre: string;
    } & BaseCardProps);

const MovieCard = (props: MovieCardProps) => {
  const isSlider = props.variant === "slider";
  const alt = isSlider ? "Poster" : props.title;

  return (
    <div className={`movie-card ${isSlider ? "is-slider" : ""}`}>
      <img src={props.thumbnail || props.image} alt={alt} />
      {!isSlider && (
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
