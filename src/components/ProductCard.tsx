import React, { useState } from 'react';
import { Product } from '../types';
import { motion } from 'motion/react';
import { Share2 } from 'lucide-react';
import QuickViewModal from './QuickViewModal';
import { useToast } from '../ToastContext';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showToast } = useToast();

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareData = {
      title: `Mumbai Syndicate - ${product.name}`,
      text: product.description,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('LINK COPIED TO SYNDICATE CLIPBOARD');
    }
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group cursor-pointer relative"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-border rounded-sm mb-4">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-brand-red text-white text-[10px] font-bold tracking-widest px-2 py-1 rounded-sm">
              {product.drop}
            </span>
            {product.originalPrice && (
              <span className="bg-black text-white text-[10px] font-bold tracking-widest px-2 py-1 rounded-sm">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          <button 
            onClick={handleShare}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm hover:bg-brand-red hover:text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0"
            title="Share Product"
          >
            <Share2 className="w-4 h-4" />
          </button>
          
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-brand-bg/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-black text-white text-[10px] font-bold tracking-[0.2em] px-6 py-3 uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              Quick View
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-[13px] font-extrabold tracking-tight group-hover:text-brand-red transition-colors uppercase leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-brand-red font-mono text-[13px] font-bold">
              ₹{product.price.toLocaleString()}
            </p>
            {product.originalPrice && (
              <p className="text-brand-muted font-mono text-[11px] line-through">
                ₹{product.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <QuickViewModal 
          product={product} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}
