import { useEffect, useState } from "react";
import "./styles/ProductGrid.css";

export const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products?populate=*")
      .then((response) => response.json())
      .then((data) => {
        if (!data.data || !Array.isArray(data.data)) return;
  
        const formattedProducts = data.data.map((item) => {
          const firstImage = item.images?.[0];
          const imageUrl = firstImage?.formats?.small?.url || firstImage?.url || "";
  
          return {
            id: item.id,
            title: item.title || "Sin título",
            description: item.description || "Sin descripción",
            oldPrice: item.oldPrice || undefined,
            price: item.price || 0,
            offer: item.offer || false,
            qty: item.qty || 0,
            sizes: item.sizes ? item.sizes.map((size) => size.size) : [],
            image: imageUrl ? `http://localhost:4000${imageUrl}` : "",
          };
        });
  
        setProducts(formattedProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

  return (
    <section className="products-container">
      <div className="products-grid">
        {products.map((product) => (
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
        ))}
      </div>
    </section>
  );
};
