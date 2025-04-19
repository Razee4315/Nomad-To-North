
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'United Kingdom',
    comment: 'My stay at the Eagle Nest Hotel in Hunza Valley was absolutely magical. The views were breathtaking and the staff made me feel right at home.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/45.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    comment: 'GB Hotels helped me find the perfect accommodation in Gilgit. The booking process was seamless and the hotel exceeded my expectations.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 3,
    name: 'Amina Khan',
    location: 'Pakistan',
    comment: 'As a local traveler, I appreciate how this platform showcases our beautiful region. The prices are fair and the service is excellent.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/63.jpg'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gbearth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gbearth-800 mb-4">What Our Guests Say</h2>
          <p className="text-gbearth-600 max-w-3xl mx-auto">
            Read authentic reviews from travelers who have experienced our hotels and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-14 w-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gbearth-800">{testimonial.name}</h3>
                  <p className="text-sm text-gbearth-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index}
                    className={`h-5 w-5 ${index < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                    fill={index < testimonial.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              
              <p className="text-gbearth-700 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
