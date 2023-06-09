import React from 'react'
import './Section2.css'
function Section2() {
  return (
    <div className='section2-write'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 '>
                <h1>WHAT WE DO?</h1>
                <p>At GoodbyePlastic, we’re passionate about sustainability and reducing plastic waste. That’s why we work closely with farmers and agriculturists to create eco-friendly plates and bowls. We use leaves from the Arecanut tree and sugarcane waste, Cornstarch to make completely processed and natural products. Each step of the process involves working with farmers to help them form and own small-scale businesses. We provide funding, management, and support to help these businesses grow and produce our sustainable products under the GoodbyePlastic brand.</p>
                <div className='button-2'>
                  <a href='#'>View More</a>
                </div>
            </div>

            <div className='col-lg-6'>
              <img src='Section2-object-1.png' className='section-2-object-1'/>
              <img src='Section2-image.png' className='section2-image' />
              <img src='Frame.png' className='section-2-object-2'/>
            </div>
           
          </div>
        </div>
    </div>
  )
}

export default Section2