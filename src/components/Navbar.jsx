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

  const getNavbarBg = () => {
    if (isDarkMode) {
      if (isOpen) {
        return 'bg-dark-bg border-b border-white/5';
      }
      if (isScrolled) {
        return 'bg-dark-bg/90 backdrop-blur-xl shadow-2xl border-b border-white/5';
      }
      return 'bg-transparent';
    } else {
      // Light Mode - Pure White, No Blue transparency bleeding
      if (isOpen) {
        return 'bg-white border-b border-gray-100 text-gray-900';
      }
      if (isScrolled) {
        return 'bg-white border-b border-gray-100 shadow-md text-gray-900';
      }
      // Top mobile must be solid white or slightly translucent (not transparent) to avoid mesh gradient overlay
      return 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 lg:bg-transparent lg:shadow-none lg:border-none text-gray-900';
    }
  };

  const getPadding = () => {
    if (isDarkMode) {
      if (isOpen) return 'py-4';
      if (isScrolled) return 'py-4';
      return 'py-6';
    } else {
      if (isOpen) return 'py-4';
      if (isScrolled) return 'py-4';
      return 'py-4 lg:py-6';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 flex flex-col ${getNavbarBg()}`}>
      {/* Marquee Banner */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-blue-800 text-white text-[10px] sm:text-xs py-2 marquee-container border-b border-white/10">
        <div className="marquee-content font-bold tracking-[0.2em] uppercase">
          {[...Array(4)].flatMap((_, i) => 
            ["Website Development", "App Development", "WordPress Development", "E-Commerce Website", "Product Listing", "Digital Marketing", "Social Media Ads", "SEO Optimization", "Graphic Design"].map((service, j) => (
              <span key={`${i}-${j}`} className="mx-6 flex items-center gap-6 whitespace-nowrap">
                {service}
                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
              </span>
            ))
          )}
        </div>
      </div>

      <div className={`w-full transition-all duration-500 ${getPadding()}`}>
        <div className="container mx-auto h-8 lg:h-15 px-6 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="flex items-center">
            {!isDarkMode && (
              <img 
                src="/10.webp" 
                className="w-[140px] sm:w-[160px] lg:w-[240px] h-auto object-contain" 
                alt="Kisan Digital Logo" 
              />
            )}
            {isDarkMode && (
              <img 
                src="/12.png" 
                className="w-[140px] sm:w-[160px] lg:w-[240px] h-auto object-contain" 
                alt="Kisan Digital Logo" 
              />
            )}
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={`/${item.href}`}
                className={`text-[15px] uppercase tracking-widest font-semibold transition-all relative group ${
                  isDarkMode ? 'text-white hover:text-primary-light' : 'text-gray-800 hover:text-primary-light'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-primary-light transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-12 h-12 cursor-pointer rounded-full flex items-center justify-center glass hover:bg-primary/10 transition-colors border border-[var(--border-color)]"
            >
              {isDarkMode ? <HiSun className="text-primary-light text-2xl" /> : <HiMoon className="text-primary-light text-2xl" />}
            </button>

            <Button onClick={() => window.location.href = "#pricing"} variant="primary" className="font-bold">
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
            {isDarkMode ? <HiSun className="text-primary-light text-xl" /> : <HiMoon className="text-primary-light text-xl" />}
          </button>
          <button
            className={`text-2xl p-1 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t overflow-hidden ${
              isDarkMode 
                ? 'bg-dark-bg/95 backdrop-blur-2xl border-white/5' 
                : 'bg-white border-gray-100 shadow-xl'
            }`}
          >
            <div className="flex flex-col p-6 gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={`/${item.href}`}
                  className={`text-lg font-bold uppercase tracking-widest transition-colors py-2 ${
                    isDarkMode 
                      ? 'text-white hover:text-primary-light' 
                      : 'text-gray-800 hover:text-primary-light'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button onClick={() => { setIsOpen(false); window.location.href = "#pricing"; }} className="w-full py-3.5 text-base mt-2">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


