import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles/SwiperAutoplay.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const SwiperAutoplay = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
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
            <img className="carousel-imagen" src="/img/imagen-galery1.jpg" alt="image1"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className="carousel-imagen" src="/img/imagen-galery2.jpg" alt="image2"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className="carousel-imagen" src="/img/imagen-galery3.jpg" alt="image3"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className="carousel-imagen" src="/img/imagen-galery4.jpg" alt="image4"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className="carousel-imagen" src="/img/imagen-galery5.jpg" alt="image5"></img>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
