import React from "react";
import GenericHero from "../common/GenericHero";



const gallerySlides = [
  { id: 1, image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308", title: "Capture the Moment", subtitle: "See the beauty of Al Dosari Reserve through our lens", highlightIndex: 1 },
  { id: 2, image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a", title: "School Trips & Fun", subtitle: "Educational adventures that last a lifetime", highlightIndex: 0 },
  { id: 3, image: "https://plus.unsplash.com/premium_photo-1695717076798-404f76f121da", title: "Cultural Heritage", subtitle: "Traditional experiences in the heart of nature", highlightIndex: 0 },
];

export default function GalleryHero() {
  return <GenericHero slides={gallerySlides} primaryBtnText="WhatsApp Gallery" secondaryBtnText="View All Albums →" />;
}