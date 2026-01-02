import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = () => {
  const slides = [
    {
      id: 1,
      title: " Wildlife Viewing",
      image: "https://images.pexels.com/photos/1109900/pexels-photo-1109900.jpeg", 
      description:
        "Enjoy a unique opportunity to observe wildlife in its natural habitat. Our wildlife viewing tours provide the chance to see various species up close, including endangered animals.",
      suitableAgeGroup: "All ages",
      ctaMessage: "Book this activity! I'm interested in Wildlife Viewing at Al Dosari Reserve.",
      link: "/", 
      whiteWords: ["Viewing", "Wildlife"],
    },
    {
      id: 2,
      title: "Safari Tours",
      image: "https://images.pexels.com/photos/1478023/pexels-photo-1478023.jpeg", 
      description:
        "Experience the thrill of a Safari tour across vast landscapes. Our guided tours offer an adventure like no other, with opportunities to spot exotic wildlife and scenic views.",
      suitableAgeGroup: "12+",
      ctaMessage: "Book this activity! I'm interested in Safari Tours at Al Dosari Reserve.",
      link: "/", 
      whiteWords: ["Safari", "Tours"],
    },
    {
      id: 3,
      title: "Horse & Camel Riding",
      image: "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--98f95e3c-a5bc-4ef1-b37c-bf141ed9a06f/al-dosari-zoo-and-game-reserve-11.jpg?width=2048&preferwebp=true&quality=75", 
      description:
        "Explore the desert landscape on horseback or camelback. This activity offers a peaceful and unique way to experience the beauty of the reserve while riding through the open terrain.",
      suitableAgeGroup: "All ages (Children with adult supervision)",
      ctaMessage: "Book this activity! I'm interested in Horse & Camel Riding at Al Dosari Reserve.",
      link: "/", 
      whiteWords: ["Horse", "Camel"],
    },
    {
      id: 4,
      title: "Educational Programs",
      image: "https://images.pexels.com/photos/2086655/pexels-photo-2086655.jpeg", 
      description:
        "Our educational programs aim to inspire and educate visitors about the environment, wildlife conservation, and sustainability. Ideal for school groups and families interested in learning more.",
      suitableAgeGroup: "All ages (especially suitable for children)",
      ctaMessage: "Book this activity! I'm interested in Educational Programs at Al Dosari Reserve.",
      link: "https://wa.me/1234567890?text=Book%20this%20activity!%20I'm%20interested%20in%20Educational%20Programs%20at%20Al%20Dosari%20Reserve.", 
      whiteWords: ["Educational", "Programs"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 100 });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative h-screen lg:h-[100vh] overflow-hidden bg-[#1a1a1a]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-40" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="absolute inset-0 bg-[#00627B]/10" /> {/* Increased opacity for contrast */}

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-5 md:px-6 lg:px-8">
        <div className="max-w-3xl animate-fadeIn">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000"
            data-aos="zoom-in"
            key={currentSlide.id}
          >
            {currentSlide.title.split(" ").map((word, i) => {
              const isWhite = currentSlide.whiteWords && currentSlide.whiteWords.includes(word);
              return (
                <span
                  key={i}
                  className={isWhite ? "text-white" : "text-[#00627B]"}
                >
                  {word + " "}
                </span>
              );
            })}
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-300 mb-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {currentSlide.subtitle}
          </p>

          <p
            className="text-md md:text-lg text-gray-200 leading-relaxed mb-8"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {currentSlide.description}
          </p>

          <Link to={currentSlide.link}>
            <button className="relative px-5 py-2 font-semibold text-white rounded-lg bg-[#00627B] cursor-pointer shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:bg-[#004f67]">
              <span className="absolute inset-0 bg-[#00627B]/50 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
              <span className="relative z-10">Explore Now</span>
            </button>
          </Link>
        </div>

        <div className="flex space-x-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 cursor-pointer rounded-full ${
                currentIndex === index
                  ? "bg-[#00627B] w-8 h-3 shadow-lg"
                  : "bg-white/30 w-3 h-3 hover:bg-[#00627B]"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
      `}</style>
    </section>
  );
};

export default Home;
