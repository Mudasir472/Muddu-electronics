import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

import Computers from "../src/browseCatagories/Computers"

import sliderImage1 from './images/slider-1.webp'
import sliderImage2 from './images/slider-2.webp'
import sliderImage3 from './images/slider-3.webp'
import BestProduct from "../src/components/BestProduct";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    autoplaySpeed: 2000, // Optional

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        },
      },
    ],
  };

  return (
    <div className="carousel home-carousel">
      <Slider {...settings}>
        <div className="img-Carousel">
          <img
            crossOrigin="anonymous"
            src={
              sliderImage1}
            alt="Slide 1"
          />
          <div className="muddu1 d-flex align-items-center justify-content-center">
            <h3>Mudasir1</h3>
          </div>
        </div>
        <div className="img-Carousel">
          <img
            crossOrigin="anonymous"
            src={
              sliderImage2}
            alt="Slide 2"
          />
          <div className="muddu2 d-flex align-items-center justify-content-center">
            <h3>Mudasir2</h3>
          </div>
        </div>
        <div className="img-Carousel">
          <img
            crossOrigin="anonymous"
            src={
              sliderImage3}
            alt="Slide 3"
          />
          <div className="muddu3 d-flex align-items-center justify-content-center">
            <h3>Mudasir3</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;