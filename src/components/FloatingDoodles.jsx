import { motion, useScroll, useTransform } from 'framer-motion';

// Generate a dense field of random stars with assigned depth layers outside component scope
const STARS = Array.from({ length: 150 }).map((_, i) => {
  const depthGroup = i % 3; // 0 = FG, 1 = MG, 2 = BG
  return {
    id: i,
    size: Math.random() * 2.5 + 1, // Very small: 1px to 3.5px
    x: Math.random() * 100, // 0 to 100vw
    y: Math.random() * 100, // 0 to 100vh
    duration: Math.random() * 5 + 3, // Slow, calm twinkle cycle (3s to 8s)
    delay: Math.random() * 8, // Random start time
    opacityBase: Math.random() * 0.15 + 0.05, // Extremely dim base
    depthGroup
  };
});

const FloatingDoodles = () => {
  const { scrollY } = useScroll();

  // Gentle parallax effect tied to scroll, defined unconditionally at the top level
  const yParallaxFG = useTransform(scrollY, (val) => val * -0.05);
  const yParallaxMG = useTransform(scrollY, (val) => val * -0.03);
  const yParallaxBG = useTransform(scrollY, (val) => val * -0.01);

  return (
    <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
      {STARS.map((star) => {
        const { id, size, x, y, duration, delay, opacityBase, depthGroup } = star;
        
        // Assign the appropriate top-level scroll animation based on depth layer
        const yParallax = depthGroup === 0 ? yParallaxFG : depthGroup === 1 ? yParallaxMG : yParallaxBG;

        return (
          <motion.div
            key={id}
            style={{ 
              position: 'absolute',
              left: `${x}vw`, 
              top: `${y}vh`,
              y: yParallax,
              width: size,
              height: size,
            }}
            className="rounded-full bg-white"
            initial={{ 
              opacity: opacityBase, 
              boxShadow: '0 0 0px rgba(255, 255, 255, 0)' 
            }}
            animate={{ 
              opacity: [opacityBase, 0.7, opacityBase],
              boxShadow: [
                '0 0 0px rgba(255, 255, 255, 0)',
                `0 0 ${size * 4}px rgba(255, 255, 255, 0.9)`,
                '0 0 0px rgba(255, 255, 255, 0)'
              ]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingDoodles;

