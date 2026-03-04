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
    description: 'Engineered for the streets, this oversized tee offers a modern silhouette with a breathable carbon-washed cotton fabric.'
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
  }
];
