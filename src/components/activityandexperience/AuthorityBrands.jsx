import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const partnerImages = {
  1: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg",
  2: "https://media.istockphoto.com/id/181858730/photo/children-at-zoo-feeding-giraffe.jpg?s=612x612&w=0&k=20&c=kYR2HqBEkvSYWZHycKwyntz2SLdvvS5tTmBDypASf28=",
  3: "https://images.pexels.com/photos/18366058/pexels-photo-18366058.jpeg",
  4: "https://media.istockphoto.com/id/1314689001/photo/a-day-in-petting-zoo.jpg?s=612x612&w=0&k=20&c=4jb5Zx7jQxaCGunYnbmHK8bfHw6YzipqpIlwZeVFoFY=",
  5: "https://media.istockphoto.com/id/2099739580/photo/portrait-of-a-young-man-hiking-with-friends-on-forest.jpg?s=612x612&w=0&k=20&c=EPQMzSdy6Px0j2d4AsSlValufZeBGCFSi1eWkprFoWA=",
  6: "https://media.istockphoto.com/id/2231798782/photo/an-asian-mother-and-her-young-daughter-are-feeding-a-giraffe-at-a-zoo-a-mother-and-daughter.jpg?s=612x612&w=0&k=20&c=2XcASL3vuphJteM4WM2WxxcOpEBx7inbaDnqmRFzNgc=",
};

const AuthorityPartners = () => {
  const { t } = useTranslation("authorityBrands");
  const translatedPartners = t("partners", { returnObjects: true });

  const partners = translatedPartners.map((partner) => ({
    ...partner,
    src: partnerImages[partner.id],
  }));

  const swiperConfig = {
    modules: [Autoplay, FreeMode],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 2000,
    loop: true,
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 20,
    breakpoints: {
      0: { spaceBetween: 5 },
      640: { spaceBetween: 20 },
      1024: { spaceBetween: 40 },
    },
    className: "partners-swiper",
  };

  return (
    <div className="bg-green-50 py-4 px-4 rounded-2xl">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-gray-900 mb-8">
          {t("heading.main")} <span className="text-[#00627B]">{t("heading.highlight")}</span>
        </h3>
      </div>

      <Swiper {...swiperConfig}>
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className="flex flex-col items-center justify-center px-4">
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-28 w-full object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-700 mt-2 font-medium">{partner.caption}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AuthorityPartners;
