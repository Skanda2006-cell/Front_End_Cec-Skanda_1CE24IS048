import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Import shared layout elements
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>
      {/* Scroll to top behavior */}
      <ScrollToTop />

      {/* Navbar visible across all pages */}
      <Navbar />

      {/* Define routes for all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Fallback Page */}
        <Route
          path="*"
          element={
            <div
              style={{
                textAlign: "center",
                padding: "6rem 2rem",
                minHeight: "70vh",
                background: "linear-gradient(135deg, #fff3e0, #ffe8d6)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  color: "#a4161a",
                  fontWeight: "700",
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                }}
              >
                404 - Page Not Found
              </h1>
              <p style={{ fontSize: "1.2rem", color: "#3b2f2f", marginBottom: "2rem" }}>
                Oops! The page you’re looking for doesn’t exist or has been moved.
              </p>
              <a
                href="/"
                style={{
                  display: "inline-block",
                  background: "#a4161a",
                  color: "white",
                  padding: "0.9rem 2rem",
                  borderRadius: "30px",
                  fontWeight: "700",
                  textDecoration: "none",
                  transition: "background 0.3s ease",
                  boxShadow: "0 6px 18px rgba(164, 22, 26, 0.2)",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#7c0f13")}
                onMouseLeave={(e) => (e.target.style.background = "#a4161a")}
              >
                Back to Home
              </a>
            </div>
          }
        />
      </Routes>

      {/* Footer visible across all pages */}
      <Footer />
    </>
  );
};

export default App;
