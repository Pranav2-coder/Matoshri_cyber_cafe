import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, AlertCircle } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { getServiceBySlug } from "../utils/searchServices";
import { categories } from "../data/services";

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  // Update document title
  useEffect(() => {
    if (service) {
      document.title = `${service.title} — Matoshri Cyber Cafe`;
    } else {
      document.title = "Service Not Found — Matoshri Cyber Cafe";
    }
    return () => { document.title = "Matoshri Cyber Cafe"; };
  }, [service]);

  if (!service) {
    return (
      <div className="section">
        <div className="container">
          <div className="state-message">
            <AlertCircle size={40} color="var(--color-gray-300)" aria-hidden="true" />
            <p>Service not found.</p>
            <p style={{ fontSize: "0.875rem", color: "var(--color-gray-400)", marginTop: "4px" }}>
              The service you are looking for does not exist or may have been removed.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <Link to="/services" className="btn btn-secondary">
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const categoryLabel =
    categories.find((c) => c.id === service.category)?.label || service.category;

  return (
    <>
      {/* Page Header */}
      <div className="page-header" role="banner">
        <div className="container">
          <Link to="/services" className="back-link" style={{ color: "rgba(255,255,255,0.75)", marginBottom: "12px" }}>
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Services
          </Link>
          <span className="badge" style={{ backgroundColor: "var(--color-saffron)", color: "white", marginBottom: "10px" }}>
            {categoryLabel}
          </span>
          <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>{service.title}</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "8px" }}>{service.shortDescription}</p>
        </div>
      </div>

      {/* Content */}
      <div className="service-detail">
        <div className="container">
          <div className="service-detail-layout">
            {/* Main Content */}
            <main className="service-detail-main">
              {/* Required Documents */}
              {service.requiredDocuments && service.requiredDocuments.length > 0 && (
                <div className="service-detail-section">
                  <h2>Documents Required</h2>
                  <ul className="service-detail-list" aria-label="Documents required">
                    {service.requiredDocuments.map((doc, i) => (
                      <li key={i}>{doc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </main>

            {/* Sidebar */}
            <aside className="service-detail-sidebar" aria-label="Contact and enquiry">
              <div className="service-sidebar-card">
                <h3>Need Assistance?</h3>
                <p>
                  Contact Matoshri Cyber Cafe to confirm the current requirements
                  and get step-by-step help with your application.
                </p>
                <WhatsAppButton
                  serviceName={service.title}
                  label="Enquire on WhatsApp"
                />
                <Link to="/contact" className="btn btn-secondary" style={{ textAlign: "center" }}>
                  View Contact Details
                </Link>

                <div
                  style={{
                    borderTop: "1px solid var(--color-gray-200)",
                    paddingTop: "16px",
                    marginTop: "4px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-gray-500)",
                      lineHeight: 1.6,
                    }}
                  >
                    Document requirements and eligibility criteria are set by
                    government authorities. The information above is indicative.
                    Verify current requirements before applying.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          {/* Back link */}
          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid var(--color-gray-200)" }}>
            <Link to="/services" className="back-link">
              <ArrowLeft size={16} aria-hidden="true" />
              Back to All Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
