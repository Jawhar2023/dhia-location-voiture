export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    name: 'Ahmed Ben Ali',
    rating: 5,
    text: 'Excellent service! The car was spotless and Dhia was incredibly professional. Picked up at the airport with no hassle. Highly recommended for anyone visiting Tunisia.',
    date: 'January 2026',
  },
  {
    name: 'Sophie Martin',
    rating: 5,
    text: 'We rented a car for our family vacation and the experience was outstanding. 24/7 support, clean vehicles, and very fair pricing. Will definitely return!',
    date: 'December 2025',
  },
  {
    name: 'Mohamed Khaled',
    rating: 5,
    text: 'Best car rental in Ariana! Dhia is very friendly and the cars are well-maintained. The airport transfer was smooth and on time. Top quality service.',
    date: 'November 2025',
  },
  {
    name: 'Laura Schmidt',
    rating: 5,
    text: 'Professional and reliable. I needed a car urgently and Dhia arranged everything within an hour. The Kia Stonic was perfect for our trip to Hammamet.',
    date: 'October 2025',
  },
  {
    name: 'Yassine Trabelsi',
    rating: 5,
    text: 'Service impeccable! Voiture propre et en excellent état. Dhia est très professionnel et toujours disponible. Je recommande vivement!',
    date: 'September 2025',
  },
  {
    name: 'Elena Rossi',
    rating: 5,
    text: 'Amazing experience from start to finish. The car was exactly as described, and Dhia went above and beyond to make our stay comfortable. Five stars!',
    date: 'August 2025',
  },
];
