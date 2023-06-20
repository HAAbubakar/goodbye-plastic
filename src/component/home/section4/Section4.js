import React from 'react'
import './Section4.css'
function Section4() {
  return (
    <div className='main-section4'>
        <div className='container'>
                <div>
                    <h1>our methods</h1>
                </div>
            <div className='row'>
                <div className='col-lg-4 '>
                    <div className='section4-box'>
                        <img src='ourvision.gif' alt='pic'/>
                        <h2> Our vision</h2>
                        <p> To rebuild an earth free of pollution caused by plastic wastage and be the revolution towards safe earth for the coming generations</p>
                    </div>
                </div>
                <div className='col-lg-4 '>
                    <div className='section4-box '>
                        <img src='OUR_MISSION.gif' alt='pic'/>
                        <h2>Our Mission </h2>
                        <p> Our mission is to replace plastic with eco-friendly products, ensuring a safe future and planet. Each small step we take brings us closer to a sustainable world.</p>
                    </div >
                </div>
                <div className='col-lg-4 '>
                    <div className='section4-box '>
                        <img src='PHILOSIPHY.gif' alt='pic'/>
                        <h2>Our Philosophy </h2>
                        <p>Good-Bye Plastic is committed to delivering sustainable, safe, biodegradable, high-quality alternative products to plastic usage. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4