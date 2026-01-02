"use client";

import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import VisitTripes from './VisitTripes';
import { useTranslation } from 'react-i18next';

export default function HomeTrips() {
  const { t, i18n } = useTranslation('trips');
  const isAr = i18n.language === "ar";

  // --- SAFE DATA FETCHING ---
  // We check if the data is an array. If i18next isn't ready, it returns [].
  const whyListData = t('whyList', { returnObjects: true });
  const whyList = Array.isArray(whyListData) ? whyListData : [];

  const statsData = t('stats', { returnObjects: true });
  const stats = Array.isArray(statsData) ? statsData : [];

  const sectionTitle = t('sectionTitle') || "";
  const sectionHighlight = t('sectionHighlight') || "";

  return (
    <section id="trips" className="py-7 bg-gradient-to-b from-gray-50 to-white" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className='text-[#00627B]'>{sectionHighlight}</span> 
            &nbsp;{sectionTitle.replace(sectionHighlight, '')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('sectionDesc')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#00627B] mb-6">{t('whyTitle')}</h3>
              <div className="space-y-4">
                {whyList.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#00627B]/10 flex items-center justify-center">
                        <span className="text-[#00627B] text-sm font-bold">✓</span>
                      </div>
                    </div>
                    <p className={`${isAr ? 'mr-3' : 'ml-3'} text-gray-700 text-lg`}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Note */}
            <div className="bg-black/5 border border-[#00627B]/10 rounded-xl p-6">
              <div className="flex items-start">
                <FaShieldAlt className={`text-2xl text-[#00627B] mt-1 ${isAr ? 'ml-4' : 'mr-4'}`} />
                <div>
                  <h4 className="font-bold text-[#00627B] text-lg mb-2">{t('safetyTitle')}</h4>
                  <p className="text-[#121212]">{t('safetyDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://img.freepik.com/premium-photo/walking-field-friends-with-nature-travel-getaway-trip-with-adventure-countryside-lens-flare-outdoor-people-group-with-grass-journey-bonding-together-with-happiness-joyful_590464-500519.jpg?w=740"
                alt={t('imageAlt')}
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#00627B]">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <VisitTripes />
      </div>
    </section>
  );
}