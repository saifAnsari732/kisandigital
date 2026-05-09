import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { navigation } from '../data/content';
import Button from './UI/Button';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 z-50 ${
        isScrolled ? 'py-3 bg-bg-color/80 backdrop-blur-xl shadow-2xl border-b border-[var(--border-color)]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative">
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-all duration-500 border border-white/10">
              <span className="text-2xl font-black italic">K</span>
            </div>
            <div className="absolute -inset-2 bg-primary/25 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight font-heading leading-tight">
              Kisan<span className="text-primary-light">Digital</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-primary-light/80">
              Digital Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={`/${item.href}`}
                className="text-[15px] uppercase tracking-widest font-semibold opacity-100 hover:opacity-100 hover:text-primary-light transition-all relative group"
              >
                {item.name}
                <span className="absolute text-black -bottom-1 left-0 w-0 h-[5px] bg-primary-light transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
          
          <div className="h-6 w-[1px] bg-[var(--border-color)] mx-2" />

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 rounded-full flex items-center justify-center glass hover:bg-primary/10 transition-colors border border-[var(--border-color)]"
            >
              {isDarkMode ? <HiSun className="text-primary-light text-2xl" /> : <HiMoon className="text-primary-light text-2xl" />}
            </button>

            <Button onClick={() => window.location.href = "#pricing"}  variant="primary" className="px-6 py-2.5 text-lg uppercase tracking-wider font-bold rounded-full">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 rounded-full flex items-center justify-center glass border border-[var(--border-color)]"
          >
            {isDarkMode ? <HiSun className="text-primary-light text-2xl" /> : <HiMoon className="text-primary-light text-2xl" />}
          </button>
          <button
            className="text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-color/95 backdrop-blur-2xl border-t border-[var(--border-color)] overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={`/${item.href}`}
                  className="text-xl font-bold uppercase tracking-widest hover:text-primary-light transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full py-4 text-lg">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


