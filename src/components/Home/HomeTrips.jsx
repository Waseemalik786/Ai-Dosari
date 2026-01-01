import React from 'react';
import { FaWhatsapp, FaGraduationCap, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import VisitTripes from './VisitTripes';

export default function HomeTrips() {

    return (
        <section id="trips" className="py-7 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                 
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
                       <span className='text-[#00627B]'>School Trips</span> & Group Visits
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Structured educational experiences and guided tours designed for learning, adventure, and conservation
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Content */}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#00627B] mb-6">
                                Why Choose Al Dosari Reserve for Group Visits?
                            </h3>
                            <div className="space-y-4">
                                {[
                                    "Guided by certified educators and naturalists",
                                    "Age-appropriate programs for all educational levels",
                                    "Safety-first approach with trained staff",
                                    "Flexible scheduling and customizable packages",
                                    "Hands-on learning experiences in natural settings",
                                    "Support materials and pre-visit resources provided"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-6 h-6 rounded-full bg-[#00627B]/10 flex items-center justify-center">
                                                <span className="text-[#00627B] text-sm font-bold">✓</span>
                                            </div>
                                        </div>
                                        <p className="ml-3 text-gray-700 text-lg">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Safety Note */}
                        <div className="bg-[black]/1 border border-[#5F0020]/20 rounded-xl p-6">
                            <div className="flex items-start">
                                <FaShieldAlt className="text-2xl text-[#00627B] mt-1 mr-4" />
                                <div>
                                    <h4 className="font-bold text-[#00627B] text-lg mb-2">Safety & Organization</h4>
                                    <p className="text-[#121212]">
                                        All group visits include trained staff, first-aid facilities, emergency plans, and appropriate safety equipment for activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://img.freepik.com/premium-photo/walking-field-friends-with-nature-travel-getaway-trip-with-adventure-countryside-lens-flare-outdoor-people-group-with-grass-journey-bonding-together-with-happiness-joyful_590464-500519.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80"
                                alt="Students enjoying educational trip at Al Dosari Reserve"
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#00627B]">500+</div>
                                    <div className="text-sm text-gray-600">School Groups</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#00627B]">10K+</div>
                                    <div className="text-sm text-gray-600">Students Visited</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#00627B]">98%</div>
                                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <VisitTripes />




            </div>
        </section>
    );
}