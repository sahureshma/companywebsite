import React from 'react'
import Marketable from '../Marketable/Marketable'
import Marketsidebar from '../Marketsidebar/Marketsidebar'

import './Market.css'
import Navbar from '../Navbar/Navbar'
function Market() {
  return (
    <div className='headingmarkett'>
      <h3 className='marketthead'>Markets</h3>
    <div className='markett'>
     <Navbar/>
      <Marketsidebar/>
      <Marketable/>
     
    </div>
    </div>
  )
}

export default Market