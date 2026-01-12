import React from "react";
import ContactUsHeroSection from "../Section/ContactUsHeroSection";
import ContactSection from "../Section/ContactSection";
import ContactFormSection from "../Section/ContactFormSection";

export default function ContactUs() {
  return (
    <div>
      <ContactUsHeroSection />
      {/* <ContactSection /> */}
      <ContactFormSection />
    </div>
  );
}
