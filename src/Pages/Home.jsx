import React from 'react'

import HomeActivities from '../components/home/HomeActivities'
import HomeTrips from '../components/home/HomeTrips'
import HomeHeader from '../components/home/HomeHeader'
import Services from '../components/home/ExploreOurFacilities'

export default function Home() {
  return (
    <div className='mt-10'>
      <HomeHeader/>
      <HomeActivities/>
      <HomeTrips/>
      <Services/>
    </div>
  )
}
