import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./styles/ProductGrid.css"

export const ProductGrid = ({ fetchProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        if (data) setProducts(data);
      })
      .catch((err) => console.error("Error loading products", err));
  }, [fetchProducts]);
  

  return (
    <section className="products-container">
      <div className="products-grid">
        {products.map((product) => (
          <Link key={product.id} to={`/productDetails/${product.id}`} className="product-card-link">
          <article key={product.id} className="product-card">            
            <div className="product-image-container">
              {product.offer && <span className="product-offer-tag">Oferta</span>}            
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              {product.sizes.length == 0 && <p className="product-description">{product.description}</p>}
              <div className="sizes-container">
                {product.sizes.length > 0 && <span className="size-text">{product.sizes.length > 1 ? "Tallas:": "Talla:"}</span>}
                {product.sizes.length > 0 &&
                  product.sizes.map((size, index) => (
                    <span key={index} className="size-tag">
                      {size}
                    </span>
                  ))}
              </div>
              <div className="product-price-container">
                <p className="product-price">Q{product.price.toFixed(2)}</p>
                {product.offer && (
                  <p className="product-old-price">Q{product.oldPrice.toFixed(2)}</p>
                )}
              </div>
            </div>
          </article>
          </Link>
        ))}
      </div>
    </section>
  );
};
