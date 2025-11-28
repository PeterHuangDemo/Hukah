import { MenuItem, OpeningHours } from './types';

export const CONTACT_PHONE = "+86 13807807216";

export const COFFEE_MENU: MenuItem[] = [
  {
    id: 'c1',
    name: 'Classic Espresso',
    description: 'Dark roast blend with notes of dark chocolate and nuts.',
    price: 8,
    category: 'coffee',
    imageUrl: '/pics/espresso.jpg',
    tags: ['Signature', 'Strong']
  },
  {
    id: 'c2',
    name: 'Americano',
    description: 'Combine with local spring water to make perfect taste.',
    price: 15,
    category: 'coffee',
    imageUrl: '/pics/iceam.jpg',
    tags: ['Popular', 'Longblack']
  },
  {
    id: 'c3',
    name: 'Cold Brew',
    description: 'Cold brew coffee infused with light roast bean.',
    price: 15,
    category: 'coffee',
    imageUrl: '/pics/coldb.jpg',
    tags: ['Cold', 'Smooth']
  },
  {
    id: 'c4',
    name: 'Latte',
    description: 'Dark roast with local farm milk.',
    price: 18,
    category: 'coffee',
    imageUrl: '/pics/latte.jpeg',
    tags: ['Traditional', 'Milky']
  },
  {
    id: 'c5',
    name: 'Irish',
    description: 'Combine with good old Jack Daniels.',
    price: 20,
    category: 'coffee',
    imageUrl: '/pics/irish.jpg',
    tags: ['Whiskey', 'Mousse']
  },
  {
    id: 'c6',
    name: 'Pour-Over',
    description: 'Selected SOE beans.',
    price: 25,
    category: 'coffee',
    imageUrl: '/pics/pourover.png',
    tags: ['Sweet', 'Floral']
  }
];

export const HOOKAH_MENU: MenuItem[] = [
  {
    id: 'h1',
    name: 'Hukah Special Coffee',
    description: 'Signature flavour of coffee using premium cigar leaf and espressor base to increase tensity.',
    price: 249.00,
    category: 'hookah',
    imageUrl: '/pics/coffee.jpg',
    tags: ['Signature', 'Coffee']
  },
  {
    id: 'h2',
    name: 'Jasmine Milktea',
    description: 'Refreshing green tea with milk and Jasmine from Heng County.',
    price: 249.00,
    category: 'hookah',
    imageUrl: '/pics/jasmine.png',
    tags: ['Tea', 'Milky']
  },
  {
    id: 'h3',
    name: 'Ice Strawberry',
    description: 'Entry level shisha with strong ice and strawberry',
    price: 99.00,
    category: 'hookah',
    imageUrl: '/pics/icestraw.jpg',
    tags: ['Strawberry', 'Fresh']
  },
  {
    id: 'h4',
    name: 'Mysterious Middle East',
    description: 'sandalwood sense, taste like mysterious',
    price: 249.00,
    category: 'hookah',
    imageUrl: '/pics/sandalwood.jpg',
    tags: ['Wood', 'Sweet']
  },
  {
    id: 'h5',
    name: 'Icey Mungbean',
    description: 'Local mungbean with childhood memory',
    price: 249.00,
    category: 'hookah',
    imageUrl: '/pics/mungbean.jpg',
    tags: ['Fruity', 'Summer']
  }
];

export const OPENING_HOURS: OpeningHours[] = [
  { dayKey: 'mon_thu', day: 'Monday - Thursday', open: '08:00 AM', close: '07:00 PM' },
  { dayKey: 'fri', day: 'Friday', open: '08:00 AM', close: '10:00 PM' },
  { dayKey: 'sat', day: 'Saturday', open: '10:00 AM', close: '10:00 PM' },
  { dayKey: 'sun', day: 'Sunday', open: '10:00 AM', close: '10:00 PM' },
];