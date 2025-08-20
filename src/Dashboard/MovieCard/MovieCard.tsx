import { useRef } from "react";
import "./movieCard.css";

export type MovieCardProps = {
  id: string;
  image: string;
  thumbnail?: string;
  title?: string;
  rating?: number;
  year?: number;
  genre?: string | string[];
  onSeeMore?: (id: string) => void;
};

const MovieCard = ({
  id,
  image,
  thumbnail,
  title,
  rating,
  year,
  genre,
  onSeeMore,
}: MovieCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const alt = title || "Poster";

  //  Normalizacija žanra
  const genreText =
    typeof genre === "string"
      ? genre
          .replace(/[\[\]"]/g, "")
          .replace(/,/g, ", ")
          .trim()
      : Array.isArray(genre)
      ? genre.join(", ")
      : "";

  const handleMouseLeave = () => {
    const active = document.activeElement as HTMLElement | null;
    if (active && cardRef.current?.contains(active)) {
      active.blur();
    }
  };

  return (
    <div ref={cardRef} className="movie-card" onMouseLeave={handleMouseLeave}>
      <img
        src={image}
        srcSet={thumbnail ? `${thumbnail} 200w, ${image} 1200w` : undefined}
        sizes="(max-width: 960px) 160px, 220px"
        alt={alt}
        loading="lazy"
      />

      {(title || rating !== undefined || year !== undefined || genreText) && (
        <div className="meta">
          {title && <h4 className="title">{title}</h4>}
          <p className="sub">
            {year !== undefined ? `${year}` : ""}
            {rating !== undefined ? ` • ⭐ ${rating}` : ""}
            {genreText ? ` • ${genreText}` : ""}
          </p>
        </div>
      )}

      {/* Overlay */}
      <div className="overlay overlay--center">
        <div className="overlay-actions">
          <button
            className="btn-circle bookmark"
            aria-label="Bookmark"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-7-5-7 5V4z" />
            </svg>
          </button>

          <button
            className="btn-pill see-more"
            aria-label={title ? `See more about ${title}` : "See more"}
            onClick={(e) => {
              e.stopPropagation();
              (e.currentTarget as HTMLButtonElement).blur();
              onSeeMore?.(id);
            }}
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
