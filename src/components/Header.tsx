import { Search, ShoppingCart, User, Menu, TrendingUp, History, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const recentSearches = ['Midnight Hoodie', 'Cargo Pants', 'Accessories'];
  const popularItems = ['Carbon Tee', 'Urban Joggers', 'Tech Vest'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="bg-brand-red p-1.5 rounded-sm transform group-hover:rotate-90 transition-transform duration-500">
              <div className="w-5 h-5 border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-bg rotate-45"></div>
              </div>
            </div>
            <span className="font-black text-2xl tracking-tighter italic uppercase">MUMBAI SYNDICATE</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {['SHOP', 'COLLECTIONS', 'ABOUT'].map((item) => (
              <a 
                key={item} 
                href={item === 'SHOP' ? '#shop' : item === 'ABOUT' ? '#about' : '#'} 
                className="text-[11px] font-bold tracking-[0.2em] text-black/70 hover:text-brand-red transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <div ref={searchRef} className="relative hidden lg:block">
              <div className={`flex items-center bg-brand-bg border ${isSearchFocused ? 'border-brand-red' : 'border-brand-border'} rounded-sm px-4 py-2 gap-3 transition-all duration-300 w-64 focus-within:w-80`}>
                <Search className={`w-4 h-4 ${isSearchFocused ? 'text-brand-red' : 'text-brand-muted'}`} />
                <input 
                  type="text" 
                  placeholder="Search collections..." 
                  onFocus={() => setIsSearchFocused(true)}
                  className="bg-transparent border-none outline-none text-xs w-full placeholder:text-brand-muted"
                />
              </div>

              <AnimatePresence>
                {isSearchFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-brand-border shadow-2xl rounded-sm overflow-hidden"
                  >
                    <div className="p-6 space-y-8">
                      {/* Recent Searches */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <History className="w-3 h-3 text-brand-muted" />
                          <span className="text-[9px] font-bold tracking-[0.2em] text-brand-muted uppercase">Recent Searches</span>
                        </div>
                        <div className="space-y-2">
                          {recentSearches.map((search) => (
                            <button key={search} className="flex items-center justify-between w-full text-left text-[11px] font-bold hover:text-brand-red transition-colors group">
                              {search}
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Popular Items */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className="w-3 h-3 text-brand-red" />
                          <span className="text-[9px] font-bold tracking-[0.2em] text-brand-red uppercase">Trending Now</span>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          {popularItems.map((item) => (
                            <button key={item} className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-sm transition-colors group">
                              <div className="w-8 h-8 bg-brand-border rounded-sm overflow-hidden">
                                <div className="w-full h-full bg-black/10 animate-pulse" />
                              </div>
                              <span className="text-[11px] font-bold uppercase group-hover:text-brand-red transition-colors">{item}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-black p-3 text-center">
                      <button className="text-[9px] font-bold tracking-[0.3em] text-white uppercase hover:text-brand-red transition-colors">
                        View All Collections
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="relative p-2.5 hover:bg-brand-border rounded-sm transition-colors group">
                <ShoppingCart className="w-5 h-5 group-hover:text-brand-red transition-colors" />
                <span className="absolute top-1 right-1 bg-brand-red text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-brand-bg">0</span>
              </button>
              <button className="p-2.5 hover:bg-brand-border rounded-sm transition-colors group">
                <User className="w-5 h-5 group-hover:text-brand-red transition-colors" />
              </button>
              <button className="md:hidden p-2.5 hover:bg-brand-border rounded-sm transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
