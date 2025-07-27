import { useState } from "react";
import { FaHome, FaBookmark } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="search-bar-container">
      {/* Leva strana */}
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
