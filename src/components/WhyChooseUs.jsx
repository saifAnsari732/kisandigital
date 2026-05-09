import { motion } from 'framer-motion';
import { stats } from '../data/content';

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-bg-color relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] font-black opacity-40 mb-6 block"
            >
              The Kisan Edge
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black tracking-tighter mb-10"
            >
              We Build Growth <br /> <span className="text-primary-light italic">Engines</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/60 mb-16 text-xl leading-relaxed max-w-xl"
            >
              Our approach combines data-driven marketing with cutting-edge technology. 
              We don't just deliver clicks; we deliver customers and ROI.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <h4 className="text-5xl lg:text-6xl font-black text-primary-light mb-4 tracking-tighter group-hover:scale-110 transition-transform origin-left">
                    {stat.value}
                  </h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-30 group-hover:opacity-100 transition-opacity">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                alt="Team Workshop" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
            </div>
            
            {/* Immersive Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-12 -right-12 bg-white text-bg-color p-12 rounded-[3rem] shadow-2xl z-10 hidden md:block"
            >
              <span className="block text-5xl font-black tracking-tighter">#1</span>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Digital Partner</span>
            </motion.div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

