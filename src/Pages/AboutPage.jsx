import React from "react";
import AboutHero from "../Components/aboutPageComponents/HeroAbout";
import AboutHistory from "../components/aboutPageComponents/AboutHistory";
import MissionVision from "../components/aboutPageComponents/MissionVision";
import ValueSection from "../Components/aboutPageComponents/ValueSection";
import MapLocation from "../Components/aboutPageComponents/MapLocation";
import SectionTeam from "../Components/aboutPageComponents/SectionTeam";
import SectionPartnership from "../Components/aboutPageComponents/SectionPartnership";


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white overflow-hidden">
    
      <AboutHero />
      <AboutHistory />
      <MissionVision />
      <ValueSection />
      <MapLocation />
      <SectionTeam />
      <SectionPartnership />
    </div>
  );
}

export default AboutPage;