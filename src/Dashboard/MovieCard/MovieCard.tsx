type MovieCardProps = {
  id: string;
  title: string;
  thumbnail: string;
  rating: string;
  year: number;
  writers: string;
  genre: string;
};

const MovieCard = ({
  id,
  title,
  thumbnail,
  rating,
  year,
  genre,
}: MovieCardProps) => {
  return (
    <div className="movie-card" key={id}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>Ocena: {rating}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </div>
  );
};

export default MovieCard;
