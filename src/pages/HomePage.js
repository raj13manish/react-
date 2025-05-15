import React from 'react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import MissionVisionSection from '../components/MissionVision/MissionVisionSection';
import AwardsSection from '../components/Awards/AwardsSection';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import NewsSection from '../components/News/NewsSection';
import NewsletterSection from '../components/Newsletter/NewsletterSection';

const HomePage = () => {
  return (
    <PageTransition>
      <HeroSection />
      <ServicesSection />
      <MissionVisionSection />
      <AwardsSection />
      <TestimonialsSection />
      <NewsSection />
      <NewsletterSection />
    </PageTransition>
  );
};

export default HomePage;
