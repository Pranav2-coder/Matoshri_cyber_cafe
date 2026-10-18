import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./styles/global.css";
import "./styles/components.css";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// Page title updater
const PAGE_TITLES = {
  "/": "Matoshri Cyber Cafe — Government Document Assistance & Online Services",
  "/services": "All Services — Matoshri Cyber Cafe",
  "/about": "About Us — Matoshri Cyber Cafe",
  "/contact": "Contact — Matoshri Cyber Cafe",
};

function TitleUpdater() {
  const { pathname } = useLocation();
  useEffect(() => {
    const title = PAGE_TITLES[pathname];
    if (title) document.title = title;
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <TitleUpdater />
      <a href="#main-content" className="sr-only" style={{ position: "absolute", left: "-999px" }}>
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </>
  );
}
