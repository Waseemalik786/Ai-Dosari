import React from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import HomeActivities from '../Components/Home/HomeActivities'
import HomeTrips from '../Components/Home/HomeTrips'

export default function Home() {
  return (
    <div className='mt-10'>
      <HomeHeader/>
      <HomeActivities/>
      <HomeTrips/>
    </div>
  )
}
