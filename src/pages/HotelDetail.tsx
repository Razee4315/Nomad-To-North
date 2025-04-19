import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Calendar, Users, Check, ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { hotels, Hotel } from '@/data/hotels';

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [showContactForm, setShowContactForm] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userNotes, setUserNotes] = useState('');
  const whatsappNumber = '923001234567'; // Replace with your WhatsApp number

  useEffect(() => {
    // Simulate API call with a timeout
    const timer = setTimeout(() => {
      const foundHotel = hotels.find(h => h.id === parseInt(id || '0'));
      setHotel(foundHotel || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    if ((window as any).searchParams) {
      const { checkIn: ci, checkOut: co, guests: g } = (window as any).searchParams;
      setCheckIn(ci || '');
      setCheckOut(co || '');
      setGuests(g || '2');
    }
  }, []);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut || !guests) {
      alert('Please enter your check-in date, check-out date, and number of guests to proceed.');
      return;
    }
    setShowContactForm(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose WhatsApp message
    const message = encodeURIComponent(
      `Booking Inquiry:\nHotel: ${hotel?.name}\nName: ${userName}\nPhone: ${userPhone}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\nQuestion: ${userNotes}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const goToNextImage = () => {
    if (hotel) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === hotel.gallery.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const goToPrevImage = () => {
    if (hotel) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? hotel.gallery.length - 1 : prevIndex - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-10 w-40 bg-gbstone-200 rounded mb-4"></div>
            <div className="h-6 w-64 bg-gbstone-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold text-gbearth-800 mb-4">Hotel Not Found</h1>
          <p className="text-gbearth-600 mb-8">The hotel you are looking for does not exist or has been removed.</p>
          <Link
            to="/hotels"
            className="bg-gbsky-500 hover:bg-gbsky-600 text-white font-medium py-2 px-4 rounded shadow transition-colors"
          >
            Browse All Hotels
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Back Button */}
        <div className="bg-gbsky-50 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/hotels" className="inline-flex items-center text-gbsky-600 hover:text-gbsky-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Hotels
            </Link>
          </div>
        </div>
        
        {/* Hotel Header */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gbearth-800 mb-2">{hotel.name}</h1>
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-gbearth-500 mr-1" />
                  <span className="text-gbearth-600">{hotel.location}</span>
                </div>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < Math.floor(hotel.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill={i < Math.floor(hotel.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="text-gbearth-700 font-medium">{hotel.rating}</span>
                  <span className="mx-2 text-gbearth-400">•</span>
                  <span className="text-gbearth-600">{hotel.reviews} reviews</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="bg-gbearth-50 p-3 rounded-lg">
                  <div className="text-gbearth-600 text-sm">Price per night</div>
                  <div className="text-gbearth-800 font-bold text-2xl">PKR {hotel.price.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Gallery & Details */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Gallery */}
            <div className="lg:w-7/12">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img 
                  src={hotel.gallery[currentImageIndex]} 
                  alt={`${hotel.name} photo ${currentImageIndex + 1}`} 
                  className="w-full h-[400px] object-cover"
                />
                <button 
                  onClick={goToPrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                >
                  <ArrowLeft className="h-5 w-5 text-gbearth-800" />
                </button>
                <button 
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                >
                  <ArrowRight className="h-5 w-5 text-gbearth-800" />
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {hotel.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 mt-2">
                {hotel.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-20 overflow-hidden rounded ${index === currentImageIndex ? 'ring-2 ring-gbsky-500' : ''}`}
                  >
                    <img 
                      src={image} 
                      alt={`${hotel.name} thumbnail ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* Hotel Description */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gbearth-800 mb-4">About {hotel.name}</h2>
                <p className="text-gbearth-600 mb-6">{hotel.description}</p>
                
                <h3 className="text-xl font-bold text-gbearth-800 mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-gbsky-500 mr-2" />
                      <span className="text-gbearth-600">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gbearth-800 mb-4">Special Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-gbsky-500 mr-2" />
                      <span className="text-gbearth-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="lg:w-5/12">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
                <h2 className="text-xl font-bold text-gbearth-800 mb-4">Book Your Stay</h2>
                <form onSubmit={handleBooking}>
                  <div className="mb-4">
                    <label htmlFor="checkIn" className="block text-gbearth-700 font-medium mb-2">Check-in Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gbearth-500" />
                      <input 
                        id="checkIn"
                        type="date"
                        required
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="pl-10 py-2 px-4 block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="checkOut" className="block text-gbearth-700 font-medium mb-2">Check-out Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gbearth-500" />
                      <input 
                        id="checkOut"
                        type="date"
                        required
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="pl-10 py-2 px-4 block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="guests" className="block text-gbearth-700 font-medium mb-2">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-5 w-5 text-gbearth-500" />
                      <select
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="pl-10 py-2 px-4 block w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 appearance-none"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Guests</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 pb-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-gbearth-600">PKR {hotel.price.toLocaleString()} x 1 night</span>
                      <span className="text-gbearth-800">PKR {hotel.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gbearth-600">Service fee</span>
                      <span className="text-gbearth-800">PKR {Math.round(hotel.price * 0.05).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
                      <span className="text-gbearth-800">Total</span>
                      <span className="text-gbearth-800">PKR {Math.round(hotel.price * 1.05).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="mt-4 w-full bg-gbsky-500 hover:bg-gbsky-600 text-white font-medium py-3 px-6 rounded-md shadow transition-colors"
                  >
                    Book Now
                  </button>
                </form>
                
                <div className="mt-4 text-center text-sm text-gbearth-500">
                  You won't be charged yet
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative border border-gbsky-100 animate-fade-in">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gbsky-600 text-3xl font-bold transition-colors" onClick={() => setShowContactForm(false)} aria-label='Close'>&times;</button>
            <h2 className="text-3xl font-bold mb-2 text-gbearth-800 text-center">Contact Us</h2>
            <p className="text-gbearth-600 mb-4 text-center">Please provide your details and we will contact you via WhatsApp.</p>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-gbearth-700 font-semibold mb-1">Your Name</label>
                <input type="text" required value={userName} onChange={e => setUserName(e.target.value)} placeholder="Enter your name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 transition" />
              </div>
              <div>
                <label className="block text-gbearth-700 font-semibold mb-1">Phone Number</label>
                <input type="tel" required value={userPhone} onChange={e => setUserPhone(e.target.value)} placeholder="e.g. 03001234567" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 transition" />
              </div>
              <div>
                <label className="block text-gbearth-700 font-semibold mb-1">Any Question?</label>
                <textarea value={userNotes} onChange={e => setUserNotes(e.target.value)} placeholder="Ask us anything about your stay..." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gbsky-500 focus:border-gbsky-500 transition" rows={3} />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-colors text-lg mt-2">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="currentColor"><path d="M16.003 3C9.373 3 3.998 8.373 3.998 15c0 2.653.867 5.108 2.363 7.134L3 29l7.09-3.313C12.99 26.57 14.464 27 16.003 27c6.627 0 12.002-5.373 12.002-12S22.63 3 16.003 3zm0 21.818c-1.357 0-2.694-.36-3.854-1.04l-.275-.164-4.205 1.963.896-4.363-.178-.283C7.1 18.13 6.336 16.6 6.336 15c0-5.325 4.34-9.664 9.667-9.664 5.324 0 9.662 4.339 9.662 9.664 0 5.326-4.338 9.665-9.662 9.665zm5.293-7.07c-.29-.144-1.713-.847-1.978-.943-.266-.096-.46-.144-.655.145-.195.29-.75.943-.92 1.138-.17.195-.34.219-.63.073-.29-.145-1.225-.451-2.334-1.44-.862-.768-1.444-1.715-1.615-2.004-.17-.29-.018-.446.127-.59.13-.13.29-.34.434-.51.145-.17.193-.29.29-.485.096-.195.048-.365-.024-.51-.073-.144-.655-1.588-.9-2.174-.237-.57-.478-.493-.655-.503-.17-.01-.365-.012-.56-.012-.194 0-.51.073-.778.365-.267.29-1.02 1-1.02 2.438 0 1.438 1.045 2.824 1.19 3.02.144.194 2.06 3.145 5.01 4.287.701.24 1.248.384 1.675.492.703.179 1.345.154 1.85.093.564-.067 1.713-.7 1.956-1.374.242-.674.242-1.253.17-1.374-.072-.12-.266-.193-.556-.338z"/></svg>
                Contact Us on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default HotelDetail;
