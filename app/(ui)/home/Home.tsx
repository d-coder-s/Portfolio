"use client";

import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import TechCarousel from "@/components/Home/TechCarousel";
import Chooseus from "@/components/Home/Chooseus";
import Developmentprocess from "@/components/Home/Developmentprocess";
import PortfolioSection from "@/components/Home/PortfolioSection";
import TornEdge from "@/components/ui/TornEdge";

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero — cream dotted bg */}
      <HeroSection />

      <TornEdge from="dc-cream" to="dc-cream2" />

      {/* Why us — cream2 bg */}
      <Chooseus />

      <TornEdge from="dc-cream2" to="dc-ink" />

      {/* Projects — dark ink bg */}
      <PortfolioSection />

      <TornEdge from="dc-ink" to="dc-cream" flip />

      {/* Tech stack — cream bg */}
      <TechCarousel />

      <TornEdge from="dc-cream" to="dc-cream2" />

      {/* Process — cream2 bg */}
      <Developmentprocess />

      <TornEdge from="dc-cream2" to="dc-cream" />
    </div>
  );
};

export default Home;
