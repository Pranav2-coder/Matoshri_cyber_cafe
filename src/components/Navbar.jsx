import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, X, Menu, Phone, MessageCircle } from "lucide-react";
import { searchServices } from "../utils/searchServices";
import { buildWhatsAppUrl, defaultMessage } from "../utils/whatsapp";
import { business } from "../data/business";
import { categories } from "../data/services";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileQuery, setMobileQuery] = useState("");
  const [desktopResults, setDesktopResults] = useState([]);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Desktop search
  useEffect(() => {
    if (query.trim().length < 2) {
      setDesktopResults([]);
      setDesktopOpen(false);
      return;
    }
    const results = searchServices(query);
    setDesktopResults(results.slice(0, 6));
    setDesktopOpen(true);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setDesktopOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleResultClick = (slug) => {
    navigate(`/services/${slug}`);
    setQuery("");
    setDesktopOpen(false);
    setMenuOpen(false);
  };

  const handleMobileSearch = (e) => {
    if (e.key === "Enter" && mobileQuery.trim()) {
      navigate(`/services?q=${encodeURIComponent(mobileQuery.trim())}`);
      setMenuOpen(false);
      setMobileQuery("");
    }
  };

  const whatsappUrl = buildWhatsAppUrl(defaultMessage());

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="navbar" role="banner">
        <div className="container">
          <nav className="navbar-inner" aria-label="Main navigation">
            {/* Logo */}
            <Link to="/" className="navbar-logo" aria-label="Matoshri Cyber Cafe — Home">
              <img
                src={business.logo || "/logo.png"}
                alt="Matoshri Cyber Cafe"
                className="navbar-logo-img"
              />
            </Link>

            {/* Desktop nav links */}
            <ul className="navbar-links" role="list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `navbar-link${isActive ? " active" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Search */}
            <div className="navbar-search" ref={searchRef} role="search" aria-label="Search services">
              <Search size={16} className="navbar-search-icon" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                className="navbar-search-input"
                placeholder="Search services..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search services"
                aria-expanded={desktopOpen}
                aria-autocomplete="list"
                autoComplete="off"
              />
              {query && (
                <button
                  className="navbar-search-clear"
                  onClick={() => { setQuery(""); setDesktopOpen(false); inputRef.current?.focus(); }}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
              {desktopOpen && (
                <div className="navbar-search-dropdown" role="listbox" aria-label="Search results">
                  {desktopResults.length === 0 ? (
                    <p className="navbar-search-empty">No results for &ldquo;{query}&rdquo;</p>
                  ) : (
                    desktopResults.map((s) => (
                      <button
                        key={s.id}
                        role="option"
                        className="navbar-search-result"
                        onClick={() => handleResultClick(s.slug)}
                        aria-selected="false"
                      >
                        <div>
                          <p className="navbar-search-result-title">{s.title}</p>
                          <p className="navbar-search-result-desc">{s.shortDescription}</p>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Right Actions */}
            <div className="navbar-actions">
              {/* WhatsApp button — hidden on small screens, visible md+ */}
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-btn"
                  style={{ display: "none" }}
                  aria-label="Contact on WhatsApp"
                  id="navbar-wa-btn"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  WhatsApp
                </a>
              ) : null}

              {/* Mobile menu toggle */}
              <button
                className="navbar-menu-btn"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-drawer"
              >
                <Menu size={22} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`mobile-drawer${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
      >
        <div className="mobile-drawer-header">
          <Link
            to="/"
            className="mobile-drawer-logo"
            onClick={() => setMenuOpen(false)}
            aria-label="Matoshri Cyber Cafe — Home"
          >
            <img
              src={business.logo || "/logo.png"}
              alt={business.name}
              className="mobile-drawer-logo-img"
            />
          </Link>
          <button
            className="mobile-drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="mobile-drawer-search">
          <div className="mobile-search-wrap" role="search">
            <Search size={16} className="mobile-search-icon" aria-hidden="true" />
            <input
              type="search"
              className="mobile-search-input"
              placeholder="Search for a service..."
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              onKeyDown={handleMobileSearch}
              aria-label="Search services"
            />
          </div>
        </div>

        {/* Mobile Nav Links */}
        <nav className="mobile-nav-links" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `mobile-nav-link${isActive ? " active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Drawer Footer */}
        <div className="mobile-drawer-footer">
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-btn"
              style={{ width: "100%", justifyContent: "center" }}
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Contact on WhatsApp
            </a>
          ) : (
            <a
              href={`tel:${business.phoneNumber.replace(/\s+/g, "")}`}
              className="btn btn-secondary"
              style={{ width: "100%", justifyContent: "center" }}
              aria-label={`Call ${business.name}`}
            >
              <Phone size={16} aria-hidden="true" />
              {business.phoneNumber}
            </a>
          )}
        </div>
      </div>

      {/* Inline style to show WA button on md+ */}
      <style>{`
        @media (min-width: 768px) {
          #navbar-wa-btn { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
