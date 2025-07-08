type MovieCardProps = {
  id: string;
  title: string;
  thumbnail: string;
  image?: string; // Dodajemo image kao opcioni prop
  rating: string;
  year: number;
  genre: string;
};

const MovieCard = ({
  id,
  title,
  thumbnail,
  image,
  rating,
  year,
  genre,
}: MovieCardProps) => {
  return (
    <div className="movie-card" key={id}>
      <img src={image || thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{rating}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </div>
  );
};

export default MovieCard;
