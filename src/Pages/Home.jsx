import React from 'react'

import Homeactivity from '../components/home/Homeactivity'
import HomeTrips from '../components/home/HomeTrips'
import HomeHeader from '../components/home/HomeHeader'
import Services from '../components/home/ExploreOurFacilities'

export default function Home() {
  return (
    <div className='mt-10'>
      <HomeHeader/>
      <Homeactivity/>
      <HomeTrips/>
      <Services/>
    </div>
  )
}
