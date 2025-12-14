import React from 'react';
import { Product } from '../types';
import { Globe, CheckCircle2, Circle, Star, ExternalLink } from 'lucide-react';

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
        border hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:-translate-y-1 h-full
        ${isSelected ? 'ring-2 ring-brand-bright border-transparent' : 'border-gray-200'}
      `}
    >
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-4 left-0 z-20 bg-brand-bright text-white text-[10px] font-bold px-2 py-1 rounded-r shadow-md flex items-center">
            <Star className="w-3 h-3 mr-1 fill-white" /> Featured
        </div>
      )}

      {/* Selection Overlay/Button */}
      <button 
        onClick={() => onToggle(product)}
        className="absolute top-4 right-4 z-20 p-1 rounded-full transition-colors bg-white/80 backdrop-blur-sm"
      >
        {isSelected ? (
          <CheckCircle2 className="w-6 h-6 text-brand-bright fill-brand-pale" />
        ) : (
          <Circle className="w-6 h-6 text-gray-300 hover:text-brand-bright" />
        )}
      </button>

      {/* Image / Header */}
      <div className="aspect-video w-full bg-slate-100 relative overflow-hidden">
        {product.screenshot ? (
            <img 
                src={product.screenshot} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                    // Fallback if image fails
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
            />
        ) : null}
        
        {/* Fallback pattern if no image or image error */}
        <div className={`absolute inset-0 bg-brand-pale/20 flex items-center justify-center ${product.screenshot ? 'hidden' : ''}`}>
            <span className="text-4xl font-bold text-brand-primary/20">{product.logoInitial}</span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        
        <div className="absolute bottom-4 left-4 right-4 text-white">
            <h4 className="font-bold text-lg leading-tight shadow-sm">{product.name}</h4>
            <div className="text-xs text-white/90 flex items-center mt-1">
                <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] uppercase tracking-wide">
                    {product.category}
                </span>
            </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed flex-1">
          {product.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
             <a 
              href={product.website} 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-medium text-brand-primary hover:text-brand-bright flex items-center transition-colors"
            >
              <Globe className="w-3 h-3 mr-1" />
              Visit Website <ExternalLink className="w-3 h-3 ml-1" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;