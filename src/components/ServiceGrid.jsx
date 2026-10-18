import ServiceCard from "./ServiceCard";
import { FileSearch } from "lucide-react";

/**
 * Responsive service grid with empty state.
 * Props:
 *   - services: array of service objects to display
 *   - emptyMessage: optional message when empty
 */
export default function ServiceGrid({ services = [], emptyMessage = "No services found." }) {
  if (services.length === 0) {
    return (
      <div className="state-message">
        <FileSearch size={40} color="var(--color-gray-300)" aria-hidden="true" />
        <p style={{ marginTop: "12px" }}>{emptyMessage}</p>
        <p style={{ fontSize: "0.875rem", color: "var(--color-gray-400)", marginTop: "4px" }}>
          Try a different search term or category.
        </p>
      </div>
    );
  }

  return (
    <div className="service-grid" role="list" aria-label="Available services">
      {services.map((service) => (
        <div key={service.id} role="listitem">
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}
