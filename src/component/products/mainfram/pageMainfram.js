import React from 'react'
import './pageMainfram.css'
import SelectMainfram from './selectMainfram'
function PageMainfram() {
  return (
    <div className='mainfram'>
        <div className='mainfram-image'>
            <img src='mainfram-image.png'/>
        </div>
        <h1>plates & bowl</h1>
        <p>Lorem ipsum dolor sit amet. Ab voluptatem voluptas qui impedit illum aut quis voluptates. Nam expedita minima 33 sint impedit non consequatur veniam 33 autem iure in libero omnis aut tenetur enim est aspernatur molestiae.</p>
        <div className='select-item'>
            <p>ITEMS PER PAGE</p>
            <SelectMainfram/>
            <p>sort by</p>
            <SelectMainfram/>
        </div>
        <hr/>
        <div className='product-image'>
            <img src='product-image.png'/>
            <div className='production-image-animation'>
                <h3>Quick Add +</h3>
                <i class="fa-thin fa-heart"/>
                <i class="fa-thin fa-eye"/>
            </div>
        </div>

    </div>

  )
}

export default PageMainfram