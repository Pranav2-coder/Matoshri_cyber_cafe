import { useEffect, useState } from "react";
import { business } from "../data/business";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Fade out after fonts/assets load, with a small minimum display time
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(removeTimer);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader${fadeOut ? " fade-out" : ""}`} role="status" aria-label="Loading">
      <div className="preloader-brand">
        <img
          src={business.logo || "/logo.png"}
          alt={business.name}
          className="preloader-logo-img"
        />
      </div>
      <div className="preloader-spinner" aria-hidden="true" />
    </div>
  );
}
