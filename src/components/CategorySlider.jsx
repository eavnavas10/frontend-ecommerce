import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/CategorySlider.css";

export const CategorySlider = ({ title, products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="category-slider-container">
      <h2 className="slider-title">{title}</h2>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        centeredSlidesBounds={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 5 },
        }}
        modules={[Autoplay, Navigation]}
        className="category-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="category-slide">
            <Link to={`/producto/${product.id}`} className="category-card-link">
              <div className="category-card">
                <div className="category-card-image-container">
                  {product.offer && <span className="category-offer-tag">Oferta</span>}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="category-card-image"
                    loading="lazy"
                  />
                </div>

                {/* Título */}
                <p className="category-card-title">{product.title}</p>

                {/* Tallas */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="category-sizes-container">
                    <span className="size-text">
                      {product.sizes.length > 1 ? "Tallas:" : "Talla:"}
                    </span>
                    <div className="category-sizes">
                      {product.sizes.map((size, index) => (
                        <span key={index} className="category-size-tag">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Precios */}
                <div className="category-card-price-container">
                  <p className="category-card-price">Q{product.price.toFixed(2)}</p>
                  {product.oldPrice > 0 && (
                    <p className="category-card-oldPrice">Q{product.oldPrice.toFixed(2)}</p>
                  )}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};