import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'MIDNIGHT HOODIE',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    category: 'Tops',
    size: ['S', 'M', 'L', 'XL'],
    drop: 'DROP 01',
    description: 'A premium heavyweight hoodie designed for maximum comfort and durability. Features a relaxed fit and a deep midnight black finish.',
    originalPrice: 4999
  },
  {
    id: '2',
    name: 'CARBON OVERSIZED TEE',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    category: 'Tops',
    size: ['M', 'L', 'XL'],
    drop: 'DROP 01',
    description: 'Engineered for the streets, this oversized tee offers a modern silhouette with a breathable carbon-washed cotton fabric.',
    isSoldOut: true
  },
  {
    id: '3',
    name: 'SYNDICATE CARGOES',
    price: 4499,
    image: 'https://images.unsplash.com/photo-1624371414361-e67090c621cb?q=80&w=800&auto=format&fit=crop',
    category: 'Bottoms',
    size: ['S', 'M', 'L'],
    drop: 'DROP 01',
    description: 'Technical cargo pants with multiple utility pockets. Reinforced stitching and adjustable cuffs for a customizable fit.',
    originalPrice: 5999
  },
  {
    id: '4',
    name: 'RED ACCENT BEANIE',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d405370?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    size: ['S'],
    drop: 'DROP 01',
    description: 'A bold red beanie to complete your street look. Made from soft, insulating wool blend for warmth and style.'
  },
  {
    id: '5',
    name: 'STREET TECH VEST',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=800&auto=format&fit=crop',
    category: 'Tops',
    size: ['M', 'L', 'XL'],
    drop: 'DROP 01',
    description: 'Multi-pocket technical vest inspired by urban utility. Perfect for layering over hoodies or tees.'
  },
  {
    id: '6',
    name: 'URBAN JOGGERS',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop',
    category: 'Bottoms',
    size: ['S', 'M', 'L', 'XL'],
    drop: 'DROP 01',
    description: 'Sleek and functional joggers with a tapered fit. Designed for movement and everyday urban exploration.'
  },
  {
    id: '7',
    name: 'SYNDICATE GRAPHIC TEE',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
    category: 'Tops',
    size: ['S', 'M', 'L', 'XL'],
    drop: 'DROP 02',
    description: 'Limited edition graphic tee featuring the Syndicate emblem. High-density screen print on premium cotton.'
  },
  {
    id: '8',
    name: 'UTILITY CARGO SHORTS',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop',
    category: 'Bottoms',
    size: ['M', 'L', 'XL'],
    drop: 'DROP 02',
    description: 'Lightweight utility shorts for the summer heat. Water-resistant fabric with quick-access pockets.'
  },
  {
    id: '9',
    name: 'TACTICAL CROSSBODY BAG',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    size: ['S'],
    drop: 'DROP 02',
    description: 'Compact tactical bag for your essentials. Weatherproof zippers and adjustable Syndicate strap.',
    isSoldOut: true
  },
  {
    id: '10',
    name: 'NEON ACCENT WIND BREAKER',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
    category: 'Tops',
    size: ['S', 'M', 'L', 'XL'],
    drop: 'DROP 02',
    description: 'Ultra-lightweight windbreaker with neon accents for night visibility. Packable design for the urban commuter.',
    originalPrice: 6499
  },
  {
    id: '11',
    name: 'SYNDICATE BUCKET HAT',
    price: 999,
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=800&auto=format&fit=crop',
    category: 'Accessories',
    size: ['S', 'M'],
    drop: 'DROP 02',
    description: 'Classic bucket hat with embroidered Syndicate logo. Breathable cotton twill for all-day comfort.'
  },
  {
    id: '12',
    name: 'STEALTH CARGO PANTS',
    price: 3799,
    image: 'https://images.unsplash.com/photo-1517441667397-09930582d11a?q=80&w=800&auto=format&fit=crop',
    category: 'Bottoms',
    size: ['S', 'M', 'L', 'XL'],
    drop: 'DROP 02',
    description: 'Minimalist cargo pants with hidden pockets. Stretch fabric for maximum mobility in the city.'
  }
];
