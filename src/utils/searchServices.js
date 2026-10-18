// ============================================================
// Search utility — used by both Navbar and Home search bar
// ============================================================

import { services } from "../data/services";

/**
 * Search services by query string.
 * Matches against title, category, shortDescription, and keywords.
 * Returns filtered array of services.
 */
export function searchServices(query = "") {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return services.filter((service) => {
    return (
      service.title.toLowerCase().includes(q) ||
      service.shortDescription.toLowerCase().includes(q) ||
      service.category.toLowerCase().includes(q) ||
      (service.keywords &&
        service.keywords.some((kw) => kw.toLowerCase().includes(q)))
    );
  });
}

/**
 * Filter services by category id.
 * Returns all services if category is "all" or falsy.
 */
export function filterByCategory(category = "all") {
  if (!category || category === "all") return services;
  return services.filter((s) => s.category === category);
}

/**
 * Get a single service by slug.
 */
export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null;
}
