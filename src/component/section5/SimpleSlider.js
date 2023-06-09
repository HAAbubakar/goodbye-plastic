import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    prevArrow: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" data-role="none" class="slick-arrow slick-prev slick-disabled" currentSlide="0" slideCount="10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>,
    nextArrow: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" data-role="none" class="slick-arrow slick-next" currentSlide="0" slideCount="10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>,
  };
  return (
    <Slider {...settings}>
      <div className="item">
        <img src="section5-slider1.png"/>
        <div className="product-name">abcd</div>
      </div>
      <div  className="item">
      <img src="section5-slider2.png"/>
      <div className="product-name">abcd</div>
      </div>
      <div  className="item">
      <img src="section5-slider3.png"/>
      <div className="product-name">abcd</div>
      </div>
      <div  className="item">
      <img src="section5-slider4.png"/>
      <div className="product-name">abcd</div>
      </div>
      <div  className="item">
      <img src="section5-slider4.png"/>
      <div className="product-name">abcd</div>
      </div>
    </Slider>
  );
}