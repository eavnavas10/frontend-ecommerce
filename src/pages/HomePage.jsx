import {CarouselGalery} from "../components/CarouselGalery";
import './styles/HomePage.css';
import React from 'react';

export const HomePage = () => {
  return (
    <div className="home-page-container">

      <div className="carousel-container">
        <CarouselGalery />
      </div>

    </div>
  );
};
