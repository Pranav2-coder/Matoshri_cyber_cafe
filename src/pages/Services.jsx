import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X } from "lucide-react";
import ServiceGrid from "../components/ServiceGrid";
import CategoryFilter from "../components/CategoryFilter";
import { services } from "../data/services";
import { searchServices, filterByCategory } from "../utils/searchServices";

export default function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [displayedServices, setDisplayedServices] = useState(services);

  // Keep URL in sync
  useEffect(() => {
    const params = {};
    if (query) params.q = query;
    if (activeCategory !== "all") params.category = activeCategory;
    setSearchParams(params, { replace: true });
  }, [query, activeCategory]);

  // Update displayed services when query or category changes
  useEffect(() => {
    if (query.trim().length >= 2) {
      let results = searchServices(query);
      if (activeCategory !== "all") {
        results = results.filter((s) => s.category === activeCategory);
      }
      setDisplayedServices(results);
    } else {
      setDisplayedServices(filterByCategory(activeCategory));
    }
  }, [query, activeCategory]);

  // Read initial URL params
  useEffect(() => {
    const urlQ = searchParams.get("q");
    const urlCat = searchParams.get("category");
    if (urlQ) setQuery(urlQ);
    if (urlCat) setActiveCategory(urlCat);
  }, []);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    // Don't reset query — keep search context
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <>
      {/* Page Header */}
      <div className="page-header" role="banner">
        <div className="container">
          <h1>All Services</h1>
          <p>Document assistance and online services offered at Matoshri Cyber Cafe</p>
        </div>
      </div>

      {/* Search + Filter Area */}
      <section
        className="section"
        style={{ paddingBottom: 0 }}
        aria-label="Search and filter services"
      >
        <div className="container">
          {/* Inline search bar */}
          <div style={{ maxWidth: "560px", marginBottom: "2rem" }} role="search" aria-label="Search services">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1.5px solid var(--color-gray-300)",
                borderRadius: "var(--radius-full)",
                backgroundColor: "white",
                padding: "0 16px",
                gap: "8px",
                boxShadow: "var(--shadow-sm)",
                transition: "border-color 0.15s",
              }}
            >
              <Search size={16} color="var(--color-gray-400)" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "0.9rem",
                  padding: "0.75rem 0",
                  background: "transparent",
                  color: "var(--color-gray-800)",
                }}
                aria-label="Search services"
              />
              {query && (
                <button
                  onClick={clearSearch}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--color-gray-400)",
                    display: "flex",
                    alignItems: "center",
                  }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {query && (
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "0.8rem",
                  color: "var(--color-gray-500)",
                }}
              >
                {displayedServices.length === 0
                  ? `No results for "${query}"`
                  : `${displayedServices.length} result${displayedServices.length === 1 ? "" : "s"} for "${query}"`}
              </p>
            )}
          </div>

          {/* Category Filter */}
          <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ paddingTop: "1.5rem" }} aria-label="Services list">
        <div className="container">
          <ServiceGrid
            services={displayedServices}
            emptyMessage={
              query
                ? `No services matched "${query}". Try a different search term.`
                : "No services found in this category."
            }
          />
        </div>
      </section>
    </>
  );
}
