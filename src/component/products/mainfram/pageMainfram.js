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
        <hr/>
        <div className='select-item'>
            <p>ITEMS PER PAGE</p>
            <SelectMainfram options={[
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]}/>
            <p>sort by</p>
            <SelectMainfram  options={[
  { value: 'asd', label: 'asd' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]}/>
        </div>
        
        <div className='row'>
            {Array.from({length: 18}).map((item, index)=>(
                <div className='col-lg-4 col-md-6 col-sm-12' key={index}>
                    <div className='product-image'>
                        <img src='product-image.png'/>
                        <div className='production-image-animation'>
                            <h3>Quick Add +</h3>
                        </div>
                        <div className='product-social-icon'>
                            <img src='product-social-icon.png'/>
                            <img src='product-social-icon2.png'/>
                        </div>
                    </div>
                    <h2>plate</h2>
                    <p>Lorem ipsum dolor sit amet. Ut quas minus et quod beatae ex dolor quae</p>
                    <div className='product-color'>
                        <h4>
                            $15.99
                        </h4>
                        <div className='colors-kind'>
                            <span className='first-round'>
                                <span className='second-round'/>
                            </span>
                            <span className='first-round'>
                                <span className='second-round2'></span>
                            </span>
                            <span className='first-round'>
                                <span className='second-round3'></span>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>

  )
}

export default PageMainfram