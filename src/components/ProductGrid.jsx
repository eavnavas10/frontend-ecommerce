import { useEffect, useState } from "react";
import "./styles/ProductGrid.css";

export const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products?populate=*")
      .then((response) => response.json())
      .then((data) => {
        if (!data.data || !Array.isArray(data.data)) return;

        const formattedProducts = data.data.map((item) => ({
          id: item.id,
          title: item.title || "Sin título",
          description: item.description || "Sin descripción",
          oldPrice: item.oldPrice || undefined,
          price: item.price || 0,
          offer: item.offer || false,
          qty: item.qty || 0,
          image: item.image?.url ? `http://localhost:4000${item.image.url}` : "", 
        }));

        setProducts(formattedProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
}, []);

  return (
    <section className="products-container">
      <h1 className="section-title">Nuestros Productos</h1>
      <div className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image || "/placeholder.svg"} alt={product.title} className="product-image" />
              {product.offer && <span className="product-offer-badge">Oferta</span>}
            </div>
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              {product.oldPrice && <p className="product-old-price">Q{product.oldPrice.toFixed(2)}</p>}
              <p className="product-price">Q{product.price.toFixed(2)}</p>
              <p className="product-description">{product.description}</p>
              <button className="product-button">Preguntar en Whatsapp</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
  
};