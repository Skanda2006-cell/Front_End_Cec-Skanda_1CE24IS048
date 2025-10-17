import React, { useEffect, useState } from "react";

const services = [
  {
    title: "Wholesale Supply",
    desc: "We provide bulk orders for retailers, restaurants, and distributors.",
  },
  {
    title: "Pan-South Delivery",
    desc: "Efficient logistics team ensuring timely deliveries.",
  },
  {
    title: "Marketing & Branding",
    desc: "Support for promoting local and regional spice brands.",
  },
];

const testimonials = [
  {
    name: "Ravi Kumar",
    feedback:
      "SouthSpice’s logistics team is trustworthy and always ensures my orders arrive fresh and on time.",
  },
  {
    name: "Preethi S.",
    feedback:
      "Their marketing support helped me boost my local brand’s visibility greatly. Highly recommend their services!",
  },
];

const Services = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const section = document.getElementById("services-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>
        {`
          .fade-in-scale {
            opacity: 0;
            transform: scale(0.8);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .fade-in-scale.visible {
            opacity: 1;
            transform: scale(1);
          }
        `}
      </style>

      <section
        id="services-section"
        className={`services-section fade-in-scale ${visible ? "visible" : ""}`}
        style={{
          background: "linear-gradient(135deg, #fff3e0, #ffe8d6)",
          padding: "5rem 2rem",
          textAlign: "center",
          color: "#3b2f2f",
          borderRadius: "1rem",
        }}
      >
        <h2
          style={{
            color: "#a4161a",
            fontSize: "2.4rem",
            fontWeight: "700",
            marginBottom: "2rem",
          }}
        >
          Our Services
        </h2>

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            justifyItems: "center",
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              className="service-card"
              style={{
                background:
                  i === 0
                    ? "linear-gradient(180deg, #fff1eb, #ffd7c2)"
                    : i === 1
                    ? "linear-gradient(180deg, #fff9f2, #ffe5b9)"
                    : "linear-gradient(180deg, #fdfdfd, #ffe9cc)",
                borderRadius: "1rem",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                padding: "2rem 1.5rem",
                maxWidth: "320px",
                borderTop: "5px solid #a4161a",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 14px 28px rgba(164, 22, 26, 0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0, 0, 0, 0.1)")
              }
            >
              <h3
                style={{
                  color: "#a4161a",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: "#4b3b32",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className={`fade-in-scale ${visible ? "visible" : ""}`}
        style={{
          background: "#ffe8d6",
          padding: "3rem 1.5rem",
          margin: "3rem auto",
          borderRadius: "12px",
          maxWidth: "800px",
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          transitionDelay: visible ? "200ms" : "0ms",
        }}
      >
        <h2 style={{ color: "#a4161a", marginBottom: "1.5rem" }}>
          What Our Clients Say
        </h2>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {testimonials.map(({ name, feedback }) => (
            <div
              key={name}
              style={{
                background: "#fff3e0",
                padding: "1.5rem",
                borderRadius: "10px",
                maxWidth: "350px",
                boxShadow: "0 4px 14px rgba(164, 22, 26, 0.1)",
              }}
            >
              <p style={{ fontStyle: "italic", color: "#3b2f2f" }}>
                “{feedback}”
              </p>
              <p
                style={{
                  marginTop: "1rem",
                  fontWeight: "700",
                  color: "#a4161a",
                }}
              >
                – {name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className={`fade-in-scale ${visible ? "visible" : ""}`}
        style={{
          background: "#a4161a",
          color: "white",
          padding: "2rem 1.5rem",
          textAlign: "center",
          borderRadius: "12px",
          margin: "3rem auto",
          maxWidth: "700px",
          boxShadow: "0 8px 20px rgba(164, 22, 26, 0.3)",
          transitionDelay: visible ? "400ms" : "0ms",
        }}
      >
        <h2>Interested in Our Services?</h2>
        <p style={{ margin: "1rem 0 1.5rem" }}>
          Contact us today to learn how SouthSpice can help you grow and succeed.
        </p>
        <a
          href="/contact"
          style={{
            backgroundColor: "white",
            color: "#a4161a",
            padding: "0.8rem 2rem",
            borderRadius: "30px",
            fontWeight: "700",
            textDecoration: "none",
            boxShadow: "0 8px 16px rgba(164, 22, 26, 0.25)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ccc")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
        >
          Get in Touch
        </a>
      </section>
    </>
  );
};

export default Services;
