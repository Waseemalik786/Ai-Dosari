import React from "react";
import GenericHero from "../common/GenericHero";

const contactSlides = [
  { id: 1, image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", title: "Discover Wildlife & Nature", subtitle: "Guided tours, family visits, and educational programs.", highlightIndex: 1 },
  { id: 2, image: "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f", title: "Plan Your Visit Today", subtitle: "We’re here to help you plan a meaningful experience.", highlightIndex: 0 },
  { id: 3, image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716", title: "Explore Al Dosari Reserve", subtitle: "An unforgettable eco-tourism experience surrounded by nature.", highlightIndex: 2 },
];

export default function ContactHero() {
  return <GenericHero slides={contactSlides} primaryBtnText="Get in Touch" secondaryBtnText="Find Location →" />;
}