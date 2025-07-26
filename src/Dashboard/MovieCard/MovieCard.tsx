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
          <div className="ribbon">
            <img src="https://vihdejdhouasksfmldlv.supabase.co/storage/v1/object/sign/bookmarked/ribbon.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iYjc1YTU3Yy1iOWUyLTRhMjAtODY2Ny0wODY2ODcyNTJmMGMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib29rbWFya2VkL3JpYmJvbi5wbmciLCJpYXQiOjE3NTM1NjAxMzIsImV4cCI6MTc4NTA5NjEzMn0.eLcvuJxSNnlh-nIfBUryqgdUuMz-vjg7MvKTfkAak6k" />
          </div>
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
