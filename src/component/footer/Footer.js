import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src='logo.png' alt='logo'/>
                    <p>
                        Good-Bye Plastic is a brand designed to deliver a solution to the damage, plastic wastage is causing to the environment. We make highly compostable products to replace everyday plastic products.

                    </p>
                    <i class="fa-brands fa-pinterest-p social-icon"></i>
                    <i class="fa-brands fa-youtube social-icon"></i>
                    <i class="fa-brands fa-facebook-f social-icon"></i>
                    <i class="fa-brands fa-instagram social-icon"></i>
                    <i class="fa-brands fa-linkedin-in social-icon"></i>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-3'>
                    <h1>quick links</h1>
                    <a href='#'>home</a>
                    <a href='#'>products</a>
                    <a href='#'>about us</a>
                    <a href='#'>blog</a>
                </div>
                <div className='col-lg-4 footer-section3'>
                    <h1>Contact Us</h1>
                    <h3>Operations:</h3>
                    <div className='flags-text'>
                        <img src='flag-india.png'/>
                        <p>India: +918848642982</p>
                    </div>
                    <div className='flags-text'>
                        <img src='flag-USA.png'/>
                        <p>USA: +1-602-481-3535</p>
                    </div>
                    <h3>sales:</h3>
                    <div className='flags-text'>
                        <img src='flag-USA.png'/>
                        <p>USA: +1-602-481-3535</p>
                    </div>
                    <p>info@good-byeplastic.com</p>
                </div>
            </div>
        </div>
        <div className='rights-text'>
        <p>All rights reserved © 2019 Good-Bye Plastic</p>
        </div>
    </div>
  )
}

export default Footer