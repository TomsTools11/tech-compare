import React, { useState } from 'react';
import { Shield, Menu, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark text-white border-b border-white/10 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Shield className="h-8 w-8 text-brand-bright" />
            <span className="font-bold text-xl tracking-tight">InsurTech Compare</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="hover:text-brand-bright transition-colors px-3 py-2 rounded-md text-sm font-medium">Categories</a>
              <a href="#" className="hover:text-brand-bright transition-colors px-3 py-2 rounded-md text-sm font-medium">Reviews</a>
              <a href="#" className="hover:text-brand-bright transition-colors px-3 py-2 rounded-md text-sm font-medium">Research</a>
              <button className="bg-brand-bright hover:bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-lg shadow-brand-bright/20">
                Get Listed
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-primary">Categories</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-primary">Reviews</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-primary">Research</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;