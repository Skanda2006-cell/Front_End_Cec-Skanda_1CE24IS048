import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMedal, FaTruck, FaRupeeSign } from "react-icons/fa";

const Hero = () => {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    highlights: false,
    cta: false,
  });

  useEffect(() => {
    function checkVisibility() {
      const heroEl = document.getElementById("hero-text");
      const highlightsEl = document.getElementById("highlights");
      const ctaEl = document.getElementById("hero-cta");

      const windowHeight = window.innerHeight;

      function isVisible(el) {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < windowHeight * 0.9;
      }

      setVisibleSections({
        hero: isVisible(heroEl) || visibleSections.hero,
        highlights: isVisible(highlightsEl) || visibleSections.highlights,
        cta: isVisible(ctaEl) || visibleSections.cta,
      });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // initial check

    return () => window.removeEventListener("scroll", checkVisibility);
  }, [visibleSections]);

  const fadeInStyle = (visible) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "scale(1)" : "scale(0.8)",
    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
  });

  return (
    <>
      <div
        id="hero-text"
        style={{
          ...fadeInStyle(visibleSections.hero),
          position: "relative",
          backgroundImage:
            "url('https://images.pexels.com/photos/9185580/pexels-photo-9185580.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          color: "white",
          textAlign: "center",
          fontFamily: "'Poppins', 'Segoe UI', sans-serif",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(41, 13, 8, 0.65)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "680px",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              marginBottom: "1rem",
              textShadow: "4px 4px 14px rgba(0,0,0,0.5)",
              letterSpacing: "0.06em",
              fontFamily: "'Poppins', sans-serif",
              color: "#08e01aff",
            }}
          >
            SouthSpice Wholesale
          </h1>
          <p
            style={{
              fontSize: "1.45rem",
              marginBottom: "2rem",
              textShadow: "2px 2px 8px rgba(97, 55, 146, 0.4)",
              fontWeight: 600,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Premium masalas and spices delivered across South India for retailers
            and distributors.
          </p>
          <Link
            to="/products"
            style={{
              backgroundColor: "#fff3e0",
              border: "none",
              padding: "0.85rem 2.2rem",
              fontSize: "1.3rem",
              fontWeight: "700",
              borderRadius: "30px",
              cursor: "pointer",
              color: "#a4161a",
              boxShadow: "0 8px 24px rgba(68, 12, 5, 0.35)",
              letterSpacing: "0.04em",
              transition: "background-color 0.3s",
              fontFamily: "'Poppins', sans-serif",
              display: "inline-block",
              textAlign: "center",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ffe8d6")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff3e0")}
          >
            Explore Products
          </Link>
        </div>
      </div>

      {/* Promotional Highlights Section */}
      <div
        id="highlights"
        style={{
          ...fadeInStyle(visibleSections.highlights),
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          margin: "3rem 0",
          flexWrap: "wrap",
          background: "#fff8f3",
          padding: "2.2rem 1rem",
          borderRadius: "12px",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 4px 16px rgba(97,34,24,.10)",
        }}
      >
        <div style={{ maxWidth: "200px", textAlign: "center" }}>
          <FaMedal size={40} color="#a4161a" />
          <h3 style={{ color: "#6b0404", margin: "1rem 0 0.6rem" }}>Quality Assured</h3>
          <p style={{ fontSize: "1rem", color: "#4a403a" }}>
            Authentic, fresh spices tested for flavor excellence.
          </p>
        </div>
        <div style={{ maxWidth: "200px", textAlign: "center" }}>
          <FaTruck size={40} color="#a4161a" />
          <h3 style={{ color: "#6b0404", margin: "1rem 0 0.6rem" }}>Fast Delivery</h3>
          <p style={{ fontSize: "1rem", color: "#4a403a" }}>
            Timely service all across South India, every week.
          </p>
        </div>
        <div style={{ maxWidth: "200px", textAlign: "center" }}>
          <FaRupeeSign size={40} color="#a4161a" />
          <h3 style={{ color: "#6b0404", margin: "1rem 0 0.6rem" }}>Bulk Discounts</h3>
          <p style={{ fontSize: "1rem", color: "#4a403a" }}>
            Best wholesale prices for restaurants and retailers.
          </p>
        </div>
      </div>

      {/* Quick Contact/Call-To-Action */}
      <div
        id="hero-cta"
        style={{
          ...fadeInStyle(visibleSections.cta),
          textAlign: "center",
          margin: "2.5rem auto 1.5rem",
          padding: "1.5rem 1rem",
          maxWidth: "600px",
          background: "#ffe8d6",
          borderRadius: "14px",
          boxShadow: "0 2px 10px rgba(164,22,26,.08)",
        }}
      >
        <h2 style={{ color: "#a4161a", fontWeight: 700 }}>
          Taste the Tradition
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#452a1f",
            margin: "0.8rem 0 1.5rem",
          }}
        >
          Interested in our products or need a custom bulk order? <br />
          Reach out today for exclusive deals and fresh stock.
        </p>
        <Link
          to="/contact"
          style={{
            background: "#a4161a",
            color: "#fff",
            padding: "0.7rem 2rem",
            borderRadius: "24px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.08rem",
            boxShadow: "0 2px 10px rgba(164,22,26,0.07)",
            letterSpacing: "0.03em",
          }}
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default Hero;
