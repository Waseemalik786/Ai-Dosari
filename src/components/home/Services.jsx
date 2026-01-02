import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation("services");

  // Safely load translated services
  const leftServicesData = useMemo(() => {
    const arr = t('services.leftServices', { returnObjects: true });
    return Array.isArray(arr) ? arr : [];
  }, [t]);

  const rightServicesData = useMemo(() => {
    const arr = t('services.rightServices', { returnObjects: true });
    return Array.isArray(arr) ? arr : [];
  }, [t]);

  // Icons, positions, and AOS data (layout-related)
  const leftServices = [
    { ...leftServicesData[0], icon: FaParking, position: 'lg:mr-[-140px]', aos: 'fade-right' },
    { ...leftServicesData[1], icon: FaCamera, position: 'lg:mr-[-50px]', aos: 'fade-right' },
    { ...leftServicesData[2], icon: FaMapMarkedAlt, position: 'lg:mr-[-50px]', aos: 'fade-right' },
    { ...leftServicesData[3], icon: FaUtensils, position: 'lg:mr-[-140px]', aos: 'fade-right' }
  ];

  const rightServices = [
    { ...rightServicesData[0], icon: FaShoppingBag, position: 'lg:ml-[-140px]', aos: 'fade-left' },
    { ...rightServicesData[1], icon: FaWifi, position: 'lg:ml-[-50px]', aos: 'fade-left' },
    { ...rightServicesData[2], icon: FaFutbol, position: 'lg:ml-[-50px]', aos: 'fade-left' },
    { ...rightServicesData[3], icon: FaHotel, position: 'lg:ml-[-140px]', aos: 'fade-left' }
  ];

  const ServiceCard = ({ service, side }) => {
    const Icon = service.icon;
    return (
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
        <div className='relative z-10'>
          <div className='flex items-center space-x-4 mb-2'>
            <div
              className='
                bg-[#00627B]/10 p-3 rounded-full
                transition-all duration-500 ease-in-out
                group-hover:bg-white
                group-hover:scale-125
                group-hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]
              '
            >
              <Icon className='text-[#00627B] text-xl' />
            </div>
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
  }

  return (
    <div className='w-full bg-gray-50 py-7 px-6 md:px-12 lg:px-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto mb-12 text-center flex flex-col items-center'>
        <span className='inline-block text-lg font-semibold tracking-wider text-[#00627B] uppercase bg-[black]/5 hover:shadow-2xl px-4 py-1 rounded-full mb-3 shadow-inner'>
          {t('services.heading.subtitle')}
        </span>
        <h1 className='text-4xl font-extrabold text-[#00627B] mb-4'>
          {t('services.heading.title')}
        </h1>
        <p className='text-gray-600 max-w-2xl text-center'>
          {t('services.heading.description')}
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto'>
        <div className='lg:col-span-4 flex flex-col gap-5 items-center lg:items-end'>
          {leftServices.map((s, i) => (
            <ServiceCard key={i} service={s} side='left' />
          ))}
        </div>

        <div data-aos='zoom-in' className='lg:col-span-4 px-3 flex justify-center'>
          <div className='relative w-80 h-70 rounded-full overflow-hidden shadow-xl'>
            <img
              src='https://zoo-drab.vercel.app/images/service.jpg'
              alt='service'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

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
