"use client";

import React from "react";
import GenericHero from "../common/GenericHero";
import { useTranslation } from "react-i18next";

export default function HomeHeader() {
  const { t, i18n } = useTranslation("homeslider");

  // Force it to be an array. If t() returns a string or null, use []
  const slidesData = t("slides", { returnObjects: true });
  const slides = Array.isArray(slidesData) ? slidesData : [];

  const buttons = t("buttons", { returnObjects: true }) || {};

  return (
    <GenericHero
      slides={slides}
      primaryBtnText={buttons.primary || "Book via WhatsApp"}
      secondaryBtnText={buttons.secondary || "Explore Activities →"}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    />
  );
}