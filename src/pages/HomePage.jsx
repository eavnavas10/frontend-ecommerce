import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./styles/HomePage.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const HomePage = () => {
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

      <div className="categories-slider">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
          modules={[Autoplay,Navigation]}
          className="home-page-category-slider-one"
        >
          <SwiperSlide className="home-page-category-sliderOne-item">Slide 1</SwiperSlide>
          <SwiperSlide className="home-page-category-sliderOne-item">Slide 2</SwiperSlide>
          <SwiperSlide className="home-page-category-sliderOne-item">Slide 3</SwiperSlide>
          <SwiperSlide className="home-page-category-sliderOne-item">Slide 4</SwiperSlide>
          <SwiperSlide className="home-page-category-sliderOne-item">Slide 5</SwiperSlide>
          <SwiperSlide className="home-page-category-sliderOne-item">Slide 6</SwiperSlide>
          <SwiperSlide className="home-page-category-sliderOne-item">Slide 7</SwiperSlide>
          <SwiperSlide className="home-page-category-sliderOne-item">Slide 8</SwiperSlide>
          <SwiperSlide className="home-page-category-sliderOne-item">Slide 9</SwiperSlide>
        </Swiper>
      </div>



    </div>
  );
};
