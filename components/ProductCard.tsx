import React from 'react';
import { Product } from '../types';
import { Building2, Globe, Users, DollarSign, CheckCircle2, Circle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onToggle: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isSelected, onToggle }) => {
  return (
    <div 
      className={`
        relative group flex flex-col bg-white rounded-xl overflow-hidden transition-all duration-300
        border hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:-translate-y-1
        ${isSelected ? 'ring-2 ring-brand-bright border-transparent' : 'border-gray-200'}
      `}
    >
      {/* Selection Overlay/Button */}
      <button 
        onClick={() => onToggle(product)}
        className="absolute top-4 right-4 z-10 p-1 rounded-full transition-colors"
      >
        {isSelected ? (
          <CheckCircle2 className="w-6 h-6 text-brand-bright fill-brand-pale" />
        ) : (
          <Circle className="w-6 h-6 text-gray-300 hover:text-brand-bright" />
        )}
      </button>

      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-brand-pale flex items-center justify-center text-brand-primary font-bold text-xl">
            {product.logoInitial}
          </div>
          <div>
            <h4 className="text-brand-dark font-bold text-lg leading-tight">{product.name}</h4>
            <a 
              href={`https://${product.website}`} 
              target="_blank" 
              rel="noreferrer"
              className="text-xs text-brand-bright hover:underline flex items-center mt-1"
            >
              <Globe className="w-3 h-3 mr-1" />
              {product.website}
            </a>
          </div>
        </div>
        
        <p className="text-brand-primary text-sm line-clamp-2 h-10 mb-4 opacity-80">
          {product.description}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-slate-50 p-2 rounded-lg">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                    <Users className="w-3 h-3 mr-1" /> Employees
                </div>
                <div className="font-semibold text-brand-dark text-sm">{product.employees}</div>
            </div>
            <div className="bg-slate-50 p-2 rounded-lg">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                    <DollarSign className="w-3 h-3 mr-1" /> Revenue
                </div>
                <div className="font-semibold text-brand-dark text-sm">{product.revenue}</div>
            </div>
        </div>
      </div>

      {/* Footer / Core Offering */}
      <div className="mt-auto bg-brand-pale/30 p-4 border-t border-brand-pale">
        <div className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-1">
          Core Offering
        </div>
        <div className="text-sm text-brand-dark font-medium">
          {product.coreOffering}
        </div>
      </div>

      {/* Market Share Indicator */}
      <div className="absolute bottom-4 right-4">
        <div 
          className="w-10 h-10 rounded-full border-2 border-brand-bright flex items-center justify-center text-[10px] font-bold text-brand-primary bg-white shadow-sm"
          title="Market Share"
        >
          {product.marketShare}%
        </div>
      </div>
    </div>
  );
};

export default ProductCard;