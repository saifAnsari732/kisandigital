import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { faqs } from '../data/content';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className={`mb-4 rounded-2xl border transition-all duration-300 ${isOpen ? 'glass border-primary-light/30' : 'glass border-[var(--border-color)]'}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-bold">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary-light text-white' : 'glass border border-[var(--border-color)] opacity-60'}`}>
          {isOpen ? <HiMinus /> : <HiPlus />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 opacity-60 leading-relaxed border-t border-[var(--border-color)]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Got Questions?</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
