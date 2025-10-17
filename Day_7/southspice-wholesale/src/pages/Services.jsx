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

const Services = () => (
  <section
    className="services-section"
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
);

export default Services;
