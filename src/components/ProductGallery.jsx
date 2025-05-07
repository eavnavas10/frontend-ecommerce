import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const ProductGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const mainSwiperStyle = {
    height: '80%',
    width: '100%',
    '--swiper-navigation-color': '#fff',
    '--swiper-pagination-color': '#fff',
  };

  const thumbsSwiperStyle = {
    height: '20%',
    boxSizing: 'border-box',
    padding: '10px 0',
  };

  const slideStyle = {
    textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const imageStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const thumbSlideStyle = {
    width: '25%',
    height: '100%',
    opacity: 0.4,
  };

  const thumbActiveStyle = {
    opacity: 1,
  };

  return (
    <>
      <Swiper
        style={mainSwiperStyle}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {[1, 2, 3, 4].map((num) => (
          <SwiperSlide key={num} style={slideStyle}>
            <img
              src={`https://swiperjs.com/demos/images/nature-${num}.jpg`}
              style={imageStyle}
              alt={`Slide ${num}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        style={thumbsSwiperStyle}
      >
        {[1, 2, 3, 4].map((num) => (
          <SwiperSlide
            key={num}
            style={{
              ...thumbSlideStyle,
              ...(thumbsSwiper?.slides?.[thumbsSwiper.activeIndex]?.dataset.swiperSlideIndex === String(num - 1)
                ? thumbActiveStyle
                : {}),
            }}
          >
            <img
              src={`https://swiperjs.com/demos/images/nature-${num}.jpg`}
              style={imageStyle}
              alt={`Thumb ${num}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
