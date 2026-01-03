import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

// 4 Slides Data
const aboutSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920&auto=format&fit=crop",
    title: "Embrace Pure Nature",
    subtitle:
      "Experience the serene beauty of Qatar's landscapes and breathe in the fresh air of our eco-friendly sanctuary.",
    highlightIndex: 2,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1761523884504-7c09f077d4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbGRyZW4lMjB3aXRoJTIwZGVlcnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Educational Tours Programs",
    subtitle:
      "Inspiring the next generation through interactive learning experiences and environmental awareness trips.",
    highlightIndex: 0,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1743890914470-8908cbbbe8d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVkdWNhdGlvbmFsJTIwdG91cnMlMjB0byUyMGFsJTIwZG9zZXJpfGVufDB8fDB8fHww",
    title: "Horse and Camel Riding",
    subtitle:
      "Connect with Qatari heritage through traditional riding experiences across our beautiful reserve.",
    highlightIndex: 3,
  }
];

export default function AboutHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [aboutSlides.length]);

  const currentSlide = aboutSlides[currentIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slides */}
      {aboutSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-70" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            animation:
              index === currentIndex
                ? "zoomEffect 20s infinite alternate ease-in-out"
                : "none",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-10">
        <div className="w-full max-w-5xl text-center animate-fadeIn">
          {/* Title */}
          <h1 className="font-bold mb-5 sm:mb-6 leading-tight tracking-tight text-[clamp(1.8rem,6vw,3.8rem)]">
            {currentSlide.title.split(" ").map((word, index) => (
              <span
                key={index}
                className={
                  index === currentSlide.highlightIndex
                    ? "text-[#00627B]"
                    : "text-white"
                }
              >
                {word + " "}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 sm:mb-10 max-w-2xl text-[clamp(1rem,3.5vw,1.3rem)] leading-relaxed text-gray-200">
            {currentSlide.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10">
            <Link
              to="https://wa.me/yournumber"
              className="flex items-center justify-center gap-3 px-6 py-2 rounded-lg bg-[#00627B] text-white font-semibold shadow-lg transition-all hover:scale-105 hover:bg-[#004f63] w-full sm:w-auto"
            >
              <FaWhatsapp className="text-xl" />
              Book via WhatsApp
            </Link>

            <Link
              to="/activities"
              className="px-6 py-2 rounded-lg border-2 border-white text-white font-semibold transition-all hover:scale-105 hover:bg-white hover:text-black w-full sm:w-auto text-center"
            >
              Explore Activities →
            </Link>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3">
            {aboutSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-500 rounded-full ${
                  currentIndex === index
                    ? "bg-[#00627B] w-8 h-3"
                    : "bg-white/40 w-3 h-3 hover:bg-[#00627B]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes zoomEffect {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
