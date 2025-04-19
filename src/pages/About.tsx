
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gbsky-600 text-white py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About GB Hotels</h1>
            <p className="text-xl text-center max-w-2xl mx-auto">Your gateway to authentic accommodations in the heart of Gilgit-Baltistan</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gbearth-800 mb-6">Our Mission</h2>
              <div className="prose prose-lg text-gbearth-600">
                GB Hotels was founded with a simple yet powerful mission: to provide affordable, 
                localized booking services for travelers exploring the breathtaking region of Gilgit-Baltistan. 
                We aim to bridge the gap between tourists seeking authentic experiences and local hotel owners 
                looking to showcase their hospitality.
              </div>
              <div className="prose prose-lg text-gbearth-600">
                Unlike international booking platforms, we leverage our local expertise to offer competitive 
                pricing and real insights into each accommodation. Our deep understanding of the region allows 
                us to provide genuine recommendations tailored to each traveler's needs.
              </div>
            </section>
            
            <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gbearth-800 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gbearth-600">
                Founded in 2023 by a group of passionate locals, GB Hotels began as a response to the 
                growing tourism in Gilgit-Baltistan and the lack of locally-operated booking platforms. 
                We noticed that international booking sites often missed the essence of local accommodations 
                and charged excessive fees to both travelers and hotel owners.
              </div>
              <div className="prose prose-lg text-gbearth-600">
                What started as a small initiative has grown into a trusted platform connecting tourists 
                with authentic stays across the region. Today, we proudly partner with over 100 hotels, 
                guesthouses, and homestays, from luxury resorts in Hunza to cozy retreats in remote valleys.
              </div>
            </section>
            
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gbearth-800 mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gbearth-800 mb-2">Authenticity</h3>
                  <p className="text-gbearth-600">
                    We showcase accommodations that offer genuine local experiences, 
                    from traditional architecture to homestyle cuisine.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gbearth-800 mb-2">Community Support</h3>
                  <p className="text-gbearth-600">
                    We prioritize partnerships that benefit local communities and 
                    promote sustainable tourism practices.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gbearth-800 mb-2">Transparency</h3>
                  <p className="text-gbearth-600">
                    We provide honest reviews and clear pricing information, 
                    with no hidden fees or misleading descriptions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gbearth-800 mb-2">Accessibility</h3>
                  <p className="text-gbearth-600">
                    We strive to make our platform easy to use for all travelers, 
                    with multilingual support and straightforward booking processes.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gbearth-800 mb-6">Our Team</h2>
              <div className="prose prose-lg text-gbearth-600">
                Our dedicated team consists of locals who deeply understand and appreciate the 
                beauty and culture of Gilgit-Baltistan. From experienced hospitality professionals 
                to tech enthusiasts, we combine diverse skills with a shared passion for promoting 
                our region.
              </div>
              <div className="prose prose-lg text-gbearth-600">
                Each team member personally visits and verifies our partner accommodations, 
                ensuring that we only recommend places we would stay ourselves.
              </div>
            </section>
            
            <section className="bg-gbearth-50 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-gbearth-800 mb-6">Join Our Journey</h2>
              <div className="prose prose-lg text-gbearth-600 mx-auto mb-8">
                Whether you're a traveler seeking authentic experiences in Gilgit-Baltistan or a 
                property owner looking to showcase your accommodation, we invite you to join our 
                growing community.
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gbsky-500 hover:bg-gbsky-600 text-white font-medium py-3 px-6 rounded-lg shadow transition-colors">
                  Contact Us
                </Link>
                <Link to="/hotels" className="bg-gbearth-500 hover:bg-gbearth-600 text-white font-medium py-3 px-6 rounded-lg shadow transition-colors">
                  Explore Hotels
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
