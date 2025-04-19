
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gbsky-600">GB</span>
              <span className="ml-1 text-2xl font-bold text-gbearth-600">Hotels</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/hotels" className="text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-sm font-medium transition-colors">
              Hotels
            </Link>
            <Link to="/about" className="text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link to="/login" className="text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-sm font-medium transition-colors">
              Login
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gbearth-600 hover:text-gbsky-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-base font-medium transition-colors">
              Home
            </Link>
            <Link to="/hotels" className="block text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-base font-medium transition-colors">
              Hotels
            </Link>
            <Link to="/about" className="block text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-base font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="block text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-base font-medium transition-colors">
              Contact
            </Link>
            <Link to="/login" className="block text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-base font-medium transition-colors">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
