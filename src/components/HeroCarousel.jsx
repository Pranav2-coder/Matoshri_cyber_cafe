import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    label: "Document Assistance",
    headline: "Your Documents, Made Simpler",
    text: "Get assistance with important government document applications.",
    cta: "Explore Services",
    ctaLink: "/services",
    // Using Unsplash direct image URLs for reliable loading
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=75&auto=format&fit=crop",
    imageAlt: "Person at a desk with documents and a laptop",
  },
  {
    id: 2,
    label: "Online Services",
    headline: "Online Services, All in One Place",
    text: "Find the service you need and understand the basic requirements.",
    cta: "View All Services",
    ctaLink: "/services",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=75&auto=format&fit=crop",
    imageAlt: "People using computers at a service counter",
  },
  {
    id: 3,
    label: "Local Support",
    headline: "Local Support You Can Trust",
    text: "Visit Matoshri Cyber Cafe for document and online service assistance.",
    cta: "Contact Us",
    ctaLink: "/contact",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=75&auto=format&fit=crop",
    imageAlt: "A professional service counter with friendly staff",
  },
];

const AUTO_ROTATE_MS = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % banners.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + banners.length) % banners.length);
  }, []);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (paused || prefersReduced) return;
    timerRef.current = setInterval(next, AUTO_ROTATE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, prefersReduced, next]);

  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    pause();
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    resume();
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <section
      className="hero-carousel"
      aria-label="Featured banners"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Track */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
        aria-live="polite"
        aria-atomic="true"
      >
        {banners.map((banner, idx) => (
          <div
            key={banner.id}
            className="carousel-slide"
            aria-hidden={idx !== current}
          >
            {/* Ambient backdrop for seamless mobile contain mode */}
            <div
              className="carousel-slide-backdrop"
              style={{ backgroundImage: `url(${banner.image})` }}
              aria-hidden="true"
            />
            <img
              src={banner.image}
              alt={banner.imageAlt}
              className="carousel-slide-img"
              loading={idx === 0 ? "eager" : "lazy"}
              fetchpriority={idx === 0 ? "high" : "low"}
            />
            <div className="carousel-overlay" aria-hidden="true" />
            <div className="container">
              <div className="carousel-content">
                {banner.label && <span className="carousel-label">{banner.label}</span>}
                {banner.headline && <h1 className="carousel-headline">{banner.headline}</h1>}
                {banner.text && <p className="carousel-text">{banner.text}</p>}
                {banner.cta && (
                  <div className="carousel-actions">
                    <Link to={banner.ctaLink} className="btn btn-primary btn-lg">
                      {banner.cta}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="carousel-btn carousel-btn-prev"
        onClick={() => { prev(); setPaused(true); }}
        aria-label="Previous banner"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next Button */}
      <button
        className="carousel-btn carousel-btn-next"
        onClick={() => { next(); setPaused(true); }}
        aria-label="Next banner"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination Dots */}
      <div className="carousel-dots" role="tablist" aria-label="Banner navigation">
        {banners.map((banner, idx) => (
          <button
            key={banner.id}
            className={`carousel-dot${idx === current ? " active" : ""}`}
            onClick={() => { goTo(idx); setPaused(true); }}
            role="tab"
            aria-selected={idx === current}
            aria-label={`Go to banner ${idx + 1}: ${banner.headline}`}
          />
        ))}
      </div>
    </section>
  );
}
