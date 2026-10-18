import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { business } from "../data/business";
import { categories } from "../data/services";
import { buildWhatsAppUrl, defaultMessage } from "../utils/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl(defaultMessage());

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "All Services" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img
                src={business.logo || "/logo.png"}
                alt={business.name}
                className="footer-logo-img"
              />
            </div>
            <p>{business.tagline}</p>
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-btn"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle size={15} aria-hidden="true" />
                Contact on WhatsApp
              </a>
            ) : null}
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links" role="list">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links" role="list">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/services?category=${cat.id}`}
                    className="footer-link"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div>
              <div className="footer-contact-item">
                <MapPin size={15} aria-hidden="true" />
                <address>{business.address}</address>
              </div>
              <div className="footer-contact-item">
                <Clock size={15} aria-hidden="true" />
                <span>{business.openingHours}</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} aria-hidden="true" />
                <a
                  href={`tel:${business.phoneNumber.replace(/\s+/g, "")}`}
                  className="footer-link"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {business.phoneNumber}
                </a>
              </div>
              {business.whatsappNumber && business.isWhatsappConfigured && (
                <div className="footer-contact-item">
                  <MessageCircle size={15} aria-hidden="true" />
                  <span>WhatsApp: +{business.whatsappNumber}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              &copy; {year} {business.name}. All rights reserved.
            </p>
            <p className="footer-disclaimer">{business.disclaimer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
