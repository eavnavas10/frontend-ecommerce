import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../lib/get-all-products';
import "./styles/ProductDetails.css"
import { ProductGallery } from "../components/ProductGallery"

export const ProductDetails = () => {
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
      <div className="product-details-carousel">
        <img className="product-details-image" src={product.image} alt={product.title} />        
      </div>
      <ProductGallery />
      <div className="product-details-content">
        <h1 className="product-details-title">{product.title}</h1>
          <p className="product-details-description">{product.description}</p>
            <div className="product-details-prices">
              <p className="product-details-price">Q{product.price.toFixed(2)}</p>
              {product.offer && (
                <p className="product-details-old-price">Q{product.oldPrice.toFixed(2)}</p>
              )}
            </div>
      </div>
    </div>
  );
}
