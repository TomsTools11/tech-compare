import React from 'react';
import { Product } from '../types';
import { X, Check } from 'lucide-react';

interface ComparisonMatrixProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (product: Product) => void;
}

const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ products, isOpen, onClose, onRemove }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      {/* Panel */}
      <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-5xl bg-white shadow-2xl flex flex-col h-full transform transition-transform">
          
          {/* Header */}
          <div className="px-6 py-4 bg-brand-dark text-white flex items-center justify-between shadow-md z-10">
            <h2 className="text-xl font-bold flex items-center">
              <span className="bg-brand-bright text-white text-xs px-2 py-1 rounded mr-3">
                {products.length} Selected
              </span>
              Compare Products
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Matrix Content */}
          <div className="flex-1 overflow-auto p-6 bg-slate-50">
            {products.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500">
                <p>No products selected for comparison.</p>
                <button onClick={onClose} className="mt-4 text-brand-bright hover:underline">
                  Go back to select products
                </button>
              </div>
            ) : (
              <div className="inline-block min-w-full align-middle">
                <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-brand-pale/40">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-brand-primary uppercase tracking-wider w-40 sticky left-0 bg-white z-20 border-r">
                          Feature
                        </th>
                        {products.map(product => (
                          <th key={product.id} scope="col" className="px-6 py-4 text-left relative min-w-[240px]">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-lg font-bold text-brand-dark">{product.name}</div>
                                <a href={`https://${product.website}`} target="_blank" rel="noreferrer" className="text-brand-bright text-xs hover:underline">
                                  {product.website}
                                </a>
                              </div>
                              <button 
                                onClick={() => onRemove(product)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      
                      {/* Row: Category */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-primary sticky left-0 bg-white border-r">
                          Category
                        </td>
                        {products.map(product => (
                          <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {product.category}
                          </td>
                        ))}
                      </tr>

                      {/* Row: Market Share */}
                      <tr className="bg-slate-50/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-primary sticky left-0 bg-slate-50 border-r">
                          Market Share
                        </td>
                        {products.map(product => (
                          <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2 max-w-[100px]">
                                    <div className="bg-brand-bright h-2.5 rounded-full" style={{ width: `${product.marketShare}%` }}></div>
                                </div>
                                <span className="font-bold">{product.marketShare}%</span>
                            </div>
                          </td>
                        ))}
                      </tr>

                       {/* Row: Employees */}
                       <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-primary sticky left-0 bg-white border-r">
                          Employees
                        </td>
                        {products.map(product => (
                          <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {product.employees}
                          </td>
                        ))}
                      </tr>

                      {/* Row: Revenue */}
                      <tr className="bg-slate-50/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-primary sticky left-0 bg-slate-50 border-r">
                          Est. Revenue
                        </td>
                        {products.map(product => (
                          <td key={product.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {product.revenue}
                          </td>
                        ))}
                      </tr>

                      {/* Row: Core Product */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-primary sticky left-0 bg-white border-r">
                          Core Offering
                        </td>
                        {products.map(product => (
                          <td key={product.id} className="px-6 py-4 text-sm text-gray-700">
                            {product.coreOffering}
                          </td>
                        ))}
                      </tr>

                       {/* Row: Description */}
                       <tr className="bg-slate-50/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-primary sticky left-0 bg-slate-50 border-r">
                          Summary
                        </td>
                        {products.map(product => (
                          <td key={product.id} className="px-6 py-4 text-sm text-gray-600 italic">
                            "{product.description}"
                          </td>
                        ))}
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonMatrix;