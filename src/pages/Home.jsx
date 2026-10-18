import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import SearchBar from "../components/SearchBar";
import ServiceGrid from "../components/ServiceGrid";
import CategoryFilter from "../components/CategoryFilter";
import WhatsAppButton from "../components/WhatsAppButton";
import { services } from "../data/services";
import { business } from "../data/business";
import { filterByCategory } from "../utils/searchServices";
import { buildWhatsAppUrl, defaultMessage } from "../utils/whatsapp";
import { useState } from "react";
import { PhoneCall, Search, UserCheck, MessageCircle, User } from "lucide-react";

const POPULAR_LIMIT = 8;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const whatsappUrl = buildWhatsAppUrl(defaultMessage());

  const popularServices = services.slice(0, POPULAR_LIMIT);
  const filteredServices = filterByCategory(activeCategory);

  return (
    <>
      {/* ── Hero Carousel ── */}
      <HeroCarousel />

      {/* ── Service Search ── */}
      <SearchBar />

      {/* ── Popular Services ── */}
      <section className="section" aria-labelledby="popular-heading">
        <div className="container">
          <div className="section-heading">
            <h2 id="popular-heading">Popular Services</h2>
            <div className="section-divider" aria-hidden="true" />
            <p>Frequently requested services at Matoshri Cyber Cafe</p>
          </div>
          <ServiceGrid services={popularServices} />
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/services" className="btn btn-secondary btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── All Service Categories ── */}
      <section
        className="section"
        style={{ backgroundColor: "var(--color-gray-50)" }}
        aria-labelledby="categories-heading"
      >
        <div className="container">
          <div className="section-heading">
            <h2 id="categories-heading">Browse by Category</h2>
            <div className="section-divider" aria-hidden="true" />
            <p>Filter services by the type of assistance you need</p>
          </div>
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
          <ServiceGrid
            services={filteredServices}
            emptyMessage="No services found in this category."
          />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section how-it-works" aria-labelledby="how-heading">
        <div className="container">
          <div className="section-heading">
            <h2 id="how-heading">How It Works</h2>
            <div className="section-divider" aria-hidden="true" />
            <p>Getting assistance at Matoshri Cyber Cafe is simple</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number" aria-hidden="true">1</div>
              <h3>Find Your Service</h3>
              <p>
                Search for the document or service you need, or browse by category.
                Each listing shows what you may need to bring.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number" aria-hidden="true">2</div>
              <h3>Contact or Visit</h3>
              <p>
                Send a WhatsApp message or call to confirm requirements and availability.
                Then visit Matoshri Cyber Cafe with your documents.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number" aria-hidden="true">3</div>
              <h3>Get Assistance</h3>
              <p>
                The team will help you fill the application correctly and guide you
                through the submission process step by step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="section about-preview" aria-labelledby="about-preview-heading">
        <div className="container">
          <div className="about-preview-grid">
            <div>
              {business.shopImage ? (
                <img
                  src={business.shopImage}
                  alt="Matoshri Cyber Cafe"
                  className="about-preview-img"
                  loading="lazy"
                />
              ) : (
                <div className="about-preview-placeholder" aria-hidden="true">
                  <User size={36} />
                  <span>Shop photo<br />placeholder</span>
                </div>
              )}
            </div>
            <div className="about-preview-content">
              <h2 id="about-preview-heading">Your Local Partner for Online Services</h2>
              <p>
                Matoshri Cyber Cafe provides reliable assistance for government
                document applications, online forms, and digital services. Visit
                us for straightforward, honest guidance without technical jargon.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link to="/about" className="btn btn-secondary">
                  About Us
                </Link>
                <Link to="/contact" className="btn btn-primary">
                  Find Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="section cta-section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-text">
              <h2 id="cta-heading">Need help with a document or application?</h2>
              <p>Contact Matoshri Cyber Cafe and get the assistance you need today.</p>
            </div>
            <div className="cta-actions">
              <WhatsAppButton label="Chat on WhatsApp" />
              {business.phoneNumber && (
                <a
                  href={`tel:${business.phoneNumber.replace(/\s+/g, "")}`}
                  className="btn btn-outline-white"
                  aria-label={`Call ${business.name}`}
                >
                  <PhoneCall size={16} aria-hidden="true" />
                  Call Us
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
