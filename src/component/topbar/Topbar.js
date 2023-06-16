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
      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#"><img src='logo.png'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav navbar-nav-scroll" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">about us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Topbar