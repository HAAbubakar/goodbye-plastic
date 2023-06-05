import React from 'react';
import './Section1.css'
function Section1() {
  return (
    <div className='container'>
      <div className='section1'>
        <div className='section1-first'>
          <div className='section1-image'>
            <div>
            <img src='section-1-img-1.png'/>
            </div>
          </div>
            <div className='section1-text'>
            <h2>100% </h2>
            <h2>REUSABLE</h2>
            <p>Our Products are 100% </p>
            <p>REUSABLE</p>
          </div>
          
        </div>
        <div className='section1-first'>
          <div className='section1-image'><div>
            <img src='section-1-img-2.png'/></div>
          </div>
          <div className='section1-text'>
            <h2>100% </h2>
            <h2>BIODEGRADABLE</h2>
            <p>Our Products are 100% </p>
            <p>Biodegradable</p>
          </div>
        </div>
        <div className='section1-first'>
          <div className='section1-image'><div>
            <img src='section-1-img-3.png'/></div>
          </div>
          <div className='section1-text'>
            <h2>100% </h2>
            <h2>ECO-FRIENDLY</h2>
            <p>Our Products are 100% </p>
            <p>ECO-FRIENDLY</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1