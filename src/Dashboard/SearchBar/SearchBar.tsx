import "./searchBar.css";

type Props = {
  value: string;
  onChange: (val: string) => void;
  onHomeClick?: () => void;
  onBookmarksClick?: () => void;
};

const SearchBar = ({
  value,
  onChange,
  onHomeClick,
  onBookmarksClick,
}: Props) => {
  return (
    <div className="searchbar">
      {/*input */}
      <input
        type="text"
        placeholder="Search movies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {/*  ikonice */}
      <div className="searchbar-icons">
        <button className="icon-btn" aria-label="Home" onClick={onHomeClick}>
          {/*  HOME */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M12 3l9 8h-3v9h-12v-9h-3l9-8z" />
          </svg>
        </button>

        <button
          className="icon-btn"
          aria-label="Bookmarks"
          onClick={onBookmarksClick}
        >
          {/*  BOOKMARK */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-7-5-7 5V4z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
