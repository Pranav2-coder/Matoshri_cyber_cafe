import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";
import { searchServices } from "../utils/searchServices";
import { categories } from "../data/services";

/**
 * Full-width search section for the home page.
 * Props:
 *   - initialQuery: optional pre-fill (e.g., from URL params)
 *   - onQueryChange: optional callback when query changes
 */
export default function SearchBar({ initialQuery = "", onQueryChange }) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  // Sync initial query
  useEffect(() => {
    setQuery(initialQuery);
    if (initialQuery.trim().length >= 2) {
      setResults(searchServices(initialQuery).slice(0, 8));
      setOpen(true);
    }
  }, [initialQuery]);

  // Live search
  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      setOpen(false);
      onQueryChange && onQueryChange(q);
      return;
    }
    const found = searchServices(q).slice(0, 8);
    setResults(found);
    setOpen(true);
    onQueryChange && onQueryChange(q);
  }, [query]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleResultClick = (slug) => {
    navigate(`/services/${slug}`);
    setOpen(false);
    setQuery("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/services?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
    }
  };

  const clearQuery = () => {
    setQuery("");
    setOpen(false);
    inputRef.current?.focus();
    onQueryChange && onQueryChange("");
  };

  const getCategoryLabel = (catId) => {
    const cat = categories.find((c) => c.id === catId);
    return cat ? cat.label : catId;
  };

  return (
    <section className="search-section" aria-labelledby="search-heading">
      <div className="container">
        <div className="search-section-heading">
          <h2 id="search-heading">What service are you looking for?</h2>
          <p>Type below to find the document or service you need</p>
        </div>

        <div className="search-bar-wrap" ref={wrapRef} role="search" aria-label="Service search">
          <div className="search-bar-field">
            <span className="search-bar-icon" aria-hidden="true">
              <Search size={18} />
            </span>
            <input
              ref={inputRef}
              type="search"
              className="search-bar-input"
              placeholder="Search caste, income, domicile, passport..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleEnter}
              aria-label="Search for a service"
              aria-expanded={open}
              aria-autocomplete="list"
              autoComplete="off"
            />
            {query && (
              <button
                className="search-bar-clear"
                onClick={clearQuery}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Results */}
          {open && (
            <div className="search-results-dropdown" role="listbox" aria-label="Search results">
              {results.length === 0 ? (
                <div className="search-empty-state">
                  <Search size={28} color="var(--color-gray-300)" aria-hidden="true" />
                  <p>No results found for &ldquo;{query}&rdquo;</p>
                  <p style={{ marginTop: "4px", fontSize: "0.8rem" }}>
                    Try a different keyword or{" "}
                    <a href="/services" style={{ color: "var(--color-navy)" }}>
                      browse all services
                    </a>
                  </p>
                </div>
              ) : (
                <ul className="search-results-list">
                  {results.map((s) => (
                    <li key={s.id}>
                      <button
                        className="search-result-item"
                        role="option"
                        aria-selected="false"
                        onClick={() => handleResultClick(s.slug)}
                        style={{ width: "100%", textAlign: "left", cursor: "pointer" }}
                      >
                        <div className="search-result-info">
                          <p className="result-title">{s.title}</p>
                          <p className="result-category">{getCategoryLabel(s.category)}</p>
                        </div>
                        <ArrowRight size={16} color="var(--color-gray-400)" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
