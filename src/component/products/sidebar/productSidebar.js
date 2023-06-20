import React from 'react'
import './productSidebar.css'
import { Link } from 'react-router-dom';
import SliderSidebar from './sliderSidebar';

function ProductSidebar() {
  return (
    <div className='productsidebar'>
        <div className='categories'>

            <h1>categories</h1>
            <hr/>
            <Link to = "/plates & bowl">plates & bowl</Link>
            <Link to = "/shopping bags">shopping bags</Link>
            <Link to = "/cutlery">cutlery</Link>
            <Link to = "/straws">straws</Link>
            <Link to = "/water bottles">water bottles</Link>
            <Link to = "/container boxes">container boxes</Link>
        </div>
        <div className='sidebar-image'>
            <h1>FEATURED PRODUCTS</h1>
            <hr/>
            <SliderSidebar/>
        </div>
    </div>


  )
}

export default ProductSidebar