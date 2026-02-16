import kiaImg from '@/assets/kia-stonic.jpg';
import skodaImg from '@/assets/skoda-fabia.jpg';
import hyundaiImg from '@/assets/hyundai-i20.jpg';
import seatImg from '@/assets/seat-ibiza.jpg';

export interface Car {
  id: string;
  name: string;
  type: string;
  category: 'suv' | 'city' | 'sport';
  color: string;
  pricePerDay: number;
  doors: number;
  seats: number;
  transmission: string;
  fuel: string;
  ac: boolean;
  description: string;
  features: string[];
  idealFor: string[];
  image: string;
}

export const cars: Car[] = [
  {
    id: 'kia-stonic',
    name: 'Kia Stonic',
    type: 'Compact SUV / Crossover',
    category: 'suv',
    color: 'Black',
    pricePerDay: 120,
    doors: 5,
    seats: 5,
    transmission: 'Manual',
    fuel: 'Diesel',
    ac: true,
    description: 'The Kia Stonic offers a high driving position and spacious interior, making it the ideal choice for comfort-oriented drivers and long-distance trips.',
    features: ['Air Conditioning', 'Bluetooth', 'USB Charging', 'Power Windows', 'Central Locking'],
    idealFor: ['Long Distance', 'Family Trips', 'Airport Transfer', 'Business Travel'],
    image: kiaImg,
  },
  {
    id: 'skoda-fabia',
    name: 'Škoda Fabia',
    type: 'Hatchback (City Car)',
    category: 'city',
    color: 'Grey',
    pricePerDay: 80,
    doors: 5,
    seats: 5,
    transmission: 'Manual',
    fuel: 'Gasoline',
    ac: true,
    description: 'The Škoda Fabia is a practical and fuel-efficient city car, perfect for navigating urban streets with ease and comfort.',
    features: ['Air Conditioning', 'Radio', 'Power Steering', 'Central Locking'],
    idealFor: ['City Driving', 'Daily Commute', 'Budget Travel', 'Short Trips'],
    image: skodaImg,
  },
  {
    id: 'hyundai-i20',
    name: 'Hyundai i20',
    type: 'Hatchback',
    category: 'city',
    color: 'Silver',
    pricePerDay: 90,
    doors: 5,
    seats: 5,
    transmission: 'Manual',
    fuel: 'Gasoline',
    ac: true,
    description: 'The Hyundai i20 combines modern design with advanced technology, making it the perfect companion for urban driving.',
    features: ['Air Conditioning', 'Touchscreen Display', 'Bluetooth', 'Rear Camera', 'USB Ports'],
    idealFor: ['Urban Driving', 'City Tours', 'Weekend Getaway', 'Airport Pickup'],
    image: hyundaiImg,
  },
  {
    id: 'seat-ibiza',
    name: 'SEAT Ibiza',
    type: 'Sporty Hatchback',
    category: 'sport',
    color: 'Red',
    pricePerDay: 100,
    doors: 5,
    seats: 5,
    transmission: 'Manual',
    fuel: 'Gasoline',
    ac: true,
    description: 'The SEAT Ibiza brings a youthful and dynamic design with sporty performance. Perfect for those who want style and excitement on the road.',
    features: ['Air Conditioning', 'Sport Mode', 'Touchscreen', 'Bluetooth', 'LED Lights'],
    idealFor: ['Sport Driving', 'Weekend Fun', 'City Cruising', 'Coastal Roads'],
    image: seatImg,
  },
];
