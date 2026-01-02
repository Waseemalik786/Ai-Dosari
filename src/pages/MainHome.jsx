import React from 'react'
import HomeHeader from '../components/home/HomeHeader.jsx'
import HomeActivity from '../components/Home/HomeActivity.jsx'
import HomeTrips from '../components/Home/HomeTrips.jsx'
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