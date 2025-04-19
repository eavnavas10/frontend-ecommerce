import {SwiperAutoplay} from "../components/SwiperAutoplay";
import './styles/HomePage.css';
import React from 'react';

export const HomePage = () => {
  return (
    <div className="home-page-container">

      <div className="carousel-container">
        <SwiperAutoplay></SwiperAutoplay>
      </div>

    </div>
  );
};
