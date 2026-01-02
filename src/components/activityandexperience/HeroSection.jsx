import React from "react";
import GenericHero from "../common/GenericHero";

const activitySlides = [
  { 
    id: 1, 
    image: "https://images.pexels.com/photos/1109900/pexels-photo-1109900.jpeg", 
    title: "Wildlife Viewing", 
    subtitle: "Enjoy a unique opportunity to observe wildlife in its natural habitat and see various species up close.", 
    highlightIndex: 0 
  },
  { 
    id: 2, 
    image: "https://images.pexels.com/photos/1478023/pexels-photo-1478023.jpeg", 
    title: "Safari Tours", 
    subtitle: "Experience the thrill of a Safari tour across vast landscapes with opportunities to spot exotic wildlife.", 
    highlightIndex: 1 
  },
  { 
    id: 3, 
    image: "https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--98f95e3c-a5bc-4ef1-b37c-bf141ed9a06f/al-dosari-zoo-and-game-reserve-11.jpg?width=2048&preferwebp=true&quality=75", 
    title: "Horse & Camel Riding", 
    subtitle: "Explore the desert landscape on horseback or camelback for a peaceful way to experience the beauty of the reserve.", 
    highlightIndex: 2 
  },
];

export default function ActivitiesHero() {
  return (
    <GenericHero 
      slides={activitySlides} 
      primaryBtnText="Book Activity" 
      secondaryBtnText="Explore More →" 
    />
  );
}