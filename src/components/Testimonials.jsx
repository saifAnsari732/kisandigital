import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { testimonials } from '../data/content';

const DRAG_BUFFER = 50;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const dragX = useMotionValue(0);

  const next = () => {
    setIndex((pv) => (pv + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((pv) => (pv - 1 + testimonials.length) % testimonials.length);
  };

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      next();
    } else if (x >= DRAG_BUFFER) {
      prev();
    }
  };

  return (
    <section className="py-32 bg-bg-color overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] font-black text-primary-light mb-4 block"
            >
              Client Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black tracking-tighter"
            >
              Real Results from <br /> <span className="text-primary-light italic font-serif">Real</span> Businesses
            </motion.h2>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl glass border border-[var(--border-color)] flex items-center justify-center text-xl hover:bg-primary-light hover:text-black transition-all"
            >
              <HiChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-xl glass border border-[var(--border-color)] flex items-center justify-center text-xl hover:bg-primary-light hover:text-black transition-all"
            >
              <HiChevronRight />
            </button>
          </div>
        </div>

        <div className="relative cursor-grab active:cursor-grabbing overflow-hidden rounded-[2rem]">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: dragX }}
            animate={{ 
              x: `-${index * (100 / (window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1))}%` 
            }}
            onDragEnd={onDragEnd}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-6"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] glass p-10 lg:p-12 rounded-3xl border border-[var(--border-color)] hover:border-primary-light/30 transition-all duration-500 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex gap-1 text-primary-light mb-10 text-xl">
                    {[...Array(testimonial.stars)].map((_, starIndex) => <HiStar key={starIndex} />)}
                  </div>
                  <p className="text-lg lg:text-xl font-medium leading-relaxed mb-12 opacity-80 italic font-medium">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-5 pt-8 border-t border-[var(--border-color)]">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-light/20 shadow-xl">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-[11px] font-medium opacity-40">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Minimal Progress Line */}
        <div className="mt-20 flex justify-center">
          <div className="h-[2px] w-48 bg-[var(--border-color)] rounded-full overflow-hidden relative">
            <motion.div
              animate={{ width: `${((index + 1) / testimonials.length) * 100}%` }}
              className="absolute top-0 left-0 h-full bg-primary-light"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;





