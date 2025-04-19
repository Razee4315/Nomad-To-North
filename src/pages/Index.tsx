import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import SearchBar from '@/components/SearchBar';
import FeaturedHotels from '@/components/FeaturedHotels';
import PopularDestinations from '@/components/PopularDestinations';
import Testimonials from '@/components/Testimonials';
import LocalExperiences from '@/components/LocalExperiences';
import Newsletter from '@/components/Newsletter';
import { hotels } from '@/data/hotels';

const Index = () => {
  React.useEffect(() => {
    // Expose hotel locations globally for SearchBar dropdown
    (window as any).hotelsList = Array.from(new Set(hotels.map(h => h.location)));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Search */}
        <section className="relative">
          <HeroSlider />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SearchBar />
          </div>
        </section>
        
        {/* Featured Hotels Section */}
        <FeaturedHotels />
        
        {/* Popular Destinations Section */}
        <PopularDestinations />
        
        {/* Local Experiences Section */}
        <LocalExperiences />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Newsletter Section */}
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
