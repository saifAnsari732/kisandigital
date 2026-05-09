import { useState, useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { HiUsers, HiCube, HiBriefcase, HiChartBar } from "react-icons/hi";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const display = useTransform(
    spring,
    (current) => Math.floor(current).toLocaleString() + suffix,
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const stats = [
  {
    label: "Happy Customers",
    value: 5000,
    suffix: "+",
    icon: <HiUsers />,
    color: "text-green-500",
  },
  {
    label: "Software Sold",
    value: 3000,
    suffix: "+",
    icon: <HiCube />,
    color: "text-blue-500",
  },
  {
    label: "Resellers",
    value: 500,
    suffix: "+",
    icon: <HiBriefcase />,
    color: "text-purple-500",
  },
  {
    label: "Client Revenue Generated",
    value: 10,
    suffix: "L+",
    icon: <HiChartBar />,
    color: "text-yellow-500",
  },
];
 const whatsappNumber = "919905234866";
  const message = "Hi Kisan Digital, I'm interested in your services!";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
const Stats = () => {
  return (
    <section className="py-24 bg-bg-color relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Why Businesses{" "}
            <span className="text-primary-light">Trust Kisan Digital</span>
          </h2>
          <p className="opacity-50 max-w-2xl mx-auto font-medium">
            Numbers that speak for our success — from digital solutions to
            satisfied partners, here's how we're making a difference.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[3rem] text-center border border-white/5 hover:border-white/10 transition-all group"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center text-2xl ${stat.color} group-hover:scale-110 transition-transform`}
              >
                {stat.icon}
              </div>
              <h3
                className={`text-4xl lg:text-5xl font-black mb-3 ${stat.color}`}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-40">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] overflow-hidden p-12 lg:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-90" />
          <div className="absolute inset-0 mesh-bg opacity-30" />

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-6xl font-black text-white mb-6 tracking-tighter">
              Ready to Boost Your Revenue 5X?
            </h3>
            <p className="text-white/80 mb-12 text-lg lg:text-xl max-w-2xl mx-auto font-medium">
              Start with high-performance digital marketing today. <br />{" "}
              Smarter. Faster. Zero guesswork.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={handleClick}
                className="px-10 py-5 cursor-pointer bg-white text-emerald-600 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all"
              >
                Talk to Sales
              </button>
              <Link
                to="#pricing"
                className="px-10 py-5 cursor-pointer bg-transparent border-2 border-white/30 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                View Pricing →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
