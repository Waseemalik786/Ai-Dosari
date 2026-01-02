"use client";

import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaUsers, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function VisitTripes() {
  const { t, i18n } = useTranslation('visittripes');

  const sectionTitle = t('sectionTitle');
  const sectionHighlight = t('sectionHighlight');
  const tripTypes = t('tripTypes', { returnObjects: true });
  const buttonText = t('buttonText');

  const whatsappNumber = "966XXXXXXXXX"; // replace with your number

  const icons = [<FaGraduationCap />, <FaUsers />, <FaMapMarkerAlt />];

  const handleWhatsAppBooking = (tripTitle = "") => {
    let message = `Hello, I'm interested in ${tripTitle} at Al Dosari Reserve. Please provide details and available dates.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <h3 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
        <span className='text-[#00627B]'>{sectionHighlight}</span> {sectionTitle.replace(sectionHighlight, '')}
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {tripTypes.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#00627B] p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{icons[index]}</div>
                <span className="text-sm font-semibold bg-white/10 px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <h4 className="text-xl font-bold">{trip.title}</h4>
              <p className="text-white/90 text-sm mt-2">{trip.description}</p>
            </div>

            {/* Features */}
            <div className="p-4">
              <ul className="space-y-3 mb-6">
                {trip.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#00627B] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleWhatsAppBooking(trip.title)}
                className="w-full cursor-pointer bg-[#00627B] hover:bg-[#006277] text-white font-semibold py-2 rounded-lg text-md flex items-center justify-center gap-2 transition-colors"
              >
                <FaWhatsapp />
                {buttonText} {trip.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
