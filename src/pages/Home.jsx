import React from 'react'
import HeroSection from '../Section/homeSection/HeroSection'
import AboutSection from '../Section/homeSection/AboutSection'
import ServiceSection from '../Section/homeSection/ServiceSection'
import DonationSection from '../Section/homeSection/DonationSection'
import ProjectSection from '../Section/homeSection/ProjectSection'
import TeamSection from '../Section/homeSection/TeamSection'
import TestimonialSection from '../Section/homeSection/TestimonialSection'
import CounterSection from '../Section/homeSection/CounterSection'
import FaqSection from '../Section/homeSection/FaqSection'
import NewsSection from '../Section/homeSection/NewsSection'
import ContactSection from '../Section/homeSection/ContactSection'

export default function Home() {
    return (
        <div>
            {/* All section include  */}
            <HeroSection />
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
    )
}
