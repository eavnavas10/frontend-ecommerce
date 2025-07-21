import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { getOffers } from "../lib/get-offers";
import { getHomeCategoryConfig } from "../lib/get-home-categories";
import { getAllProducts } from "../lib/get-all-products";
import { getProductsByCategory } from "../lib/get-products-by-category";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CategorySlider } from "../components/CategorySlider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/HomePage.css";

export const HomePage = () => {
  const [offers, setOffers] = useState([]);
  const [newestProducts, setNewestProducts] = useState([]);
  const [category1Data, setCategory1Data] = useState([]);
  const [category2Data, setCategory2Data] = useState([]);
  const [categoryTitles, setCategoryTitles] = useState({});

  useEffect(() => {
    async function fetchOffers() {
      try {
        const res = await getOffers({ page: 1, pageSize: 10 });
        if (res?.products) {
          setOffers(res.products);
        }
      } catch (error) {
        console.error("Error al obtener ofertas:", error);
      }
    }

    fetchOffers();
  }, []);

  useEffect(() => {
    async function loadCategoryCarousels() {
      try {
        const config = await getHomeCategoryConfig();
        if (config) {
          setCategoryTitles({
            category1: config.category1.title,
            category2: config.category2.title,
          });

          const [cat1Products, cat2Products] = await Promise.all([
            getProductsByCategory(config.category1.id),
            getProductsByCategory(config.category2.id),
          ]);

          setCategory1Data(cat1Products);
          setCategory2Data(cat2Products);
        }
      } catch (err) {
        console.error("Error al cargar categorías:", err);
      }
    }

    loadCategoryCarousels();
  }, []);

useEffect(() => {
  async function fetchNewestProducts() {
    try {
      const res = await getAllProducts({ page: 1, pageSize: 10 });
      if (res?.products) {
        setNewestProducts(res.products);
      }
    } catch (error) {
      console.error("Error al cargar productos nuevos:", error);
    }
  }

  fetchNewestProducts();
}, []);

useEffect(() => {
  async function fetchNewestProducts() {
    try {
      const res = await getAllProducts({ page: 1, pageSize: 10 });
      if (res?.products) {
        setNewestProducts(res.products);
      }
    } catch (error) {
      console.error("Error al cargar productos nuevos:", error);
    }
  }

  fetchNewestProducts();
}, []);

  return (
    <div className="home-page-container">
      <div className="banner-slider-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="home-page-banner-slider"
        >
          <SwiperSlide>
            <Link to="/catalog" className="home-page-banner-item">
              <picture>
                <source
                  srcSet="/img/banner-image1_4-3.jpg"
                  media="(max-width: 900px)"
                />
                <img src="/img/banner-image1.jpg" alt="banner-image1" />
              </picture>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/offers" className="home-page-banner-item">
              <picture>
                <source
                  srcSet="/img/banner-image2_4-3.jpg"
                  media="(max-width: 900px)"
                />
                <img src="/img/banner-image2.jpg" alt="banner-image2" />
              </picture>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/shipments" className="home-page-banner-item">
              <picture>
                <source
                  srcSet="/img/banner-image3_4-3.jpg"
                  media="(max-width: 900px)"
                />
                <img src="/img/banner-image3.jpg" alt="banner-image3" />
              </picture>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/contact-us" className="home-page-banner-item">
              <picture>
                <source
                  srcSet="/img/banner-image4_4-3.jpg"
                  media="(max-width: 900px)"
                />
                <img src="/img/banner-image4.jpg" alt="banner-image4" />
              </picture>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <CategorySlider title="Novedades" products={newestProducts} />      
      <CategorySlider title={categoryTitles.category1} products={category1Data} />
      <CategorySlider title="¡Ofertas destacadas!" products={offers} />
      <CategorySlider title={categoryTitles.category2} products={category2Data} />      
      
    </div>
  );
};
