import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Nomad To North Logo" className="h-16 w-auto md:h-20 lg:h-24" />
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-100">
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/hotels" className="text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-100">
                    Hotels
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className="text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-100">
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className="text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-100">
                    Contact
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/login" className="bg-gbsky-600 text-white hover:bg-gbsky-700 px-4 py-2 text-sm font-medium transition-colors rounded-md shadow-md">
                    Login
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gbearth-600 hover:text-gbsky-600 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
            <Link to="/" className="block text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-base font-medium transition-colors hover:bg-gray-100 rounded-md">
              Home
            </Link>
            <Link to="/hotels" className="block text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-base font-medium transition-colors hover:bg-gray-100 rounded-md">
              Hotels
            </Link>
            <Link to="/about" className="block text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-base font-medium transition-colors hover:bg-gray-100 rounded-md">
              About
            </Link>
            <Link to="/contact" className="block text-gbearth-800 hover:text-gbsky-600 px-3 py-2 text-base font-medium transition-colors hover:bg-gray-100 rounded-md">
              Contact
            </Link>
            <Link to="/login" className="block bg-gbsky-600 text-white hover:bg-gbsky-700 px-3 py-2 text-base font-medium transition-colors rounded-md text-center shadow-md">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
