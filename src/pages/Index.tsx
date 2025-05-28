
import React from 'react';
import HeroSection from '../components/HeroSection';
import LocationsBar from '../components/LocationsBar';
import MenuSlider from '../components/MenuSlider';
import FoodGallery from '../components/FoodGallery';
import FamilyStory from '../components/FamilyStory';
import Testimonials from '../components/Testimonials';
import LocationCards from '../components/LocationCards';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <LocationsBar />
      <HeroSection />
      <MenuSlider />
      <FoodGallery />
      <FamilyStory />
      <Testimonials />
      <LocationCards />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
