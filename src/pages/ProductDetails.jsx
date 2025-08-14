import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../lib/get-product-by-id";
import { UilWhatsapp, UilShoppingCart } from "@iconscout/react-unicons";
import { useCart } from "../contexts/CartContext";
import { useLocalMessage } from "../components/MessageAnt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/ProductDetails.css";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useCart();
  const { messageApi, contextHolder } = useLocalMessage();

  const handleAddToCart = () => {
    const productData = {
      id: product.id,
      title: product.title,
      price: product.price,
      qty: product.qty,
      image: product.image,
      size: selectedSize,
    };
    addToCart(productData, selectedSize);
    messageApi.success(`${product.title} añadido al carrito`);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "50233347867";
    const message = `Hola! estoy interesado/a en el producto: ${product.title}\n${window.location.href} me gustaría que me brindara más información`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
        if (data.sizes.length > 0) {
          setSelectedSize(data.sizes[0]);
        }
      })
      .catch((err) => {
        console.error("Error al obtener el producto:", err);
        setProduct(null);
      });
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  const hasMultipleImages =
    Array.isArray(product.images) && product.images.length > 1;

  return (
    <div className="product-details-container">
      {contextHolder}

      <div className="product-details-img-container">
        {hasMultipleImages ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {product.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  className="product-details-image"
                  src={
                    img.startsWith("http")
                      ? img
                      : `${process.env.REACT_APP_API_URL}/${img}`
                  }
                  alt={`${product.title} ${idx + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            className="product-details-image"
            src={product.image || "/placeholder.svg"}
            alt={product.title}
          />
        )}
      </div>

      <div className="product-details-info">
        <h1 className="product-details-title">{product.title}</h1>
        <p className="product-details-description">{product.description}</p>
        <p className="product-details-qty">
          Disponibilidad: {product.qty === 0 ? "Sin existencias" : product.qty}
        </p>

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
                  checked={selectedSize === size}
                  onChange={() => setSelectedSize(size)}
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

        <div className="product-details-buttons-container">
          <button
            className="product-details-whatsapp-button"
            onClick={handleWhatsAppClick}
          >
            <span>Preguntar por Whatsapp</span>
            <UilWhatsapp color="var(--text-color-five)" size="1rem" />
          </button>
          <button
            className="product-details-cart-button"
            onClick={handleAddToCart}
          >
            <span>Añadir a carrito</span>
            <UilShoppingCart color="var(--text-color-five)" size="1rem" />
          </button>
        </div>
      </div>
    </div>
  );
};
