import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiUser, HiBriefcase, HiChatAlt2, HiPaperAirplane } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    
    // Construct WhatsApp message
    const waNumber = "919905234866"; 
    const text = `Hello Kisan Digital!%0A%0A*New Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-bg-color">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] font-black opacity-40 mb-6 block"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-8xl font-black tracking-tighter mb-10"
            >
              Let's Scale Your <br /> <span className="text-primary-light italic">Vision</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="opacity-50 mb-16 text-xl leading-relaxed max-w-md"
            >
              Ready to take your business to the next level? Reach out to us and let's discuss how we can help you scale.
            </motion.p>

            <div className="space-y-12">
              {[
                { icon: <HiMail />, label: 'Email us', value: 'hello@kisandigital.com' },
                { icon: <HiPhone />, label: 'Call us', value: '+91 99052 34866' },
                { icon: <HiLocationMarker />, label: 'Our Office', value: 'Lucknow, Uttar Pradesh, India' },
              ].map((item, index) => (
                <div key={index} className="flex gap-8 items-center group">
                  <div className="w-16 h-16 rounded-[1.5rem] glass border border-[var(--border-color)] flex items-center justify-center text-3xl text-primary-light group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-30 mb-1">{item.label}</p>
                    <p className="text-2xl font-bold group-hover:text-primary-light transition-colors tracking-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-12 lg:p-16 rounded-[4rem] border border-[var(--border-color)] shadow-2xl relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-40 ml-4">Full Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none text-primary-light/50 group-focus-within:text-primary-light transition-colors">
                      <HiUser className="text-xl" />
                    </div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-bg-color/50 border border-[var(--border-color)] rounded-2xl pl-14 pr-8 py-5 outline-none focus:border-primary-light/50 transition-all font-medium placeholder:opacity-30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:shadow-[inset_0_2px_10px_rgba(18,63,168,0.1)] focus:bg-primary/5"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-40 ml-4">Email Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none text-primary-light/50 group-focus-within:text-primary-light transition-colors">
                      <HiMail className="text-xl" />
                    </div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-bg-color/50 border border-[var(--border-color)] rounded-2xl pl-14 pr-8 py-5 outline-none focus:border-primary-light/50 transition-all font-medium placeholder:opacity-30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:shadow-[inset_0_2px_10px_rgba(18,63,168,0.1)] focus:bg-primary/5"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-40 ml-4">Select Service</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none text-primary-light/50 group-focus-within:text-primary-light transition-colors">
                    <HiBriefcase className="text-xl" />
                  </div>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-bg-color/50 border border-[var(--border-color)] rounded-2xl pl-14 pr-8 py-5 outline-none focus:border-primary-light/50 transition-all appearance-none font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:bg-primary/5"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="Ads Management">Ads Management</option>
                    <option value="Branding & Identity">Branding & Identity</option>
                  </select>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black opacity-40 ml-4">Your Message</label>
                <div className="relative group">
                  <div className="absolute top-6 left-0 flex items-center pl-6 pointer-events-none text-primary-light/50 group-focus-within:text-primary-light transition-colors">
                    <HiChatAlt2 className="text-xl" />
                  </div>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full bg-bg-color/50 border border-[var(--border-color)] rounded-2xl pl-14 pr-8 py-5 outline-none focus:border-primary-light/50 transition-all resize-none font-medium placeholder:opacity-30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] focus:shadow-[inset_0_2px_10px_rgba(18,63,168,0.1)] focus:bg-primary/5"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ y: -4, shadow: "0 20px 40px rgba(18,63,168,0.3)" }}
                whileTap={{ y: 0, shadow: "0 5px 10px rgba(18,63,168,0.2)" }}
                className="w-full py-6 text-sm uppercase tracking-[0.3em] font-black rounded-2xl bg-primary-light text-white shadow-[0_10px_20px_rgba(18,63,168,0.2)] border-b-4 border-primary transition-all active:border-b-0 active:mt-1 flex items-center justify-center gap-3"
              >
                <span>Send to WhatsApp</span>
                <HiPaperAirplane className="text-xl rotate-90" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

