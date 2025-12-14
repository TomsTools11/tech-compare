import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CategoryDistributionChart from './components/MarketShareChart';
import ComparisonMatrix from './components/ComparisonMatrix';
import AIChat from './components/AIChat';
import { products } from './services/data';
import { Category, Product } from './types';
import { Layers, ChevronRight, BarChart3, ArrowUpRight } from 'lucide-react';

const categories: Category[] = [
  'Artificial Intelligence',
  'Design',
  'Productivity',
  'Finance',
  'Sales & Marketing',
  'Automation'
];

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('Artificial Intelligence');
  const [selectedProductIds, setSelectedProductIds] = useState<Set<string>>(new Set());
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);

  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  // Get full objects for selected products
  const comparisonList = useMemo(() => {
    return products.filter(p => selectedProductIds.has(p.id));
  }, [selectedProductIds]);

  // Handlers
  const toggleProductSelection = (product: Product) => {
    const newSet = new Set(selectedProductIds);
    if (newSet.has(product.id)) {
      newSet.delete(product.id);
    } else {
      if (newSet.size >= 4) {
        alert("You can only compare up to 4 products at a time.");
        return;
      }
      newSet.add(product.id);
    }
    setSelectedProductIds(newSet);
  };

  const removeFromComparison = (product: Product) => {
    const newSet = new Set(selectedProductIds);
    newSet.delete(product.id);
    setSelectedProductIds(newSet);
    if (newSet.size === 0) setIsMatrixOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-20">
        
        {/* Category Tabs */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2 mb-10 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap
                  ${activeCategory === cat 
                    ? 'bg-brand-primary text-white shadow-md' 
                    : 'text-brand-dark hover:bg-brand-pale/50'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">{activeCategory} Tools</h2>
                <p className="text-brand-primary text-sm mt-1">
                  Showing {filteredProducts.length} results
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSelected={selectedProductIds.has(product.id)}
                  onToggle={toggleProductSelection}
                />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                    <p className="text-gray-500">No tools found in this category yet.</p>
                </div>
            )}
          </div>

          {/* Sidebar / Stats */}
          <div className="lg:col-span-4 space-y-8">
            {/* Category Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-4 text-brand-dark">
                <BarChart3 className="w-5 h-5 text-brand-bright" />
                <h3 className="font-bold text-lg">Category Overview</h3>
              </div>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                The <span className="font-semibold text-brand-primary">{activeCategory}</span> landscape is rapidly evolving. 
                Explore the distribution of tools in our directory.
              </p>
              <CategoryDistributionChart data={products} />
            </div>

            {/* Quick Tips */}
            <div className="bg-brand-pale/30 rounded-xl border border-brand-pale p-6">
                <h3 className="font-bold text-brand-dark mb-3">Comparison Tips</h3>
                <ul className="space-y-3">
                    <li className="flex items-start text-sm text-brand-primary">
                        <ChevronRight className="w-4 h-4 mt-0.5 mr-2 text-brand-bright flex-shrink-0" />
                        Check integration compatibility with your current stack.
                    </li>
                    <li className="flex items-start text-sm text-brand-primary">
                        <ChevronRight className="w-4 h-4 mt-0.5 mr-2 text-brand-bright flex-shrink-0" />
                        Look for AI features that automate repetitive tasks.
                    </li>
                    <li className="flex items-start text-sm text-brand-primary">
                        <ChevronRight className="w-4 h-4 mt-0.5 mr-2 text-brand-bright flex-shrink-0" />
                        Prioritize tools with good documentation and support.
                    </li>
                </ul>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12 mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <span className="font-bold text-xl tracking-tight flex items-center gap-2">
                    <Layers className="text-brand-bright" /> Software Compare
                </span>
                <p className="text-sm text-brand-pale mt-2">Empowering teams with data-driven software decisions.</p>
            </div>
            <div className="text-sm text-brand-pale/60">
                &copy; 2025 Software Compare. All rights reserved.
            </div>
        </div>
      </footer>

      {/* Floating Comparison Bar */}
      {selectedProductIds.size > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-pale shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 transform transition-transform duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-brand-dark text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                {selectedProductIds.size}
              </div>
              <span className="text-brand-dark font-medium hidden sm:inline">
                Tools selected for comparison
              </span>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => setSelectedProductIds(new Set())}
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-brand-dark transition-colors"
              >
                Clear All
              </button>
              <button 
                onClick={() => setIsMatrixOpen(true)}
                className="bg-brand-bright hover:bg-brand-primary text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-brand-bright/20 transition-all flex items-center"
              >
                Compare Now <ArrowUpRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Comparison Matrix */}
      <ComparisonMatrix 
        products={comparisonList} 
        isOpen={isMatrixOpen} 
        onClose={() => setIsMatrixOpen(false)}
        onRemove={removeFromComparison}
      />

      {/* AI Chat Widget */}
      <AIChat 
        activeCategory={activeCategory} 
        selectedProducts={comparisonList} 
        allProducts={filteredProducts} 
      />
    </div>
  );
}

export default App;