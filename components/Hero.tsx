import React from 'react';
import { ArrowRight, BarChart2, Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-dark overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-brand-primary blur-3xl filter mix-blend-screen animate-pulse"></div>
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-brand-bright blur-3xl filter mix-blend-screen opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Discover the Best <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-bright">
                Software Tools
              </span>
            </h1>
            <p className="text-lg text-brand-pale mb-8 max-w-lg leading-relaxed">
              The comprehensive directory for AI, Productivity, Marketing, and Design software. Compare features and find the perfect tool stack for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-bright hover:bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-bright/25 flex items-center justify-center">
                Explore Directory <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <div className="relative">
                  <input type="text" placeholder="Search for tools..." className="bg-white/10 border border-brand-pale/30 text-white placeholder-brand-pale/50 rounded-lg py-3 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                  <Search className="absolute left-3 top-3.5 w-5 h-5 text-brand-pale/50" />
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
             <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-center space-x-2">
                        <BarChart2 className="text-brand-sky w-6 h-6" />
                        <span className="text-white font-mono text-sm">Tech_Stack_Analysis</span>
                    </div>
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                </div>
                {/* Decorative mock graph lines */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between text-brand-pale text-xs font-mono">
                        <span>AI Tools</span>
                        <span>+124%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded w-full overflow-hidden">
                        <div className="h-full bg-brand-bright w-[85%] animate-pulse"></div>
                    </div>
                     <div className="flex items-center justify-between text-brand-pale text-xs font-mono mt-2">
                        <span>Productivity</span>
                        <span>+45%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded w-full overflow-hidden">
                        <div className="h-full bg-brand-sky w-[60%]"></div>
                    </div>
                </div>
                
                <div className="mt-8 grid grid-cols-3 gap-2">
                    <div className="bg-white/10 h-20 rounded animate-pulse"></div>
                    <div className="bg-brand-primary/40 h-20 rounded"></div>
                    <div className="bg-white/10 h-20 rounded"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;