import React from 'react'
import './productTopBar.css'

function ProductTopBar() {
  return (
    <div className='product-topbar'>
            <hr/>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <form>
                        <input type='text' placeholder='Search'/>
                        <button type='submit'> <i class="fa-solid fa-magnifying-glass"></i> </button>
                    </form>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>
                    <div className='wishlist'>
                    <i class="fa-solid fa-cart-plus"></i>
                        <p>shopping cart</p>
                        <i class="fa-regular fa-heart"/>
                        <p>my wish list</p>
                    </div>
                </div>
        </div>
        </div>
        
    </div>
  )
}

export default ProductTopBar