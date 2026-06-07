import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiTrendingUp,
  HiLightningBolt,
  HiChartBar,
  HiCode,
  HiCheckCircle,
  HiSparkles,
} from "react-icons/hi";

const Growth = () => {
  const [activeTab, setActiveTab] = useState("business"); // "business" | "tech"

  const tabData = {
    business: {
      tag: "Scale & Analytics",
      title: "Data-Driven Business Growth",
      description:
        "At Kisan Digital, growth is more than just pageviews. We map out end-to-end customer journeys and deploy intelligent analytics to make every ad rupee count. Our visual boardrooms are where charts transform into scaling revenue.",
      image: "/presentation.webp",
      icon: <HiTrendingUp className="text-emerald-400 text-3xl" />,
      features: [
        {
          label: "Precision Campaigns",
          text: "Target local and global buyers with ads optimized for high intent.",
        },
        {
          label: "ROI Focus",
          text: "Reduce acquisition cost (CAC) while scaling your marketing budget.",
        },
        {
          label: "Visual Analytics",
          text: "Track conversions, click-through rates, and lead pipeline in real time.",
        },
      ],
      stats: [
        { value: "3.2X", label: "Avg. ROAS Growth" },
        { value: "-42%", label: "Lower Acquisition Cost" },
      ],
    },
    tech: {
      tag: "Engineering & Performance",
      title: "Next-Gen Tech Infrastructure",
      description:
        "A stunning digital campaign deserves a matching high-performance interface. We code lightning-fast web architectures designed to engage, convert, and retain. Every build is lightweight, SEO-friendly, and mobile-optimized.",
      image: "/tech_growth.png",
      icon: <HiCode className="text-primary-light text-3xl" />,
      features: [
        {
          label: "Mobile-First Engine",
          text: "Fluid layout rendering optimized for responsive phone screens.",
        },
        {
          label: "Instant Loading Speed",
          text: "Clean, semantic structure with fast bundles for better SEO rankings.",
        },
        {
          label: "Interactive UI Details",
          text: "Subtle micro-animations that increase user session time.",
        },
      ],
      stats: [
        { value: "100%", label: "Mobile Optimization" },
        { value: "< 1.2s", label: "Instant Load Time" },
      ],
    },
  };

  const currentData = tabData[activeTab];

  return (
    <section id="growth" className="py-24 relative overflow-hidden bg-bg-color border-b border-[var(--border-color)]">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary-light/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] font-black opacity-50 mb-3 block text-primary-light"
          >
            Digital Acceleration
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black tracking-tight text-[var(--text-color)] mb-6"
          >
            Powering Your <span className="text-gradient">Growth Engine</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="opacity-80 text-[var(--text-color)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We merge high-performing digital marketing strategies with modern frontend technology to build products that scale your business.
          </motion.p>
        </div>

        {/* Tab Switcher - Essential for Mobile Navigation & Interactive UX */}
        <div className="flex justify-center mb-16">
          <div className="p-1.5 rounded-2xl glass border border-[var(--border-color)] flex gap-2 w-full max-w-md shadow-2xl relative z-10">
            <button
              onClick={() => setActiveTab("business")}
              className={`flex-1 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 relative flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "business" ? "text-white" : "text-[var(--text-color)] opacity-70 hover:opacity-100"
              }`}
            >
              {activeTab === "business" && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-primary-light rounded-xl -z-10 shadow-lg shadow-primary-light/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <HiChartBar className="text-base" /> Marketing Growth
            </button>
            <button
              onClick={() => setActiveTab("tech")}
              className={`flex-1 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 relative flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "tech" ? "text-white" : "text-[var(--text-color)] opacity-70 hover:opacity-100"
              }`}
            >
              {activeTab === "tech" && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-primary-light rounded-xl -z-10 shadow-lg shadow-primary-light/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <HiSparkles className="text-base" /> Next-Gen Tech
            </button>
          </div>
        </div>

        {/* Main Content Area - Animated switching */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* Column 1: Copy, Features & Stats */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-light mb-4 block">
                {currentData.tag}
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-[var(--text-color)] tracking-tight mb-6 flex items-center gap-3">
                {currentData.title}
              </h3>
              <p className="opacity-80 text-[var(--text-color)] text-sm md:text-base leading-relaxed mb-8">
                {currentData.description}
              </p>

              {/* Features List */}
              <div className="space-y-5 mb-8">
                {currentData.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="mt-1 flex-shrink-0 text-emerald-400 group-hover:scale-110 transition-transform">
                      <HiCheckCircle className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[var(--text-color)] mb-1 group-hover:text-primary-light transition-colors">
                        {feature.label}
                      </h4>
                      <p className="opacity-80 text-[var(--text-color)] text-xs md:text-sm leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats highlights */}
              <div className="grid grid-cols-2 gap-6 p-6 rounded-3xl glass border border-[var(--border-color)] mt-4">
                {currentData.stats.map((stat, idx) => (
                  <div key={idx} className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-black text-primary-light mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-[var(--text-color)] opacity-70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Large Visual Asset */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative group">
                {/* Visual shadow glow */}
                <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none" />

                <div className="relative rounded-[2.5rem] overflow-hidden glass border border-[var(--border-color)] p-2 lg:p-3 shadow-2xl hover:scale-[1.01] transition-transform duration-500">
                  <img
                    src={currentData.image}
                    alt={currentData.title}
                    className="w-full h-auto object-cover rounded-[2rem] aspect-[16/10]"
                  />
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl glass border border-[var(--border-color)] flex items-center justify-center shadow-lg">
                    {currentData.icon}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Growth;
