import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import WorkspaceProps from '../doodles/WorkspaceProps';
import DynamicCharacter from '../doodles/DynamicCharacter';

const FooterScene = () => {
  const [pose, setPose] = useState('walking');
  const [chairX, setChairX] = useState(0);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const textControls = useAnimation();
  const mugControls = useAnimation();
  
  const isInView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    let isMounted = true;

    const runSequence = async () => {
      // Reset
      setPose('walking');
      setChairX(0);
      textControls.set({ opacity: 0, clipPath: 'inset(0 0 0 100%)' });
      mugControls.set({ x: 68, y: 60 }); // initial mug position on the raised desk
      
      // 0. Start close so text appears in 0.3s
      await controls.set({ 
        x: 244, 
        y: 35,
        opacity: 1
      });
      
      if(!isMounted) return;

      textControls.start({ 
        opacity: 1, 
        clipPath: 'inset(0 0 0 0%)',
        transition: { duration: 1.75, delay: 0.3, ease: 'linear' } 
      });

      // 1. Walk up to the chair
      controls.start({ opacity: 1, transition: { duration: 0.3 } });
      await controls.start({ 
        x: 80, // stop just behind the chair
        y: 35,
        transition: { duration: 2.05, ease: 'linear' } 
      });
      
      if(!isMounted) return;

      // 2. Reach out and pull the chair
      setPose('pulling');
      setChairX(15); // slide chair out
      await new Promise(r => setTimeout(r, 600));

      if(!isMounted) return;

      // 3. Step forward and sit down
      setPose('sitting');
      controls.start({ x: 60, y: 29, transition: { duration: 0.5 } });
      setChairX(5); // slide chair back in slightly
      await new Promise(r => setTimeout(r, 1000));
      
      if(!isMounted) return;

      // 4. Reach for the mug
      setPose('reaching');
      await new Promise(r => setTimeout(r, 500));
      
      if(!isMounted) return;

      // 5. Sip chai (Mug animates to the face)
      setPose('sipping');
      mugControls.start({ x: 80, y: 48, transition: { duration: 0.4 } });
      await new Promise(r => setTimeout(r, 1500));
      
      if(!isMounted) return;

      // 6. Put mug back on desk
      setPose('reaching');
      mugControls.start({ x: 68, y: 60, transition: { duration: 0.4 } });
      await new Promise(r => setTimeout(r, 500));
      
      if(!isMounted) return;

      // 7. Code intensely
      setPose('typing');
      // The sequence ends here, keeping him coding infinitely.
    };

    if (isInView) {
      runSequence();
    } else {
      controls.stop();
      textControls.stop();
      controls.set({ opacity: 0 });
      textControls.set({ opacity: 0 });
    }

    return () => { isMounted = false; };
  }, [isInView, controls, textControls, mugControls]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full flex justify-center items-end relative overflow-hidden pointer-events-none"
    >
      <div className="w-full h-full relative">
        
        {/* Animated Tagline */}
        <motion.div 
          animate={textControls}
          className="absolute bottom-[70px] md:bottom-[24px] left-[24px] md:left-[52px]"
        >
          <p className="font-body font-light text-[11px] text-paper/60 uppercase tracking-widest drop-shadow-md">
            Made with chai and VS Code.
          </p>
        </motion.div>

        {/* Master SVG Stage */}
        <svg 
          viewBox="0 0 1000 100" 
          className="absolute bottom-[94px] md:bottom-[54px] left-[24px] md:left-[52px] h-[60px] md:h-[80px] w-full max-w-[1000px] overflow-visible drop-shadow-lg text-paper"
          preserveAspectRatio="xMinYMax meet"
        >
          <g transform="translate(-10, 0)">
            {/* Static Workspace */}
            <WorkspaceProps chairX={chairX} />

            {/* Animated Independent Mug */}
            <motion.g animate={mugControls} initial={{ x: 68, y: 60 }}>
              {/* Mug Body */}
              <rect width="6" height="8" rx="1" fill="var(--color-bg, #0a0a0a)" stroke="currentColor" strokeWidth="1" />
              {/* Mug Handle */}
              <path d="M 6,2 C 9,2 9,6 6,6" fill="none" stroke="currentColor" strokeWidth="1" />
              {/* Steam (only visible when on desk and not reaching) */}
              {pose !== 'sipping' && pose !== 'reaching' && (
                <motion.path 
                  d="M 2,-3 Q 0,-7 4,-11 M 4,-2 Q 2,-6 6,-10" 
                  fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"
                  animate={{ opacity: [0, 0.7, 0], y: [0, -6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              )}
            </motion.g>

            {/* Animated Character */}
            <motion.g 
              animate={controls}
              initial={{ opacity: 1, x: 244, y: 35 }}
            >
              <DynamicCharacter pose={pose} />
            </motion.g>
          </g>
        </svg>

      </div>
    </div>
  );
};

export default FooterScene;
