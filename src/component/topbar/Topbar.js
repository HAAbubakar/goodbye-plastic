import React from 'react';
import './Topbar.css'

function Topbar() {
  return (
    <div className='topbar'>
      <div className='top-topbar'>
        <div className='container'>

        <i class="fa-solid fa-envelope-open"></i>
        <p>info@good-byeplastic.com</p>
        <i class="fa-solid fa-phone"></i>
        <p>+1-602-481-3535</p>
        </div>
      </div>
          <div className='container'>
        <div className='topbar-logo-left'>
            <img src='Logo.png'/>
        </div>
        <div className='topbar-menu-right'>
            <div className='topbar-menu-right-link'>
                <a href='#'>Home</a>
                <a href='#'>Products</a>
                <a href='#'>About us</a>
                <a href='#'>Blog</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Topbar