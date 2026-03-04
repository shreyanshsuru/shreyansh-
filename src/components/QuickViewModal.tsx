import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useToast } from '../ToastContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { showToast } = useToast();
  if (!product) return null;

  const handleAddToCart = () => {
    showToast(`${product.name} ADDED TO SYNDICATE CART`);
    // In a real app, we would also update the cart state here
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

              <div className="space-y-4 pt-4">
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
                  onClick={handleAddToCart}
                  className="w-full bg-brand-red text-white py-4 px-8 text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-brand-red/80 transition-all group"
                >
                  <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
