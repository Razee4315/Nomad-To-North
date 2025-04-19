
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Wifi, BedDouble, Users, Filter, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { hotels } from '@/data/hotels';

const Hotels = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  
  // Get unique locations for filter
  const locations = Array.from(new Set(hotels.map(hotel => hotel.location)));
  
  // Get unique amenities for filter
  const amenities = Array.from(
    new Set(hotels.flatMap(hotel => hotel.amenities))
  ).sort();
  
  const handleSearch = () => {
    let results = hotels;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        hotel => 
          hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by price range
    results = results.filter(
      hotel => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
    );
    
    // Filter by selected locations
    if (selectedLocations.length > 0) {
      results = results.filter(hotel => selectedLocations.includes(hotel.location));
    }
    
    // Filter by selected amenities
    if (selectedAmenities.length > 0) {
      results = results.filter(hotel => 
        selectedAmenities.every(amenity => hotel.amenities.includes(amenity))
      );
    }
    
    setFilteredHotels(results);
  };
  
  // Toggle location selection
  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(loc => loc !== location) 
        : [...prev, location]
    );
  };
  
  // Toggle amenity selection
  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(am => am !== amenity) 
        : [...prev, amenity]
    );
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setPriceRange([0, 20000]);
    setSelectedLocations([]);
    setSelectedAmenities([]);
    setFilteredHotels(hotels);
  };
  
  // Apply filters
  React.useEffect(() => {
    handleSearch();
  }, [searchTerm, priceRange, selectedLocations, selectedAmenities]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gbsky-600 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-2">Find Your Perfect Stay in Gilgit-Baltistan</h1>
            <p className="text-gbsky-100">Browse our collection of authentic accommodations across the region</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gbearth-800">Filters</h2>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-gbsky-600 hover:text-gbsky-800"
                >
                  Reset All
                </button>
              </div>
              
              {/* Search Input */}
              <div className="mb-6">
                <label className="block text-gbearth-700 font-medium mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Hotel name or location"
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <label className="block text-gbearth-700 font-medium mb-2">Price Range (PKR)</label>
                <div className="flex items-center justify-between mb-2">
                  <span>PKR {priceRange[0].toLocaleString()}</span>
                  <span>PKR {priceRange[1].toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20000"
                  step="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gbsky-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="text-gbearth-700 font-medium mb-2">Location</h3>
                <div className="space-y-2">
                  {locations.map(location => (
                    <label key={location} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(location)}
                        onChange={() => toggleLocation(location)}
                        className="mr-2 h-4 w-4 text-gbsky-600 focus:ring-gbsky-500 border-gray-300 rounded"
                      />
                      <span className="text-gbearth-600">{location}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Amenities Filter */}
              <div className="mb-6">
                <h3 className="text-gbearth-700 font-medium mb-2">Amenities</h3>
                <div className="space-y-2">
                  {amenities.slice(0, 6).map(amenity => (
                    <label key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => toggleAmenity(amenity)}
                        className="mr-2 h-4 w-4 text-gbsky-600 focus:ring-gbsky-500 border-gray-300 rounded"
                      />
                      <span className="text-gbearth-600">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Hotel Listings */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gbearth-800">
                  {filteredHotels.length} {filteredHotels.length === 1 ? 'Hotel' : 'Hotels'} Available
                </h2>
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-gbearth-600 mr-2" />
                  <select className="border border-gray-300 rounded-md p-2 text-gbearth-700 focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-6">
                {filteredHotels.length > 0 ? (
                  filteredHotels.map(hotel => (
                    <div key={hotel.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img 
                          src={hotel.image} 
                          alt={hotel.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-gbearth-800 mb-1">{hotel.name}</h3>
                            <div className="flex items-center mb-3">
                              <MapPin className="h-4 w-4 text-gbearth-500 mr-1" />
                              <span className="text-gbearth-600 text-sm">{hotel.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center bg-gbearth-100 px-2 py-1 rounded">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{hotel.rating} ({hotel.reviews})</span>
                          </div>
                        </div>
                        
                        <p className="text-gbearth-600 mb-4 line-clamp-2">{hotel.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hotel.amenities.slice(0, 4).map((amenity, index) => (
                            <span key={index} className="inline-flex items-center bg-gbstone-200 px-2 py-1 rounded text-xs text-gbearth-700">
                              {amenity === 'Free WiFi' && <Wifi className="h-3 w-3 mr-1" />}
                              {amenity}
                            </span>
                          ))}
                          {hotel.amenities.length > 4 && (
                            <span className="inline-block bg-gbstone-200 px-2 py-1 rounded text-xs text-gbearth-700">
                              +{hotel.amenities.length - 4} more
                            </span>
                          )}
                        </div>
                        
                        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                          <div>
                            <span className="text-gbearth-800 font-bold text-xl">PKR {hotel.price.toLocaleString()}</span>
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
                  ))
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg shadow-md">
                    <div className="text-gbearth-500 mb-4">
                      <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gbearth-800 mb-2">No hotels found</h3>
                    <p className="text-gbearth-600 mb-4">
                      Try adjusting your search or filter criteria
                    </p>
                    <button 
                      onClick={resetFilters}
                      className="bg-gbsky-500 hover:bg-gbsky-600 text-white font-medium py-2 px-4 rounded shadow transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hotels;
