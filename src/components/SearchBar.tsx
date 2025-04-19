
import React, { useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would redirect to search results
    console.log('Search params:', { destination, checkIn, checkOut, guests });
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label htmlFor="destination" className="text-sm font-medium text-gray-700 mb-1">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gbearth-500" />
              <input
                id="destination"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where are you going?"
                className="pl-10 py-2 px-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gbsky-500 focus:border-gbsky-500"
              />
            </div>
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="checkIn" className="text-sm font-medium text-gray-700 mb-1">Check-in</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gbearth-500" />
              <input
                id="checkIn"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="pl-10 py-2 px-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gbsky-500 focus:border-gbsky-500"
              />
            </div>
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="checkOut" className="text-sm font-medium text-gray-700 mb-1">Check-out</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gbearth-500" />
              <input
                id="checkOut"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="pl-10 py-2 px-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gbsky-500 focus:border-gbsky-500"
              />
            </div>
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="guests" className="text-sm font-medium text-gray-700 mb-1">Guests</label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-gbearth-500" />
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="pl-10 py-2 px-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gbsky-500 focus:border-gbsky-500 appearance-none"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-gbsky-500 hover:bg-gbsky-600 text-white font-medium py-3 px-6 rounded-md shadow transition-colors"
          >
            Search Hotels
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
