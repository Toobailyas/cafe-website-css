import React from "react";
import Image from "next/image";
import "./Product.css";

const Product = () => {
  return (
    <div id="product" className="container">
      <div>
        <section className="product-section">
          <h2 className="product-title">OUR PRODUCTS</h2>
          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            veniam sequi. Praesentium soluta voluptate molestiae.
          </p>
          <section className="product-content">
            <div className="product-grid">
              {[
                { src: "/card/espressoo.png", name: "Espresso" },
                { src: "/card/latte.jpg", name: "Latte" },
                { src: "/card/iced-coffee.jpg", name: "Iced Coffee" },
                { src: "/card/Cappuccino.jpg", name: "Cappuccino" },
                { src: "/card/doppio.avif", name: "Doppio" },
                { src: "/card/Ristretto.jpg", name: "Ristretto" },
              ].map((product, index) => (
                <div className="product-card" key={index}>
                  <div className="image-container">
                    <Image
                      src={product.src}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                  <div className="product-info">
                    <h2 className="product-category">Coffee</h2>
                    <h1 className="product-name">{product.name}</h1>
                    <p className="product-text">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div className="product-link-container">
                      <a className="product-link" href="#">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Product;

