const About = () => (
  <section
    className="about-section"
    style={{
      background: "linear-gradient(135deg, #fff3e0, #ffe8d6)",
      padding: "5rem 2rem",
      textAlign: "center",
      color: "#3b2f2f",
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
      <span style={{ color: "#a4161a", fontWeight: "600" }}>SouthSpice</span> is
      a trusted wholesale masala company that bridges local spice farmers with
      South Indian markets. We take pride in delivering authentic, flavorful
      spices — cultivated with care and delivered fresh to homes and
      restaurants across the region.
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
      {[
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
      ].map((team, i) => (
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
);

export default About;
