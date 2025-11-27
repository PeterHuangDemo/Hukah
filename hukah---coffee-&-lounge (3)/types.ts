export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'hookah' | 'tea' | 'pastry';
  imageUrl: string;
  tags?: string[];
}

export interface OpeningHours {
  dayKey: string;
  day: string; // Fallback
  open: string;
  close: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  type: 'table' | 'lounge';
  createdAt: number;
}

export type TabType = 'home' | 'coffee' | 'hookah' | 'reservations';