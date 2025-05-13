import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../lib/get-all-products";
import { UilArrowCircleLeft } from '@iconscout/react-unicons'
import "./styles/ProductDetails.css";
import { useNavigate } from 'react-router-dom';
import { ProductGallery } from "../components/ProductGallery";

export const ProductDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getAllProducts().then((products) => {
      if (products) {
        const foundProduct = products.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);
      }
    });
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="product-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        <UilArrowCircleLeft size="28" color="var(--primary-color)"/>
      </button>

      <div className="product-details-img-container">
        <img
          className="product-details-image"
            src={product.image || "/placeholder.svg"}
            alt={product.title}
        />
      </div>
      
      <div className="product-details-content">
        <h1 className="product-details-title">{product.title}</h1>
        <p className="product-details-description">{product.description}</p>
        <div className="sizes-container">
          {product.sizes.length > 0 && (
            <span className="size-text">
              {product.sizes.length > 1 ? "Tallas:" : "Talla:"}
            </span>
          )}
          <div className="size-radio-group">
            {product.sizes.map((size, index) => (
              <label key={index} className="size-option">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  className="size-radio"
                  defaultChecked={index === 0}
                />
                {size}
              </label>
            ))}
          </div>
        </div>
        <div className="product-details-prices">
          <p className="product-details-price">Q{product.price.toFixed(2)}</p>
          {product.offer && (
            <p className="product-details-old-price">
              Q{product.oldPrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
