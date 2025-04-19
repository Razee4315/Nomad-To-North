
export interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  amenities: string[];
  features: string[];
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Eagle Nest Hotel',
    location: 'Hunza Valley',
    description: 'Perched on a hillside with panoramic views of Hunza Valley, Eagle Nest Hotel offers a perfect blend of comfort and natural beauty. The hotel features traditional architecture with modern amenities, providing an authentic yet comfortable stay experience.',
    price: 8500,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    gallery: [
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027'
    ],
    amenities: ['Free WiFi', '24/7 Service', 'Mountain View', 'Restaurant', 'Room Service', 'Free Parking'],
    features: ['Traditional Architecture', 'Local Cuisine', 'Cultural Tours', 'Trekking Guides']
  },
  {
    id: 2,
    name: 'Serena Inn',
    location: 'Skardu',
    description: 'Serena Inn in Skardu offers luxurious accommodations with breathtaking views of the surrounding mountains. This premium hotel combines elegant design with world-class service, making it a perfect choice for discerning travelers looking to explore the beauty of Skardu.',
    price: 12000,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    gallery: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027'
    ],
    amenities: ['Free WiFi', 'Spa', 'Room Service', 'Airport Shuttle', 'Swimming Pool', 'Fitness Center', 'Conference Rooms'],
    features: ['Luxury Accommodations', 'Fine Dining', 'Adventure Tours', 'Business Facilities']
  },
  {
    id: 3,
    name: 'Mountain Retreat',
    location: 'Naltar Valley',
    description: 'Nestled in the serene Naltar Valley, Mountain Retreat offers a peaceful escape surrounded by pine forests and stunning mountain vistas. This cozy hotel focuses on providing an authentic local experience, with traditional decor and homestyle cuisine.',
    price: 6500,
    rating: 4.6,
    reviews: 72,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    gallery: [
      'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
    ],
    amenities: ['Mountain View', 'Hiking Trails', 'Local Cuisine', 'Cultural Tours', 'Free WiFi', 'Garden'],
    features: ['Eco-Friendly', 'Outdoor Activities', 'Local Guides', 'Stargazing']
  },
  {
    id: 4,
    name: 'Gilgit Gateway Hotel',
    location: 'Gilgit City',
    description: 'Located in the heart of Gilgit City, this hotel offers convenient access to local markets, historical sites, and transportation. With comfortable rooms and attentive service, it serves as an ideal base for exploring the region.',
    price: 7500,
    rating: 4.5,
    reviews: 103,
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
    gallery: [
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027'
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Airport Shuttle', 'Business Center', '24/7 Reception', 'Laundry Service'],
    features: ['Central Location', 'City Tours', 'Travel Desk', 'Meeting Facilities']
  },
  {
    id: 5,
    name: 'Khaplu Palace Resort',
    location: 'Khaplu',
    description: 'Housed in a restored palace, this unique hotel offers a glimpse into the royal heritage of Baltistan. Guests can enjoy traditional architecture, manicured gardens, and spectacular views of the surrounding mountains.',
    price: 14000,
    rating: 4.9,
    reviews: 65,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    gallery: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
    ],
    amenities: ['Heritage Building', 'Garden', 'Restaurant', 'Room Service', 'Free WiFi', 'Cultural Programs'],
    features: ['Royal Experience', 'Historical Tours', 'Local Crafts', 'Traditional Music']
  },
  {
    id: 6,
    name: 'Riverside Inn',
    location: 'Shigar',
    description: 'Set along the banks of the Shigar River, this charming inn offers a tranquil retreat with the soothing sounds of flowing water. The simple yet comfortable accommodations focus on showcasing the natural beauty of the surroundings.',
    price: 5000,
    rating: 4.4,
    reviews: 58,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    gallery: [
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027'
    ],
    amenities: ['River View', 'Free WiFi', 'Garden', 'Terrace', 'Local Cuisine', 'Fishing'],
    features: ['Nature Retreat', 'River Activities', 'Peaceful Ambiance', 'Local Experiences']
  }
];

export default hotels;
