import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CoderDoodle = ({ className }) => {
  const [phase, setPhase] = useState('idle');

  useEffect(() => {
    let isMounted = true;
    const cycle = async () => {
      while (isMounted) {
        // 1. Idle coding
        setPhase('idle');
        await new Promise(r => setTimeout(r, 4000));
        if(!isMounted) break;
        
        // 2. Sip coffee
        setPhase('sipping');
        await new Promise(r => setTimeout(r, 2500));
        if(!isMounted) break;
        
        // 3. Put mug down, prepare...
        setPhase('idle');
        await new Promise(r => setTimeout(r, 1000));
        if(!isMounted) break;

        // 4. POWER UP AND CODE
        setPhase('powered');
        await new Promise(r => setTimeout(r, 5000));
      }
    };
    cycle();
    return () => { isMounted = false; };
  }, []);

  const isPowered = phase === 'powered';
  const isSipping = phase === 'sipping';

  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 200 150" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-paper overflow-visible"
      >
        {/* === EPIC GLOW AURA (Visible only when powered) === */}
        <motion.circle 
          cx="110" cy="70" r="55"
          initial={false}
          animate={{
            opacity: isPowered ? [0.3, 0.7, 0.3] : 0,
            scale: isPowered ? [1, 1.1, 1] : 0.5,
            fill: isPowered ? ["#7C9E7A", "#61DAFB", "#7C9E7A"] : "#000"
          }}
          transition={{ duration: 0.5, repeat: isPowered ? Infinity : 0 }}
          style={{ filter: "blur(20px)" }}
        />

        {/* === SCENE ENVIRONMENT === */}
        {/* Chair */}
        <rect x="145" y="80" width="8" height="50" rx="3" fill="currentColor" className="opacity-60" />
        <rect x="120" y="110" width="35" height="8" rx="4" fill="currentColor" className="opacity-60" />
        <rect x="132" y="118" width="8" height="32" fill="currentColor" className="opacity-60" />
        <rect x="115" y="145" width="40" height="5" rx="2" fill="currentColor" className="opacity-60" />

        {/* Desk */}
        <rect x="10" y="110" width="100" height="6" rx="2" fill="currentColor" className="opacity-90" />
        <rect x="20" y="116" width="6" height="34" fill="currentColor" className="opacity-90" />
        <rect x="80" y="116" width="6" height="34" fill="currentColor" className="opacity-90" />

        {/* Laptop Base */}
        <rect x="25" y="105" width="65" height="5" rx="2" fill="currentColor" />

        {/* Laptop Screen (Glows intensely when powered) */}
        <motion.rect 
          x="35" y="75" width="45" height="32" rx="3" 
          initial={false}
          animate={{
            fill: isPowered ? "#61DAFB" : "currentColor",
            opacity: isPowered ? 0.9 : 0.15
          }}
          transition={{ duration: 0.3 }}
          style={{ filter: isPowered ? "drop-shadow(0px 0px 12px rgba(97, 218, 251, 0.8))" : "none" }}
        />
        {/* Laptop Bezel */}
        <rect x="35" y="75" width="45" height="32" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />


        {/* === PERSON SILHOUETTE === */}
        {/* Body (Hunches and shakes when powered) */}
        <motion.path 
          d="M 135,110 C 135,75 125,60 110,60 C 100,60 95,75 95,110 Z" 
          fill="currentColor"
          animate={{
            x: isPowered ? [-1, 1, -1] : 0,
            y: isPowered ? [0, 1, 0] : 0
          }}
          transition={{ duration: 0.05, repeat: Infinity }}
        />
        
        {/* Head */}
        <motion.circle 
          cx="110" cy="45" r="14" 
          fill="currentColor"
          animate={{
            x: isPowered ? [-1, 1, -1] : 0,
            y: isPowered ? [0, 1, 0] : 0,
            rotate: isPowered ? [0, 3, -3, 0] : 0
          }}
          transition={{ duration: 0.05, repeat: Infinity }}
        />

        {/* === FLOATING CODE STREAM === */}
        <AnimatePresence>
          {isPowered && <CodeStream />}
        </AnimatePresence>

        {/* === ARMS & MUG === */}
        {/* Left Arm (Always typing, goes insane when powered) */}
        <motion.path 
          fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
          animate={{
            d: isPowered 
              ? [
                  "M 110,65 Q 90,80 50,105", 
                  "M 110,65 Q 85,90 65,100", 
                  "M 110,65 Q 95,85 55,105"
                ]
              : [
                  "M 110,65 Q 90,95 60,105", 
                  "M 110,65 Q 85,90 55,105", 
                  "M 110,65 Q 90,95 60,105"
                ]
          }}
          transition={{ 
            duration: isPowered ? 0.08 : 0.4, 
            repeat: Infinity, 
            repeatType: "mirror" 
          }}
        />

        {/* Right Arm (Animating from resting to sipping to hyper-typing) */}
        <motion.path 
          fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
          initial={false}
          animate={{
            d: isSipping 
              ? "M 115,65 Q 120,80 95,55"  // Sip position (Hand near face)
              : (isPowered 
                  ? [
                      "M 115,65 Q 100,85 70,105", // Typing fast
                      "M 115,65 Q 105,95 60,105",
                      "M 115,65 Q 100,85 70,105"
                    ]
                  : "M 115,65 Q 110,95 85,100" // Rest position (Hand near mug)
                )
          }}
          transition={{ 
            duration: isPowered && !isSipping ? 0.08 : 0.8, 
            repeat: isPowered && !isSipping ? Infinity : 0,
            ease: "easeInOut"
          }}
        />

        {/* Mug Group (Translates to mouth, disappears when typing with both hands) */}
        <motion.g 
          initial={false}
          animate={{ 
            opacity: isPowered ? 0 : 1,
            x: isSipping ? 10 : 0,  
            y: isSipping ? -35 : 0, 
            rotate: isSipping ? 20 : 0
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Mug rests on table */}
          <rect x="80" y="85" width="14" height="18" rx="2" fill="var(--color-bg, #0a0a0a)" stroke="currentColor" strokeWidth="2" />
          <path d="M 94,90 C 100,90 100,100 94,100" fill="none" stroke="currentColor" strokeWidth="2" />
          
          {/* Steam */}
          <motion.path 
            d="M 84,80 Q 82,75 86,70 T 84,60 M 90,82 Q 88,77 92,72 T 90,62" 
            fill="none" stroke="currentColor" strokeWidth="1.5"
            animate={{ 
              opacity: isSipping ? 0 : [0, 0.8, 0], 
              y: [0, -10],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.g>

      </svg>
    </div>
  );
};

const symbols = ['{ }', '</>', '=>', '[]', '()', '&&', ';;', 'npm'];
const STREAMS = Array.from({ length: 12 }).map(() => ({
  x: -60 - Math.random() * 50,
  y: -40 - Math.random() * 80,
  rotate: (Math.random() - 0.5) * 60,
  duration: 0.6 + Math.random() * 0.4,
  delay: Math.random() * 1.5,
  symbol: symbols[Math.floor(Math.random() * symbols.length)]
}));

// Component for the Matrix-style code flying out of the laptop
const CodeStream = () => {
  return (
    <>
      {STREAMS.map((stream, i) => (
        <motion.text
          key={i}
          x="55" y="90"
          fill="#61DAFB"
          fontSize="10"
          fontWeight="bold"
          fontFamily="monospace"
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, stream.x],
            y: [0, stream.y],
            scale: [0.5, 1.5, 0.8],
            rotate: [0, stream.rotate]
          }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            delay: stream.delay,
            ease: "easeOut"
          }}
          style={{ filter: "drop-shadow(0px 0px 4px #61DAFB)" }}
        >
          {stream.symbol}
        </motion.text>
      ))}
    </>
  );
};

export default CoderDoodle;
