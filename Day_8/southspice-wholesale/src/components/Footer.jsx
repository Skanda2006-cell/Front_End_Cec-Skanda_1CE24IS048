const Footer = () => (
  <footer
    style={{
      backgroundColor: "var(--primary-red)",
      color: "white",
      padding: "2rem 1rem",
      textAlign: "center",
      fontSize: "0.9rem",
      borderTop: "4px solid #ffd7c2",
      marginTop: "3rem",
    }}
  >
    <p style={{ margin: 0 }}>
      © {new Date().getFullYear()} SouthSpice Wholesale Co. | All Rights Reserved
    </p>
    <p
      style={{
        marginTop: "0.5rem",
        color: "#ffd7c2",
        fontWeight: "600",
        fontSize: "0.85rem",
      }}
    >
      Authentic Flavors from the Heart of South India
    </p>
  </footer>
);

export default Footer;
