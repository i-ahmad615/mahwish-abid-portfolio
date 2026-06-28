import { motion } from "motion/react";
import { ArrowUpRight, Mail, Heart, Github, Linkedin, MessageCircle, Twitter } from "lucide-react";

interface FooterProps {
  setView?: (v: 'portfolio' | 'contact') => void;
}

export default function Footer({ setView }: FooterProps) {
  const scrollToSection = (id: string) => {
    if (id === "contact") {
      if (setView) setView("contact");
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuLinks = [
    { name: "About", id: "about" },
    { name: "Work", id: "work" },
    { name: "Services", id: "services" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "http://www.linkedin.com/in/i-mahwishabid615", icon: <Linkedin size={14} /> },
    { name: "GitHub", url: "https://github.com/Anotherone204", icon: <Github size={14} /> },
    { name: "WhatsApp", url: "https://api.whatsapp.com/send/?phone=923098466000&text=Hi+Mahwish&type=phone_number&app_absent=0", icon: <MessageCircle size={14} /> },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative pt-32 pb-12 w-full bg-[#0d1116] border-t border-white/10 flex flex-col items-center overflow-hidden px-6 md:px-12 lg:px-24"
    >
      {/* Background massive contact heading watermark */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full text-center"
        id="footer-watermark-container"
      >
        <h1 
          className="font-display font-black text-[24vw] leading-none text-white opacity-[0.012] tracking-tighter select-none pointer-events-none"
          id="footer-watermark-text"
        >
          CONTACT
        </h1>
      </div>

      <div 
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-20 border-b border-white/5 relative z-10"
        id="footer-top-row"
      >
        {/* Left Column (Main pitch + email CTA) */}
        <div 
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          id="footer-pitch-box"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono font-bold tracking-widest text-[#00df8f] uppercase"
          >
            LET'S WORK
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-tighter text-white leading-[0.95]"
          >
            TOGETHER<span className="text-[#00df8f]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-400 font-sans text-base sm:text-lg max-w-xl leading-relaxed font-light"
          >
            Ready to bring your ideas to life? Let's create something amazing together.
          </motion.p>

          {/* GET IN TOUCH Action Button (Solid white, black text, pill shape) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-4"
          >
            <motion.button
              onClick={() => setView ? setView('contact') : null}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-[#0d1116] font-bold px-8 py-4.5 rounded-full text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-colors duration-300 shadow-xl cursor-pointer"
              id="footer-email-btn"
            >
              <Mail size={16} />
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={16} className="text-[#0d1116]" />
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column (Double-column navigation links) */}
        <div 
          className="lg:col-span-5 grid grid-cols-2 gap-8 lg:pl-12"
          id="footer-links-grid"
        >
          {/* Menu column */}
          <div className="flex flex-col space-y-6 text-left" id="footer-menu-col">
            <h4 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">
              MENU
            </h4>
            <div className="flex flex-col space-y-3">
              {menuLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="self-start text-sm text-gray-400 hover:text-[#00df8f] transition-colors duration-200 cursor-pointer"
                  id={`footer-menu-link-${link.id}`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="self-start text-sm text-gray-400 hover:text-[#00df8f] transition-colors duration-200 cursor-pointer"
              >
                Back to Top
              </button>
            </div>
          </div>

          {/* Socials column */}
          <div className="flex flex-col space-y-6 text-left" id="footer-socials-col">
            <h4 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">
              SOCIALS
            </h4>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#00df8f] flex items-center gap-2 transition-colors duration-200 group"
                  id={`footer-social-link-${social.name.toLowerCase()}`}
                >
                  <span className="text-gray-500 group-hover:text-[#00df8f] transition-colors duration-200">
                    {social.icon}
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div 
        className="w-full max-w-7xl mx-auto pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-mono relative z-10"
        id="footer-bottom-row"
      >
        <div className="flex items-center gap-2">
          <span>&copy; {currentYear} Portfolio. Built By </span>
          <span className="text-gray-300 font-semibold">Mahwish Abid</span>
        </div>
      </div>
    </footer>
  );
}
