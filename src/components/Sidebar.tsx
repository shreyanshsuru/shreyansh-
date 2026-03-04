import { Category, Size, SortOption } from '../types';
import { X } from 'lucide-react';

interface SidebarProps {
  selectedCategories: Category[];
  toggleCategory: (category: Category) => void;
  selectedSizes: Size[];
  toggleSize: (size: Size) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  clearFilters: () => void;
}

export default function Sidebar({
  selectedCategories,
  toggleCategory,
  selectedSizes,
  toggleSize,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  clearFilters
}: SidebarProps) {
  const categories: Category[] = ['All Products', 'Tops', 'Bottoms', 'Accessories'];
  const sizes: Size[] = ['S', 'M', 'L', 'XL'];
  const sortOptions: SortOption[] = ['Newest Arrivals', 'Price: Low to High', 'Price: High to Low'];

  const isAnyFilterActive = !selectedCategories.includes('All Products') || selectedSizes.length > 0 || priceRange[1] < 10000;

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
      {/* Header with Clear button */}
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase">Filters</h3>
        {isAnyFilterActive && (
          <button 
            onClick={clearFilters}
            className="flex items-center gap-1 text-[9px] font-bold tracking-widest text-brand-muted hover:text-black transition-colors uppercase"
          >
            <X className="w-3 h-3" /> Clear
          </button>
        )}
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase mb-6">Collections</h3>
        <div className="space-y-4">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="filter-checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span className={`text-sm font-medium transition-colors ${selectedCategories.includes(category) ? 'text-black' : 'text-brand-muted group-hover:text-black'}`}>
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase mb-6">Size</h3>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`h-10 text-xs font-bold border transition-all ${
                selectedSizes.includes(size) 
                  ? 'bg-black border-black text-white' 
                  : 'bg-transparent border-brand-border text-brand-muted hover:border-brand-muted'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase mb-6">Price Range</h3>
        <div className="space-y-6">
          <div className="relative h-1 bg-brand-border rounded-full">
            <div 
              className="absolute h-full bg-brand-red rounded-full" 
              style={{ width: `${(priceRange[1] / 10000) * 100}%` }}
            ></div>
            <input 
              type="range" 
              min="0" 
              max="10000" 
              step="500"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-red border-2 border-brand-bg rounded-full pointer-events-none shadow-lg"
              style={{ left: `calc(${(priceRange[1] / 10000) * 100}% - 8px)` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-brand-muted">
            <span>₹0</span>
            <span className="text-black font-bold">₹{priceRange[1].toLocaleString()}+</span>
          </div>
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase mb-6">Sort By</h3>
        <div className="relative group">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="w-full bg-brand-bg border border-brand-border rounded-sm px-4 py-3.5 text-xs font-bold tracking-wider appearance-none cursor-pointer focus:outline-none focus:border-brand-red transition-all"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-muted group-focus-within:text-brand-red transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
}
