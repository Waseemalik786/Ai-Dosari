import React from 'react'

import HomeActivity from '../Components/Home/HomeActivity'
import HomeTrips from '../components/home/HomeTrips'
import HomeHeader from '../components/home/HomeHeader'
import Services from '../components/home/ExploreOurFacilities'

export default function Home() {
  return (
    <div className='mt-10'>
      <HomeHeader />
      <HomeActivity />
      <HomeTrips />
      <Services />
    </div>
  )
}
