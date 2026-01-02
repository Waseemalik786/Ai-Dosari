import React from 'react'
import HomeHeader from '../components/home/HomeHeader.jsx'
import HomeActivity from '../components/home/HomeActivity.jsx'
import HomeTrips from '../components/home/HomeTrips.jsx'
import Services from '../components/home/Services.jsx'




const MainHome = () => {
  return (
    <div className='mt-10'>
      <HomeHeader />
      <HomeActivity />
      <HomeTrips />
      <Services />
    </div>
  )
}
export default MainHome;