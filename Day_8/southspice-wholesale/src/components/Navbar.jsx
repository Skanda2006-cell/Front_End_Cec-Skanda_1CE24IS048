import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      backgroundColor: "var(--primary-cream)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      zIndex: 100,
      padding: "0.75rem 1rem",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Link to="/" style={{
          fontWeight: "700",
          color: "var(--primary-red)",
          fontSize: "1.5rem",
          textDecoration: "none",
          letterSpacing: "0.08em",
        }}>
           🌶️SouthSpice🌶️
        </Link>
        <ul style={{
          listStyle: "none",
          display: showMenu ? "block" : "flex",
          gap: "1.5rem",
          margin: 0,
          padding: 0,
          position: showMenu ? "absolute" : "static",
          top: showMenu ? "100%" : "auto",
          right: 0,
          backgroundColor: "var(--primary-cream)",
          boxShadow: showMenu ? "0 8px 16px rgba(0,0,0,0.2)" : "none",
          borderRadius: "0 0 8px 8px",
          zIndex: 99,
        }}>
          {["Home", "Products", "Services", "About", "Contact"].map((item) => (
            <li key={item} style={{ margin: "0.5rem 0" }}>
              <Link 
                to={`/${item === "Home" ? "" : item.toLowerCase()}`} 
                onClick={() => setShowMenu(false)}
                style={{
                  color: "var(--primary-red)",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.25s",
                  padding: "0.25rem 0.5rem",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#7c0f13")}
                onMouseLeave={(e) => (e.target.style.color = "var(--primary-red)")}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => setShowMenu(!showMenu)} 
          aria-label={showMenu ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            color: "var(--primary-red)",
            cursor: "pointer",
            display: "none", // will override with media query below
          }}
          className="nav-toggle-button"
        >
          {showMenu ? "✖" : "☰"}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          ul {
            display: none !important;
          }
          .nav-toggle-button {
            display: block !important;
          }
          ul.show {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
