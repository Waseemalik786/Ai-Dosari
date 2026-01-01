import React from 'react'

import HomeActivity from '../Components/Home/HomeActivity'
import HomeTrips from '../components/Home/HomeTrips'
import HomeHeader from '../components/Home/HomeHeader'
import Services from '../components/Home/ExploreOurFacilities'

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
