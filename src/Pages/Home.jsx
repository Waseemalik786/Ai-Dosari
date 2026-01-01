import React from 'react'
import HomeHeader from '../components/home/HomeHeader.jsx'
import HomeActivity from '../Components/Home/Homeactivity.jsx'
import HomeTrips from '../Components/Home/HomeTrips.jsx'
import Services from '../Components/home/Services.jsx'




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
