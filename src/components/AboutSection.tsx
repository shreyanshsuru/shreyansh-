import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Twitter, Facebook, Youtube, Heart, ShieldCheck, Truck, Star, Quote, Search, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

const REVIEWS = [
  {
    id: 1,
    name: "ADITYA V.",
    text: "The quality of the Midnight Hoodie is insane. Heavyweight and perfect for the Mumbai weather when the AC is on full blast.",
    rating: 5
  },
  {
    id: 2,
    name: "ROHAN S.",
    text: "Syndicate Cargoes are my daily drivers now. The utility pockets are actually useful, not just for show.",
    rating: 5
  },
  {
    id: 3,
    name: "ISHANI M.",
    text: "Finally a brand that understands urban aesthetics without being over the top. Minimal and bold.",
    rating: 4
  }
];

export default function AboutSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof PRODUCTS>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (name: string) => {
    setSearchQuery(name);
    setShowSuggestions(false);
  };

  return (
    <section id="about" className="py-24 border-t border-brand-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar Integration */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 border border-brand-border bg-brand-border/10 rounded-sm">
            <div className="max-w-md">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-2">SYNDICATE SEARCH</h3>
              <p className="text-[10px] text-brand-muted uppercase tracking-widest">Find products, collections, or support articles instantly.</p>
            </div>
            <div ref={searchRef} className="w-full md:w-auto flex-grow max-w-xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-red" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim().length > 0 && setShowSuggestions(true)}
                placeholder="SEARCH THE CONCRETE JUNGLE..." 
                className="w-full bg-brand-bg border border-brand-border px-12 py-4 text-xs font-bold tracking-widest uppercase focus:border-brand-red outline-none transition-colors placeholder:text-brand-muted/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-black/80 transition-all">
                GO
              </button>

              <AnimatePresence>
                {showSuggestions && suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-brand-border shadow-2xl z-20 overflow-hidden"
                  >
                    <div className="p-2">
                      {suggestions.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleSuggestionClick(product.name)}
                          className="w-full flex items-center justify-between p-3 hover:bg-black/5 transition-colors group text-left"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-border rounded-sm overflow-hidden">
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                            </div>
                            <div>
                              <p className="text-[11px] font-bold uppercase">{product.name}</p>
                              <p className="text-[9px] text-brand-red font-mono">₹{product.price.toLocaleString()}</p>
                            </div>
                          </div>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-red" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-brand-red"></div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-brand-red uppercase">OUR PHILOSOPHY</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
              REDEFINING THE <br />
              <span className="text-black/90">URBAN UNIFORM</span>
            </h2>
            <div className="relative w-full h-48 bg-brand-border rounded-sm overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop" 
                alt="Urban Uniform Detail" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="space-y-6 text-brand-muted leading-relaxed">
              <p>
                Mumbai Syndicate was born from the chaos and energy of the streets. Our vision is to create high-performance streetwear that serves as a second skin for the modern urban explorer.
              </p>
              <p>
                Our mission is simple: to engineer garments that balance technical utility with uncompromising style. We don't just make clothes; we build gear for the syndicate that moves through the concrete jungle.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video lg:aspect-square bg-brand-border rounded-sm overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1552061011-58839229372e?q=80&w=1200&auto=format&fit=crop" 
              alt="Street Style" 
              className="w-full h-full object-cover grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-brand-red mb-2">EST. 2024</p>
              <p className="text-lg font-bold italic tracking-tight">CRAFTED IN THE HEART OF MUMBAI</p>
            </div>
          </motion.div>
        </div>

        {/* In-Store Sales & Offers */}
        <div className="mb-32">
          <div className="p-12 border-2 border-brand-red bg-brand-red/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase">
              IN-STORE EXCLUSIVE
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-6 leading-none">
                  SALES & <br />
                  <span className="text-brand-red">OFFERS</span>
                </h2>
                <p className="text-sm text-brand-muted uppercase tracking-widest mb-8 leading-relaxed">
                  Visit our flagship stores in Mumbai for exclusive in-store drops and up to 50% off on last season's archive.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 border border-brand-red text-[10px] font-bold tracking-widest uppercase">
                    FLAT 30% OFF ON HOODIES
                  </div>
                  <div className="px-6 py-3 border border-brand-red text-[10px] font-bold tracking-widest uppercase">
                    BUY 2 GET 1 ON TEES
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-brand-border rounded-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop" alt="Store 1" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-brand-border rounded-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=400&auto=format&fit=crop" alt="Store 2" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support & Care */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-8 border border-brand-border hover:border-brand-red transition-colors group">
            <Truck className="w-8 h-8 text-brand-red mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4">Fast Shipping</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Express delivery across India. Your gear reaches you within 3-5 business days.
            </p>
          </div>
          <div className="p-8 border border-brand-border hover:border-brand-red transition-colors group">
            <ShieldCheck className="w-8 h-8 text-brand-red mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4">Quality Care</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Wash cold, hang dry. Our fabrics are engineered to last, but they appreciate the extra care.
            </p>
          </div>
          <div className="p-8 border border-brand-border hover:border-brand-red transition-colors group">
            <Heart className="w-8 h-8 text-brand-red mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4">Syndicate Support</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Need help? Our team is available 24/7 at support@mumbaisyndicate.com
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-4">SYNDICATE VOICES</h2>
            <div className="h-1 w-12 bg-brand-red mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-border/30 p-8 rounded-sm relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-red/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < review.rating ? 'text-brand-red fill-brand-red' : 'text-brand-muted'}`} 
                    />
                  ))}
                </div>
                <p className="text-sm italic text-black/80 mb-6 leading-relaxed">"{review.text}"</p>
                <p className="text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Instagram className="w-5 h-5 text-brand-red" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-brand-red uppercase">ON THE GRAM</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
                SYNDICATE <br />
                <span className="text-black/90">IN THE WILD</span>
              </h2>
            </div>
            <a href="#" className="text-[10px] font-bold tracking-widest uppercase border-b-2 border-brand-red pb-1 hover:text-brand-red transition-colors">
              FOLLOW @MUMBAISYNDICATE
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 1, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop', likes: '1.2k', comments: '48' },
              { id: 2, img: 'https://images.unsplash.com/photo-1529139513477-3efb3197ac18?q=80&w=800&auto=format&fit=crop', likes: '856', comments: '24' },
              { id: 3, img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop', likes: '2.1k', comments: '112' },
              { id: 4, img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop', likes: '1.5k', comments: '64' },
            ].map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: post.id * 0.1 }}
                className="relative aspect-square group cursor-pointer overflow-hidden bg-brand-border"
              >
                <img 
                  src={post.img} 
                  alt={`Instagram post ${post.id}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 fill-white" />
                    <span className="text-xs font-bold font-mono">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Quote className="w-4 h-4 fill-white rotate-180" />
                    <span className="text-xs font-bold font-mono">{post.comments}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase mb-8">JOIN THE SYNDICATE</h2>
          <div className="flex justify-center gap-8">
            {[
              { icon: Instagram, label: 'Instagram' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Facebook, label: 'Facebook' },
              { icon: Youtube, label: 'Youtube' }
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="p-4 border border-brand-border rounded-full hover:border-brand-red hover:text-brand-red transition-all group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
