import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  // Example placeholder array if you plan to use more content sections later
  const teams = [
    // Example data (optional)
    { name: "Distribution Team", role: "Handles logistics and delivery" },
    { name: "Production Team", role: "Oversees spice sourcing and quality" },
  ];

  return (
    <div>
      {/* Top Hero Section */}
      <Hero />

      {/* Placeholder for additional homepage content */}
      <section
        style={{
          padding: "3rem 2rem",
          textAlign: "center",
          background: "#fff8f3",
        }}
      >
        <h2 style={{ color: "#a4161a", fontWeight: "700" }}>
          Welcome to SouthSpice
        </h2>
        <p style={{ color: "#4a403a", maxWidth: "700px", margin: "1rem auto" }}>
          Explore premium masalas and spices delivered fresh across South India.
          Our dedicated teams ensure quality, authenticity, and timely service.
        </p>
      </section>
    </div>
  );
};

export default Home;
