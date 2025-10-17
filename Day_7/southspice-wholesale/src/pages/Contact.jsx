const Contact = () => (
  <section
    className="contact-section"
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
        fontSize: "2.4rem",
        marginBottom: "2rem",
      }}
    >
      Contact Us
    </h2>

    <div
      className="contact-container"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2.5rem",
        alignItems: "stretch",
        maxWidth: "1000px",
        margin: "0 auto 3rem",
      }}
    >
      {/* Left: Form */}
      <form
        className="contact-form"
        style={{
          background: "linear-gradient(180deg, #fff9f2, #ffe5b9)",
          padding: "2.5rem",
          borderRadius: "1rem",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "0.9rem 1rem",
            borderRadius: "8px",
            border: "1px solid #e0b089",
            outline: "none",
            fontSize: "1rem",
            backgroundColor: "#fff",
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "0.9rem 1rem",
            borderRadius: "8px",
            border: "1px solid #e0b089",
            outline: "none",
            fontSize: "1rem",
            backgroundColor: "#fff",
          }}
        />
        <textarea
          placeholder="Message"
          rows="4"
          style={{
            padding: "0.9rem 1rem",
            borderRadius: "8px",
            border: "1px solid #e0b089",
            outline: "none",
            fontSize: "1rem",
            backgroundColor: "#fff",
            resize: "none",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            background: "#a4161a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.9rem",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#7c0f13")}
          onMouseLeave={(e) => (e.target.style.background = "#a4161a")}
        >
          Send Message
        </button>
      </form>

      {/* Right: Map */}
      <div
        className="contact-map"
        style={{
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <iframe
          title="SouthSpice Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.904446870255!2d76.9419131747201!3d11.016844991724166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a6d12f823d%3A0x4c1b8e05f898b0!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <p
      className="contact-info"
      style={{
        color: "#4a403a",
        fontSize: "1.05rem",
        marginBottom: "0.5rem",
      }}
    >
      📍 <strong>Address:</strong> No. 45, Spice Market Road, Coimbatore, Tamil Nadu
    </p>
    <p
      className="contact-info"
      style={{
        color: "#4a403a",
        fontSize: "1.05rem",
      }}
    >
      📞 <strong>Phone:</strong> +91 98765 43210
    </p>
  </section>
);

export default Contact;
