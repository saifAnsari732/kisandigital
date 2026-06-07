import { motion } from 'framer-motion';

const TechShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-color border-t border-[var(--border-color)]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Left Side: Text Content */}
          <div className="text-left order-2 lg:order-1">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary-light mb-6 flex items-center gap-3">
               Engineering Excellence
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text-color)] tracking-tight mb-6 leading-[1.1]">
              Next-Gen <br className="hidden md:block" />
              <span className="text-gradient">Tech Infrastructure</span>
            </h2>
            <p className="opacity-80 text-[var(--text-color)] text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              A stunning digital campaign deserves a matching high-performance interface. We code lightning-fast web architectures designed to engage, convert, and retain. Every build is lightweight, SEO-friendly, and mobile-optimized.
            </p>
            
            {/* Mini Stats Row */}
            <div className="flex flex-wrap items-center gap-8 md:gap-12 pt-8 border-t border-[var(--border-color)]">
              <div>
                <div className="text-4xl font-black text-[var(--text-color)] flex items-baseline">
                  100<span className="text-xl text-primary-light ml-1">%</span>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mt-2">Responsive</div>
              </div>
              <div className="w-px h-12 bg-[var(--border-color)] hidden sm:block"></div>
              <div>
                <div className="text-4xl font-black text-[var(--text-color)] flex items-baseline">
                  &lt; 1<span className="text-xl text-primary-light ml-1">s</span>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mt-2">Load Time</div>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Asset */}
          <div className="order-1 lg:order-2 relative group" style={{ perspective: '1000px' }}>
            {/* Decorative background blur */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2.5rem] opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700"></div>
            
            {/* Image Container with 3D Tilt Effect */}
            <div className="relative w-full rounded-[2.5rem] overflow-hidden glass border border-[var(--border-color)] p-2 md:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out transform group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <img 
                src="/tech_growth.png" 
                alt="Technology and Growth" 
                className="w-full h-auto object-contain rounded-[2rem] relative z-0"
              />
            </div>

            {/* Floating Element Overlap */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-10 rounded-2xl glass border border-[var(--border-color)] p-4 shadow-2xl z-20 animate-float hidden sm:flex items-center gap-4 bg-[var(--card-bg)]"
            >
              <div className="relative w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full relative shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--text-color)]">System Status</div>
                <div className="text-xs opacity-60 text-[var(--text-color)]">All nodes operational</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechShowcase;
