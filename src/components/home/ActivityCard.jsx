import React from 'react';
import { FaWhatsapp, FaClock, FaUsers } from 'react-icons/fa';

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
    <div className="bg-white rounded-xl hover:translate-y-1 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
      {/* Activity Image */}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Age Group Badge */}
        <div className="absolute top-3 right-3 bg-[#00627B]/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {ageGroup}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#00627B]">
          {title}
        </h3>
        
        {/* Short Description */}
        <p className="text-gray-600 mb-3 text-sm">{desc}</p>
        
        {/* Quick Info Bar */}
        <div className="grid gap-2 w-full items-center justify-between text-xs text-gray-500 mb-4 border-t border-b border-gray-100">
          <div className="flex items-center gap-1">
            <FaClock className="text-[#00627B]" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUsers className="text-[#00627B]" />
            <span className="hidden sm:inline">{bestFor}</span>
            <span className="sm:hidden">Group</span>
          </div>
        </div>

        {/* WhatsApp Booking Button */}
        <button
          onClick={onBook}
          className="w-full cursor-pointer bg-gradient-to-r from-[#00627B] to-[#004d5c] text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 group"
        >
          <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
          <span>Book via WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
