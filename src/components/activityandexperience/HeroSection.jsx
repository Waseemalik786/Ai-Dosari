import React from "react";
import GenericHero from "../common/GenericHero";
import { useTranslation } from "react-i18next";

const slideImages = {
  1: "https://images.pexels.com/photos/1109900/pexels-photo-1109900.jpeg",
  2: "https://images.pexels.com/photos/1478023/pexels-photo-1478023.jpeg",
  3: "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--98f95e3c-a5bc-4ef1-b37c-bf141ed9a06f/al-dosari-zoo-and-game-reserve-11.jpg?width=2048&preferwebp=true&quality=75",
};

export default function ActivitiesHero() {
  const { t } = useTranslation("activitiesHero");
  const translatedSlides = t("slides", { returnObjects: true });

  const activitySlides = translatedSlides.map((slide) => ({
    ...slide,
    image: slideImages[slide.id],
  }));

  return (
    <GenericHero 
      slides={activitySlides} 
      primaryBtnText={t("primaryBtnText")} 
      secondaryBtnText={t("secondaryBtnText")} 
    />
  );
}