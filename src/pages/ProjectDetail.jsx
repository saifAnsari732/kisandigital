import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiCheckCircle, HiExternalLink } from 'react-icons/hi';
import { portfolio } from '../data/content';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolio.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-6xl font-black mb-8">Project Not Found</h1>
          <Link to="/" className="text-primary-light font-black uppercase tracking-widest hover:tracking-[0.2em] transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-color pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/#portfolio" className="inline-flex items-center gap-3 text-primary-light font-black uppercase tracking-widest text-xs hover:gap-5 transition-all">
            <HiArrowLeft className="text-xl" /> Back to Portfolio
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-primary-light font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
              {project.category}
            </span>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-10 leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-xl lg:text-2xl opacity-60 leading-relaxed mb-12">
              {project.description}
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <HiCheckCircle className="text-primary-light text-2xl flex-shrink-0" />
                <span className="font-bold opacity-80">Strategic Growth Planning</span>
              </div>
              <div className="flex items-center gap-4">
                <HiCheckCircle className="text-primary-light text-2xl flex-shrink-0" />
                <span className="font-bold opacity-80">Premium UI/UX Implementation</span>
              </div>
              <div className="flex items-center gap-4">
                <HiCheckCircle className="text-primary-light text-2xl flex-shrink-0" />
                <span className="font-bold opacity-80">Data-Driven Optimization</span>
              </div>
            </div>

            {/* <div className="flex flex-wrap gap-6 "> */}
              <Link to="/contact" className="px-10 py-5 cursor-pointer text-white bg-accent rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors ">
                Start a Project
              </Link>
            {/* </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-[4rem] overflow-hidden shadow-2xl border border-white/5"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Placeholder for more content */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-12 rounded-[3rem] border border-white/5"
            >
              <h3 className="text-4xl font-black mb-4 text-primary-light">0{i}</h3>
              <h4 className="text-xl font-bold mb-4 tracking-tight">Phase Goal</h4>
              <p className="opacity-50 text-sm leading-relaxed">
                Detailed breakdown of the project phase, focusing on performance, scalability, and user engagement metrics.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
