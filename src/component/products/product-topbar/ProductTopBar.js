import React, {useState} from 'react'
import Select from 'react-select';
import './productTopBar.css'
import Countrycode from './Countrycode'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

function ProductTopBar() {
    
    const [value, setValue] = useState()
    const handleChange = (data) => {
        setValue(data)
    }
  return (
    <div className='product-topbar'>
            <hr/>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <Countrycode/>
                    <Countrycode/>
                    <form>
                        <input type='text' placeholder='search'/>
                        <button type='submit'> <i class="fa-solid fa-magnifying-glass"></i> </button>
                    </form>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>
                    <div className='wishlist'>
                        <img src='ph_shopping-cart.png'/>
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