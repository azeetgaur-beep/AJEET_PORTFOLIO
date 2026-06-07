import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // Change image every 2.5 seconds
    
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} preview ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-contain bg-black/20 md:object-cover md:bg-transparent"
        />
      </AnimatePresence>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center z-10 backdrop-blur-[2px]">
        <div className="transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500 ease-out flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-3 rounded-full backdrop-blur-md shadow-2xl">
          <span className="font-display text-paper uppercase tracking-[0.2em] text-[13px]">View Case Study</span>
          <svg className="w-4 h-4 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>
      </div>
      
      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 opacity-50 group-hover/image:opacity-100 transition-opacity duration-300">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/30'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectImageCarousel;
