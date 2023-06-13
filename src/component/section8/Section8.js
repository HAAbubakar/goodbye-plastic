import React from 'react'
import './Section8.css'
import Section8Video from './Section8Video'

function Section8() {
  return (
    <div className='section8-write'>
        <div className='container'>
          <div className='row'>
            

            <div className='col-lg-6'>
              <img src='section8-object-1.png' className='section-8-object-1'/>
              <img src='section8-image.png' className='section8-image' />
              <img src='section8-object-2.png' className='section-8-object-2'/>
            </div>
            <div className='col-lg-6 section-video-image'>

                {/* <Section8Video/> */}
              <div className='back-image'>
                <img src='video-image.png'/>
                <div className='btn-image'>
                <img src='video-image-btn.png' />
                </div>
              </div>
            </div>
           
          </div>
        </div>
    </div>
  )
}

export default Section8