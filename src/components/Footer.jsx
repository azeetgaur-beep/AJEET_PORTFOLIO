import { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterScene from './FooterScene';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion, useMotionValue, useSpring, useMotionTemplate, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [showInstagramError, setShowInstagramError] = useState(false);
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const WebkitMaskImage = useMotionTemplate`radial-gradient(400px circle at ${springX}px 0px, black, transparent)`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
  };

  const handleInstagramClick = (e) => {
    e.preventDefault();
    setShowInstagramError(true);
    setTimeout(() => setShowInstagramError(false), 2000);
  };

  return (
    <footer 
      onMouseMove={handleMouseMove}
      className="w-full bg-black/40 backdrop-blur-md relative z-20 mt-auto overflow-hidden pt-[32px] pb-[130px] md:py-[48px] px-[24px] md:px-[52px]"
    >
      
      {/* Glowing Top Border Effect tracking the mouse */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
      <motion.div 
        className="absolute top-0 left-0 w-full h-[1px] bg-paper opacity-80" 
        style={{ WebkitMaskImage, maskImage: WebkitMaskImage }} 
      />
      <motion.div 
        className="absolute top-0 left-0 w-full h-[10px] bg-paper opacity-30 blur-[12px]" 
        style={{ WebkitMaskImage, maskImage: WebkitMaskImage }} 
      />

      {/* Floating "!not found" message overlay */}
      <AnimatePresence>
        {showInstagramError && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-[24px] md:right-[52px] bg-rose-600/90 text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg border border-white/20 z-50 backdrop-blur-md shadow-[0_0_20px_rgba(225,29,72,0.4)]"
          >
            !not found
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* The Epic Animation Stage */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <FooterScene />
      </div>

      {/* Footer Content */}
      <div className="max-w-[1080px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-[40px] relative z-40">
          
        {/* Left side: Tagline (Rendered by FooterScene) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 w-[200px]">
        </div>

        {/* Right side: Social Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-8 w-full md:w-auto">
          {[
            { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/ajeet-gaur-91443a1b5/?originalSubdomain=in' },
            { name: 'Instagram', icon: FaInstagram, href: '#' },
            { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/919520289505' },
          ].map((social) => (
            <a 
              key={social.name}
              href={social.href}
              target={social.href !== '#' ? '_blank' : undefined}
              rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
              onClick={social.name === 'Instagram' ? handleInstagramClick : undefined}
              aria-label={social.href !== '#' ? `${social.name} (opens in a new window)` : social.name}
              className="flex items-center gap-2 font-body font-light text-xs text-paper/70 hover:text-paper transition-colors duration-300 tracking-widest uppercase relative group"
            >
              <social.icon className="text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md" />
              <span>{social.name}</span>
              {/* Subtle underline animation on hover */}
              <span className="absolute -bottom-[6px] left-0 w-0 h-[1px] bg-paper transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Link
            to="/sitemap"
            className="flex items-center gap-2 font-body font-light text-xs text-paper/70 hover:text-paper transition-colors duration-300 tracking-widest uppercase relative group"
          >
            <span>Sitemap</span>
            <span className="absolute -bottom-[6px] left-0 w-0 h-[1px] bg-paper transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
