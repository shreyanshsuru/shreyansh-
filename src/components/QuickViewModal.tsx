import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Ruler, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useToast } from '../ToastContext';
import { useCart } from '../CartContext';
import { useState } from 'react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { showToast } = useToast();
  const { addToCart } = useCart();
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (product.isSoldOut) return;
    addToCart(product, quantity, selectedVariant);
    showToast(`${quantity} x ${product.name}${selectedVariant ? ` (${selectedVariant.name})` : ''} ADDED TO SYNDICATE CART`);
  };

  const updateQuantity = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-bg/90 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-brand-bg border border-brand-border rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-brand-bg/50 hover:bg-brand-red hover:text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Section */}
          <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-brand-red uppercase mb-2 block">
                  {product.drop}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black italic tracking-tighter uppercase leading-none">
                  {product.name}
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-2xl font-mono font-bold text-brand-red">
                  ₹{product.price.toLocaleString()}
                </p>
                {product.originalPrice && (
                  <p className="text-lg font-mono text-brand-muted line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </p>
                )}
              </div>

              <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>

              {product.variants && (
                <div className="space-y-3">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-muted">
                    SELECT {product.variants[0].type}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-4 py-2 text-[10px] font-bold uppercase border transition-all ${
                          selectedVariant?.id === variant.id 
                            ? 'bg-brand-red border-brand-red text-white' 
                            : 'bg-white border-brand-border text-black hover:border-brand-red'
                        }`}
                      >
                        {variant.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {product.size.map((size) => (
                      <span
                        key={size}
                        className="px-4 py-2 border border-brand-border text-xs font-bold tracking-widest uppercase"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setShowSizeGuide(true)}
                    className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand-muted hover:text-brand-red transition-colors"
                  >
                    <Ruler className="w-3 h-3" />
                    Size Guide
                  </button>
                </div>

                <div className="flex gap-4">
                  <div className={`flex items-center border border-brand-border rounded-sm ${product.isSoldOut ? 'opacity-50' : ''}`}>
                    <button 
                      onClick={() => updateQuantity(-1)}
                      disabled={product.isSoldOut}
                      className="p-3 hover:bg-brand-border transition-colors disabled:cursor-not-allowed"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-sm font-bold font-mono">{quantity}</span>
                    <button 
                      onClick={() => updateQuantity(1)}
                      disabled={product.isSoldOut}
                      className="p-3 hover:bg-brand-border transition-colors disabled:cursor-not-allowed"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button 
                    onClick={handleAddToCart}
                    disabled={product.isSoldOut}
                    className={`flex-grow py-4 px-8 text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all group ${
                      product.isSoldOut 
                        ? 'bg-brand-border text-brand-muted cursor-not-allowed' 
                        : 'bg-brand-red text-white hover:bg-brand-red/80'
                    }`}
                  >
                    <ShoppingCart className={`w-4 h-4 ${!product.isSoldOut && 'group-hover:scale-110'} transition-transform`} />
                    {product.isSoldOut ? 'Sold Out' : 'Add to Cart'}
                  </button>
                </div>
              </div>

              {/* Size Guide Overlay */}
              <AnimatePresence>
                {showSizeGuide && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-brand-bg flex items-center justify-center p-8"
                  >
                    <button 
                      onClick={() => setShowSizeGuide(false)}
                      className="absolute top-4 right-4 p-2 hover:bg-brand-red hover:text-white rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="w-full max-w-sm">
                      <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-6 border-b border-brand-border pb-2">SYNDICATE SIZE GUIDE</h3>
                      <table className="w-full text-[10px] font-bold tracking-widest uppercase">
                        <thead>
                          <tr className="border-b border-brand-border text-brand-muted">
                            <th className="py-2 text-left">SIZE</th>
                            <th className="py-2 text-left">CHEST</th>
                            <th className="py-2 text-left">LENGTH</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-border/30">
                          <tr><td className="py-3">S</td><td className="py-3">40"</td><td className="py-3">27"</td></tr>
                          <tr><td className="py-3">M</td><td className="py-3">42"</td><td className="py-3">28"</td></tr>
                          <tr><td className="py-3">L</td><td className="py-3">44"</td><td className="py-3">29"</td></tr>
                          <tr><td className="py-3">XL</td><td className="py-3">46"</td><td className="py-3">30"</td></tr>
                        </tbody>
                      </table>
                      <p className="mt-6 text-[9px] text-brand-muted italic uppercase leading-relaxed">
                        * Measurements are in inches. Standard urban fit. For an oversized look, size up.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
