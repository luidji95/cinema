import "./genressidebar.css";

type Props = {
  genres: string[];
  selected?: string | null;
  onSelect?: (genre: string | null) => void;
};

export default function GenresSidebar({ genres, selected, onSelect }: Props) {
  return (
    <aside className="genres-side">
      <div className="genres-card">
        <div className="genres-header">
          <h4>Genres</h4>
          {onSelect && (
            <button
              className={`genre-pill all ${!selected ? "active" : ""}`}
              onClick={() => onSelect?.(null)}
            >
              All
            </button>
          )}
        </div>

        <div className="genres-list">
          {genres.map((g) => (
            <button
              key={g}
              className={`genre-pill ${selected === g ? "active" : ""}`}
              onClick={() => onSelect?.(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
