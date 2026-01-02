import React from "react";
import GenericHero from "../common/GenericHero";
import { useTranslation } from "react-i18next";

export default function GalleryHero() {
  const { t, i18n } = useTranslation("galleryHero");

  // Map translation slides
  const slides = t("slides", { returnObjects: true });
  const buttons = t("buttons", { returnObjects: true });

  return (
    <GenericHero
      slides={slides}
      primaryBtnText={buttons.primary}
      secondaryBtnText={buttons.secondary}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    />
  );
}