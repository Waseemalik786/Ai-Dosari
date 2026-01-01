import React from 'react'

import HomeActivities from '../Components/Home/HomeActivities'
import HomeTrips from '../Components/Home/HomeTrips'
import HomeHeader from '../Components/Home/HomeHeader'

export default function Home() {
  return (
    <div className='mt-10'>
      <HomeHeader/>
      <HomeActivities/>
      <HomeTrips/>
    </div>
  )
}
