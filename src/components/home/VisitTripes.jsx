import React from 'react'
import { FaGraduationCap, FaMapMarkerAlt, FaUsers, FaWhatsapp } from 'react-icons/fa';

export default function VisitTripes() {
    const tripTypes = [
        {
            title: "School Trips",
            icon: <FaGraduationCap />,
            description: "Curriculum-aligned programs for educational institutions",
            features: ["Grade-specific learning", "Worksheets provided", "Guided by educators"],
            // color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Family & Group Visits",
            icon: <FaUsers />,
            description: "Memorable experiences for families and private groups",
            features: ["Flexible scheduling", "Custom activities", "Private guides available"],
            // color: "from-emerald-500 to-green-500"
        },
        {
            title: "Institutional Tours",
            icon: <FaMapMarkerAlt />,
            description: "Organized visits for companies and organizations",
            features: ["Team building", "Corporate packages", "Custom itineraries"],
            // color: "from-purple-500 to-pink-500"
        }
    ];

    const handleWhatsAppBooking = (tripType = "") => {
        let message = "Hello, I would like to plan a visit to Al Dosari Reserve.";
        if (tripType) {
            message = `Hello, I'm interested in ${tripType} at Al Dosari Reserve. Please provide details and available dates.`;
        }
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    };
    const whatsappNumber = "966XXXXXXXXX";
    return (

        <div className="">
            <h3 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
               <span className='text-[#00627B]'>Choose Your</span> Visit Type
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
                {tripTypes.map((trip, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        {/* Header with gradient */}
                        <div className={`bg-[#00627B] p-6 text-white`}>
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-3xl">{trip.icon}</div>
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
                                className="w-full cursor-pointer bg-[#00627B] hover:bg-[#006277] text-white font-semibold py-2 rounded-lg text-md flex  items-center justify-center gap-2 transition-colors"
                            >
                                <FaWhatsapp />
                                Inquire About {trip.title}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>


    )
}
