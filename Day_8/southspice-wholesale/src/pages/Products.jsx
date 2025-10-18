import React, { useState } from "react";

const spices = [
  {
    name: "Turmeric",
    img: "https://t3.ftcdn.net/jpg/01/82/27/42/360_F_182274289_RvpPTYZmC3n98ZXuH85d31XBfyEhk6b1.jpg",
    price: 50,
  },
  {
    name: "Red Chilli",
    img: "https://images.pexels.com/photos/9185580/pexels-photo-9185580.jpeg",
    price: 40,
  },
  {
    name: "Cumin Seeds",
    img: "https://t3.ftcdn.net/jpg/07/11/82/16/360_F_711821694_gIzpYDAE246N9Bh6DaWDsK7xOOKg9Rfv.jpg",
    price: 60,
  },
  {
    name: "Black Pepper",
    img: "https://keralaspicecart.com/wp-content/uploads/2020/10/layer1-1.png",
    price: 70,
  },
  {
    name: "Cardamom",
    img: "https://vibrantliving.in/cdn/shop/files/CardamomGreen.png?v=1731059940&width=600",
    price: 80,
  },
  {
    name: "Coriander Seeds",
    img: "https://i0.wp.com/gachwala.in/wp-content/uploads/2022/07/Coriander-Seeds-Chinese-parsley.jpg?fit=1000%2C1000&ssl=1",
    price: 35,
  },
  {
    name: "Cloves",
    img: "https://kerala.me/wp-content/uploads/2015/12/Cloves.jpg",
    price: 90,
  },
  {
    name: "Fenugreek Seeds",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/5/CK/IG/RY/38768188/methi-small-vip-10kg.jpeg",
    price: 45,
  },
  {
    name: "Mustard Seeds",
    img: "https://nuttyyogi.com/cdn/shop/products/MustardSeeds.png?v=1680767117",
    price: 30,
  },
  {
    name: "Fennel Seeds",
    img: "https://vibrantliving.in/cdn/shop/files/FennelSeeds.png?v=1731060016&width=2048",
    price: 55,
  },
  {
    name: "Cinnamon Sticks",
    img: "https://rukminim2.flixcart.com/image/480/640/koynr0w0/spice-masala/t/y/k/200-cinnamon-sticks-whole-dalchini-100-pure-cassia-bark-200gm-original-imag3ak93vfzxd3y.jpeg?q=90",
    price: 65,
  },
  {
    name: "Star Anise",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIKWrmPzE7EgZ2erTA61z6qWKGbnDzsEiKw&s",
    price: 50,
  },
];

const Products = () => {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setCartVisible(true);
  };

  const handleCheckout = () => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const itemsList = cart.map((item) => `- ${item.name}: ₹${item.price}`).join("\n");
    alert(`Thank you for your purchase!\n\nItems:\n${itemsList}\n\nTotal Price: ₹${totalPrice}`);
    setCart([]);
    setCartVisible(false);
  };

  return (
    <>
      <section
        className="products-section"
        style={{
          background: "linear-gradient(135deg, #fff3e0, #ffe8d6)",
          padding: "5rem 2rem",
          textAlign: "center",
          color: "#3b2f2f",
          position: "relative",
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 14px 28px rgba(164, 22, 26, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
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
                  marginBottom: "0.3rem",
                }}
              >
                {spice.name}
              </h3>
              <p
                style={{
                  color: "#6b3b3b",
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                ₹{spice.price}
              </p>
              <p
                style={{
                  color: "#4b3b32",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                }}
              >
                Pure and fresh spices directly from the source.
              </p>
              <button
                onClick={() => addToCart(spice)}
                style={{
                  padding: "0.7rem 1.2rem",
                  backgroundColor: "#a4161a",
                  color: "#fff",
                  border: "none",
                  borderRadius: "24px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#7c0f13")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#a4161a")}
              >
                Add to Cart
              </button>
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
          <h3 style={{ color: "#a4161a", fontWeight: "700", marginBottom: "1rem" }}>
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

      {cartVisible && (
        <aside
          style={{
            position: "fixed",
            top: "8rem",
            right: 0,
            width: "320px",
            maxHeight: "80vh",
            overflowY: "auto",
            backgroundColor: "#fff3e0",
            borderLeft: "4px solid #a4161a",
            padding: "1rem",
            boxShadow: "-2px 0 8px rgba(0, 0, 0, 0.1)",
            fontFamily: "'Poppins', sans-serif",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ color: "#a4161a", textAlign: "center", marginBottom: "1rem" }}>
            Cart Items ({cart.length})
          </h3>
          {cart.length === 0 && <p style={{ color: "#4a403a" }}>Cart is empty</p>}
          {cart.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              style={{
                borderBottom: "1px solid #a4161a",
                padding: "0.5rem 0",
                fontWeight: "600",
                color: "#6b0404",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
          <div
            style={{
              borderTop: "2px solid #a4161a",
              marginTop: "1rem",
              paddingTop: "1rem",
              fontWeight: "700",
              fontSize: "1.1rem",
              color: "#a4161a",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Total:</span>
            <span>
              ₹{cart.reduce((sum, item) => sum + item.price, 0)}
            </span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={cart.length === 0}
            style={{
              marginTop: "1rem",
              backgroundColor: "#a4161a",
              color: "#fff",
              padding: "0.8rem",
              borderRadius: "24px",
              fontWeight: "700",
              fontSize: "1.1rem",
              border: "none",
              cursor: cart.length === 0 ? "not-allowed" : "pointer",
              opacity: cart.length === 0 ? 0.5 : 1,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              if (cart.length > 0) e.target.style.backgroundColor = "#7c0f13";
            }}
            onMouseLeave={(e) => {
              if (cart.length > 0) e.target.style.backgroundColor = "#a4161a";
            }}
          >
            Checkout Now
          </button>
        </aside>
      )}
    </>
  );
};

export default Products;
