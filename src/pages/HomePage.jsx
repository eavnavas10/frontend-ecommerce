import { BannerSlider } from "../components/BannerSlider";
import './styles/HomePage.css';
import React from 'react';

export const HomePage = () => {
  return (
    <div className="home-page-container">

      <div className="banner-slider-container">
        <BannerSlider/>
      </div>

    </div>
  );
};
