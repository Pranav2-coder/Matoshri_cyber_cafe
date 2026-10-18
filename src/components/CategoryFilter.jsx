import { categories } from "../data/services";

/**
 * Category filter bar.
 * Props:
 *   - active: currently selected category id or "all"
 *   - onChange: callback with new category id
 */
export default function CategoryFilter({ active = "all", onChange }) {
  const allOption = { id: "all", label: "All Services" };
  const filters = [allOption, ...categories];

  return (
    <div
      className="category-filter"
      role="group"
      aria-label="Filter services by category"
    >
      {filters.map((cat) => (
        <button
          key={cat.id}
          className={`category-filter-btn${active === cat.id ? " active" : ""}`}
          onClick={() => onChange(cat.id)}
          aria-pressed={active === cat.id}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
