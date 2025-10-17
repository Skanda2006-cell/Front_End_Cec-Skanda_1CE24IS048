const spices = [
  {
    name: "Turmeric",
    img: "https://t3.ftcdn.net/jpg/01/82/27/42/360_F_182274289_RvpPTYZmC3n98ZXuH85d31XBfyEhk6b1.jpg",
  },
  {
    name: "Red Chilli",
    img: "https://images.pexels.com/photos/9185580/pexels-photo-9185580.jpeg",
  },
  {
    name: "Cumin Seeds",
    img: "https://t3.ftcdn.net/jpg/07/11/82/16/360_F_711821694_gIzpYDAE246N9Bh6DaWDsK7xOOKg9Rfv.jpg",
  },
  {
    name: "Black Pepper",
    img: "https://keralaspicecart.com/wp-content/uploads/2020/10/layer1-1.png",
  },
  {
    name: "Cardamom",
    img: "https://vibrantliving.in/cdn/shop/files/CardamomGreen.png?v=1731059940&width=600",
  },
  {
    name: "Coriander Seeds",
    img: "https://i0.wp.com/gachwala.in/wp-content/uploads/2022/07/Coriander-Seeds-Chinese-parsley.jpg?fit=1000%2C1000&ssl=1",
  },
  {
    name: "Cloves",
    img: "https://kerala.me/wp-content/uploads/2015/12/Cloves.jpg",
  },
  {
    name: "Fenugreek Seeds",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/5/CK/IG/RY/38768188/methi-small-vip-10kg.jpeg",
  },
];

const Products = () => {
  return (
    <section
      className="products-section"
      style={{
        background: "linear-gradient(135deg, #fff3e0, #ffe8d6)",
        padding: "5rem 2rem",
        textAlign: "center",
        color: "#3b2f2f",
      }}
    >
      {/* Bulk Discount Banner */}
      <div
        style={{
          backgroundColor: "#a4161a",
          color: "#fff",
          padding: "1rem 2rem",
          borderRadius: "12px",
          marginBottom: "3rem",
          fontSize: "1.3rem",
          fontWeight: "700",
        }}
      >
        Special Bulk Discounts Available on All Spices! Contact us for details.
      </div>

      <h2
        style={{
          color: "#a4161a",
          fontSize: "2.4rem",
          fontWeight: "700",
          marginBottom: "2.5rem",
        }}
      >
        Our Wholesale Products
      </h2>

      <div
        className="products-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          justifyItems: "center",
        }}
      >
        {spices.map((spice, i) => (
          <div
            key={spice.name}
            className="product-card"
            style={{
              background:
                i === 0
                  ? "linear-gradient(180deg, #fff1eb, #ffd7c2)"
                  : i === 1
                  ? "linear-gradient(180deg, #fff9f2, #ffe5b9)"
                  : i === 2
                  ? "linear-gradient(180deg, #fdfdfd, #ffe9cc)"
                  : i === 3
                  ? "linear-gradient(180deg, #fff2e6, #ffddb7)"
                  : i === 4
                  ? "linear-gradient(180deg, #fff4ea, #ffdec4)"
                  : "linear-gradient(180deg, #faf9f7, #ffebd5)",
              borderRadius: "1rem",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              maxWidth: "300px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              borderTop: "5px solid #a4161a",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 14px 28px rgba(164, 22, 26, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={spice.img}
              alt={spice.name}
              style={{
                width: "100%",
                height: "12rem",
                objectFit: "cover",
                borderRadius: "0.75rem",
                marginBottom: "1rem",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
              }}
            />
            <h3
              style={{
                color: "#a4161a",
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              {spice.name}
            </h3>
            <p
              style={{
                color: "#4b3b32",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              Pure and fresh spices directly from the source.
            </p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div
        style={{
          marginTop: "4rem",
          padding: "3rem 1.5rem",
          backgroundColor: "#ffe8d6",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(164, 22, 26, 0.1)",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <h3
          style={{ color: "#a4161a", fontWeight: "700", marginBottom: "1rem" }}
        >
          Ready to Stock Up Your Store?
        </h3>
        <p style={{ color: "#4b3b32", fontSize: "1.1rem", marginBottom: "2rem" }}>
          Contact us today for a personalized quote and discover how we can support
          your business with premium spices at wholesale prices.
        </p>
        <a
          href="/contact"
          style={{
            backgroundColor: "#a4161a",
            color: "#fff",
            padding: "0.9rem 2.5rem",
            borderRadius: "30px",
            fontWeight: "700",
            fontSize: "1.1rem",
            textDecoration: "none",
            boxShadow: "0 8px 24px rgba(164, 22, 26, 0.3)",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#7c0f13")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#a4161a")}
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
};

export default Products;
