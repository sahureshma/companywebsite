import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import TopHoldings from '../Main/Main'
import FollowedStock from '../FollowedStock/FollowedStock'

function Home() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
     <TopHoldings/>
   <FollowedStock/>
   
    </div>
  )
}

export default Home
