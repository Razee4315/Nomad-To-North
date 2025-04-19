
import React from 'react';
import { Star, MapPin, Wifi, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Eagle Nest Hotel',
    location: 'Hunza Valley',
    price: 8500,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    amenities: ['Free WiFi', '24/7 Service', 'Mountain View', 'Restaurant']
  },
  {
    id: 2,
    name: 'Serena Inn',
    location: 'Skardu',
    price: 12000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    amenities: ['Free WiFi', 'Spa', 'Room Service', 'Airport Shuttle']
  },
  {
    id: 3,
    name: 'Mountain Retreat',
    location: 'Naltar Valley',
    price: 6500,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    amenities: ['Mountain View', 'Hiking Trails', 'Local Cuisine', 'Cultural Tours']
  }
];

const FeaturedHotels: React.FC = () => {
  return (
    <section className="py-16 bg-gbstone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gbearth-800 mb-4">Featured Hotels</h2>
          <p className="text-gbearth-600 max-w-3xl mx-auto">
            Discover our handpicked selection of the finest accommodations in Gilgit-Baltistan,
            offering authentic experiences with breathtaking views.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map(hotel => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gbearth-800">{hotel.name}</h3>
                  <div className="flex items-center bg-gbearth-100 px-2 py-1 rounded">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{hotel.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <MapPin className="h-4 w-4 text-gbearth-500 mr-1" />
                  <span className="text-gbearth-600 text-sm">{hotel.location}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.slice(0, 3).map((amenity, index) => (
                    <span key={index} className="inline-flex items-center bg-gbstone-200 px-2 py-1 rounded text-xs text-gbearth-700">
                      {amenity === 'Free WiFi' && <Wifi className="h-3 w-3 mr-1" />}
                      {amenity === '24/7 Service' && <Clock className="h-3 w-3 mr-1" />}
                      {amenity}
                    </span>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <span className="inline-block bg-gbstone-200 px-2 py-1 rounded text-xs text-gbearth-700">
                      +{hotel.amenities.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-gbearth-800 font-bold text-lg">PKR {hotel.price}</span>
                    <span className="text-gbearth-600 text-sm"> / night</span>
                  </div>
                  <Link
                    to={`/hotel/${hotel.id}`}
                    className="bg-gbsky-500 hover:bg-gbsky-600 text-white font-medium py-2 px-4 rounded shadow transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/hotels"
            className="inline-block bg-gbmountain-500 hover:bg-gbmountain-600 text-white font-medium py-3 px-6 rounded shadow transition-colors"
          >
            View All Hotels
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
