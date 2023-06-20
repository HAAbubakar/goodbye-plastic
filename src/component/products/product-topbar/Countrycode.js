import React, { Component } from 'react'

import { ReactCountryDropdown } from 'react-country-dropdown'
import 'react-country-dropdown/dist/index.css'

const Example = () => {
  const handleSelect = (country) => {
    console.log(country)
    
  }
  return (
    <div>
      <ReactCountryDropdown onSelect={handleSelect} countryCode='PK' />
    </div>
  )
}
export default Example