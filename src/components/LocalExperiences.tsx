
import React from 'react';

interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Cultural Immersion',
    description: 'Experience authentic local hospitality and traditions with our community-based accommodations.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb'
  },
  {
    id: 2,
    title: 'Outdoor Adventures',
    description: 'Stay close to hiking trails, lakes, and mountains perfect for trekking and outdoor activities.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
  },
  {
    id: 3,
    title: 'Local Cuisine',
    description: 'Enjoy traditional dishes made from local ingredients at our partner hotels and restaurants.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027'
  }
];

const LocalExperiences: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gbearth-800 mb-4">Experience Local Treasures</h2>
          <p className="text-gbearth-600 max-w-3xl mx-auto">
            Our hotels offer more than just a place to stay. Immerse yourself in authentic experiences unique to Gilgit-Baltistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map(experience => (
            <div key={experience.id} className="group">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] mb-4">
                <img 
                  src={experience.image} 
                  alt={experience.title} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-gbearth-800 mb-2">{experience.title}</h3>
              <p className="text-gbearth-600">{experience.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-gbearth-600 hover:bg-gbearth-700 text-white font-medium py-3 px-6 rounded shadow transition-colors">
            Explore All Experiences
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocalExperiences;
