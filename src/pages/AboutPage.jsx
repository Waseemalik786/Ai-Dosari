import React from "react";
import AboutHero from "../components/aboutPageComponents/HeroAbout";
import AboutHistory from "../components/aboutPageComponents/AboutHistory";
import MissionVision from "../components/aboutPageComponents/MissionVision";
import ValueSection from "../components/aboutPageComponents/ValueSection";
import MapLocation from "../components/aboutPageComponents/MapLocation";
import SectionTeam from "../components/aboutPageComponents/SectionTeam";
import SectionPartnership from "../components/aboutPageComponents/SectionPartnership";


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