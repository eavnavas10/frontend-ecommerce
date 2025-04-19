import React from 'react';
import { Carousel } from 'antd';
import "./styles/CarouselGalery.css";

export const CarouselGalery = () => {
  return (
    <>
    <Carousel arrows infinite={true} adaptiveHeight={true} autoplaySpeed={3}>
      <div>
        <img className="carousel-imagen" src="/img/imagen-galery1.jpg" alt="image1"></img>  
      </div>
      <div>
        <img className="carousel-imagen" src="/img/imagen-galery2.jpg" alt="image2"></img>
      </div>
      <div>
        <img className="carousel-imagen" src="/img/imagen-galery3.jpg" alt="image3"></img>
      </div>
      <div>
      <img className="carousel-imagen" src="/img/imagen-galery4.jpg" alt="image4"></img>
      </div>
      <div>
      <img className="carousel-imagen" src="/img/imagen-galery5.jpg" alt="image5"></img>
      </div>
    </Carousel>
  </>
  )
}
