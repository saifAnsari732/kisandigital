import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "919905234866";
  const message = "Hi Kisan Digital, I'm interested in your services!";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></div>
      <FaWhatsapp className="text-4xl relative z-10" />
    </motion.button>
  );
};

export default WhatsAppButton;
