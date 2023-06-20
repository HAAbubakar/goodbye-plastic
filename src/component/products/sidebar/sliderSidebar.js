import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 856,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
          
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          
        }
      },
      
    ]
  };
  return (
    <Slider {...settings}>
      <div className="item">
        <img src="section5-slider1.png"/>
        
      </div>
      <div  className="item">
      <img src="section5-slider2.png"/>
      
      </div>
      <div  className="item">
      <img src="section5-slider3.png"/>
      
      </div>
      <div  className="item">
      <img src="section5-slider4.png"/>
      
      </div>
      <div  className="item">
      <img src="section5-slider4.png"/>
      
      </div>
    </Slider>
  );
}