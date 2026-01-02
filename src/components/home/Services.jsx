import React from 'react'
import {
  FaParking,
  FaCamera,
  FaMapMarkedAlt,
  FaUtensils,
  FaShoppingBag,
  FaWifi,
  FaFutbol,
  FaHotel
} from 'react-icons/fa'

const Services = () => {
  const leftServices = [
    {
      icon: FaParking,
      title: 'Car Parking',
      desc: 'Safe & spacious parking.',
      position: 'lg:mr-[-140px]',
      aos: 'fade-right'
    },
    {
      icon: FaCamera,
      title: 'Animal Photos',
      desc: 'Capture zoo memories.',
      position: 'lg:mr-[-50px]',
      aos: 'fade-right'
    },
    {
      icon: FaMapMarkedAlt,
      title: 'Guide Services',
      desc: 'Professional guides available.',
      position: 'lg:mr-[-50px]',
      aos: 'fade-right'
    },
    {
      icon: FaUtensils,
      title: 'Food & Beverages',
      desc: 'Delicious meals & drinks.',
      position: 'lg:mr-[-140px]',
      aos: 'fade-right'
    }
  ]

  const rightServices = [
    {
      icon: FaShoppingBag,
      title: 'Zoo Shopping',
      desc: 'Souvenirs, toys, and more.',
      position: 'lg:ml-[-140px]',
      aos: 'fade-left'
    },
    {
      icon: FaWifi,
      title: 'Free Hi-Speed WiFi',
      desc: 'Stay connected anytime.',
      position: 'lg:ml-[-50px]',
      aos: 'fade-left'
    },
    {
      icon: FaFutbol,
      title: 'Playground',
      desc: 'Fun play area for children.',
      position: 'lg:ml-[-50px]',
      aos: 'fade-left'
    },
    {
      icon: FaHotel,
      title: 'Rest House',
      desc: 'Relax & refresh comfortably.',
      position: 'lg:ml-[-140px]',
      aos: 'fade-left'
    }
  ]

  const ServiceCard = ({ service, side }) => (
    <div
      data-aos={service.aos}
      data-aos-duration='1000'
      className={`
        relative group w-full sm:w-full lg:w-[400px]
        bg-white border border-gray-100
        rounded-lg lg:rounded-xl p-5 shadow-md
        transition-all duration-500 ease-in-out
        hover:-translate-y-2
        ${service.position}
        ${side === 'left' ? 'lg:rounded-r-full' : 'lg:rounded-l-full'}
      `}
    >
      {/* Hover Overlay (radius FIXED) */}
      <div
        className={`
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          bg-gradient-to-r from-[#00627B] via-[#0088A9] to-[#00C2D1]
          rounded-lg lg:rounded-xl
          ${side === 'left' ? 'lg:rounded-r-full' : 'lg:rounded-l-full'}
        `}
      />

      {/* Content */}
      <div className='relative z-10'>
        <div className='flex items-center space-x-4 mb-2'>
          {/* Icon */}
          <div
            className='
              bg-[#00627B]/10 p-3 rounded-full
              transition-all duration-500 ease-in-out
              group-hover:bg-white
              group-hover:scale-125
              group-hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]
            '
          >
            <service.icon className='text-[#00627B] text-xl' />
          </div>

          {/* Title */}
          <h2
            className='
              text-lg font-semibold text-[#00627B]
              transition-all duration-500
              group-hover:text-white
            '
          >
            {service.title}
          </h2>
        </div>

        {/* Description */}
        <p
          className={`
            text-gray-600 transition-all duration-500
            group-hover:text-white/90
            ${side === 'right' ? 'lg:pl-10 sm:pl-0' : 'lg:pr-10 sm:pr-0'}
          `}
        >
          {service.desc}
        </p>
      </div>
    </div>
  )

  return (
    <div className='w-full bg-gray-50 py-7 px-6 md:px-12 lg:px-20 overflow-hidden'>
      {/* Heading */}
     <div className='max-w-7xl mx-auto mb-12 text-center flex flex-col items-center'>
  <span className='inline-block text-lg font-semibold tracking-wider text-[#00627B] uppercase bg-[black]/5 hover:shadow-2xl px-4 py-1 rounded-full mb-3 shadow-inner'>
    Our Services
  </span>

  <h1 className='text-4xl font-extrabold text-[#00627B] mb-4'>
    Explore Our Facilities
  </h1>

  <p className='text-gray-600 max-w-2xl text-center'>
    We provide top notch services to make your visit comfortable,
    enjoyable, and memorable.
  </p>
</div>


      {/* Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto'>
        {/* Left */}
        <div className='lg:col-span-4 flex flex-col gap-5 items-center lg:items-end'>
          {leftServices.map((s, i) => (
            <ServiceCard key={i} service={s} side='left' />
          ))}
        </div>

        {/* Center Image */}
        <div data-aos='zoom-in' className='lg:col-span-4 px-3 flex justify-center'>
          <div className='relative w-80 h-70 rounded-full overflow-hidden shadow-xl'>
            <img
              src='https://zoo-drab.vercel.app/images/service.jpg'
              alt='service'
              className='w-full h-full  object-cover'
            />
          </div>
        </div>

        {/* Right */}
        <div className='lg:col-span-4 flex flex-col gap-5 items-center lg:items-start'>
          {rightServices.map((s, i) => (
            <ServiceCard key={i} service={s} side='right' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
