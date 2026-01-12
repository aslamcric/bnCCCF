import React from "react";
import HomeHeroSection from "../Section/HomeHeroSection";
import AboutSection from "../Section/AboutSection";
import ServiceSection from "../Section/ServiceSection";
import DonationSection from "../Section/DonationSection";
import ProjectSection from "../Section/ProjectSection";
import TeamSection from "../Section/TeamSection";
import TestimonialSection from "../Section/TestimonialSection";
import CounterSection from "../Section/CounterSection";
import FaqSection from "../Section/FaqSection";
import NewsSection from "../Section/NewsSection";
import ContactSection from "../Section/ContactSection";

export default function Home() {
  return (
    <div>
      {/* All section include  */}
      <HomeHeroSection />
      <AboutSection />
      <ServiceSection />
      <DonationSection />
      <ProjectSection />
      <TeamSection />
      <TestimonialSection />
      <CounterSection />
      <FaqSection />
      <NewsSection />
      <ContactSection />
    </div>
  );
}
