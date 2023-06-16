import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="Slider-1.png" class="d-block w-100" alt="image"/>
            <div class="carousel-caption d-none d-md-block">
              <div className='container'>
                <div className='col-lg-6'>

                  <h2>WHY Good-Bye Plastic?</h2>
                  <p>A revolution doesn’t happen in a day! We at Good-Bye Plastic are here to initiate a revolution against the usage of plastic. We are here to help you say Good-Bye to your daily usage of Plastic by providing alternatives for those usages with sustainable and eco-friendly solutions.</p>
                  <i class="fa-brands fa-pinterest-p social-icon"></i>
                  <i class="fa-brands fa-youtube social-icon"></i>
                  <i class="fa-brands fa-facebook-f social-icon"></i>
                  <i class="fa-brands fa-instagram social-icon"></i>
                  <i class="fa-brands fa-linkedin-in social-icon"></i>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item">
            <img src="Slider-2.png" class="d-block w-100" alt="image"/>
            <div class="carousel-caption d-none d-md-block">
              <div className='container'>
                <div className='col-lg-6'>

                  <h2>WHY Good-Bye Plastic?</h2>
                  <p>A revolution doesn’t happen in a day! We at Good-Bye Plastic are here to initiate a revolution against the usage of plastic. We are here to help you say Good-Bye to your daily usage of Plastic by providing alternatives for those usages with sustainable and eco-friendly solutions.</p>
                  <i class="fa-brands fa-pinterest-p social-icon"></i>
                  <i class="fa-brands fa-youtube social-icon"></i>
                  <i class="fa-brands fa-facebook-f social-icon"></i>
                  <i class="fa-brands fa-instagram social-icon"></i>
                  <i class="fa-brands fa-linkedin-in social-icon"></i>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item">
            <img src="Slider-3.png" class="d-block w-100" alt="image"/>
            <div class="carousel-caption d-none d-md-block">
              <div className='container'>
                <div className='col-lg-6'>

                  <h2>WHY Good-Bye Plastic?</h2>
                  <p>A revolution doesn’t happen in a day! We at Good-Bye Plastic are here to initiate a revolution against the usage of plastic. We are here to help you say Good-Bye to your daily usage of Plastic by providing alternatives for those usages with sustainable and eco-friendly solutions.</p>
                  <i class="fa-brands fa-pinterest-p social-icon"></i>
                  <i class="fa-brands fa-youtube social-icon"></i>
                  <i class="fa-brands fa-facebook-f social-icon"></i>
                  <i class="fa-brands fa-instagram social-icon"></i>
                  <i class="fa-brands fa-linkedin-in social-icon"></i>
                </div>
              </div>
            </div>
        </div>
        </div>
       
    </div>
  </div>
  )
}

export default Header