import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-primary-light hover:bg-primary text-white shadow-[0_10px_20px_rgba(18,63,168,0.2)]',
    secondary: 'bg-transparent border border-primary-light text-primary-light hover:bg-primary-light/10',
    outline: 'bg-transparent border-[var(--border-color)] text-[var(--text-color)] hover:bg-primary/5',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
