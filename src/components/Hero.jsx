import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Button from './UI/Button';
import { Link } from 'react-router-dom';

const brands = [
  'KisanChoice', 'Tejomarg', 'Anadiwan', 'Vaibhav', 'Aarohi', 'KisanKart', 'Shreeji'
];

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919905234866?text=Hi, I want to grow my business with Kisan Digital!", "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center dynamic-mesh pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border-[var(--border-color)] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-black opacity-80">Top Rated Digital Agency in Lucknow</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[100px] font-black leading-[1.1] tracking-tighter mb-10 hero-text-shadow px-4"
          >
            Scale Your Brand with <br />
            <span className="text-brand-gradient">Premium Digital Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl opacity-60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Customer nahi aa rahe? Hum laake denge. <br />
            Data-driven strategies for high-quality leads and sales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-20"
          >
            <Link to="/contact" className="px-10 py-5 border-2 border-[var(--border-color)] text-lg uppercase tracking-widest font-black rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 transition-all">
              Get Started Now
            </Link>
            <button 
              onClick={handleWhatsApp}
              className="flex items-center gap-3 cursor-pointer px-10 py-5 text-lg uppercase tracking-widest font-black bg-[#123FA8] text-white rounded-2xl hoverbg-[#2B67C7] transition-all shadow-2xl border border-white/10"
            >
              <FaWhatsapp className="text-2xl text-green-500" />
              WhatsApp
            </button>
          </motion.div>

          {/* Subtle Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-10 border-t border-[var(--border-color)]"
          >
            <p className="text-[13px] uppercase tracking-[0.5em] font-bold opacity-100 mb-8">Trusted By Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-30">
              {brands.map((brand) => (
                <span key={brand} className="text-xl text-[#123FA8] italic opacity-100 tracking-tighter hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Professional Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 border border-[var(--border-color)] rounded-full -translate-x-1/2 opacity-20" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 border border-[var(--border-color)] rounded-full translate-x-1/2 opacity-20 animate-slow-spin" />
    </section>
  );
};

export default Hero;


