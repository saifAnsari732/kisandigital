import { motion } from 'framer-motion';



const brands = [
{
    name: 'Sri Shyam Foundation',
    image: '/sre.png',
  },
  {
    name: 'Tejomarg',
    image: '/3.png',
  },

  {
    name: 'KisanChoice',
    image: '/4.png',
  },
  {
    name: 'News 24',
    image: '/2.png',
  },

  

];
const Brands = () => {
  return (
    <section className="py-20 bg-bg-color relative z-10 overflow-hidden border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] font-black opacity-100">Our Trusted Partnerships</p>
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
      className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-500 cursor-default select-none group/item"
    >
      <div className="w-16 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center p-2 shadow-lg">
        <img
          src={brand.image}
          alt={brand.name}
          className="w-full h-full object-contain group-hover/item:scale-110 transition-transform duration-500"
        />
      </div>

      <span className="text-3xl font-black font-heading italic uppercase tracking-tight text-primary-light">
        {brand.name}
      </span>
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


