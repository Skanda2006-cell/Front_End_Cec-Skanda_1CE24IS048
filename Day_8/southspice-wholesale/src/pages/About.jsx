import React, { useEffect, useState } from "react";

const teamMembers = [
  {
    name: "Marketing Team",
    desc: "Innovative thinkers who craft our brand identity and connect SouthSpice with the world.",
    bg: "linear-gradient(180deg, #fff1eb, #ffd7c2)",
  },
  {
    name: "Sales Team",
    desc: "Energetic professionals ensuring our spices reach every corner of South India.",
    bg: "linear-gradient(180deg, #fff9f2, #ffe5b9)",
  },
  {
    name: "Delivery Team",
    desc: "Reliable partners who make sure every spice pack arrives fresh and on time.",
    bg: "linear-gradient(180deg, #fdfdfd, #ffe9cc)",
  },
];

const testimonials = [
  {
    name: "Lakshmi Nair",
    feedback:
      "[SouthSpice’s reliability and trustworthiness are exceptional. I always place bulk orders with them.]",
  },
  {
    name: "Arun Raj",
    feedback:
      "[Their timely delivery and product quality are a huge support for businesses.]",
  },
];

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const section = document.getElementById("about-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
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
        id="about-section"
        className={`about-section fade-in-scale ${visible ? "visible" : ""}`}
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
            fontWeight: "700",
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          About SouthSpice
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 3rem",
            color: "#4a403a",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Established in <strong>2020</strong>,{" "}
          <span style={{ color: "#a4161a", fontWeight: "600" }}>SouthSpice</span>{" "}
          is a trusted wholesale masala company that bridges local spice farmers
          with South Indian markets. We take pride in delivering authentic,
          flavorful spices — cultivated with care and delivered fresh to homes
          and restaurants across the region.
        </p>

        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            justifyItems: "center",
          }}
        >
          {teamMembers.map((team) => (
            <div
              key={team.name}
              className="team-card"
              style={{
                background: team.bg,
                borderRadius: "1rem",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                padding: "2rem 1.5rem",
                maxWidth: "320px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderTop: "5px solid #a4161a",
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
                  marginBottom: "0.6rem",
                }}
              >
                {team.name}
              </h3>
              <p
                style={{
                  color: "#4b3b32",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                }}
              >
                {team.desc}
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
          maxWidth: "800px",
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          textAlign: "center",
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
                {feedback}
              </p>
              <p
                style={{
                  marginTop: "1rem",
                  color: "#a4161a",
                  fontWeight: "700",
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
          padding: "2rem 1.5rem",
          margin: "3rem auto",
          maxWidth: "700px",
          borderRadius: "14px",
          boxShadow: "0 8px 20px rgba(164, 22, 26, 0.3)",
          textAlign: "center",
          color: "white",
          transitionDelay: visible ? "400ms" : "0ms",
        }}
      >
        <h2 style={{ color: "#FFD700" }}>Join the SouthSpice Family</h2>
        <p style={{ margin: "1rem 0 1.5rem" }}>
          Ready to partner with a trusted supplier? Contact us today for a custom
          wholesale plan.
        </p>
        <a
          href="/contact"
          style={{
            background: "white",
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
          Contact Us
        </a>
      </section>
    </>
  );
};

export default About;
