import { motion } from "framer-motion";
import {
  HiGlobeAlt,
  HiSearch,
  HiTrendingUp,
  HiSpeakerphone,
  HiCollection,
  HiColorSwatch,
  HiUserGroup,
  HiPhotograph,
  HiArrowRight,
} from "react-icons/hi";
import { services } from "../data/content";

const iconMap = {
  web: <HiGlobeAlt />,
  HiGlobeAlt: "bg-blue-500",
  seo: <HiSearch />,
  HiSearch: "bg-green-500",
  ads: <HiTrendingUp />,
  HiTrendingUp: "bg-purple-500",
  meta: <HiSpeakerphone />,
  HiSpeakerphone: "bg-lime-500",
  social: <HiCollection />,
  HiCollection: "bg-red-500",
  branding: <HiColorSwatch />,
  HiColorSwatch: "bg-red-500",
  leads: <HiUserGroup />,
  HiUserGroup: "bg-red-500",
  design: <HiPhotograph />,
  HiPhotograph: "bg-red-500",
  HiArrowRight: "bg-red-500",
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-32 relative overflow-hidden mesh-bg border-y border-[var(--border-color)]"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] uppercase tracking-[0.5em] font-black opacity-40 mb-4 block"
            >
              Our Core Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black tracking-tighter"
            >
              Comprehensive{" "}
              <span className="text-primary-light italic">Digital</span>{" "}
              Solutions
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-md opacity-50 text-lg leading-relaxed"
          >
            We don't just provide services; we build growth engines that drive
            real business results and ROI.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[3rem] glass border border-[var(--border-color)] hover:border-primary-light/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col items-start"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 relative"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl blur-xl opacity-20"
                  style={{ backgroundColor: service.color }}
                />
                <span className="relative z-10">{iconMap[service.icon]}</span>
              </div>
              <h3 className="text-2xl font-bold mb-5 tracking-tight">{service.title}</h3>
              <p className="opacity-50 text-sm leading-relaxed mb-8 group-hover:opacity-80 transition-opacity">{service.description}</p>
              
              <div className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-primary-light">
                Learn More <HiArrowRight />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
