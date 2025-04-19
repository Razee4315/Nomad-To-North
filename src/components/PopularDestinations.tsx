
import React from 'react';
import { Link } from 'react-router-dom';

interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  hotelCount: number;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Hunza Valley',
    description: 'Famous for its stunning landscapes and cultural heritage',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    hotelCount: 24
  },
  {
    id: 2,
    name: 'Skardu',
    description: 'Gateway to the mighty Karakoram mountain range',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    hotelCount: 18
  },
  {
    id: 3,
    name: 'Gilgit City',
    description: 'The capital and commercial hub of Gilgit-Baltistan',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
    hotelCount: 32
  },
  {
    id: 4,
    name: 'Naltar Valley',
    description: 'Known for its colorful lakes and ski resort',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    hotelCount: 8
  }
];

const PopularDestinations: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gbearth-800 mb-4">Popular Destinations</h2>
          <p className="text-gbearth-600 max-w-3xl mx-auto">
            Explore these incredible destinations in Gilgit-Baltistan and find the perfect accommodation for your adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map(destination => (
            <Link to={`/destination/${destination.id}`} key={destination.id} className="group">
              <div className="relative rounded-lg overflow-hidden h-64 shadow-md">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm text-gray-300 mb-2">{destination.description}</p>
                    <span className="text-sm bg-gbsky-500 px-2 py-1 rounded">
                      {destination.hotelCount} Hotels
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
