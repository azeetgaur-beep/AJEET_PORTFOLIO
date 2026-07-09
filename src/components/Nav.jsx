import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sunflower from '../doodles/Sunflower';

// Generate a stable particle system for snowflakes outside component scope
const FLAKES = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  // The 'A' peak is positioned further right in this asset. 
  // Constrain flakes between ~38% and 52% of the container width.
  left: 38 + Math.random() * 14, 
  delay: Math.random() * 2.5,
  duration: 1.5 + Math.random() * 1.5,
  size: 2 + Math.random() * 2, // Increased size for visibility
  windDrift: (Math.random() - 0.5) * 8
}));

const SnowyLogo = () => {

  return (
    <div className="relative h-[32px] md:h-[44px] inline-flex items-center group cursor-pointer">
      
      {/* Falling Snowflakes Layer (Z-20 to be in front, overflow-visible so they can start above) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {FLAKES.map((flake) => (
          <motion.div
            key={flake.id}
            className="absolute rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]"
            style={{
              width: flake.size,
              height: flake.size,
              left: `${flake.left}%`,
              top: 0,
            }}
            animate={{
              y: [-15, 30], // Start 15px above, fall 30px down into the peak
              x: [0, flake.windDrift], // Wind drift
              opacity: [0, 1, 0], // Fade in, melt/fade out
            }}
            transition={{
              duration: flake.duration,
              repeat: Infinity,
              delay: flake.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Base Logo */}
      <img 
        src="/logo_aj32.webp" 
        alt="AJ Logo" 
        width="100"
        height="32"
        className="h-full w-auto object-contain drop-shadow-lg mix-blend-screen transition-opacity duration-300 group-hover:opacity-80 relative z-10" 
      />
    </div>
  );
};

const NavLink = ({ sectionId, label, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const showFlower = isHovered || isActive;

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <a
      href={`/#${sectionId}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="group relative font-body font-light text-[10px] md:text-xs tracking-widest uppercase text-paper/70 hover:text-paper transition-colors duration-300 focus:outline-none focus-visible:text-paper flex items-center cursor-pointer"
      style={{ color: isActive ? '#FAFAF8' : '' }}
    >
      {label}
      {/* Sleek expanding underline */}
      <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-paper to-transparent transform transition-all duration-500 ease-out opacity-70 ${isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100'}`} />
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180, x: -10, y: '-50%' }}
        animate={{
          opacity: showFlower ? 1 : 0,
          scale: showFlower ? 1.1 : 0,
          rotate: showFlower ? 0 : -180,
          x: showFlower ? 6 : -10,
          y: '-50%'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="absolute -right-[16px] md:-right-[24px] top-1/2 pointer-events-none"
      >
        <Sunflower className="w-[14px] md:w-[16px] text-sage opacity-100" stroke="currentColor" />
      </motion.div>
    </a>
  );
};

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    // If we have a hash in URL on home page mount/navigation, smooth scroll to it
    if (location.pathname === '/' && location.hash) {
      const timer = setTimeout(() => {
        const id = location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['about', 'work', 'contact'];
    
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-[24px] py-[12px] md:px-[52px] md:py-[16px] flex justify-between items-center transition-all duration-500 ${isScrolled
      ? 'bg-black/40 backdrop-blur-md border-b border-white/10 !py-[10px] md:!py-[12px]'
      : 'bg-gradient-to-r from-black/80 via-white/5 to-black/80 backdrop-blur-lg border-b border-white/5 floating-light-bg shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
      }`}>
      <Link
        to="/"
        className={`pointer-events-auto transition-opacity duration-300 ${isScrolled ? 'opacity-80' : 'opacity-100'}`}
      >
        <SnowyLogo />
      </Link>
      <div className="flex gap-6 md:gap-[48px] mr-[16px] md:mr-0">
        <NavLink sectionId="about" label="About" isActive={activeSection === "about"} />
        <NavLink sectionId="work" label="Work" isActive={activeSection === "work"} />
        <NavLink sectionId="contact" label="Contact" isActive={activeSection === "contact"} />
      </div>
    </nav>
  );
};

export default Nav;
