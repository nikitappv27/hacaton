
import './SearchBar.scss';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon">
        <svg viewBox="0 0 24 24" fill="none">
          <circle
            cx="10.8"
            cy="10.8"
            r="7.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16.5 16.5L22 22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      <input
        type="text"
        placeholder="ПОИСК"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
