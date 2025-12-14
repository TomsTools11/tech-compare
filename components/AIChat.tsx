import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Sparkles, Loader2 } from 'lucide-react';
import { Product, Category } from '../types';

interface AIChatProps {
  activeCategory: Category;
  selectedProducts: Product[];
  allProducts: Product[];
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChat: React.FC<AIChatProps> = ({ activeCategory, selectedProducts, allProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hi! I'm your Software Consultant. I can help you find the best ${activeCategory} tools for your workflow.` }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Update intro context when category changes if chat hasn't started deeply
  useEffect(() => {
    if (messages.length <= 1) {
        setMessages([{ role: 'model', text: `Hi! I'm your Software Consultant. I can help you find the best ${activeCategory} tools for your workflow.` }]);
    }
  }, [activeCategory]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Build context
      const categoryProducts = allProducts.filter(p => p.category === activeCategory);
      
      const contextData = {
        category: activeCategory,
        selectedProducts: selectedProducts.map(p => ({ 
            name: p.name, 
            desc: p.description,
            website: p.website
        })),
        availableTopProducts: categoryProducts.slice(0, 10).map(p => p.name),
      };

      const systemPrompt = `You are an expert Software Consultant using the 'gemini-2.5-flash' model.
      
      Current User Context:
      - Category Viewing: ${activeCategory}
      - Selected for Comparison: ${selectedProducts.length > 0 ? selectedProducts.map(p => p.name).join(', ') : 'None'}
      - Context Data: ${JSON.stringify(contextData)}

      Instructions:
      - Provide concise, professional advice suitable for business owners, developers, or marketers.
      - If products are selected, compare them based on their description and general knowledge of the software.
      - If asking for a recommendation, suggest from the available top products in the category or well-known alternatives.
      - Keep responses under 150 words.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMessage,
        config: {
          systemInstruction: systemPrompt
        }
      });

      const text = response.text || "I couldn't generate a response at this moment.";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the AI service. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-bright hover:bg-brand-primary'
        }`}
        title="AI Consultant"
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <Sparkles className="text-white w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden origin-bottom-right transition-all animation-fade-in" style={{ maxHeight: 'calc(100vh - 140px)', height: '550px' }}>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-dark to-brand-primary p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                <MessageSquare className="w-5 h-5 text-brand-sky" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide">Software Advisor</h3>
                <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    <p className="text-[10px] text-brand-pale opacity-90 uppercase tracking-wider">Online • Gemini 2.5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-bright text-white rounded-tr-sm' 
                      : 'bg-white border border-gray-100 text-brand-dark rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center space-x-3">
                  <Loader2 className="w-4 h-4 text-brand-bright animate-spin" />
                  <span className="text-xs font-medium text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 shrink-0">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="relative flex items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for a recommendation..."
                className="w-full bg-gray-100 text-brand-dark placeholder-gray-400 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-bright/50 focus:bg-white transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-2 bg-brand-bright hover:bg-brand-primary disabled:opacity-50 disabled:hover:bg-brand-bright text-white rounded-lg transition-colors shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;