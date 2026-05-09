import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { pricing } from '../data/content';
import Button from './UI/Button';

const categories = ['Web Packages', 'Google Ads', 'Social Media', 'SEO', 'Google Listing'];

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('Web Packages');

  const filteredPricing = pricing.filter(plan => plan.category === activeCategory);

  const handlePricingAction = (plan) => {
    const message = `Hi Kisan Digital, I'm interested in the ${plan.name} plan (${plan.price}) under ${plan.category}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919905234866?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="pricing" className="py-32 bg-bg-color relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] font-black opacity-40 mb-4 block"
          >
            Pricing Strategy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black tracking-tighter mb-12"
          >
            CHOOSE YOUR <span className="text-primary-light italic">PLAN</span>
          </motion.h2>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[15px] font-black uppercase tracking-widest transition-all duration-500 border ${
                  activeCategory === cat 
                  ? 'bg-primary-light border-primary-light text-white shadow-2xl shadow-primary/30 scale-105' 
                  : 'glass opacity-70 hover:opacity-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredPricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative p-10 lg:p-12 rounded-[3.5rem] border transition-all duration-500 flex flex-col ${
                  plan.isPopular 
                  ? 'bg-primary/5 border-primary-light shadow-[0_40px_100px_rgba(18,63,168,0.15)] z-10' 
                  : 'glass border-[var(--border-color)] hover:border-primary-light/30'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary-light text-white text-[10px] font-black rounded-full uppercase tracking-[0.3em] shadow-xl">
                    Most Popular
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-2xl font-black mb-2 tracking-tight uppercase">{plan.name}</h3>
                  <p className="opacity-30 text-[10px] font-black uppercase tracking-widest">{plan.description}</p>
                </div>
                
                <div className="mb-10 border-b border-[var(--border-color)] pb-10">
                  <span className="text-6xl font-black tracking-tighter text-primary-light">{plan.price}</span>
                  <span className="opacity-30 text-sm ml-2 font-black uppercase tracking-widest">/ Project</span>
                </div>

                <div className="space-y-2 mb-12 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className="w-5 h-5 rounded-full bg-primary-light/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary-light/20 transition-colors">
                        <HiCheckCircle className="text-primary-light text-sm" />
                      </div>
                      <span className="text-md font-bold opacity-90 group-hover/item:opacity-100 transition-opacity tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.isPopular ? 'primary' : 'outline'} 
                  className={`w-full py-5 text-[15px] uppercase tracking-[0.3em] font-black rounded-2xl ${plan.isPopular ? 'shadow-2xl shadow-primary/20 hover:scale-[1.02]' : 'hover:bg-primary/10'}`}
                  onClick={() => handlePricingAction(plan)}
                >
                  Select Plan
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Helper text */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20 opacity-30 text-[10px] font-black uppercase tracking-[0.4em]"
        >
          * Pricing may vary based on specific requirements and project scope.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;



