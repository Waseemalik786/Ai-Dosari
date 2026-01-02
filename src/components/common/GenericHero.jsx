import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function GenericHero({ 
  slides = [], 
  showButtons = true, 
  height = "h-screen",
  primaryBtnText = "Book via WhatsApp",
  secondaryBtnText = "Explore Activities →"
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (!slides.length) return null;

  const currentSlide = slides[currentIndex];

  return (
    <section className={`relative ${height} w-full overflow-hidden bg-black`}>
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-40" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            animation: index === currentIndex ? "zoomEffect 20s infinite alternate ease-in-out" : "none",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/5" />

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-10">
        <div className="w-full max-w-5xl text-center animate-fadeIn">
          {/* Title - Exact same size on all pages */}
          <h1 className="font-bold mb-5 sm:mb-6 leading-tight tracking-tight text-[clamp(1.8rem,6vw,3.8rem)]">
            {currentSlide.title.split(" ").map((word, index) => (
              <span
                key={index}
                className={index === currentSlide.highlightIndex ? "text-[#00627B]" : "text-white"}
              >
                {word + " "}
              </span>
            ))}
          </h1>

          {/* Subtitle - Exact same size on all pages */}
          <p className="mx-auto mb-8 sm:mb-10 max-w-[42rem] text-[clamp(1rem,3.5vw,1.5rem)] leading-relaxed text-gray-200">
            {currentSlide.subtitle}
          </p>

          {/* Buttons */}
{showButtons && (
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
    <Link
      to=""
      className="flex items-center gap-3 px-6 py-2 rounded-lg bg-[#00627B] text-white font-semibold shadow-lg transition-all hover:scale-105 hover:bg-[#004f63] w-fit" // Changed w-full to w-fit
    >
      <FaWhatsapp className="text-xl shrink-0" />
      <span className="whitespace-nowrap">{primaryBtnText}</span>
    </Link>

    <Link
      to="/activities"
      className="px-6 py-2 rounded-lg border-2 border-white text-white font-semibold transition-all hover:scale-105 hover:bg-white hover:text-black w-fit text-center" // Changed w-full to w-fit
    >
      {secondaryBtnText}
    </Link>
  </div>
)}

          {/* Navigation Dots */}
          {slides.length > 1 && (
            <div className="flex justify-center gap-3 mt-10 sm:mt-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all cursor-pointer duration-500 rounded-full ${
                    currentIndex === index ? "bg-[#00627B] w-8 h-3" : "bg-white/40 w-3 h-3 hover:bg-[#00627B]"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes zoomEffect { from { transform: scale(1); } to { transform: scale(1.1); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
      `}</style>
    </section>
  );
}