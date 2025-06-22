import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const BannerSlider = () => {
  return (
    <>
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
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to = "/catalog" className="item-banner">
            <picture>
              <source srcSet="/img/banner-image1_4-3.jpg" media="(max-width: 900px)" />
              <img src="/img/banner-image1.jpg" alt="banner-image1" />
            </picture>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to = "/offers" className="item-banner">
            <picture>
              <source srcSet="/img/banner-image2_4-3.jpg" media="(max-width: 900px)" />
              <img src="/img/banner-image2.jpg" alt="banner-image2" />
            </picture>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to = "/shipments" className="item-banner">
            <picture>
              <source srcSet="/img/banner-image3_4-3.jpg" media="(max-width: 900px)" />
              <img src="/img/banner-image3.jpg" alt="banner-image3" />
            </picture>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to = "/contact-us" className="item-banner">
          <picture>
            <source srcSet="/img/banner-image4_4-3.jpg" media="(max-width: 900px)" />
            <img src="/img/banner-image4.jpg" alt="banner-image4" />
          </picture>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
