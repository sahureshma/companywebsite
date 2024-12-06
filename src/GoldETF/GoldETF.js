import React from 'react'
import Marketsidebar from '../Marketsidebar/Marketsidebar'
import Goldmarket from '../Goldmarket/Goldmarket'

import './GoldETF.css'
import Navbar from '../Navbar/Navbar'
function GoldETF() {
  return (
    <div className='goldmarkett'>
      <h3 className='goldmarketthead'>Markets</h3>
    <div className='gold-markett'>
     <Navbar/>
  <Marketsidebar/>
      <Goldmarket/>
     
    </div>
    </div>
  )
}

export default GoldETF;