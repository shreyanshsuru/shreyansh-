export interface Variant {
  id: string;
  name: string;
  type: 'Color' | 'Material';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  size: string[];
  drop: string;
  description: string;
  originalPrice?: number;
  isSoldOut?: boolean;
  variants?: Variant[];
}

export type Category = 'All Products' | 'Tops' | 'Bottoms' | 'Accessories';
export type Size = 'S' | 'M' | 'L' | 'XL';
export type SortOption = 'Newest Arrivals' | 'Price: Low to High' | 'Price: High to Low';
