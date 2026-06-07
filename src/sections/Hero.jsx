import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const punchlines = {
  default: "Hey, I am Ajeet !! A creator from the Himalayas, blending code and design to build digital experiences that breathe.",
  work: "Wander through the digital landscapes I've carved.",
  contact: "Got an idea? Let's conquer the next peak together.",
  scroll: "Step into the valley of my imagination..."
};

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: 'easeOut', delay },
});

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [symbolState, setSymbolState] = useState(null);
  
  useEffect(() => {
    let index = 0;
    const timeouts = [];
    
    const interval = setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
        
        // Symbol sequence (Explosive Neon Theme)
        timeouts.push(setTimeout(() => {
          setSymbolState({ text: "_", color: "#FAFAF8" }); // White
          
          timeouts.push(setTimeout(() => {
            setSymbolState({ text: "/>", color: "#61DAFB" }); // React Blue
            
            timeouts.push(setTimeout(() => {
              setSymbolState({ text: "{}", color: "#F1E05A" }); // JS Yellow
              
              timeouts.push(setTimeout(() => {
                setSymbolState({ text: "</>", color: "#7C9E7A" }); // Sage Green
              }, 400));
              
            }, 400));
            
          }, 500));
          
        }, 400));
      }
    }, 45); // Typing speed
    
    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, [text]);

  return (
    <span>
      {displayedText}
      {symbolState && (
        <span style={{ position: "relative", display: "inline-block", marginLeft: "8px" }}>
          {/* Exploding Shockwave Effect */}
          <motion.span
            key={`${symbolState.text}-shockwave`}
            initial={{ scale: 0.8, opacity: 0.8, filter: "blur(2px)" }}
            animate={{ scale: 2.5, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: 0,
              color: symbolState.color,
              textShadow: `0 0 20px ${symbolState.color}`,
              pointerEvents: "none",
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: "-0.05em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {symbolState.text}
          </motion.span>
          
          {/* Main Glowing Text */}
          <motion.span
            key={symbolState.text}
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={{ scale: [1.8, 1], opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ 
              display: "inline-block", 
              color: symbolState.color, 
              textShadow: `0 0 12px ${symbolState.color}, 0 0 24px ${symbolState.color}`,
              fontStyle: "normal", 
              fontWeight: 600,
              fontFamily: "monospace",
              letterSpacing: "-0.05em"
            }}
          >
            {symbolState.text}
          </motion.span>
        </span>
      )}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{ 
          display: "inline-block", 
          width: "2px", 
          height: "1em", 
          background: "#E8E4DC", 
          marginLeft: "6px", 
          verticalAlign: "middle" 
        }}
      />
    </span>
  );
};

const Hero = () => {
  const [punchline, setPunchline] = useState(punchlines.default);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const textY = useTransform(scrollY, [0, 800], ['0%', '40%']);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 50 && punchline !== punchlines.scroll) {
        setPunchline(punchlines.scroll);
      } else if (latest <= 50 && punchline === punchlines.scroll) {
        setPunchline(punchlines.default);
      }
    });
  }, [scrollY, punchline]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}
      onMouseLeave={() => {
        if (scrollY.get() <= 50) setPunchline(punchlines.default);
      }}
    >
      {/* Background is now handled globally by BackgroundGallery.jsx */}
      
      {/* Foreground Interactive Content */}
      <motion.div 
        style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', y: textY, opacity }}
      >
        <div style={{
          position: 'absolute',
          top: '38%',
          left: '7%',
          pointerEvents: 'auto',
        }}>
          {/* 1. Eyebrow */}
          <motion.p
            {...fadeUp(0.6)}
            style={{
              fontFamily: 'var(--font-body, "DM Sans", sans-serif)',
              fontWeight: 300,
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#D1D1C7', // Adjusted for dark background
              margin: 0,
            }}
          >
            frontend &nbsp;&middot;&nbsp; design &nbsp;&middot;&nbsp; creative
          </motion.p>

          {/* 2. Handle */}
          <motion.h1
            initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.9 }}
            style={{
              fontFamily: 'var(--font-display, "MADE Saonara", Cinzel, serif)',
              fontWeight: 400,
              fontSize: 'clamp(44px, 8vw, 88px)',
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              margin: '12px 0 0',
              textShadow: '0 4px 32px rgba(0,0,0,0.5)',
            }}
          >
            <motion.span 
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FAFAF8] via-[#E8E4DC] to-[#C4A882]"
              style={{ backgroundSize: '200% 200%' }}
            >
              Ajeet Gaur
            </motion.span>
          </motion.h1>

          {/* 3. Interactive Philosophy Line (Punchline) */}
          <motion.p
            {...fadeUp(1.2)}
            style={{
              fontFamily: 'var(--font-display, "Playfair Display", serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(15px, 2.2vw, 20px)',
              color: '#E8E4DC',
              lineHeight: 1.65,
              maxWidth: '480px',
              marginTop: '16px',
              minHeight: '66px', // Prevents layout shift when typing multi-line text
            }}
          >
            <TypewriterText key={punchline} text={punchline} />
          </motion.p>

          {/* 4. Interactive Links */}
          <motion.div
            {...fadeUp(1.5)}
            style={{ display: 'flex', gap: '36px', marginTop: '36px' }}
          >
            {[
              { label: 'See my work ↓', href: '#work', hoverKey: 'work' },
              { label: 'Get in touch →', href: '#contact', hoverKey: 'contact' },
            ].map(({ label, href, hoverKey }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleSmoothScroll(e, href)}
                onMouseEnter={(e) => {
                  setPunchline(punchlines[hoverKey]);
                  e.currentTarget.style.color = '#FAFAF8';
                  e.currentTarget.style.borderBottomColor = '#FAFAF8';
                }}
                onMouseLeave={(e) => {
                  if (scrollY.get() <= 50) setPunchline(punchlines.default);
                  e.currentTarget.style.color = '#C4A882';
                  e.currentTarget.style.borderBottomColor = 'transparent';
                }}
                style={{
                  fontFamily: 'var(--font-body, "DM Sans", sans-serif)',
                  fontWeight: 300,
                  fontSize: '13px',
                  color: '#C4A882',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.3s, border-bottom-color 0.3s',
                }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
