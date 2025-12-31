import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPlay } from "react-icons/fa";

const slides = [
  {
    id: 1,
    type: "image",
    image: "https://img.freepik.com/free-photo/tourist-carrying-luggage_23-2151747443.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
    videoId: null,
    title: "Al Dosari Reserve",
    subtitle: "A Premium Eco-Tourism & Educational Destination",
    gradient: "from-black/70 via-black/50 to-transparent",
    buttonColor: "bg-gradient-to-r from-[#5F0020] to-[#8B0035]"
  },
  {
    id: 2,
    type: "image",
    image: "https://img.freepik.com/premium-photo/conducting-population-surveys-endangered-speci-generative-ai_883586-255779.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
    videoId: null,
    title: "Nature, Wildlife & Learning",
    subtitle: "Unique experiences for families and institutions",
    gradient: "from-black/70 via-black/50 to-transparent",
    buttonColor: "bg-gradient-to-r from-[#5F0020] to-[#8B0035]"
  },
  {
    id: 3,
    type: "video",
    image: "https://img.freepik.com/free-photo/adventure-hike-people-concept-group-smiling-friends-forest-man-with-map_1157-45166.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
    // videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    title: "Designed for Schools & Groups",
    subtitle: "Educational trips that inspire and educate",
    gradient: "from-black/70 via-black/50 to-transparent",
    buttonColor: "bg-gradient-to-r from-[#5F0020] to-[#8B0035]"
  },
//   {
//     id: 4,
//     type: "image",
//     image: "https://img.freepik.com/free-photo/kids-having-fun-as-boy-scouts_23-2149657023.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
//     videoId: null,
//     title: "Discover Saudi Arabia's Wildlife",
//     subtitle: "Conservation, Education, and Adventure",
//     gradient: "from-black/70 via-black/50 to-transparent",
//     buttonColor: "bg-gradient-to-r from-[#5F0020] to-[#8B0035]"
//   }
];

export default function HomeHeader() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);


 

  // Auto-slide effect with smooth transitions
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 300);
      }, 300);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              animation: index === current ? 'zoomEffect 20s infinite alternate ease-in-out' : 'none'
            }}
          />

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-b ${slide.gradient}`} />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-center text-white px-4 sm:px-6 max-w-4xl mx-auto transition-all duration-700 ${
              isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
            }`}>
              {/* Video Play Button (for video slides) */}
            

              {/* Main Title */}
              <h1 className="text-xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent drop-shadow-2xl">
                  {slide.title}
                </span>
              </h1>
              {/* Subtitle */}
              <p className="text-lg sm:text-2xl mb-8 sm:mb-12 font-light text-white/90 max-w-2xl mx-auto leading-relaxed px-4">
                {slide.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                {/* WhatsApp Booking Button */}
                <Link
                  to=''
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${slide.buttonColor} hover:opacity-90 text-white px-4 sm:px-5 py-3 sm:py-3 rounded-full font-semibold text-base sm:text-lg flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow-xl transition-all duration-300 sm:w-auto justify-center`}
                >
                  <FaWhatsapp className="text-xl sm:text-2xl" />
                  <span>Book via WhatsApp</span>
                </Link>

                {/* Explore Activities Button - Using Link */}
                <Link
                  to="/activities"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 sm:px-5 py-2  rounded-full font-semibold text-base sm:text-lg flex items-center gap-2 sm:gap-3 hover:scale-105 hover:shadow-xl transition-all duration-300  justify-center "
                >
                  <span>Explore Activities</span>
                  <span className="text-lg sm:text-xl">→</span>
                </Link>
              </div>

           
            </div>
          </div>
        </div>
      ))}


      {/* CSS Animation */}
      <style>{`
        @keyframes zoomEffect {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  );
}