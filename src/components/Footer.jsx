import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { navigation, services, socialLinks } from '../data/content';

const Footer = () => {
  const socialIcons = [
    { Icon: FaFacebook, href: socialLinks.facebook },
    { Icon: FaTwitter, href: socialLinks.twitter },
    { Icon: FaInstagram, href: socialLinks.instagram },
    { Icon: FaLinkedin, href: socialLinks.linkedin },
    { Icon: FaPinterest, href: socialLinks.pinterest },
  ];

  return (
    <footer className="pt-32 pb-12 bg-bg-color border-t border-[var(--border-color)] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-primary/10 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-300">
                <span className="text-xl font-black">K</span>
              </div>
              <span className="text-2xl font-black tracking-tight font-heading">
                Kisan <span className="text-primary-light">Digital</span>
              </span>
            </div>
            <p className="opacity-60 mb-10 leading-relaxed font-medium">
              Empowering brands to reach their full potential through innovative digital marketing and high-end technology solutions.
            </p>
            <div className="flex gap-5">
              {socialIcons.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl glass border border-[var(--border-color)] flex items-center justify-center text-xl opacity-40 hover:opacity-100 hover:text-primary-light hover:border-primary-light transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black opacity-50 mb-10">Quick Links</h4>
            <ul className="space-y-5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="opacity-60 hover:opacity-100 hover:text-primary-light transition-all font-bold text-sm uppercase tracking-widest">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black opacity-50 mb-10">Our Services</h4>
            <ul className="space-y-5">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <a href="#services" className="opacity-60 hover:opacity-100 hover:text-primary-light transition-all font-bold text-sm uppercase tracking-widest">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black opacity-50 mb-10">Contact Info</h4>
            <ul className="space-y-6 opacity-60">
              <li className="font-bold text-sm uppercase tracking-widest">Lucknow, Uttar Pradesh, India</li>
              <li className="font-bold text-sm uppercase tracking-widest">+91 99052 34866</li>
              <li className="font-bold text-sm uppercase tracking-widest">hello@kisandigital.com</li>
            </ul>
            <div className="mt-12 p-8 rounded-[2rem] glass border border-[var(--border-color)] backdrop-blur-3xl shadow-2xl">
              <p className="text-[10px] font-black text-primary-light uppercase tracking-[0.3em] mb-4">Weekly Insights</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-primary/5 border border-[var(--border-color)] rounded-xl px-5 py-3 text-sm outline-none focus:border-primary-light/50 flex-1 font-medium placeholder:opacity-30"
                />
                <button className="bg-primary-light text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-primary transition-colors shadow-lg shadow-primary/20">→</button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
          <p>© 2026 Kisan Digital Agency. Lucknow's Premier Marketing Hub.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

