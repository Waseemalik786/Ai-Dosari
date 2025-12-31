import React from 'react';
import { FaWhatsapp, FaClock, FaUsers, FaStar } from 'react-icons/fa';

export default function ActivityCard({ 
  image, 
  title, 
  desc, 
  details, 
  ageGroup, 
  duration, 
  bestFor, 
  onBook 
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* Activity Image */}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Age Group Badge */}
        <div className="absolute top-3 right-3 bg-[#5F0020]/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {ageGroup}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        
        {/* Short Description */}
        <p className="text-gray-600 mb-3 text-sm">{desc}</p>
        
        {/* Detailed Info (Visible on hover/always) */}
        <div className=" flex-1">
          {/* <p className="text-gray-500 text-sm italic">{details}</p> */}
        </div>

        {/* Quick Info Bar */}
        <div className="grid gap-2 w-full items-center justify-between text-xs text-gray-500 mb-4 border-t border-b border-gray-100 ">
          <div className="flex items-center gap-1">
            <FaClock className="text-[#5F0020]" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUsers className="text-[#5F0020]" />
            <span className="hidden sm:inline">{bestFor}</span>
            <span className="sm:hidden">Group</span>
          </div>
        </div>

        {/* WhatsApp Booking Button */}
        <button
          onClick={onBook}
          className="w-full bg-gradient-to-r from-[#5F0020] to-[#8B0035] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 group"
        >
          <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
          <span>Book via WhatsApp</span>
        </button>
      </div>
    </div>
  );
}