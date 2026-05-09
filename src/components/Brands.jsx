import { motion } from 'framer-motion';
import { SiShopify } from 'react-icons/si';
import {
  FaHome,
  FaSchool,
  FaBullhorn,
  FaStore,
  FaSpa,
  FaDumbbell,
  FaClinicMedical,
  FaPaw,
  FaSearch,
  FaLaptopCode,
  FaShareAlt,
  FaUsers
} from 'react-icons/fa';

const brands = [
  { name: 'Real Estate', icon: FaHome },
  { name: 'School Ads', icon: FaSchool },
  { name: 'Marketing', icon: FaBullhorn },
  { name: 'Local Business', icon: FaStore },
  { name: 'Spa Clients', icon: FaSpa },
  { name: 'Gym Clients', icon: FaDumbbell },
  { name: 'Clinics', icon: FaClinicMedical },
  { name: 'Pet shop', icon: FaPaw },
  { name: 'SEO Services', icon: FaSearch },
  { name: 'Web Design', icon: FaLaptopCode },
  { name: 'Social Media', icon: FaShareAlt },
  { name: 'E-commerce', icon: SiShopify },
  { name: 'Lead Generation', icon: FaUsers },
];
const Brands = () => {
  return (
    <section className="py-20 bg-bg-color relative z-10 overflow-hidden border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] font-black opacity-100">Global Partnerships</p>
      </div>
      
      <div className="flex overflow-hidden relative group">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-24 items-center whitespace-nowrap px-12"
        >
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-4xl  font-black opacity-60 hover:opacity-100 text-primary-light transition-all duration-500 cursor-default select-none group/item"
            >
              <brand.icon className="text-5xl group-hover/item:scale-110 transition-transform" />
              <span className="font-heading italic uppercase tracking-tighter">{brand.name}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-bg-color to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-bg-color to-transparent z-20" />
      </div>
    </section>
  );
};

export default Brands;


