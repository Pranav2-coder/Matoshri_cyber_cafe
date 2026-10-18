import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, MessageCircle, User, ExternalLink, Info } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { business } from "../data/business";
import { services } from "../data/services";

export default function About() {
  const featuredServices = services.slice(0, 6);

  return (
    <>
      {/* Owner / Cafe Introduction */}
      <section className="about-hero" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-hero-inner">
            {/* Owner Photo */}
            {business.ownerImage ? (
              <img
                src={business.ownerImage}
                alt={`${business.ownerName} — Owner, ${business.name}`}
                className="about-owner-photo"
              />
            ) : (
              <div className="about-owner-placeholder" aria-hidden="true">
                <User size={36} />
                <span>Owner<br />photo</span>
              </div>
            )}

            {/* Text */}
            <div className="about-hero-text">
              <h1 id="about-heading">{business.tagline}</h1>
              <p className="owner-name">{business.ownerName}</p>
              <p>{business.ownerIntro}</p>
              <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap", justifyContent: "center" }}>
                <WhatsAppButton label="Contact on WhatsApp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section" aria-label="About Matoshri Cyber Cafe">
        <div className="container">
          {/* About the Cafe */}
          <div style={{ maxWidth: "720px", margin: "0 auto 4rem" }}>
            <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: "var(--color-navy)", marginBottom: "16px" }}>
              About Matoshri Cyber Cafe
            </h2>
            <p style={{ color: "var(--color-gray-600)", lineHeight: 1.8, marginBottom: "12px" }}>
              Matoshri Cyber Cafe is a local service center that helps individuals
              navigate government document applications and online services. We
              assist with form filling, document preparation, scanning, printing,
              and submission guidance — all in one convenient location.
            </p>
            <p style={{ color: "var(--color-gray-600)", lineHeight: 1.8 }}>
              Our aim is to make essential services accessible to everyone, including
              those who are not comfortable with technology or online processes.
              We guide you through each step clearly and honestly.
            </p>
          </div>

          {/* Info Cards */}
          <div className="about-info-grid">
            {/* Address */}
            <div className="info-card">
              <div className="info-card-icon" aria-hidden="true">
                <MapPin size={20} />
              </div>
              <h3>Our Location</h3>
              <address>{business.address}</address>
              {business.googleMapsUrl && (
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    marginTop: "8px",
                    fontSize: "0.8125rem",
                    color: "var(--color-navy)",
                    fontWeight: 500,
                  }}
                  aria-label="Get directions on Google Maps"
                >
                  Get Directions <ExternalLink size={12} aria-hidden="true" />
                </a>
              )}
            </div>

            {/* Opening Hours */}
            <div className="info-card">
              <div className="info-card-icon" aria-hidden="true">
                <Clock size={20} />
              </div>
              <h3>Opening Hours</h3>
              <p>{business.openingHours}</p>
            </div>

            {/* Phone */}
            <div className="info-card">
              <div className="info-card-icon" aria-hidden="true">
                <Phone size={20} />
              </div>
              <h3>Phone</h3>
              <a
                href={`tel:${business.phoneNumber.replace(/\s+/g, "")}`}
                style={{ color: "var(--color-gray-600)", fontSize: "0.9375rem" }}
                aria-label={`Call ${business.name}`}
              >
                {business.phoneNumber}
              </a>
            </div>

            {/* WhatsApp */}
            {business.whatsappNumber && business.isWhatsappConfigured && (
              <div className="info-card">
                <div className="info-card-icon" aria-hidden="true">
                  <MessageCircle size={20} />
                </div>
                <h3>WhatsApp</h3>
                <p>+{business.whatsappNumber}</p>
              </div>
            )}

            {/* Shop Photo Placeholder */}
            {business.shopImage && (
              <div className="info-card" style={{ gridColumn: "1 / -1" }}>
                <img
                  src={business.shopImage}
                  alt="Matoshri Cyber Cafe shop front"
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "var(--radius-md)",
                  }}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section
        className="section"
        style={{ backgroundColor: "var(--color-gray-50)" }}
        aria-labelledby="services-offered-heading"
      >
        <div className="container">
          <div className="section-heading">
            <h2 id="services-offered-heading">Services We Offer</h2>
            <div className="section-divider" aria-hidden="true" />
            <p>A selection of the services available at Matoshri Cyber Cafe</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {featuredServices.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                style={{
                  display: "block",
                  padding: "16px",
                  background: "white",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-gray-200)",
                  textDecoration: "none",
                  color: "var(--color-navy)",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  boxShadow: "var(--shadow-sm)",
                  transition: "box-shadow 0.2s",
                }}
                aria-label={`View details for ${s.title}`}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-md)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-sm)")}
              >
                {s.title}
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/services" className="btn btn-secondary btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section" aria-label="Disclaimer">
        <div className="container">
          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
              backgroundColor: "var(--color-gray-50)",
              border: "1px solid var(--color-gray-200)",
              borderRadius: "var(--radius-lg)",
              padding: "20px",
            }}
          >
            <Info size={20} color="var(--color-gray-400)" style={{ flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
            <p style={{ fontSize: "0.875rem", color: "var(--color-gray-600)", lineHeight: 1.7 }}>
              {business.disclaimer}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
