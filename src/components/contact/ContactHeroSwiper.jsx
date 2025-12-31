import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Explore Al Dosari Reserve",
    subtitle: "An unforgettable eco-tourism experience surrounded by nature",
    cta: "Contact Us",
    image: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Discover Wildlife & Nature",
    subtitle: "Guided tours, family visits, and educational programs",
    cta: "Get in Touch",
    image: "https://images.pexels.com/photos/287446/pexels-photo-287446.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Plan Your Visit Today",
    subtitle: "We’re here to help you plan a meaningful experience",
    cta: "Chat with Us",
    image: "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const ContactHeroSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section 
      className="relative w-full h-screen overflow-hidden bg-[#00627B]" 
      /* h-screen ensures it is exactly 100% of the visible window */
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative h-full w-full">
              {/* Background image - absolute inset ensures no overflow */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Soft eco overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00627B]/80 via-[#00627B]/40 to-transparent" />

              {/* Content - flex center keeps text within bounds */}
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-6xl px-6">
                  <motion.div
                    key={activeIndex === index ? index : 'hidden'}
                    initial={{ opacity: 0, x: -30 }}
                    animate={activeIndex === index ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                  >
                    <h1 className="mb-4 text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>

                    <p className="mb-8 max-w-xl text-lg text-white/90 sm:text-xl">
                      {slide.subtitle}
                    </p>

                    <a href="#contact-form">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#00627B] px-8 py-4 font-bold text-white shadow-2xl"
                      >
                        {slide.cta}
                        <ArrowRight className="h-5 w-5" />
                      </motion.button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination (Bottom Dots) */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`transition-all duration-300 ${
                activeIndex === index
                  ? "h-2 w-10 rounded-full bg-white"
                  : "h-2 w-2 rounded-full bg-[#00627B]/40 hover:bg-[#00627B]/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSwiper;