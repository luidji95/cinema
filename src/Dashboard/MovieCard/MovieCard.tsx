type MovieCardProps = {
  id: string;
  title: string;
  thumbnail: string;
  image?: string;
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
      <div className="movie-image-wrapper">
        <img src={image || thumbnail} alt={title} />

        <div className="overlay">
          <button className="see-more-btn">See more</button>
          <button className="fav-btn">♡</button>
        </div>
      </div>

      <h3>{title}</h3>
      <p>{rating}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </div>
  );
};

export default MovieCard;
