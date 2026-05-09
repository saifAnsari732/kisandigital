import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
      className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center pointer-events-none"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold flex items-center gap-3 mb-4"
        >
          <span className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(16,185,129,0.5)]">K</span>
          <span className="tracking-tighter text-accent">Kisan <span className="text-primary">Digital</span></span>
       {/* <img src="/10.webp"  alt="" /> */}
        </motion.div>
        
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full bg-primary"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
