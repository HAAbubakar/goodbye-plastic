import React from 'react';
import './Section3.css';
import CurveSlider from './CurveSlider'

function Section3() {
  return (
    <div>
        <div className='container section3-write'>
            <h1>our products</h1>
            <p>
                At Goodbyeplastic, we believe that it is important to prioritize the health of our planet by using eco-friendly materials that do not harm the environment. Our products are not only sustainable but also durable and affordable, making them an ideal choice for anyone who wants to make a positive impact on the environment.
            </p>
        </div>
        {/* <div className='section3-image'>
            <div class="section-gallery">
                <div class="section-image-container">
                    <img src="section3-image-1.png" alt="Image 1"/>
                </div>            
                <div class="section-image-container">
                    <img src="section3-image-2.png" alt="Image 1"/>
                </div>            
                <div class="section-image-container">
                    <img src="section3-image-3.png" alt="Image 1"/>
                </div>            
                <div class="section-image-container">
                    <img src="section3-image-4.png" alt="Image 1"/>
                </div>       
            </div>
        </div> */}
        <div className='section3-image' >

        <CurveSlider/>
        </div>
        <div className='button-1'>
            <a href='#'>View More</a>
        </div>
    </div>
  )
}

export default Section3