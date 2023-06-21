import React from 'react'
import ProductTopBar from '../../component/products/product-topbar/ProductTopBar'
import ProductSidebar from '../../component/products/sidebar/productSidebar'
import PageMainfram from '../../component/products/mainfram/pageMainfram'
import './productMain.css'

function Products() {
  return (
    <div >
        <ProductTopBar />
        <div className='main-product-page'>

        <div className='container'>
          <div className='row'>
            <div className='col-sm-3'>
                <ProductSidebar/>
            </div>
            <div className='col-sm-9'>
                <PageMainfram/>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Products