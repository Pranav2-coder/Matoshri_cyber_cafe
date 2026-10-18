import { Phone, MessageCircle, MapPin, Clock, ExternalLink, Info } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";
import { business } from "../data/business";
import { buildWhatsAppUrl, defaultMessage } from "../utils/whatsapp";

export default function Contact() {
  const whatsappUrl = buildWhatsAppUrl(defaultMessage());

  return (
    <>
      {/* Page Header */}
      <div className="page-header" role="banner">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Reach out to Matoshri Cyber Cafe for service enquiries and assistance</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section" aria-labelledby="contact-heading">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-block">
              <h2 id="contact-heading">{business.name}</h2>

              {/* Owner */}
              <div className="contact-detail">
                <div className="contact-detail-icon" aria-hidden="true">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <h3>Owner</h3>
                  <p>{business.ownerName}</p>
                </div>
              </div>

              {/* Address */}
              <div className="contact-detail">
                <div className="contact-detail-icon" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-content">
                  <h3>Address</h3>
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
                        marginTop: "6px",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                      }}
                      aria-label="Open in Google Maps"
                    >
                      Get Directions <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              {/* Opening Hours */}
              <div className="contact-detail">
                <div className="contact-detail-icon" aria-hidden="true">
                  <Clock size={20} />
                </div>
                <div className="contact-detail-content">
                  <h3>Opening Hours</h3>
                  <p>{business.openingHours}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail">
                <div className="contact-detail-icon" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-content">
                  <h3>Phone</h3>
                  <a href={`tel:${business.phoneNumber.replace(/\s+/g, "")}`} aria-label={`Call ${business.name}`}>
                    {business.phoneNumber}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              {business.isWhatsappConfigured && business.whatsappNumber && (
                <div className="contact-detail">
                  <div className="contact-detail-icon" aria-hidden="true">
                    <MessageCircle size={20} />
                  </div>
                  <div className="contact-detail-content">
                    <h3>WhatsApp</h3>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat on WhatsApp"
                    >
                      +{business.whatsappNumber}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Action Cards */}
            <div className="contact-action-block">
              {/* WhatsApp Card */}
              <div className="contact-action-card">
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "#25D36620",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#25D366",
                  }}
                  aria-hidden="true"
                >
                  <MessageCircle size={22} />
                </div>
                <h3>Message on WhatsApp</h3>
                <p>
                  Send a message to enquire about a service, confirm requirements,
                  or ask any question. We respond promptly during working hours.
                </p>
                <WhatsAppButton label="Chat on WhatsApp" />
              </div>

              {/* Phone Card */}
              <div className="contact-action-card">
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(22,58,95,0.08)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-navy)",
                  }}
                  aria-hidden="true"
                >
                  <Phone size={22} />
                </div>
                <h3>Call Us Directly</h3>
                <p>
                  Prefer a phone call? Call during opening hours and we will
                  assist you directly.
                </p>
                <a
                  href={`tel:${business.phoneNumber.replace(/\s+/g, "")}`}
                  className="btn btn-secondary"
                  aria-label={`Call ${business.name} at ${business.phoneNumber}`}
                >
                  <Phone size={16} aria-hidden="true" />
                  {business.phoneNumber}
                </a>
              </div>

              {/* Maps Card */}
              {business.googleMapsUrl && (
                <div className="contact-action-card">
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(22,58,95,0.08)",
                      borderRadius: "var(--radius-md)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-navy)",
                    }}
                    aria-hidden="true"
                  >
                    <MapPin size={22} />
                  </div>
                  <h3>Find Us on the Map</h3>
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    aria-label="Get directions on Google Maps"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    Open in Google Maps
                  </a>
                </div>
              )}

              {/* Disclaimer */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  backgroundColor: "var(--color-gray-50)",
                  border: "1px solid var(--color-gray-200)",
                  borderRadius: "var(--radius-lg)",
                  padding: "16px",
                }}
              >
                <Info size={16} color="var(--color-gray-400)" style={{ flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                <p style={{ fontSize: "0.8rem", color: "var(--color-gray-500)", lineHeight: 1.6 }}>
                  {business.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
