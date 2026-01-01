import React from "react";
import AboutHero from "../components/aboutPageComponents/AboutHero";
import AboutHistory from "../components/aboutPageComponents/AboutHistory";
import MissionVision from "../components/aboutPageComponents/MissionVision";
import ValuesSection from "../components/aboutPageComponents/ValuesSection";
import LocationMap from "../components/aboutPageComponents/LocationMap";
import TeamSection from "../components/aboutPageComponents/TeamSection";
import PartnershipSection from "../components/aboutPageComponents/PartnershipSection";

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
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
