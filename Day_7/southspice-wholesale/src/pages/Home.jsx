import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  const teams = [
    {
      name: "Marketing Team",
      description:
        "Strategically promoting our products across South India to ensure maximum reach.",
    },
    {
      name: "Sales Team",
      description:
        "Dedicated sales personnel helping retailers and distributors efficiently place orders.",
    },
    {
      name: "Delivery Team",
      description:
        "Timely delivery across South India, ensuring fresh and high-quality masalas reach every client.",
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />

      {/* ================= Card Layout ================= */}
      <section
        className="info-section"
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
            fontSize: "2.2rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          South India’s Trusted Wholesale Spice Partner
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
          Our marketing, sales, and delivery teams work across South India to
          ensure every retailer and distributor gets high-quality masalas on
          time.
        </p>

        <div
          className="info-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            justifyItems: "center",
          }}
        >
          {teams.map((team, i) => (
            <div
              key={team.name}
              className="info-card"
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
                {team.name}
              </h3>
              <p
                style={{
                  color: "#4b3b32",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                }}
              >
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Table Layout ================= */}
      <section
        className="info-section"
        style={{
          background: "linear-gradient(135deg, #fff8f3, #ffeedd)",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#a4161a",
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "2rem",
          }}
        >
          Our Teams – Table View
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table
            className="info-table"
            style={{
              width: "90%",
              margin: "0 auto",
              borderCollapse: "collapse",
              backgroundColor: "#fff",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <thead style={{ backgroundColor: "#a4161a", color: "#fff" }}>
              <tr>
                <th
                  style={{
                    padding: "1rem",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Team
                </th>
                <th
                  style={{
                    padding: "1rem",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, i) => (
                <tr
                  key={team.name}
                  style={{
                    backgroundColor: i % 2 === 0 ? "#fff9f5" : "#fff3eb",
                  }}
                >
                  <td style={{ padding: "1rem", color: "#4a403a" }}>
                    {team.name}
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "#4a403a",
                      lineHeight: "1.6",
                    }}
                  >
                    {team.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Home;
