import { useState } from "react";
import { FaHome, FaBookmark } from "react-icons/fa";
import "./SearchBar.css";
// import { singleMovie } from "../../MoviesData/dataMovies";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchResults, setSearchResult] = useState<singleMovie[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    if (searchTerm.length > 0) {
      const results = allMovies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchTerm) ||
          (movie.genre && movie.genre.toLowerCase().includes(searchTerm))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = debounce(handleSearch, 300);

  return (
    <div className="search-bar-container">
      {/* Leva strana */}
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={query}
        onChange={debouncedSearch}
      />

      {/* Desna strana */}
      <div className="right-side">
        <div className="dropdown-wrapper">
          <button
            className="dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Menu ▾
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          )}
        </div>

        <FaHome className="icon" title="Home" />
        <FaBookmark className="icon" title="Bookmarks" />
      </div>
    </div>
  );
};

export default SearchBar;
