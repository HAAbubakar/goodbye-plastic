import React from 'react';
import './Section7.css';

function Section7() {
  return (
    <div className='main-section7'>
        <div className='container'>
            <h1>
                popular this week
            </h1>
            <div className='row'>
                <div className='col-md-3 col-sm-6 '>
                    <div className='section7-item'>
                    <img src='section7-1.png' alt='pic'/>
                    <div className='zoom-in'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className='section7-item'>
                    <img src='section7-2.png' alt='pic'/>
                    <div className='zoom-in'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className='section7-item'>
                    <img src='section7-3.png' alt='pic'/>
                    <div className='zoom-in'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className='section7-item'>
                    <img src='section7-4.png' alt='pic'/>
                    <div className='zoom-in'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section7