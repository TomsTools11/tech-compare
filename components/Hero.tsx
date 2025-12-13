import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

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
              Compare the Best <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-bright">
                Insurance Software
              </span>
            </h1>
            <p className="text-lg text-brand-pale mb-8 max-w-lg leading-relaxed">
              Navigate the complex landscape of InsurTech. unbiased data on Lead Gen, CRM, and Sales Enablement tools to help you grow your book of business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-bright hover:bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-bright/25 flex items-center justify-center">
                Start Comparing <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-transparent border border-brand-pale text-brand-pale hover:bg-brand-pale hover:text-brand-dark font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                View Methodology
              </button>
            </div>
          </div>
          
          <div className="relative">
             <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-center space-x-2">
                        <BarChart2 className="text-brand-sky w-6 h-6" />
                        <span className="text-white font-mono text-sm">Market_Analysis_v1.0</span>
                    </div>
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                </div>
                {/* Decorative mock graph lines */}
                <div className="space-y-4">
                    <div className="h-2 bg-white/10 rounded w-3/4"></div>
                    <div className="h-2 bg-brand-bright/50 rounded w-1/2"></div>
                    <div className="h-2 bg-white/10 rounded w-full"></div>
                    <div className="h-2 bg-brand-sky/50 rounded w-2/3"></div>
                </div>
                <div className="mt-8 flex justify-between items-end h-32 space-x-2">
                    <div className="w-full bg-brand-primary/40 rounded-t h-[40%]"></div>
                    <div className="w-full bg-brand-primary/60 rounded-t h-[60%]"></div>
                    <div className="w-full bg-brand-bright rounded-t h-[80%] relative group">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-brand-dark text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Top Choice
                        </div>
                    </div>
                    <div className="w-full bg-brand-primary/40 rounded-t h-[50%]"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;