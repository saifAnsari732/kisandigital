import { motion } from 'framer-motion';
import { process } from '../data/content';

const Process = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Workflow</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            How We Get <span className="text-gradient">Results</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 -z-10" />

          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-3xl glass border border-[var(--border-color)] text-center group"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="opacity-60 text-sm leading-relaxed group-hover:opacity-100 transition-colors">
                {item.description}
              </p>
              
              {/* Decorative Number background */}
              <span className="absolute -top-4 -right-4 text-5xl font-black opacity-10 pointer-events-none group-hover:text-primary-light/10 transition-colors">
                {item.step}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
