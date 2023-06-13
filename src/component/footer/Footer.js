import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src='logo.png' alt='logo'/>
                    <p>A revolution doesn’t happen in a day! We at Good-Bye Plastic are here to initiate a revolution against the usage of plastic. We are here to help you say Good-Bye to your daily usage of Plastic by providing alternatives for those usages with sustainable and eco-friendly solutions.</p>
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
                    <p>India: +918848642982</p>
                    <p>USA: +1-602-481-3535</p>
                    <h3>sales:</h3>
                    <p>USA: +1-602-481-3535</p>
                    <p>info@good-byeplastic.com</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer