import React from "react";
import AboutUsHeroSection from "../Section/AboutUsHeroSection";
import AboutSection from "../Section/AboutSection";
import TeamSection from "../Section/TeamSection";
import FaqSection from "../Section/FaqSection";
import TestimonialSection from "./../Section/TestimonialSection";

export default function AboutUs() {
  return (
    <div>
      <AboutUsHeroSection />
      <AboutSection />
      <TeamSection />
      <FaqSection />
      <TestimonialSection />
    </div>
  );
}
