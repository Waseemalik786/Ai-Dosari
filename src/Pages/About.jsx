import React from "react";
import AboutHero from "../components/aboutPageComponents/AboutHero.jsx";
import AboutHistory from "../components/aboutPageComponents/AboutHistory.jsx";
import MissionVision from "../components/aboutPageComponents/MissionVision.jsx";
import ValuesSection from "../components/aboutPageComponents/ValuesSection.jsx";
import LocationMap from "../components/aboutPageComponents/LocationMap.jsx";
import TeamSection from "../components/aboutPageComponents/TeamSection.jsx";
import PartnershipSection from "../components/aboutPageComponents/PartnershipSection.jsx";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white overflow-hidden">
      <AboutHero />
      <AboutHistory />
      <MissionVision />
      <ValuesSection />
      <LocationMap />
      <TeamSection />
      <PartnershipSection />
    </div>
  );
}
