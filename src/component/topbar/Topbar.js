import React from 'react';
import './Topbar.css'

function Topbar() {
  return (
    <div className='topbar'>
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