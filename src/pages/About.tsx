
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gbsky-600 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-2">About GB Hotels</h1>
            <p className="text-gbsky-100">Your gateway to authentic accommodations in Gilgit-Baltistan</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gbearth-800 mb-4">Our Mission</h2>
              <p className="text-gbearth-600 mb-4">
                GB Hotels was founded with a simple yet powerful mission: to provide affordable, 
                localized booking services for travelers exploring the breathtaking region of Gilgit-Baltistan. 
                We aim to bridge the gap between tourists seeking authentic experiences and local hotel owners 
                looking to showcase their hospitality.
              </p>
              <p className="text-gbearth-600">
                Unlike international booking platforms, we leverage our local expertise to offer competitive 
                pricing and real insights into each accommodation. Our deep understanding of the region allows 
                us to provide genuine recommendations tailored to each traveler's needs.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gbearth-800 mb-4">Our Story</h2>
              <p className="text-gbearth-600 mb-4">
                Founded in 2023 by a group of passionate locals, GB Hotels began as a response to the 
                growing tourism in Gilgit-Baltistan and the lack of locally-operated booking platforms. 
                We noticed that international booking sites often missed the essence of local accommodations 
                and charged excessive fees to both travelers and hotel owners.
              </p>
              <p className="text-gbearth-600">
                What started as a small initiative has grown into a trusted platform connecting tourists 
                with authentic stays across the region. Today, we proudly partner with over 100 hotels, 
                guesthouses, and homestays, from luxury resorts in Hunza to cozy retreats in remote valleys.
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gbearth-800 mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gbearth-800 mb-4">Our Team</h2>
              <p className="text-gbearth-600 mb-4">
                Our dedicated team consists of locals who deeply understand and appreciate the 
                beauty and culture of Gilgit-Baltistan. From experienced hospitality professionals 
                to tech enthusiasts, we combine diverse skills with a shared passion for promoting 
                our region.
              </p>
              <p className="text-gbearth-600">
                Each team member personally visits and verifies our partner accommodations, 
                ensuring that we only recommend places we would stay ourselves.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-gbearth-800 mb-4">Join Our Journey</h2>
              <p className="text-gbearth-600 mb-4">
                Whether you're a traveler seeking authentic experiences in Gilgit-Baltistan or a 
                property owner looking to showcase your accommodation, we invite you to join our 
                growing community.
              </p>
              <p className="text-gbearth-600 mb-6">
                Together, we can promote sustainable tourism that benefits both visitors and locals, 
                preserving the natural beauty and cultural heritage of this extraordinary region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-gbsky-500 hover:bg-gbsky-600 text-white font-medium py-2 px-4 rounded shadow text-center transition-colors">
                  Contact Us
                </a>
                <a href="/hotels" className="bg-gbearth-500 hover:bg-gbearth-600 text-white font-medium py-2 px-4 rounded shadow text-center transition-colors">
                  Explore Hotels
                </a>
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
