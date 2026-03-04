import { Instagram, Twitter, Disc as Discord, CreditCard, Landmark, Wallet } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-red p-1.5 rounded-sm">
                <div className="w-5 h-5 border-2 border-brand-bg flex items-center justify-center">
                  <div className="w-2 h-2 bg-brand-bg rotate-45"></div>
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tighter italic">MUMBAI SYNDICATE</span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              Authentic streetwear born in the heart of Mumbai. Built for the Syndicate.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase mb-8">Customer Service</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-brand-muted hover:text-black transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-black transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase mb-8">Follow Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 text-sm text-brand-muted hover:text-black transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-sm text-brand-muted hover:text-black transition-colors">
                  <Twitter className="w-4 h-4" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-sm text-brand-muted hover:text-black transition-colors">
                  <Discord className="w-4 h-4" /> Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-brand-red uppercase mb-8">Newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-brand-border/30 border border-brand-border border-r-0 rounded-l-md px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="bg-brand-red border border-brand-red rounded-r-md px-4 py-2 hover:bg-brand-red/80 transition-colors">
                <Twitter className="w-4 h-4 rotate-90 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-brand-border">
          <p className="text-[10px] font-mono text-brand-muted uppercase tracking-widest">
            © 2024 MUMBAI SYNDICATE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 text-brand-muted">
            <Wallet className="w-5 h-5" />
            <CreditCard className="w-5 h-5" />
            <Landmark className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
