
import React, { useState, useEffect } from 'react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    title: 'Experience Gilgit-Baltistan',
    subtitle: 'Discover the world\'s most beautiful mountains'
  },
  {
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    title: 'Find Your Perfect Stay',
    subtitle: 'Authentic local hospitality at affordable prices'
  },
  {
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    title: 'Explore Nature\'s Paradise',
    subtitle: 'Breathtaking landscapes and unforgettable experiences'
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="slide-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{slide.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl">{slide.subtitle}</p>
            <button className="bg-gbsky-600 hover:bg-gbsky-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors">
              Book Now
            </button>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
