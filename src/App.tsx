import { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';
import { Category, Size, SortOption } from './types';
import { motion } from 'motion/react';

export default function App() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(['All Products']);
  const [selectedSizes, setSelectedSizes] = useState<Size[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<SortOption>('Newest Arrivals');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category Filter
    if (!selectedCategories.includes('All Products') && selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category as Category));
    }

    // Size Filter
    if (selectedSizes.length > 0) {
      result = result.filter(p => p.size.some(s => selectedSizes.includes(s as Size)));
    }

    // Price Filter
    result = result.filter(p => p.price <= priceRange[1]);

    // Sorting
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategories, selectedSizes, priceRange, sortBy]);

  const toggleCategory = (category: Category) => {
    if (category === 'All Products') {
      setSelectedCategories(['All Products']);
      return;
    }

    setSelectedCategories(prev => {
      const filtered = prev.filter(c => c !== 'All Products');
      if (filtered.includes(category)) {
        const next = filtered.filter(c => c !== category);
        return next.length === 0 ? ['All Products'] : next;
      } else {
        return [...filtered, category];
      }
    });
  };

  const toggleSize = (size: Size) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-brand-red"></div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-red uppercase">NEW SEASON</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter uppercase mb-8 leading-[0.9]"
          >
            DROP 01 <br />
            <span className="text-black/90">COLLECTIONS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-brand-muted text-sm md:text-base leading-relaxed mb-10"
          >
            High-performance streetwear engineered for the Mumbai concrete jungle. Limited edition release.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="#shop" 
              className="inline-block bg-brand-red text-white px-10 py-4 text-xs font-bold tracking-[0.3em] uppercase hover:bg-black/10 hover:text-brand-red transition-all duration-300 border border-brand-red"
            >
              SHOP NOW
            </a>
          </motion.div>
        </div>

        <div id="shop" className="flex flex-col lg:flex-row gap-16 scroll-mt-24">
          {/* Sidebar */}
          <Sidebar 
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            selectedSizes={selectedSizes}
            toggleSize={toggleSize}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            clearFilters={() => {
              setSelectedCategories(['All Products']);
              setSelectedSizes([]);
              setPriceRange([0, 10000]);
            }}
          />

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-brand-muted italic">No products found matching your filters.</p>
              </div>
            )}

            {filteredProducts.length > 0 && (
              <div className="mt-20 flex justify-center">
                <button className="px-12 py-4 border border-brand-border text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all duration-300">
                  LOAD MORE DESIGNS
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <AboutSection />
      <Footer />
    </div>
  );
}
