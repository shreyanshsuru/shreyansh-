import { Search, ShoppingCart, User, Menu, TrendingUp, History, ArrowRight, Heart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../CartContext';
import { useWishlist } from '../WishlistContext';

export default function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { cart, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();
  const { wishlist } = useWishlist();

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
                <Heart className="w-5 h-5 group-hover:text-brand-red transition-colors" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 bg-brand-red text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-brand-bg">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 hover:bg-brand-border rounded-sm transition-colors group"
              >
                <ShoppingCart className="w-5 h-5 group-hover:text-brand-red transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 bg-brand-red text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-brand-bg">
                    {totalItems}
                  </span>
                )}
              </button>
              <button className="p-2.5 hover:bg-brand-border rounded-sm transition-colors group">
                <User className="w-5 h-5 group-hover:text-brand-red transition-colors" />
              </button>
              <button className="md:hidden p-2.5 hover:bg-brand-border rounded-sm transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Drawer */}
            <AnimatePresence>
              {isCartOpen && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsCartOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                  />
                  <motion.div 
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
                  >
                    <div className="p-6 border-b border-brand-border flex items-center justify-between">
                      <h2 className="text-sm font-black tracking-[0.3em] uppercase">SYNDICATE CART ({totalItems})</h2>
                      <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-brand-border rounded-full transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex-grow overflow-y-auto p-6 space-y-6">
                      {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                          <ShoppingCart className="w-12 h-12 text-brand-border" />
                          <p className="text-xs font-bold tracking-widest uppercase text-brand-muted">Your cart is empty</p>
                          <button 
                            onClick={() => setIsCartOpen(false)}
                            className="text-[10px] font-bold tracking-[0.2em] text-brand-red border-b-2 border-brand-red pb-1"
                          >
                            START SHOPPING
                          </button>
                        </div>
                      ) : (
                        cart.map((item) => (
                          <div key={item.id} className="flex gap-4 group">
                            <div className="w-20 h-24 bg-brand-border rounded-sm overflow-hidden flex-shrink-0">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                            </div>
                            <div className="flex-grow flex flex-col justify-between py-1">
                              <div>
                                <h3 className="text-[11px] font-bold uppercase mb-1">{item.name}</h3>
                                <p className="text-[10px] text-brand-red font-mono font-bold">₹{item.price.toLocaleString()}</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center border border-brand-border rounded-sm">
                                  <button onClick={() => updateQuantity(item.id, -1)} className="p-1.5 hover:bg-brand-border transition-colors"><Minus className="w-3 h-3" /></button>
                                  <span className="w-8 text-center text-[10px] font-bold">{item.quantity}</span>
                                  <button onClick={() => updateQuantity(item.id, 1)} className="p-1.5 hover:bg-brand-border transition-colors"><Plus className="w-3 h-3" /></button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-brand-muted hover:text-brand-red transition-colors">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {cart.length > 0 && (
                      <div className="p-6 border-t border-brand-border space-y-4 bg-brand-bg/50">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-muted">Subtotal</span>
                          <span className="text-lg font-mono font-black">₹{totalPrice.toLocaleString()}</span>
                        </div>
                        <button className="w-full bg-brand-red text-white py-4 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all">
                          PROCEED TO CHECKOUT
                        </button>
                        <p className="text-[9px] text-center text-brand-muted uppercase tracking-widest">
                          Shipping & taxes calculated at checkout
                        </p>
                      </div>
                    )}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
