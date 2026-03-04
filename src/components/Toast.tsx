import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-8 left-1/2 z-[200] flex items-center gap-3 bg-brand-bg border border-brand-red px-6 py-4 rounded-sm shadow-2xl min-w-[300px]"
        >
          <CheckCircle2 className="w-5 h-5 text-brand-red" />
          <span className="text-xs font-bold tracking-widest uppercase flex-grow">
            {message}
          </span>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-brand-border rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-brand-muted" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
