import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiX } from 'react-icons/hi';
import { portfolio } from '../data/content';

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] font-black opacity-40 mb-4 block"
            >
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-8xl font-black tracking-tighter"
            >
              Crafting Digital <br /> <span className="text-primary-light italic">Excellence</span>
            </motion.h2>
          </div>
        
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {portfolio.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group relative rounded-[3rem] overflow-hidden cursor-pointer bg-white/5 border border-white/5 shadow-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-bg-color via-bg-color/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-10 lg:p-14 w-full">
                <div className="overflow-hidden">
                  <p className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </p>
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-3xl lg:text-4xl font-black tracking-tight text-white mb-6 transform translate-y- group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <span className="px-8 py-3 bg-white text-bg-color rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl">
                    View Case Study
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


